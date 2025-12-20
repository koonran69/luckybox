<script setup lang="ts">
import HomeController from '@/actions/Domains/Web/Http/Controllers/Home/HomeController';
import InputError from '@/components/ui/InputError.vue';
import { Form, Link, useForm } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
import { ref } from 'vue';
interface Props {
  genders: Record<string, string>
}
const props = defineProps<Props>();
const acceptedTerms = ref(true);
const acceptedProgramRules = ref(true);

const form = useForm({
  fullname: '',
  phone: '',
  gender: '',
  age: '',
  address: '',
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
  <div class="mt-session">
    <div class="container-md">
      <div class="register-card">
        <h1 class="register-title">{{ $t('THÔNG TIN THAM GIA TRÚNG THƯỞNG') }}</h1>
        <Form @submit.prevent="submit" v-slot="{ errors, processing }" :options="{ preserveScroll: true }">
          <div class="mb-3">Form
            <input name="fullname" v-model="form.fullname" type="text" required class="form-control" placeholder="Họ và tên"/>
            <InputError :message="errors.fullname" />
          </div>

          <div class="mb-3">
            <input name="phone" v-model="form.phone" type="text" required class="form-control" placeholder="Số điện thoại"/>
            <InputError :message="errors.phone" />
          </div>

          <div class="mb-3">
            <select name="gender" v-model="form.gender" class="form-select d-flex align-items-center mb-3 mb-md-0">
              <option value="">
                {{ $t('Chọn giới tính') }}
              </option>
              <option v-for="(label, index) in props.genders" :value="index">{{label}}</option>
            </select>
          </div>

          <div class="mb-3">
            <input name="age" v-model="form.age" type="text" class="form-control" placeholder="Độ tuổi" />
            <InputError :message="errors.address" />
          </div>
          
          <div class="mb-3">
            <input name="address" v-model="form.address" type="text" class="form-control" placeholder="Địa chỉ"/>
            <InputError :message="errors.address" />
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
              <a href="#" target="_blank">{{ $t('Thể lệ chương trình') }}</a>
              {{ $t('quy định bởi Hano Smart') }}
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
              <a href="#" target="_blank">{{ $t('Chính sách thu thập thông tin cá nhân') }}</a>
              {{ $t('khi tham gia chương trình khuyến mãi này') }}
            </label>
          </div>


          <div class="d-flex gap-3">
            <button
                type="submit"
                class="btn register-btn-primary btn-orange-theme flex-fill"
                :disabled="!acceptedTerms || !acceptedProgramRules || processing"
            >
              {{ $t('Tham gia ngay') }}
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ff7a00;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-top: 3px;
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
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
}

.checkbox-wrapper a {
  color: #ff7a00;
  text-decoration: underline;
}
</style>