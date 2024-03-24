<script setup lang=ts>
import type AfficheFilm from '@/components/AfficheFilm.vue';
import { supabase } from '@/supabase';
console.log(supabase);

</script>

<template>
  <main>
    
    <section id="profile" class="min-w-max">
      <img class="min-w-max avatar" src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/Avatar%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvQXZhdGFyICgyKS5wbmciLCJpYXQiOjE3MTEyNjI2NjUsImV4cCI6MTc0Mjc5ODY2NX0.lhaPSbDNIgKo5mE-HXKBjxJ07QwpAf7dQkvYYF163Jg&t=2024-03-24T06%3A44%3A25.143Z" alt="John Doe profile picture" />
      <div class="section__text">
        <h1 class="title">Yassir Ouadghiri</h1>
        <p class="section__text__p2">Développeur Web</p>
        <div class="btn-container ">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
          Curriculum vitæ
          </button>
          <button class="btn btn-color-1" onclick="location.href='./contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/linkedin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvbGlua2VkaW4ucG5nIiwiaWF0IjoxNzExMjUzNzkwLCJleHAiOjE3NDI3ODk3OTB9.OJFe70zQyK-DVrZ62HUuBybw8QEYD7yjv69A1QW4GRw&t=2024-03-24T04%3A16%3A29.905Z"
            alt="LinkedIn"
            class="icon">          
            <img
            src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/github.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvZ2l0aHViLnBuZyIsImlhdCI6MTcxMTI1MzgxNiwiZXhwIjoxNzQyNzg5ODE2fQ.1p1X3-sX5DLlpntOi5i_4fZazJhwoOv9cPkW3eReCYQ&t=2024-03-24T04%3A16%3A56.728Z"
            alt="Github "
            class="icon"/>
        </div>
      </div>
    </section>


    <div class="login-box">
      <form>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Voir les Projets
        </a>
      </form>
    </div> 
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url('@/assets/font/Poppins/Poppins-Regular.ttf') format('ttf'),
  /* Ajoutez d'autres variantes de police si nécessaire */
}

@font-face {
  font-family: 'Jost';
  src: url('@/assets/fonts/Jost/Jost.ttf') format('ttf'),
  /* Ajoutez d'autres variantes de police si nécessaire */
}

html {
  scroll-behavior: smooth;
}

p {
  color: rgb(85, 85, 85);
}

/* souris */


/* Boutton */

a,
.btn {
  transition: all 300ms ease;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

/* SECTION */
section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

/* PROFILE SECTION */

.avatar {
  margin-left: -88px;
}
#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

/* ICONS */

.icon {
  cursor: pointer;
  height: 2rem;
}

/* BUTTONS */

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 10rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: #AF60FF 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-1:hover {
  background: #AF60FF;
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
}

</style>