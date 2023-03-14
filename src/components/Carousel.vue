<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const slides = [
      { id: 1, imageUrl: '/assets/images/image-product-1.jpg' },
      { id: 2, imageUrl: '/assets/images/image-product-2.jpg' },
      { id: 3, imageUrl: '/assets/images/image-product-3.jpg' }
    ]

    const currentIndex = ref(0)
    const handleSlideChange = (index) => {
      currentIndex.value = index
    }
    return {
      slides,
      currentIndex,
      handleSlideChange
    }
  }
})
</script>

<template>
  <div class="carousel">
    <div class="slides">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="{ active: index === currentIndex }"
      >
        <img :src="slide.imageUrl" alt="" />
      </div>
    </div>

    <div class="bullet-controllers">
      <button
        class="bullet-controller"
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="{ active: index === currentIndex }"
        @click="handleSlideChange(index)"
      >
        <img :src="slide.imageUrl" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 500px;
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bullet-controllers {
  display: none;
}
@media (min-width: 1024px) {
  .bullet-controllers {
    display: flex;
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
    column-gap: 20px;
  }
  .slides {
    border-radius: 15px;
    overflow: hidden;
  }
}

.bullet-controller {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
}

.bullet-controller.active {
  outline: 2px solid hsl(26, 100%, 55%);
}

.bullet-controller.active img {
  opacity: 0.4;
}
</style>
