<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import type { SchemaOffreMaison } from '@/types';

    const maMaison :SchemaOffreMaison = {
        nomMaison: "Maison",
        prix: 1000,
        adresse: "123 rue de la maison",
        nbrChambres: 3,
        nbrSDB: 2,
        favori: true,
        image: "\public\pexels-binyamin-mellish-106399.jpg",
        surface: '30x40m²',
    };
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheMaison :nom-maison="maMaison.nomMaison" :prix="maMaison.prix" :adresse="maMaison.adresse" :nbr-chambres="maMaison.nbrChambres" :nbr-sdb="maMaison.nbrSDB" :favori="maMaison.favori" :image="maMaison.image" :surface="maMaison.surface"/>
    </div>
    <AfficheMaison nom-maison="Maison" :favori="true" image="\pexels-binyamin-mellish-106399.jpg"/>
</template>