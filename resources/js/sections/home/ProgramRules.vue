<script setup lang="ts">
import {computed, ref, onMounted} from "vue";
import {useI18n} from "vue-i18n";
import {asset} from "@/lib/utils";

interface Props {

}

const props = defineProps<Props>();

const rulesHtml = ref('')
const policyHtml = ref('')
onMounted(async () => {
  const resRule = await fetch(asset('assets/files/the-le-chuong-trinh.html'))
  rulesHtml.value = await resRule.text()

  const resPolicy = await fetch(asset('assets/files/chinh-sach.html'))
  policyHtml.value = await resPolicy.text()
})

const showRuleModal = ref(false);
const openRulesModal = () => {
  showRuleModal.value = true
}
const closeRulesModal = () => {
  showRuleModal.value = false
}

const showPolicyModal = ref(false);
const openPolicyModal = () => {
  showPolicyModal.value = true
}
const closePolicyModal = () => {
  showPolicyModal.value = false
}

</script>
<template>
  <section class="mt-5" id="content-rule-and-policy">
    <div class="container-md">
      <div class="row">
        <div class="col-12 col-md-6">
          <section class="mt-5" id="rules">
            <div class="title-section d-flex justify-content-center">
              <h1 class="title-lk">{{ $t('Thể lệ chương trình') }}</h1>
            </div>
            <div class="list-rule mt-3">
              <div class="rule">
                <b>1. Tên chương trình: </b> <strong>MỞ VALI - NHẬN QUÀ LIỀN TAY</strong>
              </div>
              <div class="rule">
                <b>2. Đơn vị tổ chức:</b> <strong>BAMOZO</strong> – Thương hiệu vali Bamozo.
              </div>
              <div class="rule">
                <b>3. Hình thức chương trình:</b>
                <p>
                  Chương trình minigame mang tính may rủi, được triển khai thông qua
                  mã QR trên sản phẩm vali Bamozo và nền tảng trực tuyến của chương trình.
                </p>
              </div>
              <div class="rule">
                <b>4. Thời gian và phạm vi áp dụng:</b>
                <ul>
                  <li>
                    <strong>Thời gian tham gia:</strong>
                    Từ ngày <strong>01/01/2025</strong> đến <strong>23h59 ngày 28/02/2025</strong>
                  </li>
                  <li>
                    <strong>Thời gian đóng cổng tham gia:</strong>
                    23h59 ngày 28/02/2025
                  </li>
                  <li>
                    <strong>Thời gian công bố kết quả:</strong>
                    Sau khi kết thúc chương trình, theo thông báo chính thức của Bamozo
                  </li>
                  <li>
                    <strong>Phạm vi áp dụng:</strong>
                    Khách hàng cư trú hợp pháp tại Việt Nam
                  </li>
                </ul>
              </div>
              <a
                  href="javascript:void(0)"
                  class="btn-view-rules"
                  @click.prevent="openRulesModal"
              >
                Xem chi tiết
              </a>
              <transition name="fade">
                <div
                    v-if="showRuleModal"
                    class="modal-backdrop"
                    @click.self="closeRulesModal"
                >
                  <div class="modal">
                    <div class="modal-body">
                      <div class="html-content" v-html="rulesHtml"></div>
                    </div>

                    <div class="modal-footer">
                      <a class="btn btn-orange-theme flex-fill"
                         @click="closeRulesModal">Đóng</a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </section>
        </div>
        <div class="col-12 col-md-6">
          <section class="mt-5" id="policy">
            <div class="title-section d-flex justify-content-center">
              <h1 class="title-lk">{{ $t('Chính sách') }}</h1>
            </div>
            <div class="list-policy mt-3">
              <div class="policy">
                <b>1. Mục đích thu thập thông tin:</b>
                <p>
                  Thông tin cá nhân của Quý khách được thu thập nhằm các mục đích sau:
                </p>
                <ul>
                  <li>Ghi nhận thông tin tham gia Chương trình minigame;</li>
                  <li>Xác định, thông báo và trao thưởng cho khách hàng trúng thưởng;</li>
                  <li>
                    Liên hệ với khách hàng để xác minh thông tin liên quan đến giải thưởng
                    (bao gồm nhưng không giới hạn thông tin đơn hàng mua sản phẩm Bamozo);
                  </li>
                  <li>Hỗ trợ chăm sóc khách hàng và xử lý các vấn đề phát sinh liên quan đến Chương trình;</li>
                  <li>Phục vụ công tác tổng hợp, thống kê và đánh giá hiệu quả Chương trình.</li>
                </ul>
              </div>
              <div class="policy">
                <b>2. Phạm vi thu thập thông tin:</b>
                <p>
                  Các thông tin cá nhân được thu thập bao gồm nhưng không giới hạn:
                </p>
                <ul>
                  <li>Họ và tên;</li>
                  <li>Số điện thoại;</li>
                  <li>Email;</li>
                  <li>
                    Các thông tin liên quan khác do Quý khách tự nguyện cung cấp
                    trong quá trình tham gia Chương trình (nếu có).
                  </li>
                </ul>
              </div>
              <div class="policy">
                <b>3. Phạm vi sử dụng và chia sẻ thông tin:</b>
                <ul>
                  <li>
                    Thông tin cá nhân của Quý khách chỉ được sử dụng trong phạm vi phục vụ
                    việc tổ chức, vận hành và triển khai Chương trình.
                  </li>
                  <li>
                    Thông tin có thể được chia sẻ cho các bên thứ ba có liên quan trực tiếp
                    đến việc hỗ trợ triển khai Chương trình (ví dụ: đơn vị vận hành kỹ thuật,
                    đơn vị giao nhận giải thưởng…), với điều kiện các bên này tuân thủ đầy đủ
                    các quy định pháp luật về bảo mật thông tin cá nhân.
                  </li>
                  <li>
                    Bamozo cam kết không sử dụng thông tin cá nhân của Quý khách cho mục đích
                    thương mại ngoài phạm vi Chương trình khi chưa có sự đồng ý của Quý khách,
                    trừ trường hợp pháp luật có quy định khác.
                  </li>
                </ul>
              </div>
              <a
                  href="javascript:void(0)"
                  class="btn-view-rules"
                  @click.prevent="openPolicyModal"
              >
                Xem chi tiết
              </a>
              <transition name="fade">
                <div
                    v-if="showPolicyModal"
                    class="modal-backdrop"
                    @click.self="closePolicyModal"
                >
                  <div class="modal">
                    <div class="modal-body">
                      <div class="html-content" v-html="policyHtml"></div>
                    </div>

                    <div class="modal-footer">
                      <a class="btn btn-orange-theme flex-fill"
                         @click="closePolicyModal">Đóng</a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (min-width: 768px) {
  #content-rule-and-policy .row {
    align-items: stretch;
  }

  #content-rule-and-policy #rules,
  #content-rule-and-policy #policy {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #content-rule-and-policy .list-rule,
  #content-rule-and-policy .list-policy {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  #content-rule-and-policy .list-rule .rule,
  #content-rule-and-policy .list-policy .policy {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  #content-rule-and-policy .btn-view-rules {
    margin-top: auto;
    font-weight: 600;
  }

  .modal-backdrop .modal {
    max-width: 800px !important;
  }
}

.html-content {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.html-content table {
  width: 100%;
  border-collapse: collapse;
}

.html-content td,
.html-content th {
  border: 1px solid #ddd;
  padding: 8px;
}

.html-content p {
  margin-bottom: 10px;
}

.list-rule, .list-policy {
  padding-left: 18px;
  margin: 0;
}

.rule, .policy {
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  position: relative;
}

.list-rule p, .list-policy p, .list-rule b, .list-policy b {
  color: #333;
  margin: 0;
}


.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-backdrop .modal {
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  background-color: #FFF;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 380px;
  height: auto;
  width: 90%;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.modal-body {
  font-size: 14px;
  max-height: 55vh;
  overflow-y: auto;
  line-height: 1.6;
  padding: 0;
  -webkit-overflow-scrolling: touch;
}

.modal-footer{
  padding: 2px;
}

</style>