<template>
    <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4 overflow-x-auto md:overflow-x-hidden overflow-y-auto"
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

        <!-- Main Content -->
        <div v-if="currentProject"
            class="custom-scroll max-w-[1024px] w-full overflow-x-hidden mx-auto px-4 sticky top-0 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg p-6 mb-6 transition-all duration-500 ease-in-out">
            <div class="mb-6 relative">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                    {{ currentProject.title }}
                </h2>
                <p class="text-gray-700 dark:text-gray-300 mt-2 text-base sm:text-lg">
                    {{ currentProject.description }}
                </p>
                <div v-if="currentProject.tags" class="flex flex-wrap gap-2 mt-3">
                    <span v-for="(tag, index) in currentProject.tags" :key="index"
                        class="px-2 py-1 text-xs font-medium rounded-full"
                        :class="tagClasses[index % tagClasses.length]">
                        {{ tag }}
                    </span>
                </div>
                <button @click="closePopup()"
                    class="absolute top-0 right-0 border-1 outline-0 cursor-pointer text-2xl text-green-400 px-2 rounded hover:bg-gray-600 hover:border-gray-400 border-gray-600 transition-colors">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <div class="relative">
                <!-- Navigation Arrows -->
                <button v-if="currentProject.images.length > 1" @click="prevSlide"
                    class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/90 text-white rounded-full p-2 shadow-lg transition-all"
                    :disabled="currentSlide === 0">
                    <ion-icon name="chevron-back-outline" class="text-xl"></ion-icon>
                </button>

                <button v-if="currentProject.images.length > 1" @click="nextSlide"
                    class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/90 text-white rounded-full p-2 shadow-lg transition-all"
                    :disabled="currentSlide === currentProject.images.length - 1">
                    <ion-icon name="chevron-forward-outline" class="text-xl"></ion-icon>
                </button>

                <!-- Carousel Content -->
                <div class="overflow-hidden rounded-2xl shadow-md">
                    <div class="flex transition-transform duration-300 ease-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="(img, i) in currentProject.images" :key="i"
                            class="min-w-full grid md:grid-cols-2 gap-6 items-start justify-center px-2 py-4">
                            <!-- Image Section -->
                            <div>
                                <img :src="img.url" :alt="img.caption"
                                    class="w-full h-60 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
                                    loading="lazy" />
                                <div class="p-4 bg-white dark:bg-gray-700 mt-2 rounded-md">
                                    <p class="text-sm text-gray-700 dark:text-gray-300">
                                        {{ img.caption }}
                                    </p>
                                    <p class="text-2xs sm:text-xs text-gray-500 mt-1">
                                        {{ img.credit }}
                                        <span
                                            class="px-1 sm:px-2 mx-1 rounded-lg border border-gray-600 inline-block my-1 sm:my-0"
                                            v-for="(lg, idx) in img.lng" :key="idx">
                                            {{ lg }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <!-- Code Section -->
                            <div
                                class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono overflow-auto shadow-md h-[230px] md:h-[100%]">
                                <div class="flex justify-between items-center mb-3 text-sm">
                                    <a v-if="img.visit" :href="img.visit" target="_blank" rel="noopener noreferrer"
                                        class="text-blue-400 hover:underline flex items-center gap-1 transition-colors">
                                        <ion-icon name="open-outline"></ion-icon> Visit
                                    </a>
                                    <span v-else></span>
                                    <button v-if="!showCopied" @click="copyToClipboard(img.code)"
                                        class="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 transition-colors">
                                        <ion-icon name="copy-outline"></ion-icon> Copy
                                    </button>
                                    <div v-if="showCopied"
                                        class=" top-7 absolute right-4 bg-green-500/90 text-white px-3 py-1 rounded-md text-sm animate-fade">
                                        Copied!
                                    </div>
                                </div>
                                <pre
                                    class="custom-scroll max-h-[400px] overflow-y-auto text-sm leading-relaxed whitespace-pre-wrap">
<code>{{ img.code }}</code>
                </pre>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- Carousel Dots -->
                <div v-if="currentProject.images.length > 1"
                    class="flex justify-center gap-3 mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
                    <button v-for="(img, i) in currentProject.images" :key="i" @click="setSlide(i)"
                        class="w-3 h-3 sm:w-4 sm:h-4 rounded-full focus:outline-none transition-all cursor-pointer"
                        :class="currentSlide === i
                            ? 'bg-blue-600/90 hover:bg-blue-600 w-4 sm:w-6'
                            : 'bg-gray-400/70 hover:bg-purple-400'
                            " :aria-label="`Go to slide ${i + 1}`"></button>
                </div>
            </div>

            <!-- Project Links -->
            <div v-if="currentProject.links" class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Project Links</h3>
                <div class="flex flex-wrap gap-3">
                    <a v-for="(link, key) in currentProject.links" :key="key" :href="link.url" target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <ion-icon :name="linkIcons[key] || 'link-outline'"></ion-icon>
                        <span>{{ link.label || key }}</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Invalid project ID state -->
        <div v-else class="relative text-center p-8 max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
            <div class="text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Project Not Found</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">The requested project (ID: {{ currentProjectId }}) doesn't
                exist or has been removed.</p>
            <button @click="closePopup"
                class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Back to Projects
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../items'

const route = useRoute()
const router = useRouter()

const currentSlide = ref(0)
const showCopied = ref(false)
let copyTimeout = null

const tagClasses = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
]

const linkIcons = {
    github: 'logo-github',
    demo: 'globe-outline',
    website: 'globe-outline',
    documentation: 'document-text-outline'
}

const currentProjectId = computed(() => Number(route.query.v))
const currentProject = computed(() => projects.find((prj) => prj.id === currentProjectId.value))

// Reset slide when project changes
watch(currentProjectId, () => {
    currentSlide.value = 0
})

const setSlide = (slideIndex) => {
    currentSlide.value = slideIndex
}

const nextSlide = () => {
    if (currentSlide.value < currentProject.value.images.length - 1) {
        currentSlide.value++
    }
}

const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--
    }
}

const closePopup = () => {
    router.push('/projects')
}

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

// Keyboard navigation
onMounted(() => {
    const handleKeyDown = (e) => {
        if (!currentProject.value) return

        switch (e.key) {
            case 'ArrowLeft':
                prevSlide()
                break
            case 'ArrowRight':
                nextSlide()
                break
            case 'Escape':
                closePopup()
                break
        }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
})
</script>

<style>
@keyframes pulse {

    0%,
    100% {
        opacity: 0.2;
        transform: scale(1);
    }

    50% {
        opacity: 0.4;
        transform: scale(1.1);
    }
}

.animate-fade {
    animation: fade 2s ease-out;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    20% {
        opacity: 1;
        transform: translateY(0);
    }

    80% {
        opacity: 1;
        transform: translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateY(-10px);
    }
}

.custom-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
}
</style>