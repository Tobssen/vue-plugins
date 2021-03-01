<template>
  <div class="products">
    <PlaceCard
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :place="product"
      
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PlaceCard from "@/components/PlaceCard.vue";
import ProductService from "@/services/ProductService.js";

export default {
  name: "products",
  components: {
    PlaceCard
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await ProductService.fetchProducts();
      this.products = response.data;
    }
  }
};
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

