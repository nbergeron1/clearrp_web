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

      <!--
        Discord Hero
      -->
      <div class="col-12">
        <div class="px-4 py-8 md:px-6 lg:px-8">
          <div class="text-700 text-center">
            <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
            <div class="text-900 font-bold text-5xl mb-3">Connect with us on Discord</div>
            <div class="text-700 text-2xl mb-5">Level Up Your Roleplay Adventure – Join Discord, Forge Stories!</div>
            <Button label="Join Now" icon="pi pi-discord" onclick="window.open('https://discord.gg/clearrp', '_blank')"
              class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="grid grid-nogutter text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1"></span>
            <div class="text-6xl text-primary font-bold mb-3">visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="https://cdn.appuals.com/wp-content/uploads/2019/02/Gta-V-RolePlay-Life-FIVEM.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
  </div>
        </div>
      <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">2</div>
      </div>
      <div class="col-12">
      </div>
    </div>
  </div>
</template>

