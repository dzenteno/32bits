<template>
  <div>
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
        <tr v-for="(juego, i) in juegosConStock" :key="i">
          <th scope="row" :style="{ backgroundColor: juego.color }">{{ juego.codigo }}</th>
          <td :style="{ backgroundColor: juego.color }">{{ juego.nombre }}</td>
          <td :style="{ backgroundColor: juego.color }">{{ juego.stock }}</td>
          <td :style="{ backgroundColor: juego.color }">${{ juego.precio }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <ol class="lista-juegos justify-content-center">
      <li v-for="(juego, i) in juegosConStock" :key="i">
        <p :style="{ backgroundColor: juego.color }">
          {{ juego.codigo }} | {{ juego.nombre }} | Stock: {{ juego.stock }} |
          ${{ juego.precio }}
        </p>
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