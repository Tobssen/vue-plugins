<template>
<div>
  <Sidenav></Sidenav>
  <Footer></Footer>

  <div id='main'>
    <Header></Header>
    <Content>
       <router-view />
    </Content>
  </div>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Sidenav from '@/components/Sidenav.vue'

export default {
  components: {
    Footer,
    Header,
    Content,
    Sidenav
  },
  methods: { },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  left:0px;
  top:0px;
  text-align: left;
  transition: margin-left .4s;
  padding: 16px;
}
</style>
