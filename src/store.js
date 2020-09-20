import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'Doo-dad', image:'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 499, stock: 0 },
        { invId: 2, name: 'Doo-dad', image: 'gs://goldenshoe-9c251.appspot.com/pexels-web-donut-19090.jpg', price: 499, stock: 4 },
        { invId: 3, name: 'Doo-dad', image: 'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 499, stock: 4 },
        { invId: 4, name: 'Other thing', image: 'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 299, stock: 10 },
        { invId: 5, name: 'Other thing', image: 'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 299, stock: 4 },
        { invId: 6, name: 'Other thing', image: 'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 299, stock: 3 },
        { invId: 7, name: 'Other thing', image: 'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 299, stock: 2 },
        { invId: 8, name: 'Other thing', image: 'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 299, stock: 12 },
      ],
      inCart: [],
  },
  getters: {

    inCart: state => state.inCart,
    forSale: state => state.forSale
    

  },
  mutations: {
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);}, 
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    ADD_IMAGE(state, imagePath) {state.forSale[0].image = imagePath}, 
  },
  actions: {
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
  
  },
});