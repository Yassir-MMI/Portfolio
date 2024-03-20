
<script setup>
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/films/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
    <div>
        <h2>{{ titre_film }}</h2>
        <p>{{ description_film }}</p>
        <p v-for="uneCelebrite in Celebrite">{{uneCelebrite.nom_celebrite }}</p>
        <RouterLink :to="`/celebrite/${id}`">test</RouterLink>
    </div>
</template>