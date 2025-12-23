<script setup lang="ts">
import AppShell from '@/components/AppShell.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppContent from '@/components/AppContent.vue';
import BottomNavigation from "@/components/BottomNavigation.vue";
import {useScreen} from '@/composables/useScreen';

interface Props {
  transparent?: boolean;
}

withDefaults(defineProps<Props>(), {
  transparent: false
})
const {isMobile} = useScreen()
</script>
<template>
  <AppShell>
    <AppHeader v-if="!isMobile"/>
    <AppContent>
      <slot/>
    </AppContent>
    <AppFooter/>
    <BottomNavigation v-if="isMobile"/>
  </AppShell>
</template>