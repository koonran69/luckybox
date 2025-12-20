<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

interface BreadcrumbItemType {
    label: string;
    url?: string;
}

defineProps<{
    breadcrumbs: BreadcrumbItemType[];
}>();

</script>

<template>
<div class="page-header d-print-none">
    <div class="row g-2 align-items-center">
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <template v-for="(item, index) in breadcrumbs">
                        <li class="breadcrumb-item" v-if="index !== breadcrumbs.length - 1">

                            <Link v-if="item.url" :href="item.url">{{ item.label }}</Link>
                            <span v-else>{{ item.label }}</span>
                        </li>
                        <li v-else class="breadcrumb-item active" aria-current="page">{{ item.label }}</li>
                    </template>

                </ol>
            </nav>
        </div>
    </div>
</div>
</template>
