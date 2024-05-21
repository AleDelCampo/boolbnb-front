<script>
import axios from 'axios';

export default {
  name: 'ContactForm',

  data() {
    return {
        formData: {
            name: '',
            surname: '',
            mail_address: '',
            message: '',
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
        }
    }
}
</script>


<template>

<form @submit.prevent="sendContactRequest()">

    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input type="text" class="form-control" id="name" name="name" v-model="formData.name">
    </div>

    <div class="mb-3">
      <label for="surname" class="form-label">Cognome</label>
      <input type="text" class="form-control" id="surname" name="surname" v-model="formData.surname">
    </div>

    <div class="mb-3">
        <label for="mail_address" class="form-label">Indirizzo email</label>
        <input type="email" class="form-control" id="mail_address" name="mail_address" aria-describedby="emailHelp" v-model="formData.mail_address">
        <div id="emailHelp" class="form-text">Non condividere la tua mail con terzi.</div>
    </div>

    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Inserisci il tuo messaggio" id="floatingTextarea2" style="height: 200px;" v-model="formData.message"></textarea>
        <label for="floatingTextarea2">Messaggio</label>
    </div>

    <button type="submit" class="btn btn-primary">Invia</button>

</form>

</template>


<style lang="scss" scoped>

</style>
