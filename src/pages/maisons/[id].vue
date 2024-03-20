<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import type { SchemaFilm } from '@/types';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';
const route = useRoute('/maisons/[id]');

let {data : film, error} = await supabase
    .from('Films')
    .select('*')
    .eq('id', route.params.id)
    .single();

</script>

<template>
    <div>
        <AfficheSingle v-bind="film" />
    </div>
</template>