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
    <div>
        <h2 class="animation">{{ titre }}</h2>
        <img :src="img" alt="logo JPO MMI">
        <p class="scroll">{{ description_card }}</p>
        <a href="#">Voir le projet</a>
    </div>

</template>

<style scoped>
/*en tête de scroll*/


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