<template>
  <div>
    <div class='pie'>
      <div class='pie__segment' style='--offset: 0; --value: 15; --bg: #db0a5b;'>test</div>
      <div class='pie__segment' style='--offset: 15; --value: 85; --bg: #2ecc71; --over50: 1;'></div>
    </div>

    <div class='pie'>
      <div class='pie__segment' style='--offset: 0; --value: 25; --bg: #db0a5b;'>test</div>
      <div class='pie__segment' style='--offset: 25; --value: 10; --bg: #22a7f0;'></div>
      <div class='pie__segment' style='--offset: 35; --value: 60; --bg: #2ecc71; --over50: 1;'></div>
      <div class='pie__segment' style='--offset: 95; --value: 5; --bg: #4d05e8;'></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductService from '@/services/ProductService.js'
export default {
  name: 'dashboard',
  components: {
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      const response = await ProductService.fetchProducts()
      this.products = response.data
    }
  }
}
</script>

<style scoped>
.pie {
  float: left;
  margin: 50px;
  border-radius: 100%;
  height: calc(var(--size, 200) * 1px);
  overflow: hidden;
  position: relative;
  width: calc(var(--size, 200) * 1px);
}
.pie__segment {
  --a: calc(var(--over50, 0) * -100%);
  --b: calc((1 + var(--over50, 0)) * 100%);
  --degrees: calc((var(--offset, 0) / 100) * 360);
  -webkit-clip-path: polygon(var(--a) var(--a), var(--b) var(--a), var(--b) var(--b), var(--a) var(--b));
  clip-path: polygon(var(--a) var(--a), var(--b) var(--a), var(--b) var(--b), var(--a) var(--b));
  height: 100%;
  position: absolute;
  transform: translate(0, -50%) rotate(90deg) rotate(calc(var(--degrees) * 1deg));
  transform-origin: 50% 100%;
  width: 100%;
  z-index: calc(1 + var(--over50));
}
.pie__segment:after,
.pie__segment:before {
  background: var(--bg, #e74c3c);
  content: '';
  height: 100%;
  position: absolute;
  width: 100%;
}
.pie__segment:before {
  --degrees: calc((var(--value, 45) / 100) * 360);
  transform: translate(0, 100%) rotate(calc(var(--degrees) * 1deg));
  transform-origin: 50% 0%;
}
.pie__segment:after {
  opacity: var(--over50, 0);
}
* {
  box-sizing: border-box;
}
</style>
