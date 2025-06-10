<template>
  <div class="fixed top-0 z-50 w-full">
    <!-- Mechanical Gear Trigger -->
     <!-- @click="toggleMenu" -->
    <div class="absolute top-[-10px] left-[-30px] w-[110px] h-fit z-60 cursor-pointer group" title="MENU"
      @mouseenter="onHoverIn" @mouseleave="onHoverOut">
      <div class="mechanical-gear" :class="[gearDirection, { 'gear-idle': !showMenu && !isHovered }]">
        <div class="gear-teeth"></div>
        <div class="gear-inner">
          <div class="gear-bolt">
            <div class="bolt-notch" v-for="n in 6" :key="n" :style="{ transform: `rotate(${n * 60}deg)` }"></div>
          </div>
        </div>
        <div class="gear-pulse" v-if="showMenu"></div>
      </div>
      <div class="chain-link" v-if="showMenu"></div>
    </div>

    <!-- Mechanical Sliding Panel -->
    <div
      class="absolute top-0 left-[-30px] w-[270px] z-50 pl-[80px] p-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-r-xl border-l-4 border-amber-500 shadow-2xl grid grid-cols-2 gap-3 md:rounded-lg md:flex md:flex-row md:w-auto md:pl-[80px] md:gap-3 [&_a]:bg-gray-700 [&_a:hover]:bg-amber-600 [&_a]:px-4 [&_a]:py-2 [&_a]:rounded-md [&_a]:transition-all [&_a]:duration-300 [&_a:hover]:scale-105 [&_a]:text-gray-200 [&_a]:font-medium [&_a]:shadow [&_a:hover]:shadow-lg [&_a:hover]:text-gray-900 [&_a]:flex [&_a]:items-center [&_a]:gap-2"
      :class="{ 'panel-extend': showMenu, 'panel-retract': !showMenu }" @mouseenter="onHoverIn"
      @mouseleave="onHoverOut">
      <router-link @click="onHoverOut" to="/skills">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Skills
      </router-link>
      <router-link @click="onHoverOut" to="/projects">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clip-rule="evenodd" />
        </svg>
        Projects
      </router-link>
      <router-link @click="onHoverOut" to="/contact-me">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Contact
      </router-link>
      <router-link @click="onHoverOut" to="/about">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
            clip-rule="evenodd" />
        </svg>
        About
      </router-link>
      <router-link @click="onHoverOut" to="/gallery">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clip-rule="evenodd" />
        </svg>
        Gallery
      </router-link>
      <router-link @click="onHoverOut" to="/">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Home
      </router-link>
    </div>

    <!-- Industrial Control Buttons -->
    <div
      class="sticky top-0 right-[10px] ml-auto flex m-1 gap-3 flex-row items-center z-30 w-full [&_button]:cursor-pointer [&_button]:rounded-full [&_button]:px-5 [&_button]:py-2 [&_button]:transition-all [&_button]:duration-300 [&_button]:font-bold [&_button]:uppercase [&_button]:tracking-wider [&_button]:text-sm">
      <div class="ml-auto mr-[15px] gap-3 flex">
        <button
          class="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-amber-100 shadow-lg hover:shadow-amber-800/50 group">
          <router-link @click="onHoverOut" to="/contact-me">
            <span class="group-hover:scale-110 transition-transform">Get in Touch</span></router-link>
        </button>
        <!-- <button class="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-blue-100 shadow-lg hover:shadow-blue-800/50 group">
          <span class="group-hover:scale-110 transition-transform">Download CV</span>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const showMenu = ref(false);
const clicked = ref(false);
const direction = ref("");
const isHovered = ref(false);

const toggleMenu = () => {
  clicked.value = !clicked.value;
  showMenu.value = clicked.value;
  direction.value = clicked.value ? "gear-spin-forward" : "gear-spin-reverse";
  setTimeout(() => {
    direction.value = "gear-idle";
  }, 600);
};

const onHoverIn = () => {
  isHovered.value = true;
  if (!clicked.value) {
    showMenu.value = true;
    direction.value = "gear-spin-forward";
  }
};

const onHoverOut = () => {
  isHovered.value = false;
  if (!clicked.value) {
    showMenu.value = false;
    direction.value = "gear-spin-reverse";
  }
};

const gearDirection = computed(() => direction.value);
</script>

<style scoped>
.mechanical-gear {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 50%, #1a202c 100%);
  border-radius: 50%;
  box-shadow:
    0 0 0 2px #f59e0b,
    0 0 15px rgba(0, 0, 0, 0.7),
    inset 0 0 10px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  z-index: 10;
}

.gear-teeth {
  position: absolute;
  width: 100%;
  height: 100%;
  background: conic-gradient(from 0deg,
      #f59e0b 0deg 30deg,
      #d97706 30deg 60deg,
      #f59e0b 60deg 90deg,
      #d97706 90deg 120deg,
      #f59e0b 120deg 150deg,
      #d97706 150deg 180deg,
      #f59e0b 180deg 210deg,
      #d97706 210deg 240deg,
      #f59e0b 240deg 270deg,
      #d97706 270deg 300deg,
      #f59e0b 300deg 330deg,
      #d97706 330deg 360deg);
  clip-path: polygon(50% 50%,
      85% 15%,
      90% 20%,
      85% 25%,
      90% 30%,
      85% 35%,
      90% 40%,
      85% 45%,
      90% 50%,
      85% 55%,
      90% 60%,
      85% 65%,
      90% 70%,
      85% 75%,
      90% 80%,
      85% 85%,
      50% 75%,
      15% 85%,
      10% 80%,
      15% 75%,
      10% 70%,
      15% 65%,
      10% 60%,
      15% 55%,
      10% 50%,
      15% 45%,
      10% 40%,
      15% 35%,
      10% 30%,
      15% 25%,
      10% 20%,
      15% 15%);
  border-radius: 50%;
}

.gear-inner {
  position: absolute;
  width: 50%;
  height: 50%;
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow:
    inset 0 0 8px rgba(0, 0, 0, 0.8),
    0 0 5px rgba(0, 0, 0, 0.5);
}

.gear-bolt {
  position: absolute;
  width: 60%;
  height: 60%;
  background: #f59e0b;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow:
    inset 0 0 5px rgba(0, 0, 0, 0.5),
    0 0 3px rgba(0, 0, 0, 0.3);
}

.bolt-notch {
  position: absolute;
  width: 30%;
  height: 8%;
  background: #d97706;
  left: 50%;
  top: 50%;
  margin-left: -15%;
  margin-top: -4%;
}

.gear-pulse {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(245, 158, 11, 0) 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1.5s infinite;
}

.chain-link {
  position: absolute;
  width: 30px;
  height: 15px;
  background: #4a5568;
  border: 2px solid #f59e0b;
  border-radius: 5px;
  top: 50%;
  left: 60px;
  transform: translateY(-50%);
  z-index: 5;
}

.chain-link::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: #4a5568;
  border: 2px solid #f59e0b;
  border-radius: 50%;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
}

.gear-spin-forward {
  animation-name: rotate-forward;
}

.gear-spin-reverse {
  animation-name: rotate-reverse;
}

.gear-idle {
  animation: idle-spin 10s linear infinite;
}

@keyframes rotate-forward {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

@keyframes idle-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.7;
  }

  70% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }

  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
}

/* Mechanical Panel Animations */
.panel-extend {
  animation: panel-extend 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.panel-retract {
  animation: panel-retract 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
}

@keyframes panel-extend {
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }

  70% {
    transform: translateX(10%);
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes panel-retract {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  30% {
    transform: translateX(10%);
  }

  100% {
    transform: translateX(-120%);
    opacity: 0;
  }
}

/* Hover effects */
.mechanical-gear:hover {
  filter: brightness(1.2);
  box-shadow:
    0 0 0 3px #f59e0b,
    0 0 20px rgba(245, 158, 11, 0.5),
    inset 0 0 10px rgba(0, 0, 0, 0.8);
}

.mechanical-gear:hover .gear-teeth {
  animation: teeth-glow 1.5s infinite;
}

@keyframes teeth-glow {

  0%,
  100% {
    filter: brightness(1);
  }

  50% {
    filter: brightness(1.3);
  }
}
</style>