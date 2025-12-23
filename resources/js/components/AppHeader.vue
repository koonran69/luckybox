<script setup lang="ts">
import { home } from '@/routes';
import { Link } from '@inertiajs/vue3';
import ItemMenu from './ItemMenu.vue';
import {asset} from "@/lib/utils";
</script>
<template>
  <header id="headerBottom" class="navbar navbar-expand-md">
    <div class="container-xl">
      <div class="row flex-column flex-md-row flex-fill align-items-center">
        <div class="col">
          <ul class="navbar-nav justify-content-center gap-4">
            <li class="nav-item">
              <a href="/" class="nav-link">
                <span class="nav-link-title"><img :src="asset('/assets/images/logo.png')" class="header-logo mb-3" /></span>
              </a>
            </li>

            <li class="nav-item">
              <a href="/#guide" class="nav-link">
                <span class="nav-link-title">{{ $t('Hướng dẫn') }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/#rules" class="nav-link">
                <span class="nav-link-title">{{ $t('Thể lệ') }}</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/#policy" class="nav-link">
                <span class="nav-link-title">{{ $t('Chính sách') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>