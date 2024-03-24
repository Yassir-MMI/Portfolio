<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Projets"]["Row"] >()
</script>

<template>
    <RouterLink :to="`/projets/${id}`">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="img" alt="Image description">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{titre}}</div>
                <p class="text-gray-700 text-base">
                {{description_card}}
                </p>
            </div>
        </div>
    </RouterLink>   
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>