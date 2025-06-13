<template>
  <!-- Fullscreen Popup Overlay -->
  <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4"
    @click.self="closePopup">
    <!-- Glowing Animated Lights -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="n in 15" :key="n" class="absolute rounded-full opacity-20 blur-2xl" :style="{
        width: `${Math.random() * 150 + 80}px`,
        height: `${Math.random() * 150 + 80}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        background: `hsl(${Math.random() * 360}, 100%, 70%)`,
        animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite`,
        animationDelay: `${Math.random()}s`
      }"></div>
    </div>

    <!-- Popup Content Card -->
    <div
      class="relative max-w-5xl w-full rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-xl overflow-hidden backdrop-blur-2xl transition-all">
      <!-- Animated Gradient Border -->
      <div class="absolute inset-0 rounded-3xl border-4 border-transparent pointer-events-none">
        <div class="absolute inset-0 border-gradient animate-border-flash rounded-3xl"></div>
      </div>

      <!-- Main Grid -->
      <div class="grid lg:grid-cols-2 h-full">
        <!-- Image Column -->
        <div class="relative h-auto max-h-[450px] lg:h-[550px]">
          <!-- Navigation Buttons -->
          <button v-if="hasPrevImage" @click="PrevImage"
            class="absolute  left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center group transition-all duration-300 hover:scale-110">
            <svg class=" text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button v-if="hasNextImage" @click="NextImage"
            class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center group transition-all duration-300 hover:scale-110">
            <svg class=" text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Image or Not Found -->
          <div v-if="currentImage" class="h-full w-full">
            <img :src="currentImage.img" :alt="currentImage.title"
              class="w-full h-full object-cover object-center rounded-l-3xl transition-transform duration-1000 hover:scale-105" />
            <!-- Fancy Overlay Text -->
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent px-6 py-4">
              <h3 class="text-2xl font-semibold text-white drop-shadow-md animate-fade-in-up">{{ currentImage.title }}</h3>
            </div>
          </div>
          <div v-else class="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-gray-800/50">
            <div class="text-center p-8">
              <svg class="w-16 h-16 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 class="text-2xl font-bold text-white mt-4">Image Not Found</h3>
              <p class="text-gray-300 mt-2">The requested image (ID: {{ currentImageId }}) doesn't exist.</p>
              <button @click="closePopup"
                class="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all duration-300">
                Back to Gallery
              </button>
            </div>
          </div>
        </div>

        <!-- Text Column -->
        <div v-if="currentImage" class="relative p-8 overflow-y-auto max-h-[500px] flex flex-col justify-center">
          <!-- Close Button -->
          <button @click="closePopup"
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-transform duration-300 hover:scale-110">
            <svg class="" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Title & Description -->
          <div class="space-y-4">
         
            <h2 class="text-4xl font-extrabold text-white tracking-wide leading-tight animate-fade-in-up">
              {{ currentImage.title }}
            </h2>
            <p class="text-white/80 text-lg leading-relaxed animate-fade-in-up delay-100">
              {{ currentImage.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}

@keyframes borderFlash {
  0% {
    background: linear-gradient(45deg, #00f, #0ff, #0f0, #f0f, #f00, #00f);
    background-size: 600% 600%;
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.border-gradient {
  border: 4px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.animate-border-flash {
  animation: borderFlash 6s linear infinite;
  background: linear-gradient(90deg, #3b82f6, #9333ea, #ec4899);
  background-size: 200% 200%;
}

/* Smooth transitions for buttons */
button {
  transition: all 0.3s ease;
}
</style>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {images} from '../items'

const route = useRoute()
const router = useRouter()

const currentImageId = computed(() => Number(route.query.v))
const currentImage = computed(() => images.find((img) => img.id === currentImageId.value))

const hasPrevImage = computed(() => images.some(img => img.id === currentImageId.value - 1))
const hasNextImage = computed(() => images.some(img => img.id === currentImageId.value + 1))

const PrevImage = () => {
  if (hasPrevImage.value) {
    router.push({ path: '/gallery/view', query: { v: currentImageId.value - 1 } })
  }
}

const NextImage = () => {
  if (hasNextImage.value) {
    router.push({ path: '/gallery/view', query: { v: currentImageId.value + 1 } })
  }
}

const closePopup = () => {
  router.push('/gallery')
}
</script>