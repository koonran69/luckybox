<script setup lang="ts">
import AppShell from '@/components/AppShell.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppContent from '@/components/AppContent.vue';
import BottomNavigation from "@/components/BottomNavigation.vue";

interface Props {
    transparent?: boolean;
}

withDefaults(defineProps<Props>(), {
    transparent: false
})

</script>
<template>
    <AppShell>
        <AppContent>
            <slot />
        </AppContent>
        <AppFooter />
      <BottomNavigation />
    </AppShell>
</template>