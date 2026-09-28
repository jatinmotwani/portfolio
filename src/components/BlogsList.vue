<template>
  <section id="writing" class="py-16 sm:py-24">
    <div class="container-page">
      <SectionHeading index="05" eyebrow="writing" title="Notes & blog posts" />

      <div v-if="blogs.length" class="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        <a v-for="blog in blogs" :key="`${blog.title}_${blog.url}`" v-reveal :href="blog.url" target="_blank" rel="noopener"
          class="group flex items-start justify-between gap-6 py-6 transition">
          <div>
            <p v-if="blog.date || blog.readingTime" class="font-mono text-xs text-zinc-500">
              {{ [blog.date, blog.readingTime].filter(Boolean).join(' · ') }}
            </p>
            <h3 class="mt-1 text-lg font-semibold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
              {{ blog.title }}
            </h3>
            <p v-if="blog.description" class="blog-description mt-2 text-zinc-600 dark:text-zinc-400">{{ blog.description }}</p>
          </div>
          <span class="mdi mdi-arrow-top-right self-center text-xl text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500" />
        </a>
      </div>

      <EmptyState v-else title="~/blog" command="ls ~/blog/posts"
        :output="['ls: ~/blog/posts: No such file or directory (yet)', '# first posts are still in draft — check back soon.']" />
    </div>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import EmptyState from './EmptyState.vue';

export default {
  name: 'BlogsList',
  components: { SectionHeading, EmptyState },
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.blog-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
