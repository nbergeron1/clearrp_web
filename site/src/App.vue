<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';

// Home - Support - Store
const items = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'Support',
    icon: 'pi pi-fw pi-question',
    to: '/support'
  },
  {
    label: 'Store',
    icon: 'pi pi-fw pi-shopping-cart',
    to: '/store'
  }
];

</script>

<template>
  <div class="p-d-flex p-flex-column p-jc-center p-ai-center">
    <div class="grid">
      <div class="col-12">
        <Menubar :model="items" />
      </div>
      <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">1</div>
      </div>
      <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
      </div>
      <div class="col-12">
        <Editor v-model="value" editorStyle="height: 320px" />
      </div>
    </div>
  </div>
</template>

