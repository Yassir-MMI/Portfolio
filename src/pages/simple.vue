<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import type { SchemaFilm } from '@/types';

    const monFilm :SchemaFilm = {
        nom_film: "Nom du Film",
        description_film: "Description du Film",
        note: 8,
        annee_film: 1000,
        img_film: "https://www.google.com"
    };
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheFilm :nom_Film="monFilm.nom_Film" :description_film="monFilm.description_film" :note="monFilm.note" :annee_films="monFilm.annee_film" :img_film="monFilm.img_film"/>
    </div>
    <AfficheFilm nom-maison="Maison" :favori="true" image="\pexels-binyamin-mellish-106399.jpg"/>
</template>