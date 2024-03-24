<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';
const route = useRoute('/projets/[id]');

let {data : film, error} = await supabase
    .from('Projets')
    .select(`*`)
    .eq('id', route.params.id)
    .single();
    if (error) console.error("bug dns /pages/films/[id] ", error);
console.log("data film", film);

</script>

<template>
    <div> 
        <AfficheSingle v-bind="film" />
    </div>
</template>