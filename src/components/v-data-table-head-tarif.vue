<template >
  <div class='product-list'>

    <thead class='tg'>
      <tr>
        <th class='entry'>{{ product.name }}</th>
        <th class='entry'>{{ product.download }}</th>
        <th class='entry'>{{ product.upload }}</th>
        <th class='entry'>{{ product.price }}</th>
        <th class='entry'>{{product.image}}</th>
      </tr>
    </thead>
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
.entry{
  border: 1px solid #c0c0c0;
  text-align: center;
  width: 200px;
}
tr{
  border-bottom: 3px solid #c0c0c0;
  border-top: 2px solid #c0c0c0;
}
.product-img {
  width: 50px;
  height: 50px;
}
</style>
