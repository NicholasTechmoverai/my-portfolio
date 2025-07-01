<template>
  <section class="space-y-8 md:space-y-16 p-4 md:p-6">
    <div
      class="p-3 bg-gradient-to-r from-purple-600/20 to-blue-500/10 mt-10 mx-3 border-2 border-white/20 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group">
      <h2
        class="text-2xl font-bold text-center animate-text bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
        My <span class="inline-block group-hover:rotate-12 transition-transform">✨</span> Top projects <span
          class="inline-block group-hover:-rotate-12 transition-transform">✨</span>
      </h2>
      <p class="text-center text-sm opacity-90 mt-1"> My top projects on both frontend and backend from 2022 -
        Date.now()!</p>
    </div>


    <div v-for="(project, index) in projects" :key="index"
      class="custom-scroll max-w-[1024px] w-full mx-auto px-2 sm:px-4 bg-gray-100 dark:bg-gray-700/90 border border-gray-200 dark:border-gray-500 rounded-2xl shadow-lg p-4 sm:p-6 mb-6 transition-all duration-300 ease-in-out">
      <div class="mb-4 sm:mb-6 relative">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          {{ project.title }} <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer"
            class="relative inline-flex items-center space-x-2 text-sm px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <span>Open Live</span>
          </a>

        </h2>
        <p class="text-gray-700 dark:text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
          {{ project.description }}
        </p>
        <button title="Expound" @click="viewProject(project.id)"
          class="absolute top-0 right-0 border-1 outline-0 cursor-pointer text-xl sm:text-2xl text-green-400 px-1 sm:px-2 rounded hover:bg-gray-600 hover:border-gray-400 border-gray-600 transition-colors">
          <ion-icon :name="openedSlide === index ? 'close-outline' : 'trending-up-outline'"></ion-icon>
        </button>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-xl sm:rounded-2xl shadow-md">
          <div class="flex transition-transform duration-300 ease-out"
            :style="{ transform: `translateX(-${currentSlide[index] * 100}%)` }">
            <div v-for="(img, i) in project.images" :key="i"
              class="min-w-full grid md:grid-cols-2 gap-4 sm:gap-6 items-start justify-center px-1 sm:px-2 py-2 sm:py-4">
              <!-- Image Section -->
              <div>
                <img :src="img.url" :alt="img.caption" class="w-full h-48 sm:h-60 md:h-80 object-cover rounded-lg"
                  loading="lazy" />
                <div class="p-2 sm:p-4 bg-white dark:bg-gray-800 mt-1 sm:mt-2 rounded-md">
                  <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {{ img.caption }}
                  </p>
                  <p class="text-2xs sm:text-xs text-gray-500 mt-1">
                    {{ img.credit }}
                    <span class="px-1 sm:px-2 mx-1 rounded-lg border border-gray-600 inline-block my-1 sm:my-0"
                      v-for="(lg, idx) in img.lng" :key="idx">
                      {{ lg }}
                    </span>
                  </p>
                </div>
              </div>

              <!-- Code Section -->
              <div
                class="bg-gray-900/90 text-green-400 p-2 sm:p-4 rounded-lg font-mono overflow-auto shadow-md h-[180px] sm:h-[230px] md:h-full">
                <div class="flex justify-between items-center mb-2 sm:mb-3 text-xs sm:text-sm">
                  <a :href="img.visit" class="text-blue-400 hover:underline flex items-center gap-1 transition-colors">
                    <ion-icon name="open-outline"></ion-icon> Visit
                  </a>

                  <button v-if="!showCopied" @click="copyToClipboard(img.code)"
                    class="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 transition-colors">
                    <ion-icon name="copy-outline"></ion-icon> Copy
                  </button>
                  <div v-if="showCopied"
                    class=" top-7 right-4 bg-green-500/90 text-white px-3 py-1 rounded-md text-sm animate-fade">
                    Copied!
                  </div>
                </div>
                <pre
                  class="custom-scroll max-h-[300px] sm:max-h-[400px] overflow-y-auto text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
<code>{{ img.code }}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Dots -->
        <div v-if="project.images.length > 1"
          class="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          <button v-for="(img, i) in project.images" :key="i" @click="setSlide(index, i)"
            class="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full focus:outline-none transition-all cursor-pointer"
            :class="currentSlide[index] === i
              ? 'bg-blue-600/90 hover:bg-blue-600 w-3 sm:w-4 md:w-6'
              : 'bg-gray-400/70 hover:bg-purple-400'
              " aria-label="Slide dot"></button>
        </div>
      </div>
    </div>
    <router-view class="fixed z-50"></router-view>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'
import { projects } from '../items'
const router = useRouter()
const showCopied = ref(false)
let copyTimeout = null
const viewProject = (id) => {
  router.push({ path: '/projects/view', query: { v: id } })
}
const currentSlide = ref([]);
const openedSlide = ref(null);

const activateThisProject = (index) => {
  openedSlide.value = openedSlide.value === index ? null : index;
};

onMounted(() => {
  currentSlide.value = projects.map(() => 0);
});

const setSlide = (projectIndex, slideIndex) => {
  currentSlide.value[projectIndex] = slideIndex;
};
const copyToClipboard = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    showCopied.value = true

    // Clear any existing timeout
    if (copyTimeout) clearTimeout(copyTimeout)

    // Hide the "Copied!" message after 2 seconds
    copyTimeout = setTimeout(() => {
      showCopied.value = false
    }, 2000)
  } catch (err) {
    console.error("Failed to copy:", err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = code
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      showCopied.value = true
      setTimeout(() => {
        showCopied.value = false
      }, 2000)
    } catch (e) {
      console.error("Fallback copy failed:", e)
    }
    document.body.removeChild(textArea)
  }
}
</script>

<style scoped>
/* Base styles for mobile first approach */
.custom-scroll {
  scrollbar-color: #404042 transparent;
}

.custom-scroll::-webkit-scrollbar {
  width: 3px !important;
  height: 3px !important;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #9030c8;
  border-radius: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .min-w-full>div {
    display: flex;
    flex-direction: column;
  }

  .min-w-full>div>div:first-child {
    order: 1;
  }

  .min-w-full>div>div:last-child {
    order: 2;
    height: auto;
    max-height: 200px;
  }
}

@media (min-width: 641px) and (max-width: 767px) {
  h2 {
    font-size: 1.25rem;
  }

  pre code {
    font-size: 0.8rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  pre code {
    font-size: 0.85rem;
  }
}

@media (min-width: 1024px) {
  .min-w-full {
    min-height: 400px;
  }
}

/* Transition effects */
button {
  transition: background-color 0.2s ease, transform 0.2s ease;
}

button:active {
  transform: scale(0.95);
}

img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}
</style>