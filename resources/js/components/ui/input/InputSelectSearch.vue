<script setup lang="ts">
import { onMounted, ref, watch, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useDebounceFn, useVModel } from '@vueuse/core'
import axios from 'axios'

interface Option {
  id: string | number
  text: string
}

const props = withDefaults(defineProps<{
    name?: string | null
    apiUrl: string
    defaultValue?: string | number
    modelValue?: string | number | null
    class?: HTMLAttributes['class'],
    error?: string,
    isDefault?: boolean
    displayText?: string
    placeholder?: string
}>(), {
    name: null,
    isDefault: false,
    placeholder: '',
    displayText: ''
});

const inputRef = ref<HTMLInputElement | null>(null)
const displayText = ref<string>(props.displayText);
const results = ref<Option[]>([])
const showDropdown = ref(false)
const loading = ref(false)
const isSelecting = ref(false)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

function onFocus() {
  showDropdown.value = true
}

function onBlur() {
    setTimeout(() => {
        showDropdown.value = false
    }, 150)
}

function selectItem(item: Option) {
    isSelecting.value = true
    displayText.value = item.text
    emits('update:modelValue', item.id)
    showDropdown.value = false
    inputRef.value?.blur()
    setTimeout(() => (isSelecting.value = false), 0)
}

const fetchResults = useDebounceFn(async (term: string) => {

    loading.value = true
    try {
        const { data } = await axios.get(props.apiUrl, { params: { term: term } })
        results.value = data.results;
    } finally {
        loading.value = false
    }
}, 400)

watch(displayText, (newValue) => {
    if (!isSelecting.value) {
        fetchResults(newValue)
    }
})

watch(() => props.apiUrl, (newValue) => {
    isSelecting.value = true
    displayText.value = ''  
    fetchResults('')
    setTimeout(() => (isSelecting.value = false), 0)
})

onMounted(() => {
    if(props.isDefault == true || props.modelValue)
    {
        fetchResults('').then(() => {
            if(props.modelValue)
            {
                const selected = results.value.find(r => r.id === props.modelValue)
                if (selected) {
                    displayText.value = selected.text
                }
            }
        })
    }
})
</script>
<template>
    <div class="input-search-select">
        <div class="input-icon">
            <input type="text" v-model="displayText"
                data-slot="input"
                :class="cn('form-control', props.class, props.error ? 'is-invalid' : '')"
                @focus="onFocus" @blur="onBlur" ref="inputRef"
                :placeholder="$t(props.placeholder)"
            >
            <span class="input-icon-addon">
                <div class="spinner-border spinner-border-sm text-secondary" role="status" v-if="loading"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none" v-else>
                    <path d="M7.69762 6.81415L13.4129 1.09696C13.6631 0.846093 13.6631 0.43965 13.4129 0.18815C13.1627 -0.0627166 12.7562 -0.0627166 12.506 0.18815L7.2442 5.45186L1.98239 0.188783C1.73216 -0.0620836 1.32571 -0.0620836 1.07485 0.188783C0.824614 0.439649 0.824614 0.846726 1.07485 1.09759L6.79013 6.81478C7.03778 7.06185 7.45061 7.06185 7.69762 6.81415Z" fill="#5A5854"/>
                </svg>
            </span>
        </div>
        <input type="hidden" :value="modelValue" :name="props.name ?? undefined" class="form-control" />
        <div class="search-result">
            <div class="dropdown-menu show" v-if="showDropdown">
                <div class="dropdown-item" v-for="item in results" @mousedown.prevent="selectItem(item)" v-if="results.length">
                    {{ item.text }}
                </div>
                <div class="dropdown-item" v-else>{{ $t('Không tìm thấy') }}</div>
            </div>
        </div>
    </div>
</template>