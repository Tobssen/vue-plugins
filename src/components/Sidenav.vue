<template>
  <div id='mySidenav' class='sidenav'>
  <router-link to='/'>
    <img src='/images/dashboard.png' class='icon'>
            Dashboard
  </router-link>
  <a>Marketing Variants</a>
    <router-link to='/tarife'>
      <img src='/images/steuerfrei.png' class='icon'>
            Tarife
    </router-link>
    <router-link to='/hardware'>
      <img src='/images/server.png' class='icon'>
            Hardware
    </router-link>
  </div>
</template>

<script>
</script>

<style scoped>

.sidenav {
  font-family: Arial;
  text-align: left;
  position: fixed;
  z-index: 5;
  width: 300px;
  left: -302px;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255);
  padding: 20px 0;
  border-right: 2px solid rgb(206, 206, 206);
  transition: left 0.4s;
}

.sidenavhover {
  left: 0px;
  background-color: rgba(255, 255, 255);
  border-right: 2px solid rgb(184, 178, 183);
  transition: left .4s;
}

.sidenav a {
  top:0px;
  float: left;
  padding: 20px 80px 35px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #3d0b36;
  font-weight: bold;
  display: block;
  transition: 0.4s;
}

.sidenav a:hover {
  top:0px;
  float: left;
  padding: 20px 80px 35px 32px;
  text-decoration: none;
  font-size: 20px;
  color: rgb(216,25,191);

  font-weight: bold;
  display: block;
  transition: 0.4s;
}

#mySidenav{
  text-align: left;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
</style>
