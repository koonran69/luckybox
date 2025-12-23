import { ref, computed, onUnmounted } from 'vue';

export function useCountdownSendOTP(initialTime: number = 60) {
    const timeLeft = ref(0);
    const timer = ref<ReturnType<typeof setInterval> | null>(null);

    // Format hiển thị kiểu 00:00
    const formattedTime = computed(() => {
        const minutes = Math.floor(timeLeft.value / 60);
        const seconds = timeLeft.value % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });

    // Kiểm tra xem có đang trong quá trình đếm ngược không
    const isRunning = computed(() => timeLeft.value > 0);

    const startTimer = (seconds: number = initialTime) => {
        // Xóa timer cũ nếu đang chạy
        stopTimer();

        timeLeft.value = seconds;
        timer.value = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                stopTimer();
            }
        }, 1000);
    };

    const stopTimer = () => {
        if (timer.value) {
            clearInterval(timer.value);
            timer.value = null;
        }
    };

    // Luôn dọn dẹp khi component bị hủy
    onUnmounted(() => {
        stopTimer();
    });

    return {
        timeLeft,
        formattedTime,
        isRunning,
        startTimer,
        stopTimer
    };
}
