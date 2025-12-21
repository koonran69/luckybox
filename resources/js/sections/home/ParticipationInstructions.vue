<script setup lang="ts">
import {RewardData} from "@/types";
import {asset} from "@/lib/utils";
import {computed} from "vue";
import {useI18n} from "vue-i18n";
interface Props {

}
const props = defineProps<Props>();

const { t } = useI18n();


</script>
<template>
  <section class="my-5" id="guide">
    <div class="container-md">
      <div class="title-section d-flex justify-content-center">
        <h1 class="title-lk">{{$t('Hướng dẫn tham gia')}}</h1>
      </div>
      <div class="list-card-instruction mt-3">
        <div class="row g-2">
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-1.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 1:') }}</div>
                <div class="instruct-content">{{ $t('Khách hàng Quét mã QR Code trên nắp sản phẩm khuyến mại để mở link tham gia chương trình') }}</div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-2.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 2:') }}</div>
                <div class="instruct-content">{{ $t('Khách hàng Quét mã QR Code trên nắp sản phẩm khuyến mại để mở link tham gia chương trình') }}</div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-3.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 3:') }}</div>
                <div class="instruct-content">{{ $t('Khách hàng Quét mã QR Code trên nắp sản phẩm khuyến mại để mở link tham gia chương trình') }}</div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-4.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 4:') }}</div>
                <div class="instruct-content">{{ $t('Khách hàng Quét mã QR Code trên nắp sản phẩm khuyến mại để mở link tham gia chương trình') }}</div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-5.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 5:') }}</div>
                <div class="instruct-content">{{ $t('Khách hàng Quét mã QR Code trên nắp sản phẩm khuyến mại để mở link tham gia chương trình') }}</div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-6.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 6:') }}</div>
                <div class="instruct-content">{{ $t('Khách hàng Quét mã QR Code trên nắp sản phẩm khuyến mại để mở link tham gia chương trình') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.list-card-instruction .card {
  border-radius: 20px;
  border: 1px solid #F15A24;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* hover nhẹ (PC vẫn đẹp) */
.list-card-instruction .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.list-card-instruction .card-content{
  padding: 10px
}

.instruct-phase{
  color: #F15A24;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
}
</style>