<script setup lang="ts">
import HomeController from '@/actions/Domains/Web/Http/Controllers/Home/HomeController';
import {usePage, router} from '@inertiajs/vue3';
import {ref, onMounted, computed} from 'vue';
import {RewardHistory} from "@/types";
import { useI18n } from 'vue-i18n';
import { asset } from '@/lib/utils';

interface BoxItem {
  id: number;
  flipped: boolean;
}

interface Props {
  hasOpened: boolean
  canSpin: boolean
  openedReward?: RewardHistory | null
}

const props = defineProps<Props>();
const page = usePage();

const pcFirstRow = 5;
const boxes = ref<BoxItem[]>(
    Array.from({length: 9}, (_, i) => ({
      id: i + 1,
      flipped: false,
    }))
);

function flipBox(box: BoxItem) {
  if (props.hasOpened) return;
  if (!props.canSpin) return;

  if (boxes.value.some(b => b.flipped)) return;

  if (box.flipped) return;

  router.post(HomeController.submitOpenBox(), {
        box_position: box.id,
      },
      {
        preserveState: true,
        preserveScroll: true,
        replace: true,

        onSuccess: (page) => {
          box.flipped = true;
        },
        onError: (errors) => {
          console.log(errors);
        },
  });
}

onMounted(() => {
  if (props.hasOpened && props.openedReward) {
    const openedBoxId = props.openedReward.box_position;
    const box = boxes.value.find(b => b.id === openedBoxId);
    if (box) {
      box.flipped = true;
    }
  }
});

const { t } = useI18n();
const rewardDesc = computed(() => {
  if (!props.hasOpened || !props.openedReward) return null;

  const code = props.openedReward.reward.code;
  switch (code) {
    case 'LUCKY_MESSAGE':
      return t('Hành trình mang Tết về nhà của bạn vẫn tiếp tục ✨Khám phá thêm các mẫu vali Bamozo để gói trọn những chuyến đi sắp tới nhé!');
    case 'SECOND_PRIZE_CAMERA':
    case 'THIRD_PRIZE_MIBAND':
    case 'CONSOLATION_PILLOW':
      return `
        <p><span>BTC Bamozo</span> ${t('sẽ liên hệ qua số điện thoại đã đăng ký để xác nhận và hướng dẫn nhận quà')}</p>
        <p>${t('Thời gian liên hệ và trao quà dự kiến:')} <span>${t('trong vòng 7 ngày làm việc kể từ khi kết thúc minigame')}</span></p>
      `;
    case 'FIRST_PRIZE_GOLD':
      return `
        <div>${t('Thời gian quay số: 28/02')}</div>
        <p>${t('Công bố trực tiếp tại fanpage chính thức Bamozo')}</p>
        <p>${t('Người trúng giải sẽ được')} <span>${t('BTC liên hệ trực tiếp trong vòng 7 ngày làm việc')}</span> ${t('để xác nhận và trao thưởng')}</p>
      `;
    default:
      return null;
  }
});
</script>

<template>
  <section class="claim-box mt-session pb-5">
    <h2 class="section-title mb-4 display-6 fw-700 text-center">
      {{ $t('Chọn thẻ may mắn') }}
    </h2>

    <div class="container">
      <div class="box-grid">
        <!-- HÀNG 1 -->
        <div class="box-row-center">
          <div
              v-for="box in boxes.slice(0, pcFirstRow)"
              :key="box.id"
              class="flip-card-wrapper"
          >
            <div
                class="flip-card"
                :class="{ flipped: box.flipped,
                  disabled: props.hasOpened || !props.canSpin || (boxes.some(b => b.flipped) && !box.flipped)
                }"
                @click="flipBox(box)"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="box-front">
                    <span class="random">?</span>
                  </div>
                </div>

                <div class="flip-card-back">
                  <div class="box-back">
                    <template v-if="props.hasOpened && props.openedReward && props.openedReward?.box_position === box.id">
                      <img v-if="props.openedReward.reward.image" :src="asset(props.openedReward.reward.image)" class="reward-image" />
                      <div class="reward-title">
                        {{ props.openedReward.reward.code == 'LUCKY_MESSAGE' ? $t('Chúc mừng bạn đã') : $t('Chúc mừng bạn đã trúng') }}
                      </div>
                      <div class="reward-name">{{ props.openedReward?.reward.name }}</div>
                    </template>

                    <template v-else>
                      🎉
                      <p>May mắn!</p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- HÀNG 2 -->
        <div class="box-row-center">
          <div
              v-for="box in boxes.slice(pcFirstRow)"
              :key="box.id"
              class="flip-card-wrapper"
          >
            <div
                class="flip-card"
                :class="{ flipped: box.flipped,
                  disabled: props.hasOpened || !props.canSpin || (boxes.some(b => b.flipped) && !box.flipped)
                }"
                @click="flipBox(box)"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="box-front">
                    <span class="random">?</span>
                  </div>
                </div>

                <div class="flip-card-back">
                  <div class="box-back">
                    <template
                        v-if="props.hasOpened && props.openedReward && props.openedReward?.box_position === box.id">
                      <img v-if="props.openedReward.reward.image"
                           :src="props.openedReward.reward.image"
                           class="reward-image"
                      />
                    </template>

                    <template v-else>
                      🎉
                      <p>May mắn!</p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          class="box-grid"
          :style="{
            '--pc-columns': 5,
            '--pc-first-row': pcFirstRow
          }"
      >
      </div>
    </div>
  </section>
</template>

<style scoped>

.flip-card.disabled {
  pointer-events: none;
  opacity: 0.8;
  cursor: not-allowed;
}

.box-grid {
  display: grid;
  gap: 24px;
}

/* ===== PC CONFIG ===== */
@media (min-width: 1200px) {
  .box-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
  }

  /* HÀNG DƯỚI CHIẾM TOÀN GRID */
  .box-row-center {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  .box-row-center .flip-card-wrapper {
    width: calc(100% / 5);
    max-width: 200px;
  }
}

/* ===== Tablet + Mobile ===== */
@media (max-width: 1199px) {
  .box-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .box-row-center {
    display: contents;
  }
}


.flip-card {
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  padding-top: 130%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
}

.flip-card-front:hover,
.flip-card-back:hover {
  box-shadow: 0 8px 25px rgba(39, 64, 111, 0.1);
  transform: translateY(-1rem);
}

/* FRONT */
.flip-card-front {
  background: linear-gradient(135deg, #ff9800, #ff5722);
  box-shadow: 0 10px 25px rgba(0, 0, 0, .15);
  color: #fff;
}

/* BACK */
.flip-card-back {
  background: #fff;
  border: 2px solid #ff9800;
  transform: rotateY(180deg);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
}

.box-front,
.box-back {
  text-align: center;
  font-size: 32px;
}

.box-front p{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
}

.box-back p{
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #ff9800;
}

.reward-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background: #f9f9f9;
}

.reward-title {
  font-size: 14px;
  font-weight: 600;
  color: #ff9800;
  margin-bottom: 4px;
}

.reward-name {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
}

.reward-desc {
  font-size: 13px;
  color: #555;
  line-height: 1.5;
  text-align: center;
  max-height: 140px; /* hạn chế box quá cao */
  overflow-y: auto;   /* nếu nội dung dài sẽ scroll nhẹ */
  margin-top: 8px;
  padding: 0 8px;
  background: #fff8f0; /* nền nhẹ */
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.05);
}

.reward-desc p {
  margin: 6px 0;
}

.reward-desc span {
  font-weight: 600;
  color: #ff9800;
}
</style>
