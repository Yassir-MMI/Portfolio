<template><nav class="bg-gray-800 p-4">
    <div class="flex justify-between items-center">
      <div class="flex-shrink-0">
        <a href="#" class="text-white text-lg font-semibold">Mon Site</a>
      </div>
      <div class="md:hidden">
        <!-- Hamburger icon -->
        <button id="menu-toggle" type="button" class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
          <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
            <path fill-rule="evenodd" d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:block">
        <div class="flex space-x-4">
          <RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
          <RouterLink to="/about" class="text-white hover:text-gray-300">About</RouterLink>
          <RouterLink to="/simple" class="text-white hover:text-gray-300">Simple</RouterLink>
          <RouterLink to="/maisons" class="text-white hover:text-gray-300">Maisons</RouterLink>
          <RouterLink to="/maisons/edit" class="text-white hover:text-gray-300">Créer des maisons</RouterLink>
          <RouterLink to="/login-logout" class="text-white hover:text-gray-300">Connexion</RouterLink>
        </div>
      </div>
    </div>
    <!-- Mobile menu, toggle classNamees based on menu state. -->
    <div id="mobile-menu" class="md:hidden hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink to="/" class="block text-white hover:text-gray-300">Home</RouterLink>
        <RouterLink to="/about" class="block text-white hover:text-gray-300">About</RouterLink>
        <RouterLink to="/simple" class="block text-white hover:text-gray-300">Simple</RouterLink>
        <RouterLink to="/maisons" class="block text-white hover:text-gray-300">Maisons</RouterLink>
        <RouterLink to="/maisons/edit" class="block text-white hover:text-gray-300">Créer des maisons</RouterLink>
        <RouterLink to="/login-logout" class="block text-white hover:text-gray-300">Connexion</RouterLink>
      </div>
    </div>
  </nav>
  </template>

<script setup lang="ts">
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

</script>