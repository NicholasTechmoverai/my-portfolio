<template>
  <div></div>
  <div class="max-w-[1024px]">
    <div
      class="p-3 bg-primary mt-10 mx-3 border-2 border-gray-200 dark:border-gray-500 text-white rounded-lg"
    >
      @gathogo 4k gallery
    </div>
    <div class="columns-2 sm:columns-2 md:columns-4 gap-2 p-4 min-h-screen w-100%">
      <!-- Masonry Item -->
      <div
        v-for="(t_img, index) in images"
        :key="index"
        tabindex="0"
        class="mb-2 break-inside-avoid overflow-hidden cursor-pointer rounded-2xl border border-gray-600 group focus:outline-none relative"
      >
        <img
          :src="t_img.img"
          alt=""
          class="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-focus:scale-110 group-active:scale-110 bg-fixed"
        />

        <div
          class="absolute top-0 left-0 w-full h-full bg-black/60 z-20 transition-all duration-500 group-hover:bg-transparent group-focus:bg-transparent group-active:bg-transparent"
        ></div>

        <div
          class="absolute bottom-0 inset-0 flex flex-col items-center justify-center z-30 opacity-0 group-hover:opacity-90 group-focus:opacity-90 group-active:opacity-90 transition-opacity duration-500 text-white text-center p-2"
        >
          <h2 class="mt-[auto] text-2xl font-bold">{{ t_img.title }}</h2>
          <p class="text-sm text-gray-300">{{ t_img.description }}</p>
        </div>
      </div>
    </div>

    <section>
      <img
        src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <article>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
      <!-- <div class="relative w-[50%]">
        <div class="gallery">
          <img src="https://assets.codepen.io/1506195/unsplash-1.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-7.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-3.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-2.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-6.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-0.jpg" alt="" />
          <img src="https://assets.codepen.io/1506195/unsplash-8.jpg" alt="" />
        </div>
      </div> -->
    </section>
  </div>
</template>
<script setup>
// images array
const images = [
  {
    img:
      "https://images.unsplash.com/photo-1745690665873-b5239161c17b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    title: "...",
    description: "Fearless, powerful, and born to lead — the spirit of a true lion.",
  },
  // {
  //   img: "src/assets/karuki_Nicholas_GREAT.jpg",
  //   title: "Critical Thinking Master",
  //   description:
  //     "Seeing beyond the obvious. Crafting solutions where others see challenges.",
  // },
  {
    img: "src/assets/injustify_HIM.jpg",
    title: "...",
    description: "Rooted in humility, driven by silent strength and action.",
  },
  // {
  //   img: "src/assets/WhatsApp Image 2025-04-22 at 10.36.09_801e5b4b.jpg",
  //   title: "Collaboration in Motion",
  //   description: "Success is built when great minds come together with purpose.",
  // },
  {
    img: "src/assets/WhatsApp Image 2025-04-22 at 10.34.10_086f6a1c.jpg",
    title: "...",
    description: "Leading not by force, but by inspiring trust, vision, and unity.",
  },
  // {
  //   img: "src/assets/WhatsApp Image 2025-04-22 at 10.36.29_93ad5106.jpg",
  //   title: "The Calm Creator",
  //   description: "In a world of noise, the chill ones create the loudest impact.",
  // },
  {
    img: "src/assets/WhatsApp Image 2025-04-22 at 10.33.20_3167e298.jpg",
    title: "Eager to Learn, Ready to Soar",
    description: "A relentless spirit always chasing growth, wisdom, and new heights.",
  },
];
</script>
<style scoped>
section {
  width: 100%;
  height: 200px;
  margin: 0 auto;
  line-height: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section article {
  position: absolute;
  top: 0;
  width: 70%;
  background: gray;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  mix-blend-mode: lighten;
}
section div {
  background: black;
  height: 100px;
}
section div:nth-of-type(2) {
  grid-column: 2 / 4;
}

body {
  background: #eee;
}

.gallery {
  --size: min(60vmin, 400px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #0002, 0 20px 40px -20px #0004;
  width: var(--size);
  height: var(--size);
  background: #fff;
  border: 6px solid #fff;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  gap: 6px;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes moveHorizontal {
  to {
    object-position: 100% 0;
  }
}

@keyframes moveVertical {
  to {
    object-position: 0 100%;
  }
}

@keyframes shrinkVertical {
  to {
    height: 0;
  }
}

@keyframes shrinkHorizontal {
  to {
    width: 0;
  }
}

@keyframes growHorizontal {
  to {
    width: 100%;
  }
}
@keyframes growHorizontal2 {
  to {
    width: 70%;
  }
}

@keyframes growVertical {
  to {
    height: 100%;
  }
}

@keyframes growAll {
  to {
    width: 100%;
    height: 100%;
  }
}

.gallery img:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
  justify-self: end;
  animation: moveHorizontal 8.5s 0.5s 1, shrinkHorizontal 2s 9s ease-in 1;
  animation-fill-mode: forwards;
}

.gallery img:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  animation: shrinkHorizontal 2s 11s 1;
  animation-fill-mode: forwards;
}

.gallery img:nth-child(3) {
  grid-row: 2;
  grid-column: 1 / 3;
  align-self: end;
  object-position: 0 0;
  animation: moveVertical 5s 1s 1, shrinkVertical 3s 5s 1;
  animation-fill-mode: forwards;
}

.gallery img:nth-child(4) {
  grid-column: 1 / 3;
  grid-row: 1;
  width: 0;
  justify-self: center;
  align-self: start;
  animation: growHorizontal 2.25s 11s 1, moveHorizontal 4s 14s 1, shrinkVertical 2s 18s 1;
  animation-fill-mode: forwards;
}

.gallery img:nth-child(5) {
  grid-column: 1;
  grid-row: 2;
  width: 0;
  justify-self: start;
  align-self: end;
  animation: growHorizontal 2.5s 7.5s 1, moveVertical 4s 12.5s 1,
    shrinkHorizontal 2s 17s 1;
  animation-fill-mode: forwards;
}

.gallery img:nth-child(6) {
  grid-column: 2;
  grid-row: 2;
  width: 0;
  justify-self: end;
  align-self: end;
  animation: growHorizontal 2s 8s 1, shrinkHorizontal 2s 17s 1;
  animation-fill-mode: forwards;
}

.gallery img:nth-child(7) {
  grid-column: 1/3;
  grid-row: 1/3;
  width: 0;
  justify-self: end;
  align-self: end;
  object-position: 0 0;
  animation: growHorizontal 2s 20s 1, moveHorizontal 16s 21.5s 1;
  animation-fill-mode: forwards;
}
</style>
