<template>
  <div>
  

<strong>Delivery</strong>
    <p>You'll be kept in the loop on the status of your order with confirmation and tracking emails.

* Including Channel Islands.

** Rest of the World deliveries includes Switzerland, Norway & Iceland due to the high customs charge. Any taxes or duty fees incurred to ship abroad are the responsibility of the customer and these costs cannot be reclaimed from Office.

Unfortunately for various reasons we are unable to ship certain brands or products to particular locations outside of the UK. For more details, please click here.

Due to various problems with overseas shipping, we do not send orders to the following destinations: Africa, Russia, Ukraine, Argentina, Mexico and Malaysia. We reserve the right to add/remove from this list at any time.
****Selected UK & NI postcodes will not be eligible to receive Next Day delivery.

You can also place your order online and collect from an OFFICE store using our FREE Click & Collect service. Please click here for more details.</p>
        
    <div>
    
    </div>
  </div>


</template>

<script>

import {eventBus} from '../main';

export default {
  name: "csPage" ,
  methods: {
  selectedPage(page) {
    eventBus.$emit("selectedPage", page);
    },
  },
}



</script>

<style>

</style>
