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
    label: 'Characters',
    icon: 'pi pi-fw pi-user',
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
        <Menubar :model="items" class="" />
      </div>

      <!--
        Discord Hero
      -->
      <div class="col-12">
        <div class="px-4 py-8 md:px-6 lg:px-8 fadeindown animation-duration-1000">
          <div class="text-700 text-center">
            <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
            <div class="text-900 font-bold text-4xl mb-3">Connect with us on Discord</div>
            <div class="text-700 text-xl mb-5">Level Up Your Roleplay Adventure – Join Discord, Forge Stories!</div>
            <Button label="Join Now" icon="pi pi-discord" onclick="window.open('https://discord.gg/clearrp', '_blank')"
              class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></Button>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="grid grid-nogutter text-800">
          <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span class="block text-5xl font-bold mb-1">Join our server for a</span>
              <div class="text-5xl text-primary font-bold mb-3">redefined roleplay experience</div>
              <p class="mt-0 mb-4 text-700 line-height-3">ClearRP is a project managed by EdgeGamers to redefine the FiveM
                roleplay experiebce. With a focus on respectful, transactional, and storied roleplay, we give players
                large amounts of freedom in pursuing their character's ambitions.

                .</p>

              <Button label="Connect" type="button" severity="warning" class="mr-3 p-button-raised"></Button>
              <Button label="Learn More" type="button" class="p-button-outlined"></Button>
            </section>
          </div>
          <div class="col-12 md:col-6 overflow-hidden">
            <img src="https://cdn.appuals.com/wp-content/uploads/2019/02/Gta-V-RolePlay-Life-FIVEM.jpg" alt="Image"
              class="md:ml-auto hidden lg:block md:h-full fadeinright animation-duration-1000 "
              style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
          </div>
        </div>
      </div>
      <div class="col-12">

        <div class="px-4 py-8 md:px-6 lg:px-8 text-center">
          <div class="mb-3 font-bold text-3xl">
            <span class="text-900">Your new home, </span>
            <span class="text-blue-600">ClearRP</span>
          </div>
          <div class="text-700 mb-6">We understand the importance of an transactional, respectful and storied experience.</div>
          <div class="grid">
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
              </span>
              <div class="text-900 text-xl mb-3 font-medium">Rich Roleplay</div>
              <span class="text-700 line-height-3">We encourage and foster a wide array of <b>respectful, storied, and
                transactional roleplay sessions.</b> Roleplay that is fun for everyone involved is our number one
                priority.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-users text-4xl text-blue-500"></i>
              </span>
              <div class="text-900 text-xl mb-3 font-medium">Friendly Community</div>
              <span class="text-700 line-height-3">Almost more important than our roleplay is that all community members
                are respectful and kind to their fellow players. Zero hate, discrimination, or disrespect is tolerated on
                any EdgeGamers server. All players are welcome to join and try their hand at roleplay.</span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-code text-4xl text-blue-500"></i>
              </span>
              <div class="text-900 text-xl mb-3 font-medium">High Quality Resources
              </div>
              <span class="text-700 line-height-3">Our active development team is constantly working on new mods and items
                for our community members to enjoy. Every item, car, and mod is carefully balanced, inspected, and curated
                to ensure all our players have an excellent and frictionless roleplay experience.

              </span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
              </span>
              <div class="text-900 text-xl mb-3 font-medium">Unlimited Opportunities</div>
              <span class="text-700 line-height-3"><b>We don't believe in holding characters back from their potential.</b> Our
                team is constantly working to ensure players have the opportunities to see their characters at their best.

              </span>
            </div>
            <div class="col-12 md:col-4 mb-4 px-5">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
              </span>
              <div class="text-900 text-xl mb-3 font-medium">Active Developers</div>
              <span class="text-700 line-height-3"><b>ClearRP is backed by a team of responsive and considerate developers</b>, who are constantly innovating to bring the community new experiences and scenarios. We regularly add new cars and items to our servers, and accept suggestions from all players in our forums.

</span>
            </div>
            <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
              <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-megaphone text-4xl text-blue-500"></i>
              </span>
              <div class="text-900 text-xl mb-3 font-medium">Streamer Friendly</div>
              <span class="text-700 line-height-3"><b>ClearRP does not tolerate metagaming</b>, and streamers are welcome to play our server while live.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <!-- Footer -->
        <div class="px-4 py-8 md:px-6 lg:px-8 text-center surface-section">
          <h1>EdgeGamers</h1>
        </div>
      </div>
    </div>
  </div>
</template>

