<script setup>
import { ref, onMounted } from "vue";

const car = ref(null);

function moveRandom() {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

  if (car.value) {
    car.value.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
}

onMounted(() => {
  setInterval(moveRandom, 2000);
});
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

  <div class="flex flex-col items-center justify-between lg:flex-row w-[100%] max-w-[1024px]">
    <div>
      <div>
        <!-- Cloud Wrapper -->
        <div
          class="relative h-[200px] mt-10 mb-[-70px] max-w-md w-full backdrop-blur-md rounded-[50%_50%_50%_50%/60%_40%] shadow-lg p-6 text-center text-white text-shadow-gray-500 overflow-hidden">
          <img class="absolute top-[-35px] animate-bounce duration-[2000s] delay-[5000000000ms]"
            src="../assets/580b585b2edbce24c47b2639.png" alt="" />

          <!-- Cloud bubbles (decorative puffs) -->
          <div class="absolute w-24 h-24 bg-white/10 rounded-full top-[-30px] left-[20px] blur-md animate-pulse"></div>
          <div class="absolute w-16 h-16 bg-white/10 rounded-full top-[-20px] right-[30px] blur-sm animate-pulse"></div>
          <div class="absolute w-20 h-20 bg-white/10 rounded-full bottom-[-30px] left-[50px] blur-md"></div>

          <!-- Content -->
          <div class="relative z-10">
            <h2 class="text-lg font-semibold text-white mb-2">☁️ Welcome, Visionary</h2>
            <p class="text-sm leading-relaxed">
              You’ve just stepped into a space where code meets creativity, and curiosity writes the story.
              I'm <span class="text-purple-300 font-medium">Kariuki Nicholas</span>, a full-stack developer crafting
              digital experiences where code meets creativity.
              This is my interactive canvas—explore projects that blend innovation with purpose.
            </p>

            <a href="#blog" class="inline-block mt-4 text-xs text-purple-300 hover:text-purple-200 transition">
              → Begin the Journey
            </a>
          </div>

        </div>
      </div>
      <div class="relative flex flex-col items-center md:rotate-[-90deg]">
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

<div class="hover-card-container">
  <div class="hover-card-wrapper">
    <div class="hover-card hover-card-top">
      <div class="hover-card-side hover-card-side1"><h2></h2></div>
      <div class="hover-card-side hover-card-side2"><h2></h2></div>
    </div>
    <div class="hover-card hover-card-main">
      <div class="hover-card-side hover-card-side1"><h2>TRANSITION</h2></div>
      <div class="hover-card-side hover-card-side2"><h2>TRANSITION</h2></div>
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
