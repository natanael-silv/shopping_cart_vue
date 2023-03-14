<script setup>
import { useCartStore } from '../store/CartStore.js'

const store = useCartStore()
</script>

<template>
  <div v-if="store.products.length === 0">Your cart is empty</div>
  <div v-for="product in store.products">
    <div v-if="product" class="flex items-center justify-between">
      <img :src="product.img" alt="" class="w-[50px] h-[50px] rounded-md mr-7" />
      <div class="text-xs text-slate-500">
        <p>{{ product.title }}</p>
        <div class="">
          ${{ product.price }} x {{ product.quantity }}
          <span class="font-bold text-black">${{ product.quantity * product.price }}</span>
        </div>
      </div>
      <button @click="store.removeProduct(product)" class="px-2">
        <ph-trash :size="20" weight="bold" color="hsl(220, 14%, 75%)" />
      </button>
    </div>
  </div>
</template>
