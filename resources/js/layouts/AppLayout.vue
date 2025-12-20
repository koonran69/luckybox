<script setup lang="ts">
import AppSimpleLayout from './app/AppSimpleLayout.vue';

interface Props {
    transparent?: boolean;
}

withDefaults(defineProps<Props>(), {
    transparent: false
})

</script>


<template>
    <AppSimpleLayout :transparent="transparent">
        <slot />
    </AppSimpleLayout>
</template>