<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Banner from '@/components/Banner.vue';
import ParticipationForm from '@/sections/home/ParticipationForm.vue'

interface Props {
  genders: Record<string, string>
}
const props = defineProps<Props>();
</script>
<template>
    <AppLayout :transparent="true">
        <Banner />
        <ParticipationForm :genders="props.genders" />
    </AppLayout>
</template>