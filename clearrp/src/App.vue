<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
        <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
        <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <Button label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
    </div>
</div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
