import { ref } from 'vue'
import axios from '@/bootstrap/axios'
import { apply_voucher } from '@/routes/checkout'
import { toast } from 'vue-sonner'

export function useDiscount() {
  const discount = ref<number>(0)
  const loading = ref<boolean>(false)

  async function applyDiscount(code?: string) {

    loading.value = true

    try {
        const { data } = await axios.post(apply_voucher.url(), { voucher_code: code})
        if (data.data.valid) {
                discount.value = data.data.amount
            } else {
                toast.warning(data.data.message);
                discount.value = 0
            }
        } finally {
            loading.value = false
        }
    }

  return { discount, loading, applyDiscount }
}
