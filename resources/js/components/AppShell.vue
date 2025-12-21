<template>
    <div class="page mobile-root">
        <slot />
    </div>
    <Toaster position="top-right" richColors />
</template>
<style scoped>
/* ===========================
   MOBILE-ONLY ROOT LAYOUT
   =========================== */

.mobile-root {
  width: 100%;
  max-width: 430px;      /* iPhone Pro Max */
  min-height: 100vh;

  margin: 0 auto;
  background: #fff;

  overflow-x: hidden;
  position: relative;
}

/* Nền khi mở trên PC */
@media (min-width: 768px) {
  body {
    background: #f3f4f6;
  }

  .mobile-root {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}
</style>