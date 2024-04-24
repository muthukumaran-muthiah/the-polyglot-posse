<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
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
  </div>
</template>

<script setup lang="ts">
// import { computed, ref } from 'vue';
// import { Todo, Meta } from './models';

// interface Props {
//   title: string;
//   todos?: Todo[];
//   meta: Meta;
//   active: boolean;
// }

// const props = withDefaults(defineProps<Props>(), {
//   todos: () => [],
// });

// const clickCount = ref(0);
// function increment() {
//   clickCount.value += 1;
//   return clickCount.value;
// }

// const todoCount = computed(() => props.todos.length);
</script>
