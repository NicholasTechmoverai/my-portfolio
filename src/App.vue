<script setup>
import NavBar from './components/NavBar.vue';
import icon from './assets/pxt1s38v.png'
import WatchPage from './views/WatchPage.vue';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>



<template>
  <NavBar />
  <div class="bg-gradient-to-br from-[#11161cfe] to-[#232224] min-h-[100vh] w-full flex flex-col items-center relative">
    <img class="fixed top-0 left-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none" src="./assets/bck.jpg"
      alt="" />
    <router-view />
    <footer class="relative flex flex-col gap-10 bg-[#2c3e50]/70 w-full px-4 py-5 text-white overflow-hidden">
      <!-- Animated background elements -->
      <img class="absolute top-0 left-0 w-full h-full object-cover opacity-2 z-0 pointer-events-none"
        src="./assets/istockphoto-1403644222-612x612.webp" alt="" />
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -bottom-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full filter blur-3xl animate-pulse-slow">
        </div>
        <div
          class="absolute -top-10 -right-10 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-medium">
        </div>
        <div v-for="i in 8" :key="i" class="absolute bg-white/5 rounded-full animate-float" :style="`
           width: ${Math.random() * 8 + 4}px;
           height: ${Math.random() * 8 + 4}px;
           top: ${Math.random() * 100}%;
           left: ${Math.random() * 100}%;
           animation-delay: ${Math.random() * 5}s;
         `"></div>
      </div>


      <div class="flex flex-col md:flex-row gap-10 w-full relative z-10">

        <!-- About Me & Contact Info -->
        <div class="flex flex-col lg:flex-row gap-10 w-full md:w-1/2">

          <!-- About Me -->
          <div class="flex flex-col gap-4 w-full lg:w-1/2">
            <h4 class="text-xl font-bold text-white border-b border-green-500 pb-2 animate-slide-in-left">
              About Me
            </h4>
            <div class="flex gap-3 mt-3 text-xl animate-fade-in" style="animation-delay: 0.3s">
              <a href="https://www.instagram.com" aria-label="Instagram"
                class="fa fa-instagram bg-[#E1306C] p-2 rounded-full hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-[#E1306C]/30"
                target="_blank" rel="noopener noreferrer"></a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn"
                class="fa fa-linkedin bg-[#0077b5] p-2 rounded-full hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-[#0077b5]/30"
                target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/NicholasTechmoverai" aria-label="GitHub"
                class="fa fa-github bg-[#333] p-2 rounded-full hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-[#333]/30"
                target="_blank" rel="noopener noreferrer"></a>
              <a href="https://twitter.com" aria-label="Twitter"
                class="fa fa-twitter bg-[#1DA1F2] p-2 rounded-full hover:scale-110 transform transition-all duration-300 hover:shadow-lg hover:shadow-[#1DA1F2]/30"
                target="_blank" rel="noopener noreferrer"></a>
            </div>
            <img @click="$router.push('/')" :src="icon" alt="icon"
              class="icon-hover transition duration-100 cursor-pointer size-[100px]" />
          </div>

          <!-- Contact Info -->
          <div class="flex flex-col gap-4 w-full lg:w-1/2">
            <h4 class="text-xl font-bold text-white border-b border-green-500 pb-2 animate-slide-in-left"
              style="animation-delay: 0.2s">
              Contact Info
            </h4>
            <div class="flex flex-col gap-2 text-sm animate-fade-in" style="animation-delay: 0.4s">
              <p class="flex items-center gap-2 hover:text-green-400 transition-colors">
                <i class="fas fa-map-marker-alt text-green-500"></i> Murang'a, Kiharu, Kenya
              </p>
              <a href="tel:0741540233" class="flex items-center gap-2 hover:text-green-400 transition-colors">
                <i class="fas fa-phone-alt text-green-500"></i> 0741540233
              </a>
              <a href="mailto:kariuki12nicholas@gmail.com"
                class="flex items-center gap-2 hover:text-green-400 transition-colors">
                <i class="fas fa-envelope text-green-500"></i> kariuki12nicholas@gmail.com
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links & Founded -->
        <div class="flex flex-col lg:flex-row gap-10 w-full md:w-1/2">

          <!-- Quick Links -->
          <div class="w-full lg:w-1/2">
            <h4 class="text-xl font-bold text-white border-b border-green-500 pb-2 animate-slide-in-right">
              Quick Links
            </h4>
            <div class="flex flex-col gap-2 mt-2 text-sm animate-fade-in" style="animation-delay: 0.3s">
              <router-link to="/" class="hover:text-green-400 transition-colors hover:pl-2">Home</router-link>
              <router-link to="/contact-me" class="hover:text-green-400 transition-colors hover:pl-2">Contact
                Me</router-link>
              <router-link to="/skills" class="hover:text-green-400 transition-colors hover:pl-2">Skills</router-link>
              <router-link to="/projects"
                class="hover:text-green-400 transition-colors hover:pl-2">Projects</router-link>
              <router-link to="/gallery" class="hover:text-green-400 transition-colors hover:pl-2">Gallery</router-link>
              <router-link to="/about" class="hover:text-green-400 transition-colors hover:pl-2">About</router-link>
            </div>

          </div>

          <!-- Founded -->
          <div class="w-full lg:w-1/2">
            <h4 class="text-xl font-bold text-white border-b border-green-500 pb-2 animate-slide-in-right"
              style="animation-delay: 0.2s">
              Founded
            </h4>
            <div class="grid grid-cols-2 gap-2 mt-2 animate-fade-in" style="animation-delay: 0.4s">
              <div
                class="border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                Injustify
              </div>
              <div
                class="relative border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                South Of Sahara
                <span
                  class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] bg-gray-600 border px-2 rounded-lg whitespace-nowrap">
                  <i>Like no other</i>
                </span>
              </div>
              <div
                class="border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                Universe Green
              </div>
              <div
                class="border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                Chiefchef
              </div>
              <div
                class="border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                WorkNest
              </div>
              <div
                class="border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                MyHomes
              </div>
              <div
                class="relative border border-gray-500 rounded-lg px-3 py-1 hover:border-green-500 hover:bg-gray-700/50 transition-all hover:scale-105">
                Unify
                <span
                  class="absolute -bottom-2 left-0 text-[10px] bg-green-700 px-2 rounded-lg whitespace-nowrap">Coming
                  soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="flex flex-col sm:flex-row justify-between border-t border-gray-500 mt-10 pt-4 text-xs text-gray-300 relative z-10 animate-fade-in"
        style="animation-delay: 0.5s">
        <div class="mb-1 sm:mb-0 hover:text-white transition-colors">
          &copy; 2025 Kariuki Nicholas. All rights reserved.
        </div>
        <div class="text-left text-[10px] whitespace-pre hover:text-white transition-colors">
          <div>Made: 04/2025
            <span class="text-green-400">#Vue</span> <span class="text-blue-400">#TailwindCSS</span>
          </div>
          <div>Made by <a href="/about">Kariuki Nicholas</a></div>
        </div>
      </div>

      <!-- Back to top button -->
      <button @click="scrollToTop"
        class="fixed bottom-6 right-6 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-500 transition-all hover:scale-110 animate-bounce-slow z-50">
        <i class="fas fa-arrow-up"></i>
      </button>
    </footer>

  </div>
</template>

<style>
.icon-hover:hover {
  transition: all 2s ease;
  filter: drop-shadow(0 0 3px rgba(255, 166, 0, 0.952));
}

@keyframes slide-in-left {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }

  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

@keyframes pulse-medium {

  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }

  50% {
    opacity: 0.15;
    transform: scale(1.03);
  }
}

@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 12s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-medium 8s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>