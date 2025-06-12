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
        <div class="relative h-64 lg:h-[550px]">
          <button class="absolute z-100 text-2xl border cursor-pointer bg-gray-400/40 border-gray-600 px-1 rounded-2xl"
            @click="PrevImage">
            << </button>
              <button
                class="absolute right-0 z-100 text-2xl border cursor-pointer bg-gray-400/40 border-gray-600 px-1 rounded-2xl"
                @click="NextImage">>></button>

              <img :src="currentImage.img" :alt="currentImage.title"
                class="w-full h-full object-cover object-center rounded-l-3xl transition-transform duration-1000 hover:scale-105" />
              <!-- Fancy Overlay Text -->
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent px-6 py-4">
                <h3 class="text-2xl font-semibold text-white drop-shadow-md animate-fade-in-up">{{ currentImage.title }}
                </h3>
              </div>

        </div>

        <!-- Text Column -->
        <div class="relative p-8 overflow-y-auto max-h-[500px] flex flex-col justify-center">
          <!-- Close Button -->
          <button @click="closePopup"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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

  0%,
  100% {
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
</style>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import images from '../items'

const route = useRoute()
const router = useRouter()

const currentImageId = computed(() => Number(route.query.v))
const currentImage = computed(() =>
  images.find((img) => img.id === currentImageId.value)
)



const PrevImage = () => {
  router.push({ path: '/gallery/view', query: { v: currentImageId.value - 1 } })
}
const NextImage = () => {
  router.push({ path: '/gallery/view', query: { v: currentImageId.value + 1 } })
}
const closePopup = () => {
  router.push('/gallery')
}
watch((currentImageId)=>{
      console.log("404", currentImageId )

})

</script>
