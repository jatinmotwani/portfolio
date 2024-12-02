<template>
  <button @click="toggleDarkMode"
    class="flex items-center justify-center w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full shadow focus:outline-none transition duration-300"
    :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
    <!-- Icon for Light Mode -->
    <span v-if="isDarkMode" class="mdi mdi-weather-sunny text-yellow-400 text-2xl"></span>
    <!-- Icon for Dark Mode -->
    <span v-else class="mdi mdi-weather-night text-blue-500 text-2xl"></span>
  </button>
</template>


<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // Sync with system or user preference
    this.isDarkMode = localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

    this.applyTheme();
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
    },
    applyTheme() {
      const theme = this.isDarkMode ? "dark" : "light";
      document.documentElement.classList.toggle("dark", this.isDarkMode);
      localStorage.setItem("theme", theme);
    },
  },
};
</script>

<style>
.mdi {
  font-size: 1.5rem;
}
</style>
