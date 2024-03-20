<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { SchemaFilm } from '@/types';
import { supabase } from '@/supabase';
const route = useRoute('/maisons/[id]');
defineProps<SchemaFilm>()
let {data : film, error} = await supabase
    .from('Films')
    .select('*')
    .eq('id', route.params.id)
    .single();
</script>

<template>
    <div>
        <h2>{{ nom_film }}</h2>
        <p>{{ description_film }}</p>
    </div>
</template>