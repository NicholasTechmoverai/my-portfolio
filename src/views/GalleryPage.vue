<template>
  <div class="max-w-[1024px] z-40 mx-auto">
    <!-- Animated Header -->
    <div class="p-3 bg-gradient-to-r from-purple-600 to-blue-500 mt-10 mx-3 border-2 border-white/20 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group">
      <h2 class="text-2xl font-bold text-center animate-text bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
        @gathogo's <span class="inline-block group-hover:rotate-12 transition-transform">✨</span> 4K Gallery <span class="inline-block group-hover:-rotate-12 transition-transform">✨</span>
      </h2>
      <p class="text-center text-sm opacity-90 mt-1">Hover to explore the magic</p>
    </div>

    <!-- Masonry Grid with Parallax Effect -->
    <div class="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 min-h-screen w-full relative">
      <!-- Floating Decorative Elements -->
      <div class="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
      <div class="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-xl"></div>
      
      <!-- Masonry Items with Advanced Effects -->
      <div
        v-for="(t_img, index) in images"
        :key="index"
        tabindex="0"
        class="mb-4 break-inside-avoid overflow-hidden cursor-pointer rounded-2xl border border-white/20 group focus:outline-none relative transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-xl"
        :style="{
          'transition-delay': `${index * 50}ms`,
          'box-shadow': '0 10px 30px -5px rgba(0,0,0,0.3)'
        }"
      >
        <!-- Image with Parallax and Glow Effect -->
        <div class="relative overflow-hidden h-full w-full">
          <img
            :src="t_img.img"
            :alt="t_img.title"
            class="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
            :style="{
              'transform': 'translateZ(0)',
              'backface-visibility': 'hidden',
              'will-change': 'transform'
            }"
          />
          
          <!-- Animated Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
          
          <!-- Floating Particles Background -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div 
              v-for="i in 15" 
              :key="`particle-${i}`"
              class="absolute rounded-full bg-white/20"
              :style="{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out ${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.1
              }"
            ></div>
          </div>
        </div>

        <!-- Content Reveal Animation -->
        <div class="absolute inset-0 flex flex-col items-center justify-end z-30 p-6 pointer-events-none">
          <div class="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all duration-500 ease-out delay-150">
            <h2 class="text-2xl font-bold text-white drop-shadow-lg">{{ t_img.title }}</h2>
            <p class="text-sm text-white/90 mt-2 drop-shadow-md">{{ t_img.description }}</p>
          </div>
          
          <!-- Animated Button -->
          <button 
          @click="viewImage(t_img.id)"
            class="mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out delay-300 hover:bg-white/20 hover:border-white/30 pointer-events-auto"
          >
            View Details
          </button>
        </div>
      </div>
    </div>

    <!-- Featured Image Section with Advanced Animation -->
    <section class="relative w-full h-[80vh] overflow-hidden mt-12 rounded-3xl mx-3 border border-white/20">
      <!-- Background Image with Parallax -->
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Featured"
          class="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-10000 ease-out"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>
      
      <!-- Floating Grid Overlay -->
      <article class="absolute inset-0 mix-blend-overlay pointer-events-none">
        <div class="grid grid-cols-12 grid-rows-6 h-full w-full gap-1 opacity-50">
          <div 
            v-for="i in 72" 
            :key="`grid-${i}`"
            class="border border-white/10 hover:bg-white/20 transition-all duration-300"
            :class="{
              'col-span-2': i % 5 === 0,
              'row-span-2': i % 7 === 0,
              'bg-white/5': i % 3 === 0
            }"
          ></div>
        </div>
      </article>
      
      <!-- Featured Content -->
      <div class="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h3 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Featured Work</h3>
        <p class="text-lg md:text-xl max-w-2xl mb-6 animate-fade-in-up delay-100">
          A showcase of my finest visual creations, captured in stunning 4K resolution.
        </p>
        <div class="flex gap-4 animate-fade-in-up delay-200">
          <button class="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
            View Portfolio
          </button>
          <button class="px-6 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  </div>
      <router-view class="fixed z-50"></router-view> 

</template>

<script setup>
import { useRouter } from 'vue-router'
import images from '../items'
const router = useRouter()

const viewImage = (id) => {
  router.push({ path: '/gallery/view', query: { v: id } })
}
</script>

<style scoped>
/* Base Styles */
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes animate-text {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-text {
  background-size: 300% 300%;
  animation: animate-text 6s ease infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: #4f46e5;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6366f1;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .columns-2 {
    columns: 1 !important;
  }
  
  section {
    height: 60vh;
  }
}
</style>