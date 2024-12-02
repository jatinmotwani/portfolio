<template>
  <div class="p-6">
    <h2 class="text-2xl text-center font-semibold mb-4">My Blogs</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="blog in blogs" :key="`${blog.title}_${blog.link}`"
        class="border dark:border-white border-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all"
        @click="redirectToBlog(blog.link)">
        <h3 class="text-xl font-medium">{{ blog.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 blog-description mt-3">{{ blog.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    redirectToBlog(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style>
.blog-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>