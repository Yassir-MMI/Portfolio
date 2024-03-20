const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaFilm {
id?: string;
nom_film: string;
img_film: string;
description_film: string;
annee_film: number;
note: number;
}