<script>
import mainImage from "../assets/image.png"
export default {
  mounted() {


    const models = [
      {
        name: "Who AM I",
        description: "Born on Earth in 2003,Realized the're calling me 'Nicholas Kariuki' and my sir name was 'Gathogo' after little education realized i was somewhere in Nyandarua Kenya. Started tampering with my fathers electronics in the room as soon i could walk! yep that today makes me a 'Technologist' by proffesion!"
      },
      {
        name: "highschool Background",
        description: "Alumni Lanet secondary school Nakuru"
      },
      {
        name: "Academic Background",
        description: "About to Graduate(d) with a BSc in Computer Science, specializing in Machine Learning.Also a good skilled, experienced and proffsional fullstack developer"
      },
      {
        name: "proffesion Background",
        description: "A passionate and experienced programmer on frontend and web application development alongside with python in the backend."
      },

    ];


    const list = document.getElementById("card-list");
    if (list) {
      list.style.setProperty("--count", models.length);
      models.forEach((model, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="card z-40 bg-gray-800/50 hover:bg-gray-800/100 hover:z-100  transition-colors duration-300" style="--delay: calc((var(--rotate-speed)/var(--count)) * ${i}s)">
            <a href="#">
              <span class="model-name">${model.name}</span>
              <span class="model-description">${model.description}</span>
            </a>
          </div>`;
        li.style.setProperty(
          "--delay",
          `calc((var(--rotate-speed)/var(--count)) * ${i}s)`
        );
        list.appendChild(li);
      });
    }
  },
  data() {
    return {
      animateSvg: "",
      svgKey: 0,
      intervalId: null,
      images: [
        mainImage,
        // "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    };
  },
  methods: {
    async fetchImageAsBase64(url) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error fetching image:", error);
        return "";
      }
    },
    async updateSvg() {
      const randomImage = this.images[Math.floor(Math.random() * this.images.length)];
      try {
        const base64 = await this.fetchImageAsBase64(randomImage);
        this.insertSvg(base64);
        this.svgKey++;
      } catch (error) {
        console.error("Error updating SVG:", error);
      }
    },
    insertSvg(base64Image) {
      this.animateSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" width="300px" height="300px" preserveAspectRatio="none">
          <defs>
            <clipPath id="clip-path" clipPathUnits="objectBoundingBox">
              <path id="filterPath" d="M.9722.1661c.0598.1143.0141.2803-.0528.3799c-.0669.0996-.1584.1365-.2675.225c-.1091.0885-.2323.2361-.359.2287c-.1267-.0074-.2534-.1623-.2851-.332c-.0317-.1697.0353-.354.1479-.4794c.1126-.1254.271-.1881.4329-.1881c.1619-.0037.3238.0553.3836.1659z">
                <animate attributeName="d" begin="0s" dur="10s" repeatCount="indefinite"
                  values="
                    M.9722.1661c.0598.1143.0141.2803-.0528.3799c-.0669.0996-.1584.1365-.2675.225c-.1091.0885-.2323.2361-.359.2287c-.1267-.0074-.2534-.1623-.2851-.332c-.0317-.1697.0353-.354.1479-.4794c.1126-.1254.271-.1881.4329-.1881c.1619-.0037.3238.0553.3836.1659z;
                    M.8281.029c.1059.0675.1871.2564.1695.4453c-.0177.1844-.1377.3688-.2895.4588c-.1518.09-.3354.09-.4695-.0045c-.1341-.0945-.2224-.2834-.2365-.4678c-.0142-.1799.0459-.3553.1341-.4183c.0883-.063.2083-.009.3318-.0135c.1271-.0045.2542-.063.3601-0z;
                    M.9616.0267c.0777.0784.0247.3529-.0459.5441c-.0742.1961-.1696.3088-.2756.3726c-.106.0637-.2261.0784-.3322.0196c-.106-.0539-.2049-.1814-.2615-.3677c-.0566-.1863-.0707-.4216.0106-.5049c.0742-.0735.2473.0098.4346-.0049c.1873-.0196.3922-.1373.47-.0588z;
                    M.9722.1661c.0598.1143.0141.2803-.0528.3799c-.0669.0996-.1584.1365-.2675.225c-.1091.0885-.2323.2361-.359.2287c-.1267-.0074-.2534-.1623-.2851-.332c-.0317-.1697.0353-.354.1479-.4794c.1126-.1254.271-.1881.4329-.1881c.1619-.0037.3238.0553.3836.1659z"
                  calcMode="spline"
                  keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
              </path>
            </clipPath>
          </defs>
          <image href="${base64Image}" width="1" height="1" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" />
        </svg>
      `;
    },
  },
  created() {
    this.updateSvg(); // Initial load
    this.intervalId = setInterval(this.updateSvg, 10000);
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>
<template>
  
  <div class="void" id="void">
    <div class="crop">
      <ul id="card-list" style="--count: 0"></ul>
      <div class="last-circle"></div>
      <div class="second-circle"></div>
    </div>

    <div class="mask">
      <div class="w-[100px]" :key="svgKey" v-html="animateSvg"></div>

      <div class="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 mx-auto mt-[300px] space-y-4">
        <div class="flex items-center space-x-4">
          <div
            class="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
            KN
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Kariuki Nicholas</h2>
            <p class="text-sm text-gray-600 flex items-center gap-1">
              <i class="fas fa-laptop-code text-indigo-600"></i> Full Stack Developer
            </p>
          </div>
        </div>

        <div class="border-t pt-4 space-y-2 text-gray-700 text-sm">
          <p>
            <i class="fas fa-briefcase text-indigo-500 mr-2"></i>
            Computer Technologist
          </p>
          <p>
            <i class="fas fa-user text-indigo-500 mr-2"></i>
            Gender: <span class="font-medium">Male</span>
          </p>
          <p>
            <i class="fas fa-calendar-alt text-indigo-500 mr-2"></i>
            DOB: <span class="font-medium">20.11.2003</span>
          </p>
          <p>
            <i class="fas fa-map-marker-alt text-indigo-500 mr-2"></i>
            Location: <span class="font-medium decoration-1 underline"><a
                href="https://www.google.com/maps/place/Murang'a+University+Science+Complex/@-0.7153685,37.145965,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182899575e99b9db:0xf6c1f55e96094abf!8m2!3d-0.7153685!4d37.1485399!16s%2Fg%2F11v9vthdst?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D">Murang'a,
                Kenya</a></span>
          </p>
          <p>
            <i class="fas fa-graduation-cap text-indigo-500 mr-2"></i>
            Education:
            <span class="font-medium">Bachelor in Computer Technology (Ongoing)</span>
          </p>
          <p>
            <i class="fas fa-university text-indigo-500 mr-2"></i>
            Institution: <span class="font-medium decoration-1 underline"> <a href="https://www.mut.ac.ke/">Murang'a
                University Of Science and Technology</a></span>
          </p>
        </div>
      </div>
    </div>

    <div class="center-circle"></div>
  </div>
</template>

<style>
:root {
  --rotate-speed: 40;
  --count: 8;
  /* Default count, the DOM element should override this */
  --easeInOutSine: cubic-bezier(0.37, 0, 0.63, 1);
  --easing: cubic-bezier(0, 0.37, 1, 0.63);
}

.void {
  width: 100%;
  max-width: 1024px;
  height: fit-content;
  /* was: fit-content */
  overflow: hidden;

  margin: auto;
  position: relative;
}

ul:hover * {
  animation-play-state: paused;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  outline: 2px dotted magenta;
  z-index: 1;
}

li {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* 	outline: 2px dashed cyan; */
  width: 100%;
  animation: rotateCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;
}

.card {
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9694a0;
  animation: rotateCCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;
  border: 1px solid gray;
}

a {
  text-decoration: none;
  color: unset;
}

.model-name {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #3b2ed0;
  display: block;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

li:nth-child(2),
li:nth-child(2) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -1s);
}

li:nth-child(3),
li:nth-child(3) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -2s);
}

li:nth-child(4),
li:nth-child(4) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -3s);
}

li:nth-child(5),
li:nth-child(5) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -4s);
}

li:nth-child(6),
li:nth-child(6) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -5s);
}

li:nth-child(7),
li:nth-child(7) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -6s);
}

li:nth-child(8),
li:nth-child(8) .card {
  animation-delay: calc((var(--rotate-speed) / var(--count)) * -7s);
}

@keyframes rotateCW {
  from {
    transform: translate3d(0px, -50%, -1px) rotate(-45deg);
  }

  to {
    transform: translate3d(0px, -50%, 0px) rotate(-315deg);
  }
}

@keyframes rotateCCW {
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(315deg);
  }
}

@keyframes pulseGlow {
  from {
    background-size: 60%;
  }

  to {
    background-size: 100%;
  }
}

.center-circle {
  position: absolute;
  width: 160px;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #aba8ac;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
    0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
  border: 1px solid gray;
}

.second-circle {
  position: absolute;
  width: 30%;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #aba8aca5;
  opacity: 0.5;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
    0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
}

.last-circle {
  position: absolute;
  width: 56%;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #aba8aca5;
  opacity: 0.25;
  box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3),
    0px 30px 60px -12px rgba(12, 5, 46, 0.25);
  border-radius: 50%;
}

.crop {
  -webkit-mask-image: linear-gradient(90deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1));
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  animation: pulseGlow 5s linear infinite alternate;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-image: radial-gradient(100% 50% at 100% 50%,
      rgba(60, 26, 229, 0.25) 0%,
      rgba(60, 26, 229, 0.247904) 11.79%,
      rgba(59, 26, 229, 0.241896) 21.38%,
      rgba(58, 26, 229, 0.2324) 29.12%,
      rgba(57, 26, 229, 0.219837) 35.34%,
      rgba(55, 26, 229, 0.20463) 40.37%,
      rgba(53, 26, 229, 0.1872) 44.56%,
      rgba(51, 26, 229, 0.16797) 48.24%,
      rgba(48, 26, 229, 0.147363) 51.76%,
      rgba(46, 26, 229, 0.1258) 55.44%,
      rgba(44, 26, 229, 0.103704) 59.63%,
      rgba(41, 26, 229, 0.0814963) 64.66%,
      rgba(39, 26, 229, 0.0596) 70.88%,
      rgba(36, 26, 229, 0.038437) 78.62%,
      rgba(34, 26, 229, 0.0184296) 88.21%,
      rgba(32, 26, 229, 0) 100%);
}

.mask:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  right: 0;
  display: block;
  background-image: linear-gradient(180deg,
      rgba(60, 26, 229, 0) 0%,
      #3c1ae5 50%,
      rgba(60, 26, 229, 0) 100%);
}

@media (max-width: 768px) {
  .void {
    height: auto;
    overflow-y: auto;
  }

  .card {
    transform: rotate(90deg) !important;
    font-size: 12px;
    line-height: 16px;
    padding: 4px 8px;
    width: 80%;
    /* adjust width */
    margin: 0 auto;
    z-index: 40;
  }

  .card:hover {
    z-index: 100 !important;
  }

  .mask {
    width: 100%;
    background-size: 150%;
    padding: 1rem;

  }

  .center-circle,
  .second-circle,
  .last-circle {
    width: 100px !important;
    height: 100px !important;
  }
}
</style>
