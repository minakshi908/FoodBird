<template>
   <q-form class="q-pa-md">
      <div class="column q-gutter-lg">
      <q-card><h3> Login Form </h3></q-card>
      <q-input  label="Email" />

      <q-input filled label="password" />
      </div>
      <div class="q-gutter-md">
      <div>
        <q-checkbox
        v-model="customModel"
        color="secondary"
        label="Remember me"
        true-value="yes"
        false-value="no"
      />
      </div>
      <div class="q-px-sm">
        The model data: <strong>'{{ customModel }}'</strong>
      </div>
      </div>
      <div class="row justify-center q-my-lg">
        <q-btn label="Login" size="lg" type="Login" color="primary"/>
      </div>
      <div class="container" style="background-color:">
    <button type="button" class="cancelbtn">Cancel</button>
    <br>
          <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
    </q-form>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
           customModel: ref('no')
    }
  }
}
</script>
