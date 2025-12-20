<script setup lang="ts">
import { home } from '@/routes';
import { Link } from '@inertiajs/vue3';
import ItemMenu from './ItemMenu.vue';
</script>
<template>
    <header id="headerBottom" class="navbar navbar-expand-md">
        <div class="container-xl">
            <div class="row flex-column flex-md-row flex-fill align-items-center">
                <div class="col">
                    <ul class="navbar-nav justify-content-center gap-4">
                        <li class="nav-item">
                            <Link :href="home()" class="nav-link">
                                <span class="nav-link-title">{{ $t('Trang chủ') }}</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link :href="home()" class="nav-link">
                                <span class="nav-link-title">{{ $t('Câu chuyện thương hiệu') }}</span>
                            </Link>
                        </li>
                        
                        <ItemMenu label="Các loại sản phẩm" :is_dropdown="true">
                            <div class="container-xl col-submenu">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col-3" v-for="j in [1,2,3,4]">
                                                <div class="box">
                                                    <div class="box-image">
                                                        <Link href="#" class="image-cover">
                                                            <img :src="`/assets/images/cat-menu-${j}.jpg`" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div class="box-content pt-3">
                                                        <Link href="#" class="cat-header">Làm sạch</Link>
                                                        <div class="accordion accordion-tabs mt-3" id="accordion-tabs">
                                                            <div class="accordion-item" v-for="i in [1,2]">
                                                                <div class="accordion-header">
                                                                    <a class="accordion-button collapsed" href="#">
                                                                        Sữa rửa mặt
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="accordion-item" v-for="i in [1,2]">
                                                                <div class="accordion-header">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse-${i}${j}-default`">
                                                                        Sữa rửa mặt
                                                                        <div class="accordion-button-toggle">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                                                                            <path d="M6 9l6 6l6 -6"></path>
                                                                        </svg>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                                <div :id="`collapse-${i}${j}-default`" class="accordion-collapse collapse" data-bs-parent="#accordion-tabs" style="">
                                                                    <div class="accordion-body">
                                                                        <ul class="submenu">
                                                                            <li class="item-submenu">
                                                                                <Link href="#">Sửa rửa mặc</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="box w-75 box-right">
                                            <div class="box-image">
                                                <Link href="#" class="image-cover">
                                                    <img src="/assets/images/img-submenu.jpg" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ItemMenu>

                        <li class="nav-item">
                            <Link :href="home()" class="nav-link">
                                <span class="nav-link-title">{{ $t('Ưu đãi') }}</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link :href="home()" class="nav-link">
                                <span class="nav-link-title">{{ $t('Tip làm đẹp') }}</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link :href="home()" class="nav-link">
                                <span class="nav-link-title">{{ $t('Liên hệ') }}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>