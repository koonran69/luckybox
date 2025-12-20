<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useDebounceFn, useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<{
  defaultValue?: number,
  modelValue?: number,
  class?: HTMLAttributes['class'],
  max?: number;
}>(), {
    defaultValue: 1,
    modelValue: 1
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: number): void
  (e: 'change', payload: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const emitChange = useDebounceFn(() => {
  emits('change', modelValue.value)
}, 400)

function increaseQty()
{
    modelValue.value++;
    emitChange();
}

function decreaseQty()
{
    if(modelValue.value <= 1)
    {
        modelValue.value = 1;
    }else {
        modelValue.value--;
        emitChange();
    }
}

</script>

<template>
<div :class="cn('input-quantity', props.class)">
    <div class="decrease-qty" @click="decreaseQty">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="3" viewBox="0 0 13 3" fill="none">
            <path d="M-4.37114e-08 1.03284C-6.78453e-08 1.58496 0.5616 2.03284 1.2548 2.03284L11.7452 2.03284C12.438 2.03284 13 1.58527 13 1.03284C13 0.480717 12.4384 0.0328369 11.7452 0.0328369L1.2548 0.0328364C0.562 0.0328364 -1.95635e-08 0.480397 -4.37114e-08 1.03284Z" fill="#5A5854"/>
        </svg>
    </div>
    <div class="qty-number">{{ modelValue }}</div>
    <div class="increase-qty" @click="increaseQty">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
            <path d="M6.5 13.5328C7.05212 13.5328 7.5 12.9712 7.5 12.278V1.78764C7.5 1.09484 7.05244 0.532837 6.5 0.532837C5.94788 0.532837 5.5 1.09444 5.5 1.78764V12.278C5.5 12.9708 5.94756 13.5328 6.5 13.5328Z" fill="#5A5854"/>
            <path d="M-4.37114e-08 7.03284C-6.78453e-08 7.58496 0.5616 8.03284 1.2548 8.03284L11.7452 8.03284C12.438 8.03284 13 7.58527 13 7.03284C13 6.48072 12.4384 6.03284 11.7452 6.03284L1.2548 6.03284C0.562 6.03284 -1.95635e-08 6.4804 -4.37114e-08 7.03284Z" fill="#5A5854"/>
        </svg>
    </div>
</div>
</template>
<style scoped>
.checkout-info-layout .decrease-qty svg, .checkout-info-layout .increase-qty svg {
    transform: scale(0.7); /* nhỏ 70% */
}
.checkout-info-layout .input-quantity .qty-number{
    font-size: 14px !important;
}
.checkout-info-layout .input-quantity{
    width: 76px;
    height: 25px;
}

.offcanvas-cart.input-quantity {
    display: flex;
    width: 132px;
    height: 51px;
    border: 1px solid var(--color-blue-theme);
    border-radius: 5px;
    align-items: normal;
    overflow: hidden;
}

.offcanvas-cart.input-quantity > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}

/* border dọc */
.offcanvas-cart.input-quantity .decrease-qty,
.offcanvas-cart.input-quantity .qty-number {
    border-right: 1px solid var(--color-blue-theme);
}

.offcanvas-cart.input-quantity .qty-number {
    font-weight: 600;
    font-size: 14px;
    min-width: 40px;
}

.offcanvas-cart.input-quantity .decrease-qty,
.offcanvas-cart.input-quantity .increase-qty {
    cursor: pointer;
    transition: background 0.2s ease;
}

.offcanvas-cart.input-quantity .decrease-qty:hover,
.offcanvas-cart.input-quantity .increase-qty:hover {
    background: rgba(0, 0, 0, 0.04);
}

</style>
