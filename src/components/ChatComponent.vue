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
          :stamp="message.key"
        />
        <q-chat-message
          v-else
          name="Leo"
          avatar="src/assets/image.png"
          :text="[message.text]"
          :stamp="message.key"
        />
      </template>
    </div>
    <div class="q-pa-md" style="width: 100%; display: flex; gap: 12px">
      <q-input
        @keydown.enter.prevent="submit"
        style="width: 90%"
        v-model="text"
        filled
        autogrow
      />
      <span class="chatButton">
        <q-icon @click="submit" style="widows: 10%" name="send" />
      </span>
    </div>
    <ls-productivity-tools :definition="toolData" ></ls-productivity-tools>
  </div>
</template>

<script>
import axios from 'axios';

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
        key: new Date().toLocaleTimeString(),
        sender: 'self',
        text: this.text,
      });

      let config = {
        headers: {
          Authorization: 'Bearer sk-proj-kB1xiI3KVPHif2FISzx6T3BlbkFJzDTa8nCRMTyiA9E5xCJk',
        },
      };
      let bodyParameters = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: this.text,
          },
        ],
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        max_tokens: 250,
        presence_penalty: 0,
        frequency_penalty: 0,
      };
      axios
        .post(
          'https://api.openai.com/v1/chat/completions',
          bodyParameters,
          config
        )
        .then((response) => {
          console.log(response);
          console.log(response.data.choices);
          this.messages.push({
            key: new Date().toLocaleTimeString(),
            text: response.data.choices[0].message.content,
            sender: response.data.choices[0].message.role,
          });
        });

      this.text = null;
    },
  },
};
</script>
