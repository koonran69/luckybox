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
    <div class="page-header d-print-none m-0">
        <div class="row align-items-center">
            <div class="col m-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb m-0 p-0 d-flex align-items-center">
                        <template v-for="(item, index) in breadcrumbs" :key="index">
                            <li class="breadcrumb-item d-flex align-items-center">
                                <Link v-if="item.label === 'icon-home' && item.url" :href="item.url" class="text-decoration-none">
                                    <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2.672l-5.331 5.331v-2.133h-4.265v6.398l-3.755 3.755 0.754 0.754 12.597-12.597 12.597 12.597 0.754-0.754-13.351-13.351zM7.47 6.937h2.132v2.132l-2.133 2.133v-4.265z" fill="#000000"/>
                                        <path d="M6.404 16.533v12.795h7.464v-7.464h4.265v7.464h7.464v-12.795l-9.596-9.596-9.596 9.596zM24.53 28.262h-5.331v-7.464h-6.398v7.464h-5.331v-11.287l8.53-8.53 8.53 8.53v11.287z" fill="#000000"/>
                                    </svg>
                                </Link>

                                <Link v-else-if="item.url" :href="item.url" class="text-decoration-none">{{ item.label }}</Link>
                                <span v-else>{{ item.label }}</span>

                                <svg v-if="index < breadcrumbs.length - 1" width="12" height="20" viewBox="0 0 12 20" class="mx-1">
                                    <text x="0" y="15" fill="#000" font-size="20" font-family="Helvetica">»</text>
                                </svg>
                            </li>
                        </template>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.breadcrumb a {
    font-size: 16px;
    display: inline-flex;
    align-items: center;
}
.breadcrumb-item+.breadcrumb-item{
    padding: 0;
}

.breadcrumb-item svg{
    fill: var(--color-blue-theme);
}

.breadcrumb-item+.breadcrumb-item::before{
    display: none;
}
</style>

