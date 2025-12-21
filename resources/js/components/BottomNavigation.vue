<script setup lang="ts">
import { Form, Link, useForm } from '@inertiajs/vue3';
import {asset} from "@/lib/utils";
</script>
<template>
  <footer>
    <section class="mt-5">
      <div class="container-md">
        <a class="btn play-game" href="/#play-game-now" title="play game">
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z"/></svg></div>
          <div>Tham gia ngay</div>
        </a>

        <div class="mobile-bottom-menu">
          <a class="menu-item" href="/#guide">
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM224 384C224 401.7 209.7 416 192 416C174.3 416 160 401.7 160 384C160 366.3 174.3 352 192 352C209.7 352 224 366.3 224 384zM192 288C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224C209.7 224 224 238.3 224 256C224 273.7 209.7 288 192 288zM312 232L456 232C469.3 232 480 242.7 480 256C480 269.3 469.3 280 456 280L312 280C298.7 280 288 269.3 288 256C288 242.7 298.7 232 312 232zM312 360L456 360C469.3 360 480 370.7 480 384C480 397.3 469.3 408 456 408L312 408C298.7 408 288 397.3 288 384C288 370.7 298.7 360 312 360z"/></svg></div>
            <div>Hướng dẫn</div>
          </a>

          <a class="menu-item" href="/#rules">
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg></div>
            <div>Thể lệ</div>
          </a>

          <a class="menu-item" href="/#policy">
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 136C64 122.8 74.7 112 88 112L136 112C149.3 112 160 122.7 160 136L160 240L184 240C197.3 240 208 250.7 208 264C208 277.3 197.3 288 184 288L88 288C74.7 288 64 277.3 64 264C64 250.7 74.7 240 88 240L112 240L112 160L88 160C74.7 160 64 149.3 64 136zM94.4 365.2C105.8 356.6 119.7 352 134 352L138.9 352C172.6 352 200 379.4 200 413.1C200 432.7 190.6 451 174.8 462.5L150.8 480L184 480C197.3 480 208 490.7 208 504C208 517.3 197.3 528 184 528L93.3 528C77.1 528 64 514.9 64 498.7C64 489.3 68.5 480.5 76.1 475L146.6 423.7C150 421.2 152 417.3 152 413.1C152 405.9 146.1 400 138.9 400L134 400C130.1 400 126.3 401.3 123.2 403.6L102.4 419.2C91.8 427.2 76.8 425 68.8 414.4C60.8 403.8 63 388.8 73.6 380.8L94.4 365.2zM288 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L288 192C270.3 192 256 177.7 256 160C256 142.3 270.3 128 288 128zM288 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L288 352C270.3 352 256 337.7 256 320C256 302.3 270.3 288 288 288zM288 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L288 512C270.3 512 256 497.7 256 480C256 462.3 270.3 448 288 448z"/></svg></div>
            <div>Chính sách</div>
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>
<style scoped>
.play-game {
  position: fixed;
  left: 50%;
  bottom: 85px;
  transform: translateX(-50%);

  width: 140px;
  height: 60px;
  border-radius: 12px;
  border: none;

  background: #E56A3A;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  z-index: 10000;

  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
.play-game svg {
  fill: #fff;
  width: 28px;
  height: 28px;
}
.play-game::before {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 16px;
  background: rgba(241, 90, 36, 0.35);
  z-index: -1;

  animation: pulse-inner 4s linear infinite;
}
.play-game::after {
  content: "";
  position: absolute;
  inset: -12px;
  border-radius: 20px;
  background: rgba(241, 90, 36, 0.18);
  z-index: -2;

  animation: pulse-outer 4s linear infinite;
}
@keyframes pulse-inner {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  60% {
    transform: scale(1.08);
    opacity: 0.25;
  }
  100% {
    transform: scale(1.15);
    opacity: 0;
  }
}

@keyframes pulse-outer {
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  60% {
    transform: scale(1.15);
    opacity: 0.2;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}


.mobile-bottom-menu .menu-item svg{
  fill: #F15A24;
  width: 30px;
  height: 30px;
}
.mobile-bottom-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  overflow-x: hidden;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #FFF5F2;
  border-top: 1px solid #F15A2466;

  padding: 30px 8px 10px;
  z-index: 9999;

  box-shadow: 0 -6px 20px rgba(0,0,0,0.08);
}

/* từng nút */
.mobile-bottom-menu .menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  text-decoration: none;

  text-align: center;
  flex: 1;
  background: none;
  border: none;

  font-size: 14px;
  font-weight: 700;
  color: #434343;

  padding: 8px 0;
  border-radius: 8px;

  transition: all 0.2s ease;
}

.mobile-bottom-menu .menu-item:hover {
  background: rgba(241, 90, 36, 0.1);
}

</style>