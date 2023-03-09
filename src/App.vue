<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './store/CartStore.js'
import Bag from '../src/components/Bag.vue'

const store = useCartStore()
const isBag = ref(false)
const isActive = ref(false)
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
    <nav class="flex justify-between items-center py-5 px-10 border-b-[1px] border-stone-200">
      <div class="flex items-center">
        <button @click="isActive = !isActive" class="pr-2 md:hidden">
          <ph-list :size="32" color="#0a0505" />
        </button>
        <img src="/assets/images/logo.svg" alt="" />
      </div>
      <ul
        class="md:!flex hidden md:relative top-0 left-0 md:h-full bg-white z-10"
        :class="{ ['absolute w-[50%] h-[100vh] !block']: isActive }"
      >
        <button @click="isActive = !isActive" class="px-3 py-12 md:hidden">X</button>
        <li class="px-3 py-1 md:font-normal font-bold cursor-pointer">
          <a
            class="relative after:content-[''] after:bg-halloween after:h-[3px] after:w-[0%] hover:after:w-full after:duration-300 after:left-0 after:bottom-[-5px] after:absolute"
            >Collections</a
          >
        </li>
        <li class="px-3 py-1 md:font-normal font-bold cursor-pointer">
          <a
            class="relative after:content-[''] after:bg-halloween after:h-[3px] after:w-[0%] hover:after:w-full after:duration-300 after:left-0 after:bottom-[-5px] after:absolute"
            >Men</a
          >
        </li>
        <li class="px-3 py-1 md:font-normal font-bold cursor-pointer">
          <a
            class="relative after:content-[''] after:bg-halloween after:h-[3px] after:w-[0%] hover:after:w-full after:duration-300 after:left-0 after:bottom-[-5px] after:absolute"
            >Women</a
          >
        </li>
        <li class="px-3 py-1 md:font-normal font-bold cursor-pointer">
          <a
            class="relative after:content-[''] after:bg-halloween after:h-[3px] after:w-[0%] hover:after:w-full after:duration-300 after:left-0 after:bottom-[-5px] after:absolute"
            >About</a
          >
        </li>
        <li class="px-3 py-1 md:font-normal font-bold cursor-pointer">
          <a
            class="relative after:content-[''] after:bg-halloween after:h-[3px] after:w-[0%] hover:after:w-full after:duration-300 after:left-0 after:bottom-[-5px] after:absolute"
            >Contact</a
          >
        </li>
      </ul>

      <div class="relative">
        <button @click="showBag()">
          <ph-shopping-cart :size="32" color="#0a0505" />
        </button>
        <span
          class="absolute px-3 py-[1px] bg-halloween text-white rounded-xl bottom-6 left-4 text-sm"
          v-if="store.products.length > 0"
          >{{ productsCount() }}</span
        >
      </div>
    </nav>
    <div v-if="isBag" class="w-full flex justify-center items-center">
      <div
        class="top-24 absolute bg-white px-12 py-10 rounded-lg w-[350px] flex justify-center md:right-2 shadow-lg"
      >
        <Bag />
      </div>
    </div>
  </header>

  <RouterView />
</template>
