<script setup lang="ts">
import { Form, Link, useForm } from '@inertiajs/vue3';
import {asset} from "@/lib/utils";
</script>
<template>
    <footer>
      <section class="mt-5">
        <div class="container-md">
          <div class="footer-header">
            <img :src="asset('/assets/images/vali-footer.png')" class="footer-header-img" />
          </div>
          <div class="footer-body text-center mt-5">
            <img :src="asset('/assets/images/logo.png')" class="footer-logo mb-3" />
            <div class="name">
                {{$t('CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ SẢN XUẤT CHÍNH PHÁT')}}
            </div>
            <div class="contact-address mt-2">
              <div class="d-flex align-items-center justify-content-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
                <span>167B Xuân Thủy, Dịch Vọng, Cầu Giấy, Hà Nội</span>
              </div>
              <div class="d-flex align-items-center justify-content-center mt-1 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                <span>098 223 87 23</span>
              </div>
              <div class="d-flex align-items-center justify-content-center mt-1">
                <span>Email: hotrokhachhang.bamozo@gmail.com</span>
              </div>
              <div class="d-flex align-items-center justify-content-center mt-1 gap-3 social-media">
                <span>Social Media</span>
                <Link :href="'#'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z"/></svg></Link>
                <Link :href="'#'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg></Link>
                <Link :href="'#'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M386.3 292.5C388.1 302.2 389.4 311.9 389.4 324.5C389.4 434.3 315.8 512 205 512C98.9 512 13 426.1 13 320C13 213.9 98.9 128 205 128C256.9 128 300.1 146.9 333.6 178.3L281.5 228.3C267.4 214.7 242.5 198.7 205 198.7C139.5 198.7 86.1 252.9 86.1 320C86.1 387.1 139.5 441.3 205 441.3C281 441.3 309.5 386.6 314 358.5L205 358.5L205 292.5L386.3 292.5L386.3 292.5zM571.7 298.9L571.7 243.2L515.7 243.2L515.7 298.9L460 298.9L460 354.9L515.7 354.9L515.7 410.6L571.7 410.6L571.7 354.9L627.4 354.9L627.4 298.9L571.7 298.9z"/></svg></Link>
                <Link :href="'#'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg></Link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          © Bản quyền thuộc về <span>K - Solutions</span>
        </div>
      </section>
    </footer>
</template>
<style scoped>
.footer-bottom{
  background-color: #000000;
  color: #fff;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
}
.footer-bottom span{
  color: #F15A24;
}
footer {
  border-top: 2px solid #F15A24;
  background-color: #FFF5F2;
  padding-bottom: 9rem;
  margin-top: 5rem;
}
.footer-body .footer-logo{
  max-width: 120px;
  max-height: 70px;
  width: 100%;
  height: 100%;
}
.footer-body .name{
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #F15A24;
}
.contact-address svg{
  fill: #F15A24;
  width: 20px;
  height: 20px;
}
.contact-address span{
  font-size: 14px;
  font-weight: 600;
  color: #434343;
}
.social-media svg{
  width: 25px;
  height: 25px;
}
</style>