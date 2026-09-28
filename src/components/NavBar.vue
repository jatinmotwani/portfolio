<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="scrolled || open ? 'border-b border-zinc-200/70 bg-zinc-50/85 backdrop-blur-lg dark:border-zinc-800/70 dark:bg-[#0a0a0f]/85' : 'border-b border-transparent'">
    <nav class="container-page flex h-16 items-center justify-between" aria-label="Main">
      <a href="#top" class="flex items-center gap-2.5 text-zinc-900 dark:text-white" @click="open = false">
        <span class="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500 font-mono text-sm font-bold text-zinc-950">jm</span>
        <span class="font-mono text-sm font-medium">jatin<span class="text-emerald-500">.</span>motwani</span>
      </a>

      <div class="hidden items-center gap-1 md:flex">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="active === link.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
          :aria-current="active === link.id ? 'location' : null">
          {{ link.label }}
        </a>
        <DarkModeToggle class="ml-2" />
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <DarkModeToggle />
        <button type="button" class="icon-link h-10 w-10" :aria-expanded="open" aria-controls="mobile-menu"
          :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
          <span class="mdi text-xl" :class="open ? 'mdi-close' : 'mdi-menu'" />
        </button>
      </div>
    </nav>

    <div v-show="open" id="mobile-menu" class="container-page pb-4 md:hidden">
      <a v-for="link in links" :key="link.id" :href="`#${link.id}`"
        class="flex items-center justify-between rounded-lg px-3 py-3 font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
        @click="open = false">
        {{ link.label }}
        <span class="mdi mdi-chevron-right text-zinc-400" />
      </a>
    </div>

    <div class="absolute -bottom-px left-0 h-0.5 bg-emerald-500 transition-[width] duration-150" :style="{ width: `${progress}%` }" />
  </header>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue';

export default {
  name: 'NavBar',
  components: { DarkModeToggle },
  data() {
    return {
      open: false,
      scrolled: false,
      progress: 0,
      active: '',
      links: [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'writing', label: 'Writing' },
        { id: 'contact', label: 'Contact' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.active = entry.target.id;
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    this.links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    onScroll() {
      const { scrollY, innerHeight } = window;
      const max = document.documentElement.scrollHeight - innerHeight;
      this.scrolled = scrollY > 8;
      this.progress = max > 0 ? Math.min(100, (scrollY / max) * 100) : 0;
      if (scrollY < 200) this.active = '';
    },
  },
};
</script>
