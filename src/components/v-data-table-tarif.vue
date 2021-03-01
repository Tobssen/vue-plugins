<template >
  <div v-if="product.type=== 'tarif'" class='product-list'>

      <tr>
        <td class='entry'><router-link :to="{name: 'Details', params: { id: product.id } }">
                              <a>{{ product.name }}</a>
                            </router-link></td>
        <td class='entry'>{{ product.download }}</td>
        <td class='entry'>{{ product.upload }}</td>
        <td class='entry'>{{ product.price }}</td>
        <td class='entry'> <img class='product-img' :src='product.image'/></td>
      </tr>
  </div>
</template>

<script>
export default {
  methods: {
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-list {
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  position: relative;
}
td{
  border-collapse: collapse;
  font-weight: normal;
}
.entry{
  border-bottom: 1px solid #c0c0c0;
  text-align: center;
  width: 200px;
  border-left: 1px solid #c0c0c0;
  border-right: 1px solid #c0c0c0;
}
.product-img {
  width: 30px;
  height: 30px;
}
</style>
