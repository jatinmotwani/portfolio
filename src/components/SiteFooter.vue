<template>
  <footer class="border-t border-zinc-200 py-8 dark:border-zinc-800">
    <div class="container-page flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
      <p>&copy; {{ year }} {{ name }}. Built with Vue &amp; Tailwind.</p>
      <a href="#top" class="inline-flex items-center gap-1 font-mono text-xs hover:text-emerald-600 dark:hover:text-emerald-400">
        back to top <span class="mdi mdi-arrow-up" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    name: { type: String, required: true },
  },
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>
