<template>
  <div v-if='place' id='detail'>
    <h1> {{ place.name }} </h1>
    <p> released since {{ place.date }} </p>
    <p> {{ place.description }} </p>
    <span> ID #{{ $route.params.id}}</span>
  </div>
</template>

<script>
import ProductService from '../services/ProductService.js'
// @ is an alias to /src
export default {
  props: ['id'],
  data () {
    return {
      place: null
    }
  },
  created () {
    // fetch place data by id
    ProductService.fetchProduct(this.id)
      .then(response => {
        this.place = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>

#detail{
  font-family: Arial;
  }

</style>