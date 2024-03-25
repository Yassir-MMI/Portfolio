<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Projets"]["Row"] >()
</script>

<template>
    <div class="contain">
        
            <div class="container">
            <div class="wrapper">
            <img class="banner-image" :src="img">
            <h1>{{titre}}</h1>
            </div>
            <div class="button-wrapper"> 
            <button class="btn outline">LE PROJET</button>
            <RouterLink :to="`/projets/${id}`"><button class="btn fill">VOIR PLUS</button></RouterLink> 
            </div>
        </div>
        
    </div>
    
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  /* solid background */
  background: #a956ff; 
  
  display: flex;
  align-items: center;
  justify-content: center;    
  height: 100vh;  
}

.contain {
    margin: 10px;
}

.container {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #D3D3D3;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);  
  padding: 38px;  
  filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;
}

.wrapper {
  width: 100%;
  height: 100%;
  
}

.banner-image {
  background-position: center;
  background: #fff;
  background-size: cover;
  height: 300px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #000
}

h1{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(255,255,255,0.98);
  font-size: 2.4rem;
}

p {
  color: #fff;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 0.8rem;
  line-height: 150%;
  letter-spacing: 2px;
}

.button-wrapper{
  margin-top: 18px;
  margin-left: 5px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;  
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: #ae65fd;
  border: 1px solid #ae65fd;
  transition: all .3s ease;
  margin-right: 10px;
  font-weight: bold;
  
}

.outline:hover{
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all .3s ease;  
}

.fill {
  background: #ae65fd;
  color: rgba(255,255,255,0.95);
  border: 1px solid #ae65fd;
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease; 
}

.fill:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
  transition: all .3s ease;    
}

</style>