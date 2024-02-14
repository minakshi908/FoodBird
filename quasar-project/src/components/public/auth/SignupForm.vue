<template>
  <q-page>
    <q-form>
      <q-card>
        <h3>
          sign up
        </h3>
      </q-card>
      <div class="q-pa-md" justify-center >
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input filled v-model="email" type="email" suffix="@gmail.com">
        <template v-slot:before>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="q-gutter-md">
      <div>
        <q-checkbox v-model="right" label="Remember me" />
      </div>
      </div>
      <q-btn :loading="loading[3]" color="primary" @click="simulateProgress(3)" style="width: 150px">
       Sign up for free
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn>
    <q-btn unelevated rounded color="primary" label="Continue with google" />
    <q-btn unelevated rounded color="primary" label="Continue with facebook" />
    <q-btn unelevated rounded color="primary" label="Already Account" />

    </div>
      </div>

    </q-form>
  </q-page>






</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref(''),
      isPwd: ref(true),
      left: ref(true),
    }
  }
}
</script>
