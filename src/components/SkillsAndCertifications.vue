<template>
  <section class="p-8">
    <!-- Skills Section -->
    <h2 class="text-3xl font-semibold text-center mb-6">Skills</h2>
    <div class="flex flex-wrap justify-center">
      <span v-for="(skill, index) in skills" :key="index"
        class="border border-gray-800 text-gray-700 dark:text-gray-200 dark:border-white px-4 py-2 rounded-full text-sm mt-4 ml-4">
        {{ skill }}
      </span>
    </div>

    <!-- Certifications Section -->
    <!-- <h2 class="text-3xl font-semibold text-center mt-12 mb-6">Certifications</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(cert, index) in certifications" :key="index"
        class="border border-gray-800 dark:border-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl text-gray-800 dark:text-white">{{ cert.name }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ cert.issuer }}</p>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Node.js",
        "TypeScript",
        "Amazon Web Services(AWS)",
        "System Design",
        "Vue.js",
        "Redis",
        "Javascript",
        "Nest.js",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Nginx",
        "Object Oriented Design",
        "Design Patterns",
        "Express.js",
        "Data Structures",
        "Algorithms",
        "Git",
        "Microservices"
      ],
      certifications: [
        {
          name: "HTML",
          issuer: "SoloLearn",
        },
        {
          name: "Red Hat Certified System Administrator (RHCSA)",
          issuer: "Red Hat",
        },
        // Add more certifications as needed
      ],
    };
  },
};
</script>
