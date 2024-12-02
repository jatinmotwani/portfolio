<template>
  <div class="p-6 mt-6">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Work Experience</h2>
    <ul class="space-y-6">
      <li v-for="work in workExperience" :key="work.name"
        class="p-4 border dark:border-white border-gray-800 rounded-lg shadow">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ work.position }}</h3>
        <a target="_blank" :href="work.link" class="text-sm text-gray-600 dark:text-gray-300">{{ work.name }}</a>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ work.startDate }} - {{ work.endDate || 'Present' }}</p>
        <!-- <p class="mt-2 text-gray-700 dark:text-gray-300">{{ work.summary }}</p> -->
        <ul v-if="work.points.length" class="list-disc ml-4 mt-2">
          <li v-for="(point, index) in work.points" :key="`summary_point_${work.name}_${index}`">{{ point }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    workExperience: {
      type: Array,
      required: true,
    },
  },
};
</script>
