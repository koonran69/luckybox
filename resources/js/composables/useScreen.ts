import { ref, onMounted, onUnmounted } from "vue";

export const isHomePage = ref(false)

export function useScreen()
{
  const isMobile = ref(false);

  const checkScreen = () => {
    isMobile.value = window.innerWidth < 768; // breakpoint xl
  };

  onMounted(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
  });

  return { isMobile };
}

