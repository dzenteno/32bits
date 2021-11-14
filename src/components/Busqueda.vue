<template>
  <div class="text-center">
    <h2>Busqueda de Juegos</h2>
    <ul v-if="busquedaPorCod != undefined">
      <li v-for="(juego, i) in juegosDisponiblesPorCod" :key="i">
        <span class="fw-bold fs-5">
          {{ juego.codigo }} | {{ juego.nombre }} | Stock: {{ juego.stock }} |
          ${{ juego.precio }}
        </span>
      </li>
    </ul>
    <input type="text" v-model="busquedaPorCod" />
    <div class="container">
      <div class="row justify-content-center fs-5">
        <div class="col-3">
          <p>Cantidad de Productos con Stock: {{ juegosConStock.length }}</p>      
        </div>
        <div class="col-3">
          <p>Cantidad de Productos totales: {{ totalStock }}</p>      
        </div>
      </div>
    </div>
    <lista-juegos></lista-juegos>
  </div>
</template>
<script>
// import {mapState} from 'vuex'
import ListaJuegos from "./ListaJuegos.vue";

export default {
  components: {
    ListaJuegos,
  },

  data() {
    return {
      busquedaPorCod: "",
    };
  },

  computed: {
    totalStock() {
      return this.$store.getters.totalStock;
    },

    juegosConStock() {
      return this.$store.getters.juegosConStock;
    },

    juegosDisponiblesPorCod() {
      return this.$store.getters.juegosDisponiblesPorCod(this.busquedaPorCod);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.lista-juegos {
  max-width: 100%;
  display: inline-block;
}
</style>