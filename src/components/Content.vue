<template>
  <div id="content">
    <div id="text">
       <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

#content {
  left: 0px;
  text-align: left;
}

#text{
  top:0px;
  left: 0px;
  margin-top: 100px;
}
</style>
