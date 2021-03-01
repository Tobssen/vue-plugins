<template>
  <div class='header'>
    <span id='burger' class='navtext' v-on:click='toggleNav'>&#9776;   </span>
    <span class='navtext'> &nbsp; &nbsp; &nbsp; {{ currentRouteName }} </span>
  </div>
</template>

<style scoped>
.header {
  font-family: Arial;
  z-index: 4;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  text-align: left;
  padding: 20px;
  background: #ea0a8e;
  border-bottom: 1px solid #d5d5d5;
}

.navtext {
    transition: margin-left .4s;
    font-size:26px;
    cursor:pointer;
    color:white;
    text-align: left;
}
</style>
<script>
export default {
  components: {
  },
  methods: {
    openNav: function () {
      document.getElementById('mySidenav').style.width = '300px'
      document.getElementById('main').style.marginLeft = '300px'
      document.getElementById('burger').style.marginLeft = '300px'
      document.getElementById('mySidenav').classList.toggle('sidenavhover')
    },
    closeNav: function () {
      // document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0'
      document.getElementById('burger').style.marginLeft = '0'
      document.getElementById('mySidenav').classList.toggle('sidenavhover')
    },
    toggleNav: function () {
      if (this.navExpanded) {
        this.closeNav()
        this.navExpanded = false
      } else {
        this.navExpanded = true
        this.openNav()
      }
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  },
  data () {
    return {
      navExpanded: false
    }
  }
}
</script>
