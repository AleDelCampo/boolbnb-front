<script>
import axios from 'axios';
import { store } from '../store';


export default {
  name: 'ContactForm',

  data() {
    return {
      store,

        formData: {
            name: '',
            surname: '',
            mail_address: '',
            message: '',
            apartment_id: store.idMessage,
        },
    }
  },

  mounted() {


    },

  methods: {
        sendContactRequest() {

            // console.log('Inviato')
            axios.post('http://127.0.0.1:8000/api/new-contact', this.formData).then(res => {
                console.log(res)
            });
        },
       
    }
}
</script>


<template>

<form @submit.prevent="sendContactRequest()">

    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input type="text" class="form-control" id="name" name="name" v-model="formData.name" required>
    </div>

    <div class="mb-3">
      <label for="surname" class="form-label">Cognome</label>
      <input type="text" class="form-control" id="surname" name="surname" v-model="formData.surname" required>
    </div>

    <div class="mb-3">
        <label for="mail_address" class="form-label">Indirizzo email</label>
        <input type="email" class="form-control" id="mail_address" name="mail_address" aria-describedby="emailHelp" v-model="formData.mail_address" required>
        <div id="emailHelp" class="form-text">Non condivideremo la tua mail con terzi.</div>
    </div>

    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Inserisci il tuo messaggio" id="message" style="height: 200px;" v-model="formData.message" required></textarea>
        <label for="message">Messaggio</label>
    </div>


    <button type="submit" class="btn btn-primary">Invia</button>

</form>

</template>


<style lang="scss" scoped>

</style>
