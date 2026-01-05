<script setup lang="ts">
import HomeController from '@/actions/Domains/Web/Http/Controllers/Home/HomeController';
import {usePage, router, Link} from '@inertiajs/vue3';
import {ref, onMounted, computed} from 'vue';
import {RewardHistory} from "@/types";
import { useI18n } from 'vue-i18n';
import { asset } from '@/lib/utils';
import AppLayout from "@/layouts/AppLayout.vue";

interface BoxItem {
  id: number;
  flipped: boolean;
}

interface Props {
  hasOpened: boolean
  canSpin: boolean
  countSpin?: number | 0
  openedReward?: RewardHistory | null
}

const props = defineProps<Props>();
const page = usePage();

const showRewardModal = ref(false);
const currentReward = ref<RewardHistory | null>(null);

const { t } = useI18n();
const luckyMessages = [
  'Chúc bạn tiền vào cửa trước, tiền lẻn cửa sau, hai cái gặp nhau chui vào két sắt',
  'Chúc bạn gấm vóc lụa là, tay cầm tiền tỉ được làm đại gia',
  'Chúc bạn năm mới đa lộc, đa tài, đa phú quý. Đắc thời, đắc thắng, đắc nhân tâm',
  'Chúc bạn vạn sự như ý, tỉ sự như mơ, triệu điều bất ngờ, không chờ cũng đến',
  'Chúc bạn tiền vào như nước triều dâng, tiêu hoài không cạn, càng xài càng tăng',
  'Chúc bạn một năm mới hạnh phúc, khum “chằm Zn”, âu lo. Đầu năm phát tài, cuối năm tài vẫn phát',
  'Chúc bạn bầu trời sức khỏe, biển cả tình thương, đại dương tình bạn, sự nghiệp sáng ngời, gia đình thịnh vượng',
  'Chúc bạn vui vẻ như Chim Sẻ, khỏe mạnh như Đại Bàng, giàu sang như chim Phụng, làm lụng như chim Sâu, sống lâu như Đà Điểu',
  'Chúc bạn tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin',
  'Chúc bạn và gia đình luôn thuận hòa, song thân đắc thọ, tỷ sự như mơ, vạn sự như ý',
  'Chúc bạn năm mới công thành danh toại, trẻ mãi không già, tấn tài, tấn lộc, phúc lộc trường tồn',
  'Năm mới chúc bạn sức khỏe đầy đủ, gạo đầy lu, muối đầy hũ, tiền đầy túi, tình đầy tim, xăng đầy bình, và vàng đầy tủ!'
];
const randomLuckyMessage = () => {
  const index = Math.floor(Math.random() * luckyMessages.length);
  return t(luckyMessages[index]);
};
const rewardDesc = computed(() => {
  if (!currentReward.value) return null;
  const code = props.openedReward.reward.code;
  switch (code) {
    case 'LUCKY_MESSAGE':
      return randomLuckyMessage();
    case 'SECOND_PRIZE_CAMERA':
    case 'THIRD_PRIZE_MIBAND':
    case 'CONSOLATION_PILLOW':
      return t('BTC Bamozo sẽ liên hệ qua số điện thoại đã đăng ký để xác nhận và hướng dẫn nhận quà\n' +
          'Thời gian liên hệ và trao quà dự kiến: trong vòng 7 ngày làm việc kể từ khi kết thúc minigame');
    case 'FIRST_PRIZE_GOLD':
      return `
        <div class="fw-bold fs-3">${t('Thời gian quay số: 28/02')}</div>
        <p style="margin-bottom:0">${t('Giải nhất được xác định thông qua hình thức quay số từ danh sách khách hàng nhận được vé tham gia. Theo dõi thông tin trực tiếp tại Fanpage chính thức của Bamozo.')}</p>
      `;
    default:
      return null;
  }
});

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
          if (props.openedReward) {
            currentReward.value = props.openedReward;
            showRewardModal.value = true;
          }
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
    currentReward.value = props.openedReward;
    showRewardModal.value = true;
  }
});


</script>

<template>
  <AppLayout :transparent="true">
    <section class="my-5">
      <div class="container-md">
        <div class="claim-box">
          <h2 class="claim-box-title">
            {{ $t('Hãy lật 01 hình may nắm để có cơ hội trúng thưởng') }}
          </h2>

          <div class="box-grid">
            <div
                v-for="box in boxes"
                :key="box.id"
                class="flip-card-wrapper"
            >
              <div
                  class="flip-card"
                  :class="{
        flipped: box.flipped,
        disabled: props.hasOpened || !props.canSpin || (boxes.some(b => b.flipped) && !box.flipped)
      }"
                  @click="flipBox(box)"
              >
                <div class="flip-card-inner">
                  <!-- FRONT -->
                  <div class="flip-card-front">
                    <div class="box-front">
                      <img
                          :src="asset('/assets/images/box-random.png')"
                          class="box-random"
                      />
                    </div>
                  </div>

                  <!-- BACK -->
                  <div class="flip-card-back">
                    <div class="box-back" v-if="props.hasOpened && props.openedReward?.box_position === box.id">
                      <img
                          v-if="props.openedReward.reward?.image"
                          :src="asset(props.openedReward.reward.image)"
                          class="reward-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="claim-box-footer my-3">
            <span>Bạn có {{countSpin}} lượt lật hình</span>
          </div>

          <div class="d-flex gap-3">
            <Link class="btn btn-orange-theme flex-fill text-uppercase" :href="HomeController.index()">
              {{ $t('Quay lại trang chủ') }}
            </Link>
          </div>
          <!-- Modal Reward -->
          <transition name="fade">
            <div v-if="showRewardModal" class="reward-modal-backdrop">
              <div class="reward-modal">
                <div class="reward-modal-header">
                  <img :src="asset('/assets/images/xin-chuc-mung.png')" class="img-header" />
                </div>
                <div class="reward-modal-body">
                  <img v-if="currentReward?.reward?.image" :src="asset(currentReward.reward.image)" class="reward-image"/>
                  <div class="reward-title">
                    {{ currentReward?.reward?.code === 'LUCKY_MESSAGE' ? t('Chúc mừng bạn đã') : t('Chúc mừng bạn đã trúng') }}
                  </div>
                  <div class="reward-name">{{ currentReward?.reward?.code === 'FIRST_PRIZE_GOLD' ? '01 vé tham gia quay trúng thưởng - Giải nhất 02 chỉ vàng' : currentReward?.reward?.name }}</div>
                  <div class="reward-desc" v-if="rewardDesc" v-html="rewardDesc"></div>
                </div>
                <div class="reward-modal-footer">
                  <a class="btn btn-orange-theme flex-fill text-uppercase" target="_blank" href="https://bamozo.vn/">{{ t('ĐÃ HIỂU & GHÉ THĂM BAMOZO') }}</a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<style scoped>
@media (max-width: 767px) {
  .reward-modal-backdrop .reward-modal {
    max-height: 65vh !important;
    max-width: 300px !important;
    overflow-y: auto;
    margin-bottom: 5rem;
  }
  .reward-modal-backdrop .reward-modal-body .reward-image {
    max-width: 140px !important;
    width: 100%;
    max-height: 140px !important;
    height: 100%;
  }
  .reward-modal-backdrop .img-header {
    margin-top: -120px !important;
    max-width: 160px;
  }
  .reward-modal-backdrop .reward-title {
    font-size: 18px !important;
  }

  .reward-modal-backdrop .reward-name {
    font-size: 18px !important;
  }

  .reward-modal-backdrop .reward-desc {
    font-size: 13px !important;
    line-height: 1.45 !important;
  }
  .reward-modal-backdrop .reward-modal-footer .btn {
    padding: 5px 6px !important;
    font-size: 12px !important;
  }
}
@media (min-width: 768px) {
  .claim-box {
    margin-top: 6rem;
    max-width: 600px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

.reward-modal-backdrop .img-header{
  margin-top: -180px;
}

.claim-box-footer{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  font-style: italic;
}

.claim-box-title{
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  font-style: italic;
}

.claim-box{
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  background-color: #ef6323;
  background-image: url("/assets/images/partern.png");

  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;

  position: relative;
  overflow: visible;
}

.flip-card.disabled {
  pointer-events: none;
  opacity: 0.8;
  cursor: not-allowed;
}

.box-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cột */
  gap: 16px;
}

.flip-card {
  width: 100%;
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

/* BACK */
.flip-card-back {
  transform: rotateY(180deg);
  border-radius: 16px;
  transition: all 0.4s ease;
}

.box-back.lucky-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 92%;
  background: linear-gradient(135deg, #fff7e6, #ffe0b2);
  border-radius: 16px;
}

.box-back.lucky-message .reward-title {
  font-size: 12px;
  font-weight: 600;
  color: #ff9800;
}

.box-back.lucky-message .reward-name {
  font-size: 14px;
  font-weight: 800;
  color: #ff5722;
  text-align: center;
  line-height: 1.4;
}

.box-back {
  text-align: center;
  font-size: 32px;
}

.box-back p{
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #ff9800;
}

.reward-desc p {
  margin: 6px 0;
}

.reward-desc span {
  font-weight: 600;
  color: #ff9800;
}



.reward-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.reward-modal-backdrop .reward-modal {
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  background-color: #ef6323;
  background-image: url("/assets/images/partern.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 380px;
  height: auto;
  width: 90%;
  text-align: center;
  position: relative;
  overflow: visible;
}
/* VIỀN NGOÀI */
.reward-modal-backdrop .reward-modal::before {
  content: "";
  position: absolute;
  inset: -8px; /* outside stroke 8px */
  border-radius: 28px;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: linear-gradient(
      180deg,
      rgba(255,255,255,0.6),
      rgba(255,255,255,0.25)
  );

  z-index: -1;
}

.reward-modal-backdrop .reward-modal-body {
  flex: 1;           /* chiếm phần còn lại */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* căn giữa nội dung */
}

.reward-modal-backdrop .reward-modal-footer {
  margin-top: 10px; /* cách modal body */
}

.reward-modal-backdrop .btn-orange {
  background: linear-gradient(135deg, #ff9800, #ff5722);
  color: #fff;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.reward-modal-backdrop .reward-modal-body .reward-image {
  max-width: 220px;
  width: 100%;
  max-height: 260px;
  height: 100%;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 12px;
}

.reward-modal-backdrop .reward-title {
  font-size: 22px;
  color: #fff;
  font-weight: 800;
  margin-bottom: 6px;
}

.reward-modal-backdrop .reward-name {
  font-size: 22px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-style: italic;
}

.reward-modal-backdrop .reward-desc {
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  padding: 0 8px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  0% { transform: scale(0.7); opacity: 0;}
  100% { transform: scale(1); opacity: 1;}
}

</style>
