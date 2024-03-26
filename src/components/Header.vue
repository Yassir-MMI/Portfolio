<script setup lang="ts">

</script>

<template>
    <!-- component -->
  <nav class="shadow shadow-gray-300 w-100 px-8 md:px-auto">
    <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      <!-- Logo -->
      <img style="width: 8%; height: auto; " src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/logo-portfolioV1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvbG9nby1wb3J0Zm9saW9WMS5wbmciLCJpYXQiOjE3MTEzMjkzMjIsImV4cCI6MTc0Mjg2NTMyMn0.nyYVw632oKHb46diGCgu4V-KMwmeBeI78cBaeQPiayg&t=2024-03-25T01%3A15%3A23.340Z" alt="Logo Yassir Ouadghiri">
      <div class="text-gray-500 order-3 w-full md:w-auto md:order-2 nav-links-container">
        <ul class="nav-links flex font-semibold justify-between gap-auto lg:gap-20 md:gap-20">
          <router-link to="/" class="text-black md:px-4 md:py-2 hover:text-indigo-400 a">À propos de moi</router-link>
          <router-link to="/projets" class="text-black md:px-4 md:py-2 hover:text-indigo-400 a">Projets</router-link>
          <a href="#contact" class="text-black md:px-4 md:py-2 hover:text-indigo-400 a">Contact</a>
        </ul>
      </div>

      <div class="order-2 md:order-3">
        <a href="https://www.linkedin.com/in/yassir-ouadghiri-64a619256/" target="_blank">
          <button class="px-4 py-2 hover:bg-stone-200  text-gray-50 rounded-xl flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>               
              Voir le Profil
          </button>
        </a>
      </div>
    </div>
  </nav>
  <div class="scroller"></div>
</template>

<style>
.scroller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  z-index: 1000;
  background: linear-gradient(
    to right,
    #000,
    #AF60FF
  );
  background-repeat: no-repeat;
  background-size: 0;
  transform-origin: left;
  animation: scroll linear;
  animation-timeline: scroll();
  animation-range-start: cover 100px;
  animation-range-end: cover 100%;
}

.scroll
{
  animation: slide linear;
  animation-timeline: view();
  animation-range-start: cover 0%;
  animation-range-end: cover 30%;
}

@keyframes scroll {
  from {
    background-size: 0% 5px;
  }
  to {
    background-size: 100% 5px;
  }
}

@keyframes slide {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* nav links */
.nav,
.nav-links {
  display: flex;
}

.nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.2rem;
}

.a {
  text-decoration: none;
  text-decoration-color: white;
}

.a:hover {
  color: rgb(151, 61, 236);
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: rgb(181, 181, 181);
}
</style>



