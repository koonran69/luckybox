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
    <div class="title-section d-flex justify-content-center">
      <h1 class="title-lk">{{$t('Hướng dẫn tham gia')}}</h1>
    </div>
    <div class="list-card-instruction mt-3">
      <div class="row g-3">
        <div class="col-6">
          <div class="card">
            <div class="card-img">
              <img :src="asset('/assets/images/instruct-1.png')" class="instruct-img" />
            </div>
            <div class="card-content">
              <div class="instruct-phase">{{ $t('Bước 1:') }}</div>
              <div class="instruct-content">Khách hàng Quét QR Code trên phiếu tham gia dự thưởng có trong mỗi vali của Bamozo. Hoặc truy cập đường link <a target="_blank" href="https://bamozo.vn/minigame">https://bamozo.vn/minigame</a> được gắn trên fanpage Bamozo.</div>
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
              <div class="instruct-content">Khách hàng điền thông tin tại mục THÔNG TIN THAM GIA.</div>
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
              <div class="instruct-content">Chọn THAM GIA NGAY để Bamozo ghi nhận thông tin tham gia của khách hàng.</div>
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
              <div class="instruct-content">Khách hàng tham gia lật hình may mắn và nhận thông báo kết quả trúng thưởng.</div>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <div class="col-6">
            <div class="card">
              <div class="card-img">
                <img :src="asset('/assets/images/instruct-5.png')" class="instruct-img" />
              </div>
              <div class="card-content">
                <div class="instruct-phase">{{ $t('Bước 5:') }}</div>
                <div class="instruct-content">
                  BTC Bamozo sẽ trực tiếp liên hệ qua số điện thoại khách hàng đã đăng ký để xác nhận và hướng dẫn nhận quà.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.list-card-instruction .card-img {
  width: 100%;

  overflow: hidden;           /* chặn ảnh tràn */
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.list-card-instruction .card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.list-card-instruction .card {
  border-radius: 27px;
  border: 1px solid #ef6323;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;

  display: flex;
  flex-direction: column;
}

/* hover nhẹ (PC vẫn đẹp) */
.list-card-instruction .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.list-card-instruction .card-content {
  padding: 12px;
  flex: 1;

  display: flex;
  flex-direction: column;
}

.instruct-phase{
  color: #ef6323;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
}
</style>