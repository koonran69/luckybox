import { ref, onMounted, nextTick } from 'vue';

export function useRecaptchaGoogle() {
    const recaptchaToken = ref<string | null>(null);
    const widgetId = ref<number | null>(null);
    const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    // Reset recaptcha về trạng thái ban đầu
    const resetRecaptcha = () => {
        if (widgetId.value !== null && (window as any).grecaptcha) {
            (window as any).grecaptcha.reset(widgetId.value);
            recaptchaToken.value = null;
        }
    };

    const renderRecaptcha = (containerIdOrElement: string | HTMLElement) => {
        const checkGrecaptcha = setInterval(() => {
            if (typeof window !== 'undefined' && (window as any).grecaptcha?.render) {
                clearInterval(checkGrecaptcha);

                const element = typeof containerIdOrElement === 'string'
                    ? document.getElementById(containerIdOrElement)
                    : containerIdOrElement;

                if (element && element.innerHTML === '') {
                    widgetId.value = (window as any).grecaptcha.render(element, {
                        sitekey: recaptchaSiteKey,
                        callback: (token: string) => {
                            recaptchaToken.value = token;
                        },
                        'expired-callback': () => {
                            recaptchaToken.value = null;
                        },
                        size: 'compact', //compact, normal
                    });
                }
            }
        }, 100);
    };

    return {
        recaptchaToken,
        widgetId,
        renderRecaptcha,
        resetRecaptcha
    };
}
