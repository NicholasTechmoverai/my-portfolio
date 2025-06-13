<script setup>
import { ref, onMounted } from "vue"

const car = ref(null)
const ismobile = window.innerWidth < 520

const moveRandom = () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100))
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100))

  if (car.value) {
    car.value.style.transform = `translate(${randomX}px, ${randomY}px)`
  }
}

const words = ref([
  "You've", "just", "entered", "a", "realm", "where", "code", "meets", "creativity,",
  "and", "curiosity", "fuels", "the", "vision.",
  "I'm", "Nicholas", "Kariuki,", "a", "full-stack", "developer",
  "crafting", "immersive", "digital", "experiences.",
  "This", "is", "my", "interactive", "canvas—", "explore", "projects",
  "that", "merge", "innovation", "with", "purpose."
])

const getWordClass = (word) => {
  const clean = word.toLowerCase().replace(/[^\w\-]/g, '')
  if (['nicholas', 'kariuki'].includes(clean)) return 'persona'
  if (['full-stack', 'developer'].includes(clean)) return 'proffesion'
  return ''
}

onMounted(() => {
  setInterval(moveRandom, 2000)

  const wordEls = document.querySelectorAll('#welcomeMessage .word')
  let currentIndex = 0

  const highlightNextWord = () => {
    wordEls.forEach(word => word.classList.remove('highlight'))

    const currentWord = wordEls[currentIndex]
    const wordText = currentWord.textContent.trim().toLowerCase()

    currentWord.classList.add('highlight')

    if (['nicholas', 'kariuki'].includes(wordText)) {
      currentWord.classList.add('persona')
    }

    if (['full-stack', 'developer'].includes(wordText)) {
      currentWord.classList.add('proffesion')
    }

    currentIndex = (currentIndex + 1) % wordEls.length

    const speed = Math.floor(Math.random() * 200 + 200)
    setTimeout(highlightNextWord, speed)
  }

  highlightNextWord()
})
</script>

<template>
  <div ref="car"
    class="flex justify-center items-center h-[200px] absolute transition-all duration-1000 scale-20 opacity-45 z-[1]">
    <!-- Car Container -->
    <div class="relative w-[300px] h-[120px] bg-gray-800 rounded-[60px] shadow-lg">
      <!-- Roof/Top of the Car -->
      <div class="absolute top-[-50px] left-[50px] w-[200px] h-[80px] bg-gray-700 rounded-[100px]"></div>

      <!-- Front Window -->
      <div
        class="absolute top-[-40px] left-[60px] w-[60px] h-[60px] bg-cyan-200 rounded-bl-[30px] rounded-tl-[50%] rounded-tr-[20%]">
      </div>

      <!-- Rear Window -->
      <div
        class="absolute top-[-40px] right-[60px] w-[60px] h-[60px] bg-cyan-200 rounded-br-[30px] rounded-tr-[50%] rounded-tl-[20%]">
      </div>

      <!-- Left Wheel -->
      <div
        class="absolute bottom-[-25px] left-[40px] w-[50px] h-[50px] bg-black rounded-full border-[6px] border-gray-500">
      </div>

      <!-- Right Wheel -->
      <div
        class="absolute bottom-[-25px] right-[40px] w-[50px] h-[50px] bg-black rounded-full border-[6px] border-gray-500">
      </div>
    </div>
  </div>
  <!-- Featured Image Section with Advanced Animation -->
  <section
    class="relative w-[96%] max-w-[1150px] box-border md:mb-7 h-[70vh] max-h-[800px] md:h-[80vh] overflow-hidden mt-12 rounded-3xl m-5 border border-white/10">
    <!-- Background Image with Parallax -->
    <img src="../assets/layered-waves-haikei.svg" alt="layered waves"
      class="absolute inset-0 w-full h-full object-cover transform opacity-80 transition-transform duration-[10000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
      data-speed="0.8" />
    <div class="absolute inset-0 overflow-hidden opacity-70">
      <img
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Featured"
        class="w-full z-30 box-border bg-fixed opacity-70 h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-10000 ease-out" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    </div>

    <!-- Floating Grid Overlay -->
    <article class="absolute z-50 inset-0 mix-blend-overlay pointer-events-none">
      <div class="grid grid-cols-12 grid-rows-6 h-full w-full gap-1 opacity-50">
        <div v-for="i in 72" :key="`grid-${i}`"
          class="border z-70 border-white/20 bg-gray-400/20 hover:bg-white/20 transition-all duration-300" :class="{
            'col-span-2': i % 5 === 0,
            'row-span-2': i % 7 === 0,
            'bg-white/5': i % 3 === 0
          }"></div>
      </div>
    </article>

    <!-- Cloud Animations -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Cloud 1 - Moves diagonally -->
      <img class="absolute top-[10px] w-[200px] opacity-40 cloud-animation" src="../assets/580b585b2edbce24c47b2639.png"
        alt="clouds" style="animation: floatCloud1 45s linear infinite;" />

      <!-- Cloud 2 - Moves left to right -->
      <img class="absolute top-[20px] w-[200px] opacity-40 cloud-animation" src="../assets/58af038a6c252499281ae91c.png"
        alt="clouds" style="animation: floatCloud2 60s linear infinite;" />

      <!-- Cloud 3 - Moves right to left -->
      <img class="absolute top-[30px] w-[200px] opacity-40 cloud-animation" src="../assets/580b585b2edbce24c47b2636.png"
        alt="clouds" style="animation: floatCloud3 50s linear infinite;" />
    </div>

    <!-- Cloud bubbles (decorative puffs) -->
    <div class="absolute w-24 h-24 bg-white/10 rounded-full top-[-30px] left-[20px] blur-md animate-pulse"></div>
    <div class="absolute w-16 h-16 bg-white/10 rounded-full top-[-20px] right-[30px] blur-sm animate-pulse"></div>
    <div class="absolute w-20 h-20 bg-white/10 rounded-full bottom-[-30px] left-[50px] blur-md"></div>

    <!-- Featured Content -->
    <div class="relative z-10 h-full flex flex-col justify-end p-2 md:p-8 text-white">
      <h3 class="text-2xl md:text-4xl font-bold mb-4 animate-fade-in-up">Developer's stack</h3>
      <div>
        <div>
          <!-- Dynamic Welcome Message -->
          <div class="relative z-10">
            <h2 class="text-lg font-semibold text-white mb-2">☁️ Welcome, Visionary</h2>
            <p id="welcomeMessage" class="text-[20px] md:text-xl leading-relaxed text-gray-200">
              <span v-for="(word, index) in words" :key="index" class="word" :class="getWordClass(word)">
                {{ `${word} ` }}
              </span>
            </p>
          </div>

        </div>
      </div>
      <div class="flex gap-4 animate-fade-in-up delay-200">
        <router-link to="/projects"
          class="px-6 py-0 md:py-2 my-1 bg-gradient-to-r from-purple-600/70 to-blue-500/40 border border-gray-500  text-black rounded-full font-medium hover:bg-gray-400/50 cursor-pointer transition-colors">
          View projects
        </router-link>
        <router-link to="/about"
          class="px-6 py-0 md:py-2 my-1 border border-white rounded-full font-medium cursor-pointer hover:bg-white/10 transition-colors">
          →about Me
        </router-link>
      </div>
    </div>
  </section>
  <div class="flex flex-col items-center mb-7 justify-between lg:flex-row w-[100%] max-w-[1024px]">
    <div>


      <div class="relative flex flex-col items-center md:rotate-[-90deg] h-full">
        <!-- Profile Image -->
        <img
          class="border border-gray-600 w-[230px] h-[230px] object-cover rounded-[2rem] absolute top-29 left-1/2 transform -translate-x-1/2 z-20 md:rotate-[90deg] lg:top-41"
          src="../assets/image.png" alt="User Avatar" />

        <!-- Main Card -->
        <div
          class="relative w-[90%] sm:w-[400px] mt-52 lg:mt-64 h-[500px] rounded-[2rem] overflow-hidden border border-gray-600 bg-gradient-to-b from-[#2F3D59]/80 to-[#0B1326]/80 backdrop-blur-md shadow-2xl z-10">
          <!-- Top Pill (Decoration) -->
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[150px] bg-[#21252e]/90 rounded-b-[2rem] border border-gray-600 border-t-0 z-10">
          </div>

          <!-- Content -->
          <div class="relative z-20 mt-[200px] px-4 text-center text-[#c3bcbc] md:rotate-[90deg] md:ml-8">
            <p class="text-3xl font-bold">Kariuki Nicholas</p>
            <p class="text-sm text-gray-400">@gathogo</p>

            <!-- Info List -->
            <div class="mt-4 px-6 text-left space-y-3 text-[13px] tracking-wider [&_ion-icon]:text-purple-500">
              <p><ion-icon name="calendar-outline"></ion-icon> 20.11.2003</p>
              <p>
                <ion-icon name="code-slash-outline"></ion-icon> Software Engineer ||
                Computer Technologist
              </p>
              <p><ion-icon name="build-outline"></ion-icon> Full Stack Developer</p>
            </div>

            <!-- Footer -->
            <div class="flex justify-between items-center mt-6 px-6 text-xs text-[#c3bcbc]">
              <div class="absolute -top-6 -left-6 w-20 h-20 bg-[#334155] rounded-full opacity-30 animate-pulse"></div>
              <div class="absolute -top-2 left-12 w-10 h-10 bg-[#475569] rounded-full opacity-20 animate-ping"></div>
              <p><ion-icon name="location-outline"></ion-icon> Nairobi, Kenya</p>
              <p>&copy; May, 2025</p>
            </div>
          </div>

          <!-- Floating GIF Background -->
          <img
            class="w-60 absolute top-1/2 right-[-80px] transform -translate-y-1/2 opacity-50 pointer-events-none saturate-100 brightness-50 md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:rotate-90"
            src="https://media.tenor.com/dhfraztxBo8AAAAi/globe-joypixels.gif" alt="Background GIF" />
        </div>
      </div>
    </div>

    <div
      class="relative text-white [&_ion-icon]:shadow-2xl [&_ion-icon]:text-4xl w-[90%] sm:w-[100%] sm:max-w-[600px] lg:w-[400px] [&_div]:overflow-hidden">
      <div class="flex flex-row items-center mt-10 w-[100%] justify-between">
        <div class="rounded-3xl p-4 bg-gradient-to-bl from-[#046185] to-[#092361] w-[65%] border border-gray-600">
          <ion-icon name="mail"></ion-icon>
          <p>Email</p>
          <p class="text-[12px]"><a href="mailto:kariuki12nicholas@gmail.com">kariuki12nicholas@gmail.com</a></p>
        </div>

        <div class="rounded-3xl p-4 bg-gradient-to-bl from-[#2492e6] to-[#075d9f] ml-4 w-[35%] border border-gray-600">
          <ion-icon name="logo-facebook"></ion-icon>
          <a href="https://web.facebook.com/profile.php?id=100090430154934">
            <p>Facebook</p>
            <p class="text-[12px]">facebook.com/gathogo</p>
          </a>
        </div>
      </div>

      <div class="rounded-3xl p-4 bg-gradient-to-b from-[#434343] to-[#0d1424] mt-4 border border-gray-600">

        <p class="text-[12px]"><a href="https://github.com/NicholasTechmoverai">
            <ion-icon name="logo-github"></ion-icon>
            <p>Github</p>
          </a></p>
      </div>
      <div class="flex flex-row items-center mt-4 h-[250px] justify-between">
        <div
          class="rounded-3xl p-4 bg-gradient-to-b from-[#434343] to-[#0d1424] w-[60%] h-[100%] border border-gray-600">
          <ion-icon name="logo-figma"></ion-icon>
          <p>Figma</p>
          <p class="text-[12px]">figma.com/gathogo</p>
        </div>
        <div class="flex flex-col items-center ml-2 w-[40%] justify-between h-[100%]">
          <div class="rounded-3xl p-4 bg-[white] text-black w-[100%] border border-gray-600">
            <ion-icon name="logo-linkedin"></ion-icon>
            <p>LinkedIn</p>
            <p class="text-[12px]">linkedin.com</p>
          </div>

          <div
            class="rounded-3xl p-4 bg-gradient-to-bl from-[#24e661] to-[#1d863e] mt-2 w-[100%] border border-gray-600">
            <ion-icon name="logo-whatsapp"></ion-icon>
            <a href="https://wa.me/0741540233">
              <p>WhatsApp</p>
              <p>0741540233</p>
            </a>

          </div>
        </div>
      </div>
      <div class="rounded-3xl p-4 bg-gradient-to-bl from-[purple] to-[orange] mt-4 border border-gray-600">
        <ion-icon name="logo-instagram"></ion-icon>
        <a href="https://www.instagram.com/kariuki_g_nicholas/#">
          <p>Instagram</p>
          <p class="text-[12px]">@instagram.com</p>
        </a>

      </div>
    </div>
  </div>

  <div v-if="!ismobile" class="hover-card-container">
    <div class="hover-card-wrapper">
      <div class="hover-card hover-card-top">
        <div class="hover-card-side hover-card-side1">
          <h2></h2>
        </div>
        <div class="hover-card-side hover-card-side2">
          <h2></h2>
        </div>
      </div>
      <div class="hover-card hover-card-main">
        <div class="hover-card-side hover-card-side1">
          <h2></h2>
        </div>
        <div class="hover-card-side hover-card-side2">
          <h2></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hover-card-wrapper {
  cursor: pointer;
  position: relative;
  width: 500px;
  height: 350px;
  box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 0.5);
}

.hover-card-wrapper:hover .hover-card-top .hover-card-side {
  transform: rotateX(0deg);
}

.hover-card-wrapper:hover .hover-card-top .hover-card-side:after {
  opacity: 0;
  transition-delay: 0.2s;
}

.hover-card-wrapper:hover .hover-card-main .hover-card-side:after {
  opacity: 1;
}

.hover-card-wrapper:hover .hover-card-main .hover-card-side2 {
  transform: rotateY(-90deg) translateX(250px);
}

.hover-card-wrapper:hover .hover-card-main .hover-card-side1 {
  transform: rotateY(-90deg) translateX(-250px);
}

.hover-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 350px;
  transition: 0.5s linear all;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background-size: 500px 350px;
}

.hover-card h2 {
  color: rgb(88, 85, 85);
  font-family: monospace;
  width: 200%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hover-card .hover-card-side {
  overflow: hidden;
  position: relative;
  width: 250px;
  height: 350px;
  background-size: 500px 350px;
  transition: 0.5s linear transform;
  transition: 1s cubic-bezier(0.5, -0.03, 0.58, 1.08) transform;
}

.hover-card .hover-card-side:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s cubic-bezier(0.5, -0.03, 0.58, 1.08) opacity;
}

.hover-card .hover-card-side1 {
  background-position: 0% 0%;
}

.hover-card .hover-card-side2 {
  background-position: 100% 0;
}

.hover-card .hover-card-side2 h2 {
  transform: translateX(-50%);
}

.hover-card.hover-card-main {
  transform-origin: bottom;
}

.hover-card.hover-card-main .hover-card-side {
  background-image: url(../assets/1st-computer.png);

}

.hover-card.hover-card-main .hover-card-side1 {
  transform-origin: left;
}

.hover-card.hover-card-main .hover-card-side2 {
  transform-origin: right;
}

.hover-card.hover-card-main .hover-card-side:after {
  opacity: 0;
}

.hover-card.hover-card-main .hover-card-side1:after {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
}

.hover-card.hover-card-main .hover-card-side2:after {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5));
}

.hover-card.hover-card-top {
  transform-origin: bottom;
}

.hover-card.hover-card-top .hover-card-side1 {
  transform-origin: right;
  transform: rotateY(-90deg) translateX(-250px);
}

.hover-card.hover-card-top .hover-card-side1:after {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
}

.hover-card.hover-card-top .hover-card-side2 {
  transform-origin: left;
  transform: rotateY(-90deg) translateX(-250px);
}

.hover-card.hover-card-top .hover-card-side2:after {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
}

.hover-card.hover-card-top .hover-card-side {
  background-image: url(../assets/2nd-computer.png);
}
</style>
<style>
/* Cloud Animation Keyframes */
@keyframes floatCloud1 {
  0% {
    transform: translateX(-20%) translateY(0);
  }

  50% {
    transform: translateX(100%) translateY(50px);
  }

  100% {
    transform: translateX(-20%) translateY(0);
  }
}

@keyframes floatCloud2 {
  0% {
    transform: translateX(-100%) translateY(20px);
  }

  100% {
    transform: translateX(100vw) translateY(0);
  }
}

@keyframes floatCloud3 {
  0% {
    transform: translateX(100vw) translateY(40px);
  }

  100% {
    transform: translateX(-100%) translateY(0);
  }
}

.cloud-animation {
  will-change: transform;
  animation-timing-function: linear;
}

.word {
  transition: all 0.5s ease;
  position: relative;
  padding: 0 2px;
}

.word.highlight {
  color: #6366f1;
  /* Indigo-500 */
  background-color: rgba(128, 128, 128, 0.341);
  font-weight: normal;
  transition: all 0.7s ease;
  border-radius: 5px;
  text-decoration: underline;
}

.word.persona {
  color: #22c55e;
  /* Green-500 */
  font-weight:bold;
}

.word.proffesion {
  color: #f97316;
  /* Orange-500 */
}

@keyframes pulseHighlight {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>