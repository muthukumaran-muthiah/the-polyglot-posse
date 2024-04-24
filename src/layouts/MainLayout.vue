<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="chat"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Activity </q-toolbar-title>

        <div>Leo v1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Leo bot </q-item-label>
      </q-list>
      <chat-component title="Example component" active></chat-component>
    </q-drawer>

    <q-page-container>
      <ls-productivity-tools :definition="toolData" action="load"></ls-productivity-tools>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatComponent from 'components/ChatComponent.vue';
import '../../src/tool-js/ls-productivity-tools';

defineOptions({
  name: 'MainLayout',
});

const leftDrawerOpen = ref(false);
const toolData = {
  "id": "f5904062-f82a-4102-9a1c-a82a1ca5e",
  "title": "Vowels : ʃ(she)",
  "type": "toolchoosethepicture",
  "scorable": true,
  "isAudioEnable": true,
  "isImage": false,
  "subtitle": "Listen to the examples. Then listen to the question. Choose the answer to the question. Then check your answers.",
  "config": {
    "items": [
      {
        "question": {
          "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350018-130821-501131231.wav",
          "imageUrl": "",
          "text": "",
          "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350016-130821-501131231.wav"
        },
        "answers": [
          {
            "correct": true,
            "text": "ship",
            "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350016-130821-501131231.wav",
            "imageUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350020-130821-501131231.jpg",
            "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350018-130821-501131231.wav",
            "scoring": []
          },
          {
            "correct": false,
            "text": "sip",
            "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350023-130821-501131231.wav",
            "imageUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350027-130821-501131231.jpg",
            "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350025-130821-501131231.wav"
          }
        ]
      },
      {
        "question": {
          "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350032-130821-501131231.wav",
          "imageUrl": "",
          "text": "",
          "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350030-130821-501131231.wav"
        },
        "answers": [
          {
            "correct": true,
            "text": "seats",
            "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350030-130821-501131231.wav",
            "imageUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350034-130821-501131231.jpg",
            "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350032-130821-501131231.wav",
            "scoring": []
          },
          {
            "correct": false,
            "text": "sheets",
            "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350037-130821-501131231.wav",
            "imageUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350041-130821-501131231.jpg",
            "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350039-130821-501131231.wav"
          }
        ]
      },
      {
        "question": {
          "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350046-130821-501131231.wav",
          "imageUrl": "",
          "text": "",
          "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350044-130821-501131231.wav"
        },
        "answers": [
          {
            "correct": true,
            "text": "sew",
            "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350044-130821-501131231.wav",
            "imageUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350048-130821-501131231.jpg",
            "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350046-130821-501131231.wav",
            "scoring": []
          },
          {
            "correct": false,
            "text": "show",
            "wordUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350051-130821-501131231.wav",
            "imageUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350055-130821-501131231.jpg",
            "sentenceAudioUrl": "https://learnship-staging-learning-services-assets.s3.eu-central-1.amazonaws.com/halo/content/35/130821/504151635/pid-350053-130821-501131231.wav"
          }
        ]
      }
    ]
  }
}
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
