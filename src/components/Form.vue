<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const films = ref ({});
const route = useRoute('/films/edit/[[id]]');

async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Films").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/films/edit/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Films").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else films.value = data;
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheFilm v-bind="films" />
        </div>
        <div class="p-2">
            <FormKit @submit="upsertFilm" type="form" v-model="films"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_film" label="Titre du film" />
                <FormKit name="description_film" label="Description du film" />
                <FormKit name="note" type="number" label="Note /10" />
                <FormKit name="img_film" label="Images du film" />
            </FormKit>
        </div>
    </div>
</template>
