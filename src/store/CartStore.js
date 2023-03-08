import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ products: [] }),

  actions: {
    addProduct(product) {
      this.products.push(product);
      console.log(this.products)
    },
    removeProduct(product) {
      this.products.splice(this.products.indexOf(product))
    }
  }
})
