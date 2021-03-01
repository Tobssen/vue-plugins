<template >
  <div class='product-list'>

    <thead>
      <tr>
        <th class='entry'>Name</th>
        <th class='entry'>Release Date</th>
        <th class='entry'>Price</th>
        <th class='entry'>Picture</th>
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
  position: relative;
}
.entry{
  border: 1px solid #c0c0c0;
  text-align: center;
  width: 220px;
  border-left: 1px solid #c0c0c0;
  border-collapse: collapse;
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
