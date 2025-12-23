import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

/**
 * isLoading: trạng thái hiển thị loader (reactive, dùng trong PageLoader.vue)
 * suppressLoader: nếu true => tạm thời KHÔNG hiển thị loader dù Inertia emit start
 */
export const isPageLoading = ref(false)
export const suppressPageLoader = ref(false)

// unsubscribe functions (router.on returns an unsubscribe fn)
let stopStart: (() => void) | null = null
let stopFinish: (() => void) | null = null

export function initPageLoader() {
  // ensure init only once
  if (stopStart) return

  stopStart = router.on('start', (event: any) => {
    // Nếu request này đang bị tắt loader (suppress) => skip
    if (suppressPageLoader.value) return
    isPageLoading.value = true
  })

  stopFinish = router.on('finish', () => {
    // tắt loader khi request xong, và reset suppress (nếu có)
    isPageLoading.value = false
    suppressPageLoader.value = false
  })
}

export function disposePageLoader() {
  stopStart?.()
  stopFinish?.()
  stopStart = null
  stopFinish = null
}
