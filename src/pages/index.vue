<script setup lang=ts>
import AfficheFilm from '@/components/AfficheFilm.vue';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Projets"]["Row"] >()
import { supabase } from '@/supabase';

let {data : tableaufilm, error} = await supabase
    .from('Projets')
    .select('*');
</script>

<template>
  <main>
    <section id="profile" class="min-w-max section_profil flex flex-col items-center lg:flex-row sm:h-max ">
    <img class="section__pic-container transition transform hover:scale-110 lg:mr-32 lg:mt-6" src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/Avatar%20(3).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvQXZhdGFyICgzKS5wbmciLCJpYXQiOjE3MTEzMDgzNzUsImV4cCI6MTc0Mjg0NDM3NX0.dVRpEkB4CD8kSeRq7DMVKOnuSXaj1F63OB9I7B2Vnik&t=2024-03-24T19%3A26%3A15.525Z" alt="John Doe profile picture" />
    <div class="section__text lg:text-left">
        <h1 class="title mt-2">Yassir Ouadghiri</h1>
        <p class="section__text__p2">Développeur Web</p>
        <div class="btn-container">
            <button class="btn btn-color-2" onclick="window.open('./assets/resume-example.pdf')">
                Voir mon CV
            </button>
            <button class="btn btn-color-1" onclick="location.href='./contact'">
                Contact Info
            </button>
        </div>
        <div id="socials-container" class="mt-4 lg:mt-0">
            <img src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/linkedin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvbGlua2VkaW4ucG5nIiwiaWF0IjoxNzExMjUzNzkwLCJleHAiOjE3NDI3ODk3OTB9.OJFe70zQyK-DVrZ62HUuBybw8QEYD7yjv69A1QW4GRw&t=2024-03-24T04%3A16%3A29.905Z" alt="LinkedIn" class="icon mr-2">
            <img src="https://iqdwkyjapwrjscpnkejc.supabase.co/storage/v1/object/sign/img/github.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvZ2l0aHViLnBuZyIsImlhdCI6MTcxMTI1MzgxNiwiZXhwIjoxNzQyNzg5ODE2fQ.1p1X3-sX5DLlpntOi5i_4fZazJhwoOv9cPkW3eReCYQ&t=2024-03-24T04%3A16%3A56.728Z" alt="Github" class="icon"/>
        </div>
    </div>
    </section>
    <section id="experience">
      <p class="section__text__p1">Découvrez mon</p>
      <h1 class="title mb-10 font-bold">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container mb-10">
            <h2 class="experience-sub-title">Développement Frontend</h2>
            <div class="article-container">
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>HTML</h3>
                  <p class="italic">Confirmé</p>
                </div>
              </article>
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>CSS</h3>
                  <p class="italic">Confirmé</p>
                </div>
              </article>
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>JavaScript</h3>
                  <p class="italic">Intermédiaire</p>
                </div>
              </article>
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>TypeScript</h3>
                  <p class="italic">Confirmé</p>
                </div>
              </article>
            </div>
            <hr class="fine-line">
          </div>
          
          <div class="details-container mb-10">
            <h2 class="experience-sub-title">Développement Backend </h2>
            <div class="article-container">
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>PocketBase</h3>
                  <p class="italic">Basique</p>
                </div>
              </article>
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>Node JS</h3>
                  <p class="italic">Basique</p>
                </div>
              </article>
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>SupaBase</h3>
                  <p class="italic">Intermédiaire</p>
                </div>
              </article>
              <article>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 24 24">
                  <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"></path>
                </svg>
                <div>
                  <h3>Git</h3>
                  <p class="italic">Confirmé</p>
                </div>
              </article>
            </div>
            <hr class="fine-line">
          </div>
        </div>
      </div>
    </section>
    <div>
      <p class="section__text__p1">Naviguer à travers</p>
      <h1 class="title mb-10 font-bold">Mes Projets</h1>
      <div class="grid grid-cols-3 gap-4">
        <AfficheFilm v-for="film in tableaufilm" v-bind="film" />
      </div>
    </div>

    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="#"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:yassir.ouadghiri@gmail.com">Example@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="#"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
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
  src: url('@/assets/fonts/Poppins/Poppins-Regular.ttf') format('ttf'),
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
  font-family: 'Poppins', monospace;
}

h1 {
  color: rgb(85, 85, 85);
  font-family: 'Jost', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
section {
  margin-top: 20px;
}

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

/* SECTION Avatar */
section {
  padding-top: 4vh;
  height: auto;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

/* PROFILE SECTION */

#profile {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  height: auto;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
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

/* EXPERIENCE SECTION */

#experience {
  position: relative;
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.article-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

article {
  display: flex;
  width: 10rem;
  justify-content: space-around;
}

article .icon {
  cursor: default;
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

/* bg */
.section_profil {
margin: 0;
padding: 0;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239e6bef' fill-opacity='0.5'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-size: contain;
}

.fine-line {
    border: 0;
    height: 1.5px;
    background-color: #000; /* Couleur de votre choix */
    margin: 10px 0; /* Marge au-dessus et en dessous de la ligne */
}

/* Contact */
#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
}

.contact-info-upper-container {
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
}

.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
}

.contact-info-container p {
  font-size: larger;
}

.contact-icon {
  cursor: default;
}

.email-icon {
  height: 2.5rem;
}
</style>