<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-12 sm:pt-36 lg:pb-20">
    <div class="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
    <div class="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/10"
      aria-hidden="true" />

    <div class="container-page relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <div class="order-2 text-center lg:order-1 lg:text-left">
        <span class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 font-mono text-xs text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {{ profile.currently }} · {{ profile.location }}
        </span>

        <h1 class="mt-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl">
          Hi, I'm {{ profile.firstName }}<span class="text-emerald-500">.</span>
        </h1>
        <p class="mt-3 text-xl font-medium text-zinc-500 dark:text-zinc-400 sm:text-2xl">{{ profile.role }}</p>

        <p class="mt-6 min-h-[2.5em] font-mono text-lg text-zinc-800 dark:text-zinc-200 sm:text-xl">
          <span class="sr-only">I design and build {{ profile.building.join(', ') }}.</span>
          <span aria-hidden="true">
            <span class="text-zinc-500">&gt;</span> I design &amp; build
            <span class="text-emerald-600 dark:text-emerald-400">{{ typed }}</span><span class="caret text-emerald-500">▍</span>
          </span>
        </p>

        <p class="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400 lg:mx-0">{{ profile.tagline }}</p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a :href="`mailto:${profile.email}`" class="btn-primary">
            <span class="mdi mdi-send-outline text-lg" /> Say hello
          </a>
          <a href="#experience" class="btn-ghost">
            <span class="mdi mdi-briefcase-outline text-lg" /> View experience
          </a>
          <a v-if="profile.resumeUrl" :href="profile.resumeUrl" target="_blank" rel="noopener" class="btn-ghost">
            <span class="mdi mdi-file-download-outline text-lg" /> Resume
          </a>
        </div>

        <div class="mt-8 flex items-center justify-center gap-3 lg:justify-start">
          <a v-for="social in profile.socials" :key="social.name" :href="social.url" class="icon-link"
            :aria-label="social.name" :title="social.name"
            v-bind="social.url.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {}">
            <span class="mdi text-xl" :class="social.icon" />
          </a>
        </div>
      </div>

      <div class="order-1 flex justify-center lg:order-2">
        <div class="relative w-60 sm:w-72 lg:w-[23rem]">
          <div class="absolute -inset-8 rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-500/20" aria-hidden="true" />
          <div class="orbit absolute -inset-4 rounded-full border border-dashed border-emerald-500/40" aria-hidden="true" />
          <DevAvatar class="relative" />

          <span v-for="(chip, i) in orbitChips" :key="chip.label"
            class="float-chip absolute hidden items-center gap-1.5 rounded-xl border border-zinc-200 bg-white/90 px-3 py-1.5 font-mono text-xs font-medium text-zinc-700 shadow-lg backdrop-blur sm:inline-flex dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200"
            :class="chip.position" :style="{ animationDelay: `${i * -1.3}s` }" aria-hidden="true">
            <span class="mdi text-base" :class="[chip.icon, chip.color]" /> {{ chip.label }}
          </span>

          <p class="mt-10 text-center font-mono text-xs text-zinc-500">
            <span class="mdi mdi-cursor-default-click-outline" /> psst — click me
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DevAvatar from './DevAvatar.vue';

export default {
  name: 'HeroSection',
  components: { DevAvatar },
  props: {
    profile: { type: Object, required: true },
  },
  data() {
    return {
      typed: '',
      phrase: 0,
      deleting: false,
      orbitChips: [
        { label: 'Node.js', icon: 'mdi-nodejs', color: 'text-green-600', position: '-left-10 top-8' },
        { label: 'TypeScript', icon: 'mdi-language-typescript', color: 'text-sky-600', position: '-right-12 top-24' },
        { label: 'PostgreSQL', icon: 'mdi-elephant', color: 'text-indigo-500', position: '-left-14 bottom-24' },
        { label: 'Redis', icon: 'mdi-lightning-bolt', color: 'text-red-500', position: '-right-6 bottom-14' },
      ],
    };
  },
  mounted() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.typed = this.profile.building[0];
      return;
    }
    this.tick();
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  methods: {
    tick() {
      const full = this.profile.building[this.phrase];
      if (!this.deleting) {
        this.typed = full.slice(0, this.typed.length + 1);
        if (this.typed === full) {
          this.deleting = true;
          this.timer = setTimeout(this.tick, 1900);
          return;
        }
        this.timer = setTimeout(this.tick, 65);
        return;
      }
      this.typed = full.slice(0, this.typed.length - 1);
      if (!this.typed) {
        this.deleting = false;
        this.phrase = (this.phrase + 1) % this.profile.building.length;
        this.timer = setTimeout(this.tick, 350);
        return;
      }
      this.timer = setTimeout(this.tick, 30);
    },
  },
};
</script>

<style>
.orbit {
  animation: orbit-spin 60s linear infinite;
}

.float-chip {
  animation: float-chip 6s ease-in-out infinite;
}

@keyframes orbit-spin {
  to { transform: rotate(360deg); }
}

@keyframes float-chip {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (prefers-reduced-motion: reduce) {
  .orbit,
  .float-chip {
    animation: none;
  }
}
</style>
