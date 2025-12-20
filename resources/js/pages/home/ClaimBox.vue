<script setup lang="ts">
import {usePage} from '@inertiajs/vue3';
import {ref} from 'vue';

interface Props {
}

const props = defineProps<Props>();
const page = usePage();

interface BoxItem {
  id: number;
  flipped: boolean;
}

const pcFirstRow = 5;
const boxes = ref<BoxItem[]>(
    Array.from({length: 9}, (_, i) => ({
      id: i + 1,
      flipped: false,
    }))
);

function flipBox(box: BoxItem) {
  if (box.flipped) return; // chỉ lật 1 lần
  box.flipped = true;

  console.log(box)
  // TODO: Gọi API quay thưởng ở đây
}

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
                :class="{ flipped: box.flipped }"
                @click="flipBox(box)"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="box-front">
                    🎁
                    <p>Chọn tôi</p>
                  </div>
                </div>

                <div class="flip-card-back">
                  <div class="box-back">
                    🎉
                    <p>May mắn!</p>
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
                :class="{ flipped: box.flipped }"
                @click="flipBox(box)"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div class="box-front">
                    🎁
                    <p>Chọn tôi</p>
                  </div>
                </div>

                <div class="flip-card-back">
                  <div class="box-back">
                    🎉
                    <p>May mắn!</p>
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
  box-shadow: 0 10px 25px rgba(0, 0, 0, .15);
}

.box-front,
.box-back {
  text-align: center;
  font-size: 32px;
}

.box-front p,
.box-back p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
}


</style>
