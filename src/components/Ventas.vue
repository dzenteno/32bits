<template>
  <div>
    <p class="text-center fs-5">
      Cantidad de Productos con Stock: {{ juegosConStock.length }}
    </p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Venta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, i) in juegosConStock" :key="i">
          <th scope="row">{{ juego.codigo }}</th>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td><button class="btn btn-secondary p-1" @click="vender(juego)">Vender</button></td>
        </tr>
      </tbody>
    </table>
    <!-- <ol class="lista-juegos justify-content-center">
      <li v-for="(juego, i) in juegosConStock" :key="i">
        <span>
          {{ juego.codigo }} | {{ juego.nombre }} | Stock: {{ juego.stock }} |
          ${{ juego.precio }}
        </span>
        <button class="btn btn-secondary p-1" @click="vender(juego)">Vender</button>
      </li>
    </ol> -->
  </div>
</template>

<script>
export default {
  computed: {
    juegosConStock() {
      return this.$store.getters.juegosConStock;
    },
  },
  methods: {
    procesarVenta(juego) {
      this.$store.commit("procesarVenta", juego);
    },

    setJuego(juego_vendido){
        this.$store.commit("setJuego",juego_vendido);
    },

    vender(juego_vendido){
      this.$store.dispatch('vender', juego_vendido);
    }
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.table {
  max-width: 50rem;
  margin: auto;
}
</style>