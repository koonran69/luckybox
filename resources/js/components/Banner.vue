<template>
    <div class="banner-lucky-box">
        <div class="overlay"></div>
        <div class="bg-banner">
            <img src="/assets/images/banner-final.png" alt="">
        </div>
    </div>
</template>
<style scoped>
.banner-lucky-box {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.banner-lucky-box .bg-banner,
.banner-lucky-box img {
  width: 100%;
  height: 100%;
}

.banner-lucky-box img {
  object-fit: contain; /* SCALE ĐÚNG TỈ LỆ */
  object-position: center;
  display: block;
}

.banner-lucky-box .overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}

@media (max-width: 768px) {
  .banner-lucky-box {
    position: relative;
    width: 100%;
    /* aspect-ratio: 375 / 220; TỶ LỆ MOBILE BANNER */
    overflow: hidden;
  }

  .banner-lucky-box .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* KHÔNG MÉO ẢNH */
    display: block;
  }

  .banner-lucky-box .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
}
</style>