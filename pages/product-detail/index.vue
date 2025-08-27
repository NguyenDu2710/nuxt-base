<template>
  <div class="container">
    <div class="product-detail-page">
      <!-- Section: Header -->
      <section aria-label="Main Title" class="section-header">
        <h1
          class="text-[2.8rem] font-bold mb-5 text-white [text-shadow:0_2px_16px_#000]"
        >
          Vision 360 – Tour 3D &amp; 360 Viewer
        </h1>
      </section>

      <!-- Section: Feature Tags -->
      <section aria-label="Feature Tags" class="section-tags">
        <div class="flex justify-start gap-4 mb-5">
          <span
            v-for="(tag, idx) in tags"
            :key="tag"
            class="bg-[#222] text-white px-2.5 py-1 rounded-full font-medium text-[0.7rem] shadow-[0_2px_8px_#0006] transition-colors hover:bg-[#555050] cursor-pointer"
            @click="selectTag(idx)"
          >
            {{ tag }}
          </span>
        </div>
      </section>

      <!-- Section: Overview Cards -->
      <section aria-label="Overview Cards" class="mt-4 mb-20">
        <div class="flex flex-col lg:flex-row justify-center gap-4">
          <!-- Left main card -->
          <div
            class="w-full lg:w-[850px] rounded-2xl shadow-[0_4px_32px_#000a] p-3 flex flex-col gap-4 relative border-2 border-transparent [background-image:linear-gradient(135deg,#18181f_60%,#23233a_100%)]"
          >
            <div class="text-[#3e6aff] text-[1.3rem] font-semibold">
              Overview
            </div>
            <div class="text-[#eee] text-base mb-3">{{ cardLargeContent }}</div>

            <div
              class="rounded-2xl min-h-40 mb-4 [background:radial-gradient(circle_at_40%_40%,#2a2a4a_60%,#18181f_100%)]"
            ></div>

            <div class="flex gap-4 mt-2">
              <div
                v-for="(item, idx) in cardSmallItems"
                :key="item.label"
                class="rounded-xl min-w-[70px] max-w-[130px] min-h-[70px] w-full shadow-[0_2px_16px_#0006] border-2 transition-colors cursor-pointer [background:radial-gradient(circle_at_40%_40%,#2a2a4a_60%,#18181f_100%)]"
                :class="
                  selectedSmall === idx
                    ? 'border-[#3e6aff] shadow-[0_2px_16px_#3e6aff99]'
                    : 'border-transparent'
                "
                @click="selectSmall(idx)"
              ></div>
            </div>
          </div>

          <!-- Right alt card -->
          <div
            class="w-full min-w-[300px] lg:max-w-[350px] rounded-2xl shadow-[0_4px_32px_#000a] p-3 flex flex-col gap-4 relative border-2 border-transparent [background-image:linear-gradient(135deg,#0e1a2b_60%,#1a2340_100%)]"
          >
            <div class="text-[#3e6aff] text-[1.3rem] font-semibold">
              Overview
            </div>
            <div class="text-[#eee] text-base mb-3">
              Smooth interaction, fast setup, easy to extend.
            </div>

            <div class="flex gap-4 mt-2">
              <div
                v-for="n in 3"
                :key="n"
                class="rounded-xl min-w-[90px] max-w-[120px] min-h-[70px] w-full shadow-[0_2px_16px_#0006] border-2 border-transparent [background:radial-gradient(circle_at_40%_40%,#2a2a4a_60%,#18181f_100%)]"
              ></div>
            </div>

            <button
              class="mt-6 w-full bg-[#132a4d] text-white text-base font-semibold rounded-lg py-2.5 shadow-[0_2px_16px_#0006] transition-colors hover:bg-[#1e3a6d]"
            >
              Live demo
            </button>
          </div>
        </div>
      </section>

      <!-- Section: Tabbed Content -->
      <section class="mt-10">
        <!-- Tab bar -->
        <div class="flex gap-2 mb-3">
          <button
            v-for="(tab, idx) in tabs"
            :key="tab.label"
            class="px-7 py-2.5 rounded-t-lg text-[1.1rem] font-medium outline-none cursor-pointer transition-colors duration-200"
            :class="
              selectedTab === idx
                ? 'bg-white text-black font-bold'
                : 'bg-[#222] text-white hover:bg-[#333]'
            "
            @click="selectedTab = idx"
          >
            {{ tab.label }}
          </button>
        </div>
        <!-- Tab content -->
        <div class="min-h-[220px]">
          <!-- Overview Tab -->
          <div
            v-if="selectedTab === 0"
            class="bg-[#18181f] rounded-2xl shadow-[0_2px_16px_#0006] p-8 mb-4 border border-[#333]"
          >
            <div class="text-[#3e6aff] text-[1.2rem] font-semibold mb-2">
              Textures highlights
            </div>
            <div class="text-[#eee] text-base mb-4">
              Key technologies the product leverages
            </div>

            <div
              class="grid [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] gap-4"
            >
              <div
                v-for="tech in overviewTechs"
                :key="tech.label"
                class="bg-[#23233a] rounded-xl px-4 py-4 flex items-center gap-2 text-white text-base font-medium"
              >
                <span class="text-[1.3rem]">{{ tech.icon }}</span>
                <span>{{ tech.label }}</span>
              </div>
            </div>
          </div>

          <!-- Specs Tab -->
          <div
            v-if="selectedTab === 1"
            class="bg-[#18181f] rounded-2xl shadow-[0_2px_16px_#0006] p-8 mb-4 border border-[#333]"
          >
            <div class="text-[#3e6aff] text-[1.2rem] font-semibold mb-4">
              Specifications
            </div>

            <div
              class="grid [grid-template-columns:repeat(auto-fit,minmax(400px,1fr))] gap-4"
            >
              <div
                class="bg-[#23233a] rounded-xl p-4 flex flex-col gap-2 text-white text-base font-medium"
              >
                <span class="text-[#3e6aff] text-[1.1rem] font-semibold"
                  >Renderer</span
                >
                <div class="text-[#eee] text-[0.98rem]">
                  WebGL2 / WebGPU-ready
                </div>
              </div>
              <div
                class="bg-[#23233a] rounded-xl p-4 flex flex-col gap-2 text-white text-base font-medium"
              >
                <span class="text-[#3e6aff] text-[1.1rem] font-semibold"
                  >Tiling</span
                >
                <div class="text-[#eee] text-[0.98rem]">
                  Multi-resolution, cube &amp; equirect
                </div>
              </div>
              <div
                class="bg-[#23233a] rounded-xl p-4 flex flex-col gap-2 text-white text-base font-medium"
              >
                <span class="text-[#3e6aff] text-[1.1rem] font-semibold"
                  >Formats</span
                >
                <div class="text-[#eee] text-[0.98rem]">
                  JPG / WebP / AVIF, HLS / DASH video
                </div>
              </div>
              <div
                class="bg-[#23233a] rounded-xl p-4 flex flex-col gap-2 text-white text-base font-medium"
              >
                <span class="text-[#3e6aff] text-[1.1rem] font-semibold"
                  >Controls</span
                >
                <div class="text-[#eee] text-[0.98rem]">
                  Hotspots, minimap, keyboard, VR
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Tab -->
          <div
            v-if="selectedTab === 2"
            class="bg-[#18181f] rounded-2xl shadow-[0_2px_16px_#0006] p-8 mb-4 border border-[#333]"
          >
            <div class="text-[#3e6aff] text-[1.2rem] font-semibold mb-2">
              FAQ
            </div>
            <div class="flex flex-col gap-3 mt-2">
              <div class="text-white text-[1.05rem]">
                <b>Can it run on mobile?</b> Yes, iOS/Android supported with
                responsive UI.
              </div>
              <div class="text-white text-[1.05rem]">
                <b>Can we extend features?</b> The plugin system allows custom
                UI, analytics, or AI search hooks.
              </div>
              <div class="text-white text-[1.05rem]">
                <b>Deployment?</b> Works on any static host or cloud platform.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mt-8">
          <div class="text-white text-[1.1rem] font-bold mb-3">
            Tech &amp; libraries
          </div>

          <!-- grid 3 cột (tự xuống hàng) -->
          <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="lib in overviewLibs"
              :key="lib.title"
              class="rounded-xl border border-white/10 bg-[#1b1f27] px-5 py-4"
            >
              <div class="flex items-start gap-3">
                <!-- icon tick -->
                <div
                  class="w-9 h-9 rounded-lg grid place-items-center bg-emerald-400/10 text-emerald-300 border border-emerald-300/20"
                >
                  ✓
                </div>

                <!-- text -->
                <div class="flex-1">
                  <div class="text-[#3e6aff]/60 font-semibold mb-1">
                    {{ lib.title }}
                  </div>
                  <div class="text-slate-100 text-[0.98rem]">
                    {{ lib.desc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Grid Card  -->
      <section class="mt-10">
        <div class="grid gap-6 lg:grid-cols-[1fr_420px]">
          <!-- LEFT: Tech & libraries + chip grid -->
          <div class="rounded-[20px] p-6 ring-1 ring-white/10 bg-[#1b1f27]">
            <div class="text-[#3e6aff]/25 font-semibold mb-1">
              Tech &amp; libraries
            </div>
            <div class="text-slate-200/80 mb-5">
              Frameworks, toolchains, and services
            </div>

            <div
              class="grid gap-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8"
            >
              <div
                v-for="c in techChips20"
                :key="c._i + '-' + c.label"
                class="rounded-lg border border-white/10 bg-[#232833] px-2.5 py-2.5 flex flex-col items-center"
              >
                <div
                  class="w-8 h-8 rounded-md grid place-items-center bg-[#1f2430] border border-white/10 text-slate-300/80"
                >
                  <span class="text-[14px]">{{ c.icon || "⎈" }}</span>
                </div>
                <div
                  class="mt-1 text-slate-300/80 text-[12px] leading-none font-medium text-center"
                >
                  {{ c.label }}
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Frontend panel -->
          <div
            class="rounded-[20px] p-6 border border-white/10 [background-image:linear-gradient(135deg,#0b2233_0%,#0f2a45_100%)]"
          >
            <div class="text-blue-300/40 font-semibold mb-2">Frontend</div>
            <div class="text-[#3e6aff] text-[1.1rem] font-semibold mb-5">
              Cutting-edge viewer UI
            </div>

            <ul class="space-y-4 mb-5">
              <li class="flex items-start gap-3">
                <span
                  class="inline-grid place-items-center w-6 h-6 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-300/20"
                  >✓</span
                >
                <span class="text-slate-100"
                  >Mini-map and AI search provide powerful navigation</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span
                  class="inline-grid place-items-center w-6 h-6 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-300/20"
                  >✓</span
                >
                <span class="text-slate-100"
                  >Runs on iOS, Android; at pro-display ready</span
                >
              </li>
            </ul>

            <div class="border-t border-white/10 my-4"></div>

            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="n in 6"
                :key="n"
                class="h-20 rounded-[16px] shadow-[0_10px_22px_#0007,inset_0_1px_0_#ffffff12] [background:radial-gradient(160%_160%_at_30%_30%,#3a3560_0%,#1a1c2a_85%)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="mt-10">
        <div class="grid gap-4 lg:grid-cols-[1fr_420px]">
          <!-- LEFT: 4 visuals -->
          <div class="grid grid-cols-2 gap-2">
            <div
              v-for="n in 4"
              :key="n"
              class="h-[220px] rounded-2xl [background-image:radial-gradient(140%_140%_at_20%_15%,#27447d_0%,#10141c_70%,#140b18_100%)]"
            />
          </div>

          <!-- RIGHT: Related products -->
          <div class="rounded-2xl border border-white/10 bg-[#14171e] p-6">
            <div class="text-blue-300/40 font-medium mb-2">
              Related products
            </div>
            <div class="text-blue-300/50 mb-5">Explore more solutions</div>

            <div class="space-y-3">
              <!-- item -->
              <div
                class="rounded-xl border border-white/10 bg-[#1b1f27] px-4 py-3 flex items-center justify-between"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-lg grid place-items-center bg-[#1f2330] border border-white/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="w-5 h-5 text-slate-400/70"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                      <path d="M7 15l3-3 3 4 4-5"></path>
                      <circle cx="9" cy="9" r="1.2"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[#5a7bed] font-medium">DataPulse</div>
                    <div class="text-slate-300/70 text-sm lowercase">
                      platform
                    </div>
                  </div>
                </div>
                <button
                  class="w-8 h-8 flex items-center justify-center rounded-md bg-[#232630] text-slate-300/70 hover:bg-[#3e6aff] hover:text-white transition-colors"
                >
                  &rsaquo;
                </button>
              </div>

              <!-- item -->
              <div
                class="rounded-xl border border-white/10 bg-[#1b1f27] px-4 py-3 flex items-center justify-between"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-lg grid place-items-center bg-[#1f2330] border border-white/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="w-5 h-5 text-slate-400/70"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3"></rect>
                      <path d="M7 15l3-3 3 4 4-5"></path>
                      <circle cx="9" cy="9" r="1.2"></circle>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[#5a7bed] font-medium">SecursiD</div>
                    <div class="text-slate-300/70 text-sm lowercase">
                      platform
                    </div>
                  </div>
                </div>
                <button
                  class="w-8 h-8 flex items-center justify-center rounded-md bg-[#232630] text-slate-300/70 hover:bg-[#3e6aff] hover:text-white transition-colors"
                >
                  &rsaquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Related products -->
      <section class="mt-10">
        <div class="w-full">
          <div class="text-white text-base font-semibold mb-4">
            Related products
          </div>

          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="prod in relatedProducts"
              :key="prod.name"
              class="w-full min-w-[260px] max-w-[400px] bg-[#18181f] rounded-lg px-3 py-4 shadow-[0_2px_16px_#0006] border border-[#333] flex items-center justify-between"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-lg grid place-items-center [background-image:linear-gradient(135deg,#3e6aff_60%,#23233a_100%)]"
                ></div>
                <div>
                  <div class="text-[#3e6aff] text-base font-semibold">
                    {{ prod.name }}
                  </div>
                  <div class="text-[#eee] text-[0.8rem] mt-0.5">
                    {{ prod.type }}
                  </div>
                </div>
              </div>

              <span
                class="px-3 py-1 rounded-full text-[0.8rem] font-semibold bg-[#23233a] text-[#3e6aff] shadow-[0_2px_8px_#0006]"
              >
                New
              </span>
            </div>
          </div>
        </div>
        <div class="mt-10"></div>
        <div class="w-full">
          <div class="text-white text-base font-semibold mb-4">
            Related products
          </div>

          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="prod in relatedProducts"
              :key="prod.name"
              class="w-full min-w-[260px] max-w-[400px] bg-[#18181f] rounded-lg px-3 py-4 shadow-[0_2px_16px_#0006] border border-[#333] flex items-center justify-between"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-lg grid place-items-center [background-image:linear-gradient(135deg,#3e6aff_60%,#23233a_100%)]"
                ></div>
                <div>
                  <div class="text-[#3e6aff] text-base font-semibold">
                    {{ prod.name }}
                  </div>
                  <div class="text-[#eee] text-[0.8rem] mt-0.5">
                    {{ prod.type }}
                  </div>
                </div>
              </div>

              <span
                class="px-3 py-1 rounded-full text-[0.8rem] font-semibold bg-[#23233a] text-[#3e6aff] shadow-[0_2px_8px_#0006]"
              >
                New
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const tabs = [{ label: "Overview" }, { label: "Specs" }, { label: "FAQ" }];
const selectedTab = ref(0);

const overviewTechs = [
  { icon: "🛠️", label: "JS" },
  { icon: "🔧", label: "TS" },
  { icon: "📦", label: "React" },
  { icon: "🚀", label: "Next" },
  { icon: "🗄️", label: "Node" },
  { icon: "🗃️", label: "DB" },
  { icon: "☁️", label: "Cloud" },
  { icon: "🔗", label: "CI/CD" },
  { icon: "🔍", label: "AI" },
  { icon: "📘", label: "3D" },
  { icon: "⚡", label: "Perf" },
  { icon: "🛡️", label: "Sec" },
];
const overviewLibs = [
  {
    title: "Front-end supported",
    desc: "Built with React/Next + custom rendering engine.",
  },
  {
    title: "Mini-map & style",
    desc: "Viewer, powerful navigation and themes.",
  },
  { title: "Runs everywhere", desc: "iOS, Android, and all modern browsers." },
];
const relatedProducts = [
  { name: "DataPulse", type: "Analytics" },
  { name: "FlowAutomate", type: "Workflow" },
  { name: "SecureID", type: "Security" },
];

const tags = ["360°", "WebGL", "Multi-Res", "AI Search", "Hotspot"];
const selectedTag = ref(0);
function selectTag(idx) {
  selectedTag.value = idx;
}
const techChips20 = Array.from({ length: 20 }, (_, i) => ({
  ...overviewTechs[i % overviewTechs.length],
  _i: i,
}));
const cardSmallItems = [
  {
    label: "Explore",
    content:
      "Project showcase front end that enables smooth exploration, hotspot navigation, and AI search-powered info discovery mode.",
  },
  {
    label: "Hotspot",
    content: "Hotspot navigation with interactive points and info popups.",
  },
  {
    label: "AI Search",
    content: "AI search-powered info discovery mode for quick access.",
  },
  {
    label: "Multi-Res",
    content: "Multi-resolution 360° images for smooth zoom and pan.",
  },
  {
    label: "Multi-Res",
    content: "Multi-resolution 360° images for smooth zoom and pan.",
  },
];
const selectedSmall = ref(0);
function selectSmall(idx) {
  selectedSmall.value = idx;
}

const cardLargeContent = computed(
  () => cardSmallItems[selectedSmall.value].content
);
</script>

<style scoped lang="scss">
.container {
  justify-items: center;
  align-items: center;
  background: #0a0a0f;
}
.product-detail-page {
  max-width: 1200px;
  min-height: 100vh;
  color: #fff;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
  padding: 40px 0;
}
</style>
