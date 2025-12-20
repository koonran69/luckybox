<script setup lang="ts">
import { cn } from '@/lib/utils';
import '../../css/header.css';
import AppHeaderMain from '@/components/header/AppHeaderMain.vue';
import AppHeaderBottom from '@/components/header/AppHeaderBottom.vue';

interface Props {
    transparent?: boolean;
}

withDefaults(defineProps<Props>(), {
    transparent: false
})

</script>

<template>
    <div id="headerTop" class="header-topbar">{{ $t('Miễn phí ship trong nội thành TP HCM') }}</div>
    <div :class="cn({ 'has-transparent': transparent })">
        <AppHeaderMain />
        <AppHeaderBottom />
    </div>
</template>