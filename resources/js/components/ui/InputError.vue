<script setup lang="ts">
defineProps<{
    message?: string;
}>();
</script>

<template>
    <div class="invalid-feedback msg-err-input" v-show="message">
        {{ message }}
    </div>
</template>
