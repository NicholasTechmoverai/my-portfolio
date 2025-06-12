<script setup>
// import { ref } from "vue";
import ProgressCircle from "./ProgressCircle.vue";

</script>

<template>
  <div class="w-[100%] md:w-[500px] lg:w-[800px] p-4 text-white">
    <!-- Header with more personality -->
    <div class="p-3 bg-primary mt-10 border-2 border-gray-200 dark:border-gray-500 text-white rounded-lg shadow-lg transform hover:scale-[1.01] transition-all duration-300">
      <h2 class="text-2xl font-bold tracking-tight">💻 My Tech Arsenal</h2>
      <p class="text-sm opacity-90 mt-1">Tools & technologies I wield with confidence</p>
    </div>

    <!-- Animated grid container -->
    <div class="flex flex-col [&_ion-icon]:shadow-2xl [&_ion-icon]:text-4xl [&_.skill-card]:relative [&_.skill-card]:overflow-hidden [&_.skill-card]:rounded-3xl [&_.skill-card]:p-4 [&_.skill-card]:border [&_.skill-card]:border-gray-500/30 [&_.skill-card]:shadow-lg [&_p]:z-100 [&_.skill-card]:transition-all [&_.skill-card]:duration-300 [&_.skill-card]:hover:scale-[1.02] [&_.skill-card]:hover:shadow-xl">

      <!-- Web Foundations -->
      <div class="flex flex-row justify-between mt-5 gap-4 animate-fade-in">
        <div class="skill-card bg-gradient-to-br from-[#e34c26] via-[#f06529] to-[#eb6d3a] w-[65%] hover:shadow-orange-500/20">
          <ion-icon name="logo-html5" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">HTML</p>
          <p class="text-xs font-medium opacity-90">The skeleton of every web experience</p>
          <ProgressCircle :skill="'HTML'" />
        </div>
        <div class="skill-card bg-gradient-to-br from-[#264de4] via-[#2965f1] to-[#3c7dff] w-[35%] hover:shadow-blue-500/20">
          <ion-icon name="logo-css3" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">CSS</p>
          <p class="text-xs font-medium opacity-90">Where websites get their style</p>
          <ProgressCircle :skill="'CSS'" />
        </div>
      </div>

      <!-- JavaScript - The MVP -->
      <div class="skill-card bg-gradient-to-br from-[#f0db4f] via-[#f7e05f] to-[#323330] text-gray-900 mt-4 hover:shadow-yellow-500/20">
        <ion-icon name="logo-javascript" class="hover:animate-bounce"></ion-icon>
        <p class="text-xl font-bold tracking-wide drop-shadow-md">JavaScript</p>
        <p class="text-xs font-medium opacity-90">Bringing interactivity to life</p>
        <ProgressCircle :skill="'JavaScript'" />
      </div>

      <!-- Backend Power Trio -->
      <div class="flex flex-row justify-between mt-4 h-[250px] gap-2">
        <div class="skill-card bg-gradient-to-br from-[#306998] via-[#4B8BBE] to-[#5a9bc5] w-[60%] h-full hover:shadow-blue-400/20">
          <ion-icon name="logo-python" class="hover:animate-spin"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Python</p>
          <p class="text-xs font-medium opacity-90">From scripts to AI - my Swiss Army knife</p>
          <ProgressCircle :skill="'Python'" />
        </div>
        <div class="flex flex-col justify-between w-[40%] h-full gap-2">
          <div class="skill-card bg-gradient-to-br from-[#41B883] via-[#3eaf7c] to-[#35495E] hover:shadow-green-500/20">
            <ion-icon name="logo-vue" class="hover:animate-pulse"></ion-icon>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">Vue.js</p>
            <p class="text-xs font-medium opacity-90">Reactive frontend magic</p>
            <ProgressCircle :skill="'Vue'" />
          </div>
          <div class="skill-card bg-gradient-to-br from-[#68a063] via-[#539e4d] to-[#3c873a] hover:shadow-green-600/20">
            <ion-icon name="logo-nodejs" class="hover:animate-spin"></ion-icon>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">Node.js</p>
            <p class="text-xs font-medium opacity-90">JavaScript everywhere!</p>
            <ProgressCircle :skill="'Node'" />
          </div>
        </div>
      </div>

      <!-- Command Line -->
      <div class="skill-card bg-gradient-to-br from-[#000000] via-[#2b2b2b] to-[#434343] mt-4 hover:shadow-gray-500/20">
        <ion-icon name="terminal-outline" class="hover:animate-pulse"></ion-icon>
        <p class="text-xl font-bold tracking-wide drop-shadow-md">Bash/Shell</p>
        <p class="text-xs font-medium opacity-90">Where real power users live</p>
        <ProgressCircle :skill="'Bash'" />
      </div>

      <!-- Modern Web Stack -->
      <div class="grid grid-cols-3 gap-2 mt-4">
        <div class="skill-card bg-gradient-to-br from-[#38bdf8] via-[#0ea5e9] to-[#0284c7] hover:shadow-cyan-500/20">
          <ion-icon name="color-wand-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Tailwind</p>
          <p class="text-xs font-medium opacity-90">CSS at warp speed</p>
          <ProgressCircle :skill="'Tailwind'" />
        </div>
        <div class="skill-card bg-gradient-to-br from-[#00dc82] via-[#00c274] to-[#108775] hover:shadow-emerald-500/20">
          <ion-icon name="logo-nuxt" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Nuxt.js</p>
          <p class="text-xs font-medium opacity-90">Vue on steroids</p>
          <ProgressCircle :skill="'Nuxt'" />
        </div>
        <div class="skill-card bg-gradient-to-br from-[#000000] via-[#2b2b2b] to-[#f06957] hover:shadow-red-500/20">
          <ion-icon name="flask-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Flask</p>
          <p class="text-xs font-medium opacity-90">Micro but mighty</p>
          <ProgressCircle :skill="'Flask'" />
        </div>
      </div>

      <!-- API & Data Masters -->
      <div class="grid grid-cols-2 gap-2 mt-4">
        <div class="flex flex-col justify-between h-full gap-2">
          <div class="skill-card bg-gradient-to-br from-[#000000] via-[#5f5b5b] to-[#fcd34d] hover:shadow-amber-500/20">
            <i class="fab fa-linux text-4xl text-white hover:animate-spin"></i>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">Linux</p>
            <p class="text-xs font-medium opacity-90">The developer's playground</p>
            <ProgressCircle :skill="'FastAPI'" />
          </div>
          <div class="skill-card bg-gradient-to-br from-[#059669] via-[#047857] to-[#065f46] hover:shadow-emerald-600/20">
            <ion-icon name="flash-outline" class="hover:animate-pulse"></ion-icon>
            <p class="text-xl font-bold tracking-wide drop-shadow-md">FastAPI</p>
            <p class="text-xs font-medium opacity-90">Async APIs at light speed</p>
            <ProgressCircle :skill="'FastAPI'" />
          </div>
        </div>

        <div class="skill-card bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] hover:shadow-blue-600/20">
          <ion-icon name="construct-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">ORMs</p>
          <p class="text-xs font-medium opacity-90">Database wrangling made easy</p>
          <ProgressCircle :skill="'ORMs'" />
        </div>
      </div>

      <!-- Type Safety & Databases -->
      <div class="flex flex-row gap-2 mt-4 w-[100%]">
        <div class="skill-card bg-gradient-to-br from-[#3178c6] via-[#2563eb] to-[#1f3f70] w-[40%] hover:shadow-blue-700/20">
          <ion-icon name="code-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">TypeScript</p>
          <p class="text-xs font-medium opacity-90">JavaScript with armor</p>
          <ProgressCircle :skill="'TypeScript'" />
        </div>
        <div class="skill-card bg-gradient-to-br from-[#f29111] via-[#e67e22] to-[#d35400] w-[60%] hover:shadow-orange-600/20">
          <ion-icon name="server-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">SQL</p>
          <p class="text-xs font-medium opacity-90">Taming data since 1974</p>
          <ProgressCircle :skill="'SQL'" />
        </div>
      </div>
      
      <!-- Bonus Skills -->
      <div class="flex flex-row justify-between mt-5 gap-4">
        <div class="skill-card bg-gradient-to-br from-[#092e20] via-[#0d503c] to-[#157f60] w-[65%] hover:shadow-green-700/20">
          <ion-icon name="rocket-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">Django</p>
          <p class="text-xs font-medium opacity-90">The web framework for perfectionists</p>
          <ProgressCircle :skill="'django'" />
        </div>
        <div class="skill-card bg-gradient-to-br from-[#659ad2] via-[#00599c] to-[#004482] w-[35%] hover:shadow-blue-800/20">
          <ion-icon name="hardware-chip-outline" class="hover:animate-pulse"></ion-icon>
          <p class="text-xl font-bold tracking-wide drop-shadow-md">C++</p>
          <p class="text-xs font-medium opacity-90">Raw power & performance</p>
          <ProgressCircle :skill="'C_plus'" />
        </div>
      </div>
    </div>
  </div>
  
</template>