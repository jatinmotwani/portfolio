<template>
  <button type="button" class="icon-link h-10 w-10" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDarkMode ? 'Light mode' : 'Dark mode'" @click="toggleDarkMode">
    <span class="mdi text-xl" :class="isDarkMode ? 'mdi-white-balance-sunny text-amber-400' : 'mdi-weather-night'" />
  </button>
</template>

<script>
export default {
  name: 'DarkModeToggle',
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // public/index.html applies the saved/system theme before first paint.
    this.isDarkMode = document.documentElement.classList.contains('dark');
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark', this.isDarkMode);
      try {
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      } catch (e) {
        // Storage can be unavailable (private mode, blocked cookies) — the toggle still works for this visit.
      }
    },
  },
};
</script>
