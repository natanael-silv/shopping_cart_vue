<script setup></script>

<template>
  <main v-for="product in products">
    <Product  :title="product.title" :description="product.description" :price="product.price" :img="product.img"/>
  </main>
</template>

<script>
import Product from '../components/Product.vue'
const products = [
  {
    title: 'Fall Limited Edition Sneakers',
    description: '  These low-profile sneakers are your perfect casual weat companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
    price: 125.00,
    img: '/assets/images/image-product-1.jpg',
  }
]
export default {
  name: 'Home',
  components: {
    Product
  },

  data() {
    return {
      products: products
    }
  },
 
}
</script>
