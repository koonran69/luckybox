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
    <Banner/>
    <ParticipationForm :genders="props.genders"/>
    <section class="mt-5" id="play-game-now">
      <div class="container-md">
        <div class="row g-5">
          <div class="col-12 col-md-6 order-md-2">
            <SolutionStructure :rewards="props.rewards"/>
          </div>
          <div class="col-12 col-md-6 order-md-1">
            <ParticipationInstructions/>
          </div>
        </div>
      </div>
    </section>
    <ProgramRules/>
  </AppLayout>
</template>