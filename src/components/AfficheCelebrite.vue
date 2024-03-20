<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/celebrite/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]}>()
</script>

<template>
    <div>
        <h2>{{ nom_film }}</h2>
        <p>{{ description_film }}</p>
        <p>{{ note }}</p>
        <p>{{ annee_film }}</p>
        <p>{{ temps_film }}</p>
        <p v-for="uneCelebrite in Celebrite">{{ uneCelebrite.nom_celebrite }}</p>
        <p v-for="uneCelebrite in Celebrite">{{ uneCelebrite.prenom_celebrite }}</p>
    </div>
</template>
