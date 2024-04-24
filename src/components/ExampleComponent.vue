<template>
  <div class="q-pa-md row justify-center" style="width: 100%">
    <div style="width: 100%">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="[`doing fine, how r you?`]"
        stamp="4 minutes ago"
      />
    </div>
    <div class="q-pa-md" style="width: 100%; display: flex">
      <q-input style="width: 90%" v-model="text" filled autogrow />
      <q-icon style="widows: 10%; margin-top: 20px" name="send" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      text: ref(''),
    };
  },
};
</script>
