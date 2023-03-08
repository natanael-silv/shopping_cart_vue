<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './store/CartStore.js'
import Bag from '../src/components/Bag.vue'

const store = useCartStore()
const isBag = ref(false)
function productsCount() {
  const items = store.products
  const totalCount = items.reduce(function (acc, value) {
    const total = acc + value.quantity
    return total
  }, 0)
  return totalCount
}
function showBag() {
  isBag.value = !isBag.value
}
</script>

<template>
  <header class="relative">
    <nav class="flex justify-between items-center py-5 px-10">
      <div class="flex items-center">
        <span class="pr-2">
          <ph-list :size="32" color="#0a0505" />
        </span>
        <h1 class="font-extrabold text-2xl">Sneakers</h1>
      </div>
      <ul class="text-[#] hidden md:flex">
        <li class="px-3"><a>Collections</a></li>
        <li class="px-3"><a>Men</a></li>
        <li class="px-3"><a>Women</a></li>
        <li class="px-3"><a>About</a></li>
        <li class="px-3"><a>Contact</a></li>
      </ul>
      <div class="relative">
        <button @click="showBag()">
          <ph-shopping-cart :size="32" color="#0a0505" />
        </button>
        <span
          class="absolute px-3 py-1 bg-halloween text-white rounded-xl bottom-6 left-4"
          v-if="store.products.length > 0"
          >{{ productsCount() }}</span
        >
      </div>
    </nav>
    <div v-if="isBag" class="w-full flex justify-center">
      <div class="top-24 absolute bg-white px-12 py-10 rounded-lg w-[300px] flex justify-center">
        <Bag />
      </div>
    </div>
  </header>

  <RouterView />
</template>
