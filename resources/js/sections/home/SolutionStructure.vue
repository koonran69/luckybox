<script setup lang="ts">
import {RewardData} from "@/types";
import {asset} from "@/lib/utils";
import {computed} from "vue";
import {useI18n} from "vue-i18n";
interface Props {
  rewards: RewardData[]
}
const props = defineProps<Props>();

const { t } = useI18n();
function getNameTopReward(reward: RewardData){
  const code = reward.code;
  switch (code) {
    case 'FIRST_PRIZE_GOLD':
      return t('01 GIẢI NHẤT');
    case 'SECOND_PRIZE_CAMERA':
      return t('05 GIẢI NHÌ');
    case 'THIRD_PRIZE_MIBAND':
      return t('10 GIẢI BA');
    case 'CONSOLATION_PILLOW':
      return t('100 GIẢI KHUYẾN KHÍCH');
    default:
      return null;
  }
}

</script>
<template>
  <section class="mt-5">
    <div class="title-section d-flex justify-content-center">
      <h1 class="title-lk">{{$t('Cơ cấu giải')}}</h1>
    </div>
    <div class="list-card-reward mt-5">
      <div class="row">
        <div class="col-12" v-for="reward in props.rewards">
          <div class="card d-flex align-items-center">
            <div class="card-img">
              <img v-if="reward.image_home" :src="asset(reward.image_home)" class="reward-image" :class="reward.code" />
            </div>
            <div class="card-content">
              <div class="reward-name">{{ getNameTopReward(reward) }}</div>
              <div class="reward-desc">{{ reward.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (min-width: 768px) {
  .list-card-reward .card {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }

  .card-img {
    max-width: 200px !important;
  }

  /* Giải nhất */
  .reward-image.FIRST_PRIZE_GOLD {
    height: 150px !important;
  }

  .reward-image.SECOND_PRIZE_CAMERA {
    height: 150px !important;
  }

  .reward-image.THIRD_PRIZE_MIBAND {
    height: 170px !important;
    bottom: -10px;
  }

  .reward-image.CONSOLATION_PILLOW{
    height: 130px !important;
    transform: rotate(20deg);
    bottom: 10px;
  }
}

/* ===== LIST CARD ===== */
.list-card-reward {
  margin-top: 16px;
}

/* ===== CARD ===== */
.list-card-reward .card {
  position: relative;
  overflow: visible; /* QUAN TRỌNG */
  align-items: flex-end; /* đẩy content xuống đáy */
  padding: 18px 12px;
  margin-bottom: 40px;
  height: auto;

  flex-direction: row;
  gap: 14px;
  border-radius: 16px;
  background: linear-gradient(277.4deg, #FFE2D8 0.43%, #FFF0EA 55.6%, #FFB094 107.65%);
  border: 1px solid #ef6323;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* hover nhẹ (PC vẫn đẹp) */
.list-card-reward .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

/* ===== IMAGE ===== */
.card-img {
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  max-width: 160px;
  width: 100%;
  height: 90px;
}

.reward-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Giải nhất */
.reward-image.FIRST_PRIZE_GOLD {
  width: 100%;
  height: 130px;
}

.reward-image.SECOND_PRIZE_CAMERA {
  width: 100%;
  height: 140px;
}

.reward-image.THIRD_PRIZE_MIBAND {
  width: 100%;
  height: 160px;
  bottom: -10px;
}

.reward-image.CONSOLATION_PILLOW{
  width: 100%;
  height: 120px;
  transform: rotate(20deg);
  bottom: 10px;
}

/* ===== CONTENT ===== */
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* tên giải */
.reward-name {
  /* Font & Định dạng cơ bản */
  /*font-family: 'SVN-Gilroy', sans-serif;*/
  font-weight: 900;
  font-style: italic;
  font-size: 26px;
  line-height: 1;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;

  /* Màu sắc gốc của chữ */
  color: #ef6323;

  /* Tạo viền trắng bao quanh chữ (thay cho border 0.66px) */
  /* Cách này giúp viền trắng không lấn vào màu cam của chữ */
  paint-order: stroke fill;
  -webkit-text-stroke: 1px #FFFFFF; /* Gấp đôi thông số border để bù phần bị lấn */

  /* Hiệu ứng đổ bóng (box-shadow từ Figma chuyển sang drop-shadow cho text) */
  filter: drop-shadow(-1px 1px 1px rgba(207, 54, 0, 0.4));

  /* Kỹ thuật tạo viền trắng dày + Bóng đổ mờ phía sau */
  text-shadow:
    /* Viền trắng 1px bao quanh */
      -1px -1px 0 #fff,
      1px -1px 0 #fff,
      -1px  1px 0 #fff,
      1px  1px 0 #fff,
      0  1px 0 #fff,
      0 -1px 0 #fff,
      1px  0 0 #fff,
      -1px  0 0 #fff,

        /* Bóng đổ qua TRÁI – ĐẬM */
      -2px 2px 3px rgba(211, 107, 61, 0.85);
}

/* mô tả */
.reward-desc {
  font-size: 11px;
  font-weight: 600;
  color: #434343;
  line-height: 1.4;
  text-align: center;
}
</style>