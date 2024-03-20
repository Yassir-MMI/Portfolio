<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaFilm } from '@/types';
defineProps<SchemaFilm>()
</script>

<template>
  <RouterLink :to="`/maisons/${id}`">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="img_film" :alt="img_film">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ nom_film }}</div>
        <p class="text-gray-700 text-base">
          Réalisateur: {{ description_film }}<br>
          Année: {{ annee_film }}<br>
          Note: {{ note }}/10
        </p>
      </div>
    </div>
  </RouterLink>   
  </template>