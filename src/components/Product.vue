<template>
  <div class="lg:grid grid-cols-2 mx-auto lg:mt-20 my-0 lg:w-[1000px] items-center">
    <!--     <img :src="img" alt="" class="lg:rounded-2xl" /> -->
    <Carousel />
    <section>
      <div class="px-10">
        <h2 class="font-extrabold text-3xl my-4">{{ title }}</h2>
        <p class="my-4 text-slate-500">
          {{ description }}
        </p>
        <span class="text-3xl">$</span>
        <span class="font-extrabold text-3xl pr-4">{{ price * quantity }}</span>
        <span class="text-xl text-halloween p-2">50%</span>
      </div>
      <div class="flex items-center flex-col px-10 lg:py-10 lg:flex-row">
        <div class="flex items-center p-2 justify-between my-5 bg-sorrow rounded-lg w-full">
          <button @click="product.quantity--">
            <ph-minus :size="16" class="text-halloween" weight="bold" />
          </button>

          <span class="font-bold">{{ quantity }}</span>
          <button @click="increment(product)">
            <ph-plus :size="16" class="text-halloween" weight="bold" />
          </button>
        </div>
        <button
          class="p-2 flex items-center justify-center bg-halloween rounded-lg w-full mt-2 shadow-halloween shadow-lg hover:bg-orange-400 lg:mx-2"
          @click="state.addProduct(product)"
        >
          <ph-shopping-cart :size="16" color="#ffff" weight="bold" /><span
            class="text-white pl-3 font-bold"
            >Add to cart</span
          >
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/CartStore.js'
// import function to register Swiper custom elements
import Carousel from '../components/Carousel.vue'
const state = useCartStore()

defineProps({
  title: String,
  description: String,
  price: Number,
  img: String,
  quantity: Number,
  product: Array
})

function increment(product) {
  product.quantity++
  console.log(product)
}
</script>
