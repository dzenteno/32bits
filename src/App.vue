<template>
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand">32Bits</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link :to="{ name: 'inicio' }" class="nav-link">Inicio</router-link>
            <router-link :to="{ name: 'busqueda' }" class="nav-link">Búsqueda</router-link>
            <router-link :to="{ name: 'ventas' }" class="nav-link">Ventas</router-link>
            <router-link :to="{ name: 'total' }" class="nav-link">Total</router-link>
          </div>
        </div>
      </div>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");

.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter-active{
  transition-delay: 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
