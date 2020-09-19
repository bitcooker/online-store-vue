import Vue from 'vue';
import Vuex from 'vuex';
import {storage} from './firebase';



Vue.use(Vuex);

// var storage = firebase.storage();
var gsReference = storage.refFromURL('gs://goldenshoe-9c251.appspot.com/pexels-arthur-ogleznev-1102777.jpg')




const e = () => { (gsReference.getDownloadURL())
.then(i => {
  return i;
})}




export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'Doo-dad', image: require('./assets/shoe.jpg'), price: 499 },
        { invId: 2, name: 'Doo-dad', image: require('./assets/shoe.jpg'), price: 499 },
        { invId: 3, name: 'Doo-dad', image: require('./assets/shoe.jpg'), price: 499 },
        { invId: 4, name: 'Other thing', image: require('./assets/shoe.jpg'), price: 299 },
        { invId: 5, name: 'Other thing', image: require('./assets/shoe.jpg'), price: 299 },
        { invId: 6, name: 'Other thing', image: require('./assets/shoe.jpg'), price: 299 },
        { invId: 7, name: 'Other thing', image: require('./assets/shoe.jpg'), price: 299 },
        { invId: 8, name: 'Other thing', image: require('./assets/shoe.jpg'), price: 299 },
      ],
      inCart: [],
  },
  getters: {
    // forSale: state => state.forSale,
    inCart: state => state.inCart,
    forSale: state => { return state.forSale.forEach(i => {
        gsReference.getDownloadURL()
      .then(e => i.image = e)
    })}

  },
  mutations: {
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);}, 
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    ADD_IMAGE(state, imagePath) {state.forSale[0].image = imagePath}, 
  },
  actions: {
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    // getImage(){gsReference.getDownloadURL().then(i => {
    //   return (i); })}

  },
});