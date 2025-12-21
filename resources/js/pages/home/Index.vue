<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import Banner from '@/components/Banner.vue';
import ParticipationForm from '@/sections/home/ParticipationForm.vue'
import SolutionStructure from "@/sections/home/SolutionStructure.vue";
import {RewardData} from "@/types";
import ParticipationInstructions from "@/sections/home/ParticipationInstructions.vue";
import ProgramRules from "@/sections/home/ProgramRules.vue";

interface Props {
  genders: Record<string, string>
  rewards: RewardData[]
}
const props = defineProps<Props>();
</script>
<template>
    <AppLayout :transparent="true">
        <Banner />
        <ParticipationForm :genders="props.genders" />
        <SolutionStructure :rewards="props.rewards" />
        <ParticipationInstructions />
        <ProgramRules />
    </AppLayout>
</template>