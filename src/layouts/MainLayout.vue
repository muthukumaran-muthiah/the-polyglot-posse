<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Leo chat </q-toolbar-title>

        <div>Leo v1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Leo bot </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Chat',
    caption: 'leo.chat',
    icon: 'chat',
    link: '/',
  },
  {
    title: 'Github',
    caption: '/muthukumaran-muthiah/the-polyglot-posse',
    icon: 'code',
    link: 'https://github.com/muthukumaran-muthiah/the-polyglot-posse',
  },
  {
    title: 'Android app',
    caption: 'Download app',
    icon: 'android',
    link: 'https://polyglot-posse-1.s3.ap-south-1.amazonaws.com/Mobile/app-debug.apk',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
