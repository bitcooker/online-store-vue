<template>
<div class="contactForm">
  <form class="form" @submit.prevent="submit">
    <input required name="first_name" id ="first_name" v-model='contact.first_name' placeholder="First name" type="text" autocomplete="on">
    <input required name="last_name" id ="last_name" v-model='contact.last_name' placeholder="Last name" type="text" autocomplete="on">
    <input required :class="['input-group', isEmailValid()]" name="email" id ="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="on">
    <input name="phone" id ="phone" v-model='contact.phone' placeholder="Phone" type="text" autocomplete="on">
    <v-select placeholder="Reason" name="subjects" class="subject_selection" multiple :options="contact.options"></v-select>
    <textarea name="message" id ="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
    <!-- <div class='captcha-input'>
            <vue-recaptcha
            ref="recaptcha"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
            size="invisible"
            sitekey="<KEY>">
            </vue-recaptcha>
    </div> -->
    <button class="button">Send</button>
</form>
</div>

</template>

<script>
// import Vue from 'vue'
// import vSelect from 'vue-select'
// import VueRecaptcha from 'vue-recaptcha';

import {eventBus} from '../main';

export default {
name: 'ContactForm',

// components: {
//     'vue-recaptcha': VueRecaptcha,
//     'v-select': vSelect
// },

 data() {
     return {
    contact: {

        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        options: ['Sell','Become a student','Become a teacher', 'General enquiry'],
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    },

    isSending: false
     }
},
 
methods: {

    isEmailValid: function() {
        return (this.contact.email == "")? "" : (this.contact.reg.test(this.email)) ? 'has-success' : 'has-error';
    },

    submit: function () {
    // this.status = "submitting";

        // Verify email

        // Verify phone

        this.$refs.recaptcha.execute();
    },
    onCaptchaVerified: function (recaptchaToken) {
        const self = this;
        self.status = "submitting";
        self.$refs.recaptcha.reset();

        this.isSending = true;

        setTimeout(() => {
            // Build for data
            let form = new FormData();
            for (let field in this.contact) {
                form.append(field, this.contact[field]);
            }

            // Send form to server  
            axios.post("https://api.airstudy.com.au/contacts/", form).then((response) => {
                console.log(response);
                this.clearForm();
                this.isSending = false;
            }).catch((e) => {
                console.log(e)
            });

        }, 1000);

    },
    onCaptchaExpired: function () {
        this.$refs.recaptcha.reset();
    },

    /**
    * Clear the form
    */  
    clearForm() {
        for (let field in this.contact) {
            this.contact[field] = ''
        }
    },

    selectedPage(page) {
    eventBus.$emit("selected-page", page);
    },
}
}
</script>