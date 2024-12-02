<template>
  <div class="p-6">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">My Projects</h2>
    <div v-for="project in projects" :key="project.title" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="border dark:border-white border-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
        <h3 class="text-xl font-medium text-gray-800 dark:text-white">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4"> {{ project.description }}
        </p>
        <div class="flex space-x-4">
          <a v-if="project.githubLink" :href="project.githubLink" target="_blank" class="text-2xl mdi mdi-github" />
          <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="text-2xl mdi mdi-play-circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>