<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { calcStartPercent, cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<{
  defaultValue?: number,
  modelValue?: number,
  class?: HTMLAttributes['class'],
  max?: number;
}>(), {
    defaultValue: 5,
    modelValue: 5,
    max: 5
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

function setRating(value: number) {
    modelValue.value = value;
}

const unique = Math.random().toString(36).substring(2, 9);

</script>

<template>
<div :class="cn('input-rating', props.class)">
    <svg v-for="i in max" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="setRating(i)">
        <defs>
            <linearGradient :id="'star-fill' + i + unique">
                <stop :offset="calcStartPercent(modelValue, i) + '%'" stop-color="#FFCB00"></stop>
                <stop :offset="calcStartPercent(modelValue, i) + '%'" stop-color="#e5e7eb"></stop>
            </linearGradient>
        </defs>
        <path d="M12.5 0.780273L15.3064 9.41756H24.3882L17.0409 14.7557L19.8473 23.393L12.5 18.0548L5.15268 23.393L7.95911 14.7557L0.611794 9.41756H9.69357L12.5 0.780273Z" :fill="'url(#star-fill'+i+unique+')'"/>
    </svg>
</div>
</template>
