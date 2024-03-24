<script setup lang="ts">

</script>

<template>
    <!-- component -->
  <nav class="shadow shadow-gray-300 w-100 px-8 md:px-auto">
    <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      <!-- Logo -->
      <div class="text-indigo-500 md:order-1">
        <!-- Heroicon - Chip Outline -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
      <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
        <ul class="flex font-semibold justify-between gap-auto lg:gap-20 md:gap-20">
          <router-link to="/" class="text-black md:px-4 md:py-2 hover:text-indigo-500">À propos de moi</router-link>
          <router-link to="/projets" class="text-black md:px-4 md:py-2 hover:text-indigo-400">Mes Projets</router-link>
          <router-link to="/contact" class="text-black md:px-4 md:py-2 hover:text-indigo-400">Contact</router-link>
        </ul>
      </div>

      <div class="order-2 md:order-3">
        <a href="google.com" target="_blank">
          <button class="px-4 py-2 hover:bg-stone-200  text-gray-50 rounded-xl flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>               
              Voir le Profil
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>


