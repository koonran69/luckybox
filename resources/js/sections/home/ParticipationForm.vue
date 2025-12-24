<script setup lang="ts">
import HomeController from '@/actions/Domains/Web/Http/Controllers/Home/HomeController';
import InputError from '@/components/ui/InputError.vue';
import { Form, Link, useForm } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
import { ref } from 'vue';
import {asset} from "@/lib/utils";
interface Props {
  genders: Record<string, string>
}
const props = defineProps<Props>();
const acceptedTerms = ref(false);
const acceptedProgramRules = ref(false);

const form = useForm({
  fullname: '',
  phone: '',
  gender: '',
  age: '',
  address: '',
  email: '',
})

function submit() {
  if (!acceptedTerms.value || !acceptedProgramRules.value) return
  const url = HomeController.submitFormParticipation();
  form.post(url, {
    preserveScroll: true,
    onSuccess: () => {
      form.reset()
    },
    onError: (errors) => {
      Object.values(errors).forEach((msg: any, index) => {
        toast.error(msg as string, {
          id: `error-${index}-${Date.now()}`,
        });
      });
    },
  })
}
</script>
<template>
  <section class="my-5" id="play-game-now">
    <div class="container-md">
      <div class="register-card mt-5">
        <div class="box-header d-flex justify-content-center">
          <img :src="asset('/assets/images/vali-group.png')" class="img-header" />
        </div>
        <div class="register-sub text-center text-uppercase mt-3 mb-5">
          <span>{{$t('Mở vali - Nhận Quà Liền Tay')}}</span>
        </div>
        <h2 class="register-title">{{ $t('THÔNG TIN THAM GIA') }}</h2>
        <Form class="form-register-wrapper" @submit.prevent="submit" v-slot="{ errors, processing }" :options="{ preserveScroll: true }">
          <div class="mb-3 input-wrapper">
            <input name="fullname" v-model="form.fullname" type="text" required class="form-control" data-placeholder="Họ và tên" placeholder="Họ và tên*"/>
            <InputError :message="errors.fullname" />
          </div>

          <div class="mb-3 input-wrapper">
            <input name="phone" v-model="form.phone" type="text" required class="form-control" data-placeholder="Số điện thoại" placeholder="Số điện thoại*"/>
            <InputError :message="errors.phone" />
          </div>

          <div class="mb-3 input-wrapper">
            <input name="email" v-model="form.email" type="email" required class="form-control" data-placeholder="Email" placeholder="Email*"/>
            <InputError :message="errors.email" />
          </div>

          <div class="mb-3 checkbox-wrapper">
            <input
                type="checkbox"
                id="programRules"
                v-model="acceptedProgramRules"
                class="custom-checkbox"
            />
            <label for="programRules">
              {{ $t('Tôi đồng ý với') }}
              <a href="/#rules" >{{ $t('Thể lệ chương trình') }}</a>
            </label>
          </div>

          <div class="mb-3 checkbox-wrapper">
            <input
                type="checkbox"
                id="privacyPolicy"
                v-model="acceptedTerms"
                class="custom-checkbox"
            />
            <label for="privacyPolicy">
              {{ $t('Tôi đã hiểu và đồng ý với') }}
              <a href="/#policy">{{ $t('Chính sách thu thập thông tin cá nhân') }}</a>
              {{ $t('khi tham gia chương trình khuyến mãi này') }}
            </label>
          </div>


          <div class="d-flex gap-3">
            <button
                type="submit"
                class="btn btn-orange-theme flex-fill text-uppercase"
                :disabled="!acceptedTerms || !acceptedProgramRules || processing"
            >
              {{ $t('Tham gia ngay') }}
            </button>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>
<style scoped>

@media (min-width: 768px) {
  .register-card form {
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .box-header .img-header{
    width: 200px !important;
    height: 200px !important;
  }
}

.register-sub span {
  /* Font & Định dạng cơ bản */
  font-family: 'SVN-Gilroy', sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;

  /* Màu sắc gốc của chữ */
  color: #FFF;
  background-color: #fff;
  padding: 8px;
  border-radius: 5px;

  /* Tạo viền trắng bao quanh chữ (thay cho border 0.66px) */
  /* Cách này giúp viền trắng không lấn vào màu cam của chữ */
  paint-order: stroke fill;
  -webkit-text-stroke: 1px #ef6323; /* Gấp đôi thông số border để bù phần bị lấn */

  /* Hiệu ứng đổ bóng (box-shadow từ Figma chuyển sang drop-shadow cho text) */
  filter: drop-shadow(-1px 1px 1px rgba(207, 54, 0, 0.4));

  /* Kỹ thuật tạo viền trắng dày + Bóng đổ mờ phía sau */
  text-shadow:
    /* Viền trắng 1px bao quanh */
      -1px -1px 0 #CF360033,
      1px -1px 0 #CF360033,
      -1px  1px 0 #CF360033,
      1px  1px 0 #CF360033,
      0  1px 0 #CF360033,
      0 -1px 0 #CF360033,
      1px  0 0 #CF360033,
      -1px  0 0 #CF360033,

        /* Bóng đổ qua TRÁI – ĐẬM */
      -2px 2px 3px rgba(211, 107, 61, 0.85);
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
}

.register-card form > div {
  margin-bottom: 12px;
}

.register-card {
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  background-color: #ef6323;
  background-image: url("/assets/images/partern.png");

  /*background-repeat: no-repeat;*/
  background-position: center top;
  background-size: auto;

  position: relative;
  overflow: visible;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}


.box-header .img-header {
  width: 160px;
  height: 160px;
  margin-top: -105px;
}


.box-header-left {
  position: relative;
  width: 190px;
  height: 90px;
}

.img-header-left {
  width: 100%;
  position: absolute;
  left: -20px;
  top: -70px;
}

.box-header-right {
  position: absolute;
  top: 0;
  right: 0;

  width: 100px;
  height: 100px;
  pointer-events: none;
}

.img-header-right {
  width: 100%;
  position: absolute;
  right: 0;
  top: -40px;
}

.register-title {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
}

.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.85);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-top: 3px;
  flex-shrink: 0;
}

.custom-checkbox:checked {
  background-color: #ff7a00;
  border-color: #ff7a00;
}

.custom-checkbox:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-wrapper label {
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
}

.checkbox-wrapper a {
  color: rgba(255, 255, 255, 1);
  opacity: 1 !important;
  text-decoration: underline;
  font-weight: 600;
}
</style>