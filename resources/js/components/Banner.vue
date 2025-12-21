<template>
    <div class="banner-lucky-box">
        <div class="overlay"></div>
        <div class="bg-banner">
            <img src="/assets/images/banner.png" alt="">
        </div>
    </div>
</template>
<style scoped>
.banner-lucky-box {
  position: relative;
  width: 100%;
  aspect-ratio: 375 / 220; /* TỶ LỆ MOBILE BANNER */
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

</style>