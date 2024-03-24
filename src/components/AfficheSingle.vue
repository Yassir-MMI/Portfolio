<script setup lang="ts">
import { supabase } from '@/supabase';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Projets"]["Row"] >()
import { onMounted } from 'vue'; // Importer le hook onMounted
import ScrollReveal from 'scrollreveal'; // Importer ScrollReveal

onMounted(() => {
  const sr = ScrollReveal();
  sr.reveal('.animation', {reset: true , distance: '60px', duration: 2000, delay: 300, origin: 'left'}); // Révéler les éléments avec la classe .animation
});
</script>
  
<template>
    <div class="scroller"></div>
    <div>
        <h2 class="animation">{{ titre }}</h2>
        <img :src="img" alt="logo JPO MMI">
        <p class="scroll">{{ description_card }}</p>
        <a href="#">Voir le projet</a>
    </div>

</template>

<style scoped>
/*en tête de scroll*/
.scroller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  z-index: 1000;
  background: linear-gradient(
    to right,
    rgb(29, 198, 213) 100%,
    rgba(255, 148, 166, 0) 100%
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
</style>