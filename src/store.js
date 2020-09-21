import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'Nike Kicks', image:'gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg', price: 4999, stock: 0 },
        { invId: 2, name: 'Toms', image: 'gs://goldenshoe-9c251.appspot.com/pexels-web-donut-19090.jpg', price: 4999, stock: 4 },
        { invId: 3, name: 'Dr Marten', image: 'gs://goldenshoe-9c251.appspot.com/pexels-fotografierende-1159670.jpg', price: 8999, stock: 3 },
        { invId: 4, name: 'Converse', image: 'gs://goldenshoe-9c251.appspot.com/pexels-photo-1240892.jpeg', price: 3999, stock: 10 },
        { invId: 5, name: 'high heels', image: 'gs://goldenshoe-9c251.appspot.com/pexels-photo-134064.jpeg', price: 5999, stock: 4 },
        { invId: 6, name: 'Mens Shoes', image: 'gs://goldenshoe-9c251.appspot.com/pexels-photo-186035.jpeg', price: 8999, stock: 3 },
        { invId: 7, name: 'Adidas', image: 'gs://goldenshoe-9c251.appspot.com/pexels-photo-1892629.jpeg', price: 299, stock: 2 },
        { invId: 8, name: 'Boots', image: 'gs://goldenshoe-9c251.appspot.com/pexels-photo-718981.jpeg', price: 7999, stock: 12 },
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