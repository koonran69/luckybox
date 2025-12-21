<script setup lang="ts">
import {RewardData} from "@/types";
import {asset} from "@/lib/utils";
import {computed} from "vue";
import {useI18n} from "vue-i18n";

interface Props {

}

const props = defineProps<Props>();

const {t} = useI18n();


</script>
<template>
  <section class="mt-5">
    <div class="container-md">
      <div class="title-section d-flex justify-content-center">
        <h1 class="title-lk">{{ $t('Thể lệ chương trình') }}</h1>
      </div>
      <ul class="list-rule mt-3">
        <li class="rule">
          {{ $t('Chúng tôi xin mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Việc này sẽ giúp bạn truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng khám phá những trải nghiệm hấp dẫn mà chương trình mang lại!') }}
        </li>
        <li class="rule">
          {{$t('Chúng tôi trân trọng mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Hành động này sẽ giúp bạn dễ dàng truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng nhau khám phá những trải nghiệm thú vị mà chương trình mang lại!')}}
        </li>
        <li class="rule">
          {{$t('Chúng tôi xin mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Điều này sẽ giúp bạn truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng khám phá những trải nghiệm hấp dẫn mà chương trình mang lại!')}}
        </li>
        <li class="rule">
          {{$t('Chúng tôi trân trọng mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Hành động này sẽ giúp bạn dễ dàng truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng nhau khám phá những trải nghiệm thú vị mà chương trình mang lại!')}}
        </li>
      </ul>
    </div>
  </section>

  <section class="mt-5">
    <div class="container-md">
      <div class="title-section d-flex justify-content-center">
        <h1 class="title-lk">{{ $t('Chính sách') }}</h1>
      </div>
      <ul class="list-policy mt-3">
        <li class="policy">
          {{$t('Chúng tôi xin mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Việc này sẽ giúp bạn truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng khám phá những trải nghiệm hấp dẫn mà chương trình mang lại!')}}
        </li>
        <li class="policy">
          {{$t('Chúng tôi trân trọng mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Hành động này sẽ giúp bạn dễ dàng truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng nhau khám phá những trải nghiệm thú vị mà chương trình mang lại!')}}
        </li>
        <li class="policy">
          {{$t('Chúng tôi xin mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Điều này sẽ giúp bạn truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng khám phá những trải nghiệm hấp dẫn mà chương trình mang lại!')}}
        </li>
        <li class="policy">
          {{$t('Chúng tôi trân trọng mời bạn quét mã QR Code trên nắp sản phẩm khuyến mại. Hành động này sẽ giúp bạn dễ dàng truy cập vào liên kết tham gia mini game thú vị mà chúng tôi đã chuẩn bị. Chúng tôi rất mong nhận được sự tham gia nhiệt tình từ bạn để cùng nhau khám phá những trải nghiệm thú vị mà chương trình mang lại!')}}
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.list-rule, .list-policy {
  padding-left: 18px;
  margin: 0;
}
.rule, .policy{
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 14px;
  color: #333;
  text-align: justify;
  text-justify: inter-word;
  position: relative;
}
</style>