import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: '0001',
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true
      },
      {
        codigo: '0002',
        nombre: 'Fifa 21',
        stock: 100,
        precio: 25000,
        color: 'blue',
        destacado: false
      },
      {
        codigo: '0003',
        nombre: 'Gears of War 4',
        stock: 100,
        precio: 15000,
        color: 'green',
        destacado: true
      },
      {
        codigo: '0004',
        nombre: 'Mario Tennis Aces',
        stock: 100,
        precio: 35000,
        color: 'yellow',
        destacado: false
      },
      {
        codigo: '0005',
        nombre: 'Bloodborne',
        stock: 100,
        precio: 10000,
        color: 'blue',
        destacado: false
      },
      {
        codigo: '0006',
        nombre: 'Forza Horizon 4',
        stock: 100,
        precio: 20000,
        color: 'red',
        destacado: true
      },
    ],
    vendidos:[ ],
    totalVentas: 0,
    montoTotal: 0,
  },
  getters: {
    juegosConStock: state => {
      return state.juegos.filter((juego) => {
        return juego.stock > 0;
      })
    },

    juegosDisponiblesPorCod: (state, getters) => (codigo) => {
      return getters.juegosConStock.filter((juego) => {
        return juego.codigo == codigo;
      });
    },

    totalStock: (state) => {
      let totalStock = 0;
      state.juegos.forEach(element => {
        totalStock = totalStock + element.stock;
      });
      return totalStock;
    },

    totalVendidos: (state)=>{
      return state.vendidos;
    },
    
    totalVentas: (state)=>{
      return state.totalVentas;
    },

    montoTotal: (state)=>{
      return state.montoTotal;
    },
    

  },
  mutations: {
    registarJuego: (state, juego_vendido) =>{
      state.vendidos.push(juego_vendido);
    },

    venderJuego: (state, juego_vendido)=>{
      state.juegos.forEach((element)=>{
          if(element.codigo == juego_vendido.codigo ){
            element.stock--;
          }

      });
    },

    actualizarVentas: (state)=>{
      state.totalVentas++;
    },

    actualizarMonto:(state, juego_vendido)=>{
      state.montoTotal += juego_vendido.precio;
    },
  },
  
  actions: {
    vender(context, juego_vendido){
      context.dispatch('procesarVenta', juego_vendido)
        .then( ()=>{
          alert('Venta procesada');
          setTimeout(()=>{
            context.commit('registarJuego', juego_vendido);
            context.commit('actualizarVentas');
            context.commit('actualizarMonto', juego_vendido);
          }, 1000);
        }).catch( ()=>{
          alert('Venta rechazada');
      });
    },

    procesarVenta: (context, juego) => {
      return new Promise((resolve)=>{
        context.state.juegos.map((element) => {
          setTimeout(() => {
            if (element.codigo == juego.codigo && juego.stock > 0) {
              context.commit('venderJuego', juego);
              resolve()
            }
          }, 2000);
        });
      })
    },

  }
});

export default store;
