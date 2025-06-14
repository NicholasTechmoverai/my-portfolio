<template>
  <div
    class="absolute top-[0%] left-0 pointer-events-none z-0 flex items-center justify-center w-full h-full opacity-35"
  >
    <div class="relative w-full h-full flex items-center justify-center">
      <div
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0"
      >
        <!-- Main Progress Circle -->
        <div
          class="relative  z-0"
          :style="{ width: circleSize + 'px', height: circleSize + 'px' }"
        >
          <svg class="w-full h-full" viewBox="0 0 128 128">
            <!-- Background glow -->
            <circle
              class="text-gray-300/20"
              stroke-width="12"
              stroke="currentColor"
              fill="transparent"
              r="48"
              cx="64"
              cy="64"
            />
            <circle
              class="text-gray-700/30"
              stroke-width="10"
              stroke="currentColor"
              fill="transparent"
              r="48"
              cx="64"
              cy="64"
            />
            <g transform="rotate(-90 64 64)">
              <circle
                class="text-transparent transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
                stroke-width="12"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="dashOffset"
                stroke-linecap="round"
                fill="transparent"
                r="48"
                cx="64"
                cy="64"
                style="stroke: url(#progressGradient)"
              />
            </g>
            <text
              x="64"
              y="72"
              text-anchor="middle"
              class="text-3xl font-medium fill-gray-800 z-0"
              style="font-family: 'Arial';"
            >
              {{ percentage }}%
            </text>
            <!-- Skill name -->
            <text
              x="64"
              y="100"
              text-anchor="middle"
              class="text-sm font-semibold fill-white/80"
              style="font-family: 'Arial'; text-shadow: 0 0 4px rgba(0, 0, 0, 0.5)"
            >
              {{ skill }}
            </text>

            <!-- SVG Gradient Definition -->
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#3B82F6" />
                <stop offset="50%" stop-color="#6366F1" />
                <stop offset="100%" stop-color="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const circleSize = computed(() => {
  return window.innerWidth < 640 ? 60 : 100; 
});

const skills = {
  HTML: { percentage: 85 },
  CSS: { percentage: 80 },
  JavaScript: { percentage: 70 },
  Python: { percentage: 75 },
  Vue: { percentage: 80 },
  Node: { percentage: 65 },
  Bash: { percentage: 60 },
  Tailwind: { percentage: 85 },
  Nuxt: { percentage: 65 },
  Flask: { percentage: 75},
  FastAPI: { percentage: 75 },
  ORMs: { percentage: 70 },
  TypeScript: { percentage: 60 },
  SQL: { percentage: 75 },
  C_plus: { percentage: 45 },
  django:{percentage:55}
};

const props = defineProps({
  skill: { type: String, required: true },
});

const percentage = ref(0);
const skill_percentage = ref(skills[props.skill]?.percentage || 0);
const radius = 48;
const circumference = 2 * Math.PI * radius;

const dashOffset = computed(() => {
  return circumference - (percentage.value / 100) * circumference;
});

onMounted(() => {
  setInterval(() => {
    const base = skill_percentage.value;
    const min = Math.max(0, base - 1);
    const max = Math.min(100, base + 2);
    percentage.value = Math.floor(Math.random() * (max - min + 1)) + min;
  }, 100);
});
</script>

<style>
circle {
  transition: stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1);
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

text {
  animation: pulse-glow 3s ease-in-out infinite;
}
</style>
