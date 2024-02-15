<template>
  <q-page class="bg-grey-2 flex flex-center">

      <q-card style="width: 360px">

      <SignupForm></SignupForm>
    </q-card>


  </q-page>
</template>
<script>
import SignupForm from 'components/public/auth/SignupForm.vue'
export default {
  components: { SignupForm },
}
</script>
