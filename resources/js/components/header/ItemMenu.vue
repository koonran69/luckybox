<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ref } from 'vue';

interface Props {
    label: string;
    href?: string;
    class?: HTMLAttributes['class'];
    is_dropdown?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    href: '#',
    is_dropdown: false,
});

const isOpen = ref(false);

const onMouseEnter = () => {
  if (props.is_dropdown) isOpen.value = true;
};

const onMouseLeave = () => {
  if (props.is_dropdown) isOpen.value = false;
};

</script>
<template>
<li :class="cn('nav-item dropdown mega-dropdown', props.class)" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <Link class="nav-link dropdown-toggle" :href="props.href">
        <span class="nav-link-title">{{ props.label }}</span>
    </Link>
    <template v-if="props.is_dropdown">
        <transition name="slide-down">
            <div class="mega-dropdown-menu" v-if="isOpen">
                <slot />
            </div>
        </transition>
    </template>
</li>
</template>