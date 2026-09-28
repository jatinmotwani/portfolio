<template>
  <section id="contact" class="py-16 sm:py-24">
    <div class="container-page">
      <div v-reveal class="card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
        <div class="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl"
          aria-hidden="true" />
        <p class="relative font-mono text-sm text-emerald-600 dark:text-emerald-400">// 06 · contact</p>
        <h2 class="relative mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Got a gnarly backend problem? Let's talk.
        </h2>
        <p class="relative mx-auto mt-5 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          System design, scaling Node.js services, or swapping war stories from production — my inbox is open.
        </p>

        <div class="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a :href="`mailto:${profile.email}`" class="btn-primary w-full sm:w-auto">
            <span class="mdi mdi-send-outline text-lg" /> Say hello
          </a>
          <button type="button" class="btn-ghost w-full font-mono text-xs sm:w-auto sm:text-sm" @click="copyEmail">
            <span class="mdi text-lg" :class="copied ? 'mdi-check text-emerald-500' : 'mdi-content-copy'" />
            {{ copied ? 'Copied to clipboard' : profile.email }}
          </button>
        </div>

        <div class="relative mt-8 flex justify-center gap-3">
          <a v-for="social in profile.socials" :key="social.name" :href="social.url" class="icon-link"
            :aria-label="social.name" :title="social.name"
            v-bind="social.url.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {}">
            <span class="mdi text-xl" :class="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    profile: { type: Object, required: true },
  },
  data() {
    return { copied: false };
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  methods: {
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(this.profile.email);
        this.copied = true;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => (this.copied = false), 2000);
      } catch (e) {
        window.location.href = `mailto:${this.profile.email}`;
      }
    },
  },
};
</script>
