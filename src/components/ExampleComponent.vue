<template>
  <div class="q-pa-md row justify-center chat-area" style="width: 100%">
    <div style="width: 100%" class="chatHistory">
      <template v-for="message in messages" :key="message.key">
        <q-chat-message
          v-if="message.sender == 'self'"
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          :text="[message.text]"
          sent
          stamp="7 minutes ago"
        />
        <q-chat-message
          v-else
          name="Leo"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="[message.text]"
          stamp="4 minutes ago"
        />
      </template>
    </div>
    <div class="q-pa-md" style="width: 100%; display: flex; gap: 12px;">
      <q-input
        @keydown.enter.prevent="submit"
        style="width: 90%"
        v-model="text"
        filled
        autogrow
      />
      <span class="chatButton">
      <q-icon style="widows: 10%;" name="send" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      text: null,
      messages: [],
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    submit() {
      this.messages.push({
        key: Date(),
        sender: 'self',
        text: this.text,
      });

      this.messages.push({
        key: Date(),
        text: this.text,
      });

      this.text = null;
    },
  },
};
</script>
