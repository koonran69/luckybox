<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { computed, onMounted, ref, toRefs, watchEffect } from 'vue'
import { asset } from "@/lib/utils";

onMounted(() => {
  window.addEventListener('scroll', () => {
    document
        .querySelector('.pc-header')
        ?.classList.toggle('scrolled', window.scrollY > 30)
  })
})

</script>

<template>
  <header class="pc-header d-none d-md-block">
    <div class="container-md">
      <div class="pc-header-inner">
        <!-- LEFT: LOGO -->
        <a href="/" class="pc-logo">
          <img :src="asset('/assets/images/logo.png')" alt="Logo" />
        </a>

        <!-- RIGHT: MENU -->
        <nav class="pc-menu">
          <!-- CTA -->
          <a href="/#play-game-now" class="pc-btn-play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z"/>
            </svg>
            <span>Tham gia ngay</span>
          </a>
          <a href="/#guide">Hướng dẫn</a>
          <a href="/#rules">Thể lệ</a>
          <a href="/#policy">Chính sách</a>
        </nav>
      </div>
    </div>
  </header>
</template>
<style scoped>
.pc-header.scrolled {
  background: rgba(255,255,255,0.9);
  border-bottom-color: rgba(0,0,0,0.12);
}

.pc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 9000;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(0,0,0,0.6);
}

/* giữ chiều cao */
.pc-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
}

/* LOGO */
.pc-logo img {
  max-height: 60px;
}

/* MENU */
.pc-menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.pc-menu a {
  font-weight: 700;
  text-decoration: none;
  color: #333;
  transition: all .2s ease;
}

.pc-menu a:hover {
  color: #f15a25;
}

/* CTA PLAY */
.pc-btn-play {
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;
  border-radius: 10px;

  background: rgba(229, 106, 58, 0.95);
  color: #fff !important;

  text-transform: uppercase;
  font-weight: 800;

  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.pc-btn-play svg {
  width: 22px;
  height: 22px;
  fill: #fff;
}

.pc-btn-play:hover {
  filter: brightness(1.08);
}

</style>