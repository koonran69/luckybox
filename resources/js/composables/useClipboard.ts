import { ref } from 'vue';

export function useClipboard() {
    const isCopied = ref(false);
    const error = ref<string | null>(null);

    async function copy(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            isCopied.value = true;
            error.value = null;

            // Reset trạng thái sau 2 giây (tùy thích)
            setTimeout(() => (isCopied.value = false), 2000);

            return true;
        } catch (err) {
            error.value = 'Không thể sao chép';
            console.error(err);
            return false;
        }
    }

    return {
        isCopied,
        error,
        copy,
    };
}
