<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="py-5 px-10">
    <nav class="flex justify-between items-center">
      <div class="flex items-center">
        <span class="pr-2">
          <ph-list :size="32" color="#0a0505" />
        </span>
        <h1 class="font-extrabold text-">Sneakers</h1>
      </div>
      <ul class="text-[#] hidden">
        <li class="px-3"><a>Collections</a></li>
        <li class="px-3"><a>Men</a></li>
        <li class="px-3"><a>Women</a></li>
        <li class="px-3"><a>About</a></li>
        <li class="px-3"><a>Contact</a></li>
      </ul>
      <button>
        <ph-shopping-cart :size="32" color="#0a0505" />
      </button>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
