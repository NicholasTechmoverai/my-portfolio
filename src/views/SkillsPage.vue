<script setup>
// import { ref } from "vue";
import ProgressCircle from "./ProgressCircle.vue";

</script>
<template>
  <div class="w-[100%] lg:w-[800px] p-4 text-white">
    <div
      class="p-3 bg-primary mt-10 border-2 border-gray-200 dark:border-gray-500 text-white rounded-lg"
    >
      @gathogo Experienced Skills
    </div>
    <div
      class="flex flex-col [&_ion-icon]:shadow-2xl [&_ion-icon]:text-4xl [&_.skill-card]:relative [&_.skill-card]:overflow-hidden [&_.skill-card]:rounded-3xl [&_.skill-card]:p-4 [&_.skill-card]:border [&_.skill-card]:border-gray-500/30 [&_.skill-card]:shadow-lg [&_p]:z-100"
    >
      <!-- HTML & CSS -->
      <div class="flex flex-row justify-between mt-5 gap-4">
        <div
          class="skill-card bg-gradient-to-br from-[#e34c26] via-[#f06529] to-[#eb6d3a] w-[65%]"
        >
          <ion-icon name="logo-html5"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">HTML</p>
          <p class="text-xs font-medium opacity-90">Structure of all web pages</p>
          <ProgressCircle :skill="'HTML'" />
        </div>
        <div
          class="skill-card bg-gradient-to-br from-[#264de4] via-[#2965f1] to-[#3c7dff] w-[35%]"
        >
          <ion-icon name="logo-css3"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">CSS</p>
          <p class="text-xs font-medium opacity-90">Styles for the web</p>
          <ProgressCircle :skill="'CSS'" />
        </div>
      </div>

      <!-- JavaScript -->
      <div
        class="skill-card bg-gradient-to-br from-[#f0db4f] via-[#f7e05f] to-[#323330] text-gray-900 mt-4"
      >
        <ion-icon name="logo-javascript"></ion-icon>
        <p class="text-xl font-bold tracking-wide drop-shadow-md">JavaScript</p>
        <p class="text-xs font-medium opacity-90">Client-side interactivity</p>
        <ProgressCircle :skill="'JavaScript'" />
      </div>

      <!-- Python, Vue, Node -->
      <div class="flex flex-row justify-between mt-4 h-[250px] gap-2">
        <div
          class="skill-card bg-gradient-to-br from-[#306998] via-[#4B8BBE] to-[#5a9bc5] w-[60%] h-full"
        >
          <ion-icon name="logo-python"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Python</p>
          <p class="text-xs font-medium opacity-90">AI, scripts & backend</p>
          <ProgressCircle :skill="'Python'" />
        </div>
        <div class="flex flex-col justify-between w-[40%] h-full gap-2">
          <div
            class="skill-card bg-gradient-to-br from-[#41B883] via-[#3eaf7c] to-[#35495E]"
          >
            <ion-icon name="logo-vue"></ion-icon>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">Vue.js</p>
            <p class="text-xs font-medium opacity-90">Frontend framework</p>
            <ProgressCircle :skill="'Vue'" />
          </div>
          <div
            class="skill-card bg-gradient-to-br from-[#68a063] via-[#539e4d] to-[#3c873a]"
          >
            <ion-icon name="logo-nodejs"></ion-icon>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">Node.js</p>
            <p class="text-xs font-medium opacity-90">JavaScript backend</p>
            <ProgressCircle :skill="'Node'" />
          </div>
        </div>
      </div>

      <!-- Bash -->
      <div
        class="skill-card bg-gradient-to-br from-[#000000] via-[#2b2b2b] to-[#434343] mt-4"
      >
        <ion-icon name="terminal-outline"></ion-icon>
        <p class="text-xl font-bold tracking-wide drop-shadow-md">Bash/Shell</p>
        <p class="text-xs font-medium opacity-90">Command-line scripting</p>
        <ProgressCircle :skill="'Bash'" />
      </div>

      <!-- Tailwind, Nuxt.js, Flask -->
      <div class="grid grid-cols-3 gap-2 mt-4">
        <div
          class="skill-card bg-gradient-to-br from-[#38bdf8] via-[#0ea5e9] to-[#0284c7]"
        >
          <ion-icon name="color-wand-outline"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Tailwind</p>
          <p class="text-xs font-medium opacity-90">Utility-first CSS</p>
          <ProgressCircle :skill="'Tailwind'" />
        </div>
        <div
          class="skill-card bg-gradient-to-br from-[#00dc82] via-[#00c274] to-[#108775]"
        >
          <ion-icon name="logo-nuxt"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Nuxt.js</p>
          <p class="text-xs font-medium opacity-90">Vue-powered SSR</p>
          <ProgressCircle :skill="'Nuxt'" />
        </div>
        <div
          class="skill-card bg-gradient-to-br from-[#000000] via-[#2b2b2b] to-[#f06957]"
        >
          <ion-icon name="flask-outline"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Flask</p>
          <p class="text-xs font-medium opacity-90">Python microframework</p>
          <ProgressCircle :skill="'Flask'" />
        </div>
      </div>

      <!-- FastAPI & ORMs -->
      <div class="grid grid-cols-2 gap-2 mt-4">
        <div class="flex flex-col justify-between h-full gap-2">
          <div
            class="skill-card bg-gradient-to-br from-[#000000] via-[#5f5b5b] to-[#fcd34d]"
          >
            <i class="fab fa-linux text-4xl text-white"></i>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">Linux</p>
            <p class="text-xs font-medium opacity-90">Linux OS, server Admin</p>
            <ProgressCircle :skill="'FastAPI'" />
          </div>
          <div
            class="skill-card bg-gradient-to-br from-[#059669] via-[#047857] to-[#065f46]"
          >
            <ion-icon name="flash-outline"></ion-icon>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">FastAPI</p>
            <p class="text-xs font-medium opacity-90">Async Python APIs</p>
            <ProgressCircle :skill="'FastAPI'" />
          </div>
        </div>

        <div
          class="skill-card bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]"
        >
          <ion-icon name="construct-outline"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">ORMs</p>
          <p class="text-xs font-medium opacity-90">SQLAlchemy, Tortoise,Drizzle</p>
          <ProgressCircle :skill="'ORMs'" />
        </div>
      </div>

      <!-- TypeScript & SQL -->
      <div class="flex flex-row gap-2 mt-4 w-[100%]">
        <div
          class="skill-card bg-gradient-to-br from-[#3178c6] via-[#2563eb] to-[#1f3f70] w-[40%]"
        >
          <ion-icon name="code-outline"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">TypeScript</p>
          <p class="text-xs font-medium opacity-90">Typed JavaScript</p>
          <ProgressCircle :skill="'TypeScript'" />
        </div>
        <div
          class="skill-card bg-gradient-to-br from-[#f29111] via-[#e67e22] to-[#d35400] w-[60%]"
        >
          <ion-icon name="server-outline"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">SQL</p>
          <p class="text-xs font-medium opacity-90">Databases & queries</p>
          <ProgressCircle :skill="'SQL'" />
        </div>
      </div>
            <!-- HTML & CSS -->
      <div class="flex flex-row justify-between mt-5 gap-4">
        <div
          class="skill-card bg-gradient-to-br from-[#e34c26] via-[#f06529] to-[#eb6d3a] w-[65%]"
        >
          <ion-icon name="logo-html5"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Django</p>
          <p class="text-xs font-medium opacity-90">Python web based Framwork</p>
          <ProgressCircle :skill="'django'" />
        </div>
        <div
          class="skill-card bg-gradient-to-br from-[#264de4] via-[#2965f1] to-[#3c7dff] w-[35%]"
        >
          <ion-icon name="logo-css3"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md"> C++</p>
          <p class="text-xs font-medium opacity-90">High level lang</p>
          <ProgressCircle :skill="'C_plus'" />
        </div>
      </div>

    </div>
  </div>
</template>
