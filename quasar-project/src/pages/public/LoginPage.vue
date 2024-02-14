<template>
  <q-page class="bg-grey-2 flex flex-center">

      <q-card style="width: 360px">

      <LoginForm></LoginForm>
    </q-card>


  </q-page>
</template>
<script>
import LoginForm from 'components/public/auth/LoginForm.vue'
export default {
  components: { LoginForm },
}
</script>
