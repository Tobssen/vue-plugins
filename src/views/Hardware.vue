<template>
  <div class='products'>

    <table>
    <TableHead/>
    <Table
      v-for='product in products'
      :id='product.id'
      :key='product.id'
      :product='product'
    />
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/v-data-table-hardware.vue'
import TableHead from '@/components/v-data-table-head-hardware.vue'
import ProductService from '@/services/ProductService.js'

export default {
  name: 'hardware',
  components: {
    Table,
    TableHead
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
.products {
  font-family: Arial;
  display: flex;
  flex-direction: column;
  align-items: center;
}
table {
  border-collapse: collapse;
  border: 1px solid #c0c0c0;
}
</style>
