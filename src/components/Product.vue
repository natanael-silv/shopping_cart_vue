<template>
  <img :src="img" alt="" />
  <div class="px-10">
    <h2 class="font-extrabold text-3xl my-4">{{ title }}</h2>
    <p class="my-4">
      {{ description }}
    </p>
    <span class="text-3xl">$</span>
    <span class="font-extrabold text-3xl pr-4">{{ price }}</span>
    <span class="text-xl text-halloween p-2">50%</span>
    <div class="flex items-center p-2 justify-between my-5 bg-sorrow rounded-md">
      <button @click="decrement">
        <ph-minus :size="16" class="text-halloween" weight="bold" />
      </button>

      <span class="font-bold">{{ count }}</span>
      <button @click="increment">
        <ph-plus :size="16" class="text-halloween" weight="bold" />
      </button>
    </div>
    <button
      class="p-2 flex items-center justify-center bg-halloween rounded-md w-[100%] mt-2 shadow-halloween shadow-lg"
    >
      <ph-shopping-cart :size="16" color="#ffff" weight="bold" /><span
        class="text-white pl-3 font-bold"
        >Add to cart</span
      >
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    price: Number,
    img: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>
