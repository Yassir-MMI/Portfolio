<script setup lang="ts">
import { supabase } from '@/supabase';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Projets"]["Row"] >()
import { onMounted } from 'vue'; // Importer le hook onMounted
</script>
  
<template>

    
    <div class="bg-gray-100 min-h-screen pb-10">
      <!-- Titre et image principale -->
      <div class="max-w-xl mx-auto py-8">
        <h1 class="text-3xl text-center mb-4">{{ titre }}</h1>
        <div class="h-1 w-20 mx-auto mb-6">
          <img :src="img" alt="Image principale de l'article" class="mx-auto w-2/3 rounded-lg mb-6">
        </div>
        </div>

      <!-- Détails de l'article -->
      <div class="mx-auto">
        <div class="text-center">
          <!-- Bloc de texte et image -->
          <div class="flex-col ">
            <p class="mb-4 mx-7 tracking-wide">{{ concept }}</p>
            <img :src="img_concept" alt="Image détaillée de l'article" class="max-w-2xl mx-auto block rounded-lg mb-4">
          </div>
          <div class="flex-col">
            <p class="mb-4 mx-7 tracking-wide">{{technique}}</p>
            <img :src="img_technique" alt="Image détaillée de l'article" class="max-w-2xl mx-auto block rounded-lg mb-4">  
          </div>
          <div class="flex-col">
            <p class="mb-4 mx-7 tracking-wide">{{realisation}}</p>
            <img :src="img_realisation" alt="" class="max-w-2xl rounded-lg mx-auto block mb-4">
          </div>
        </div>
      </div>
      <div class="login-box mt-10 mb-10 text-center">
      <form>
        <a :href="lien">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Voir le Projets
        </a>
      </form>
      </div>
      <iframe class="mx-auto w-full block" style="text-align: center; border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" :src="description_card" allowfullscreen></iframe>
    </div>
    
</template>



<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/Poppins/Poppins-Regular.ttf') format('ttf'),
  /* Ajoutez d'autres variantes de police si nécessaire */
}

@font-face {
  font-family: 'Jost';
  src: url('@/assets/fonts/Jost/Jost.ttf') format('ttf'),
  /* Ajoutez d'autres variantes de police si nécessaire */
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
}

@media screen and (max-width: 600px) {
  *{margin: 0 2px;
  padding: 0;}
  
}
/*en tête de scroll*/
p {
  font-size: 17px;
  text-align: justify;
}

@keyframes reveal {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

h2 {
  font-size: 90px;
  text-align: center;
}

/* bouton */
a,
.btn {
  transition: all 300ms ease;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: rgb(151, 61, 236);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 10px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: rgb(151, 61, 236);
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(151, 61, 236),
              0 0 25px rgb(151, 61, 236),
              0 0 50px rgb(151, 61, 236),
              0 0 100px rgb(151, 61, 236);
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(151, 61, 236));
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgb(151, 61, 236));
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, rgb(151, 61, 236));
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, rgb(151, 61, 236));
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>