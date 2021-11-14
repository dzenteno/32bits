<template>
  <div>
    <div class="container fs-5">
      <div class="row justify-content-center">
        <div class="col-3">
          <p>Total ventas: {{ totalVentas }}</p>
        </div>
        <div class="col-3">
          <p>Monto total en ventas: ${{ montoTotal }}</p>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, i) in totalVendidos" :key="i">
          <th scope="row">{{ juego.codigo }}</th>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <ol class="lista-juegos justify-content-center">
      <li v-for="(juego, i) in totalVendidos" :key="i">
        <span>
          {{ juego.codigo }} | {{ juego.nombre }} | Stock: {{ juego.stock }} |
          ${{ juego.precio }}
        </span>
      </li>
    </ol> -->
  </div>
</template>
<script>
// import {mapState} from 'vuex'
export default {
  computed: {
    totalVendidos() {
      return this.$store.getters.totalVendidos;
    },
    totalVentas() {
      return this.$store.getters.totalVentas;
    },
    montoTotal() {
      return this.$store.getters.montoTotal;
    },
  },
};
</script>

<style scoped>
.table {
  max-width: 50rem;
  margin: auto;
}
</style>