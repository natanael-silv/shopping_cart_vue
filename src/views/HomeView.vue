<template>
  <main v-for="product in products">
    <Product
      :title="product.title"
      :description="product.description"
      :price="product.price"
      :img="product.img"
      :quantity="product.quantity"
      :product="product"
    />
  
  </main>

</template>

<script setup>
import Product from '../components/Product.vue'

import { reactive } from 'vue'

const products = reactive([
  {
    title: 'Fall Limited Edition Sneakers',
    description:
      '  These low-profile sneakers are your perfect casual weat companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
    price: 125.0,
    img: '/assets/images/image-product-1.jpg',
    quantity: 1
  }
])
</script>
