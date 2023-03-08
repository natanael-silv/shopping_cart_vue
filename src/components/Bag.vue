<script setup>
import { useCartStore } from '../store/CartStore.js'

const store = useCartStore()
</script>

<template>
  <div v-if="store.products.length === 0">Your cart is empty</div>
  <div v-for="product in store.products">
    <div v-if="product" class="flex">
      <img :src="product.img" alt="" class="w-[50px] h-[50px] rounded-md mr-7" />
      <p>{{ product.title }}</p>
      <button @click="store.removeProduct(product)">X</button>
    </div>
  </div>
</template>
