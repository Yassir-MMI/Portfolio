<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from '@/supabase';
 
console.log(supabase);
    
let {data : tableaufilm, error} = await supabase
    .from('Projets')
    .select('*');
    if (error) console.log("bug signalés", error);
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        
        <AfficheFilm v-for="film in tableaufilm" v-bind="film" />
        
    </div>
</template>