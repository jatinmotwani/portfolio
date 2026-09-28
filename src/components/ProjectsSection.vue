<template>
  <section id="projects" class="py-16 sm:py-24">
    <div class="container-page">
      <SectionHeading index="04" eyebrow="projects" title="Things I've built" />

      <div v-if="projects.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(project, i) in projects" :key="project.title" v-reveal="(i % 3) * 80"
          class="card group flex flex-col p-6 transition hover:-translate-y-1 hover:border-emerald-500/50">
          <div class="flex items-center justify-between">
            <span class="mdi mdi-folder-outline text-3xl text-emerald-500" aria-hidden="true" />
            <div class="flex gap-1">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener"
                class="icon-link h-9 w-9 border-transparent" :aria-label="`${project.title} source on GitHub`">
                <span class="mdi mdi-github text-xl" />
              </a>
              <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener"
                class="icon-link h-9 w-9 border-transparent" :aria-label="`${project.title} live demo`">
                <span class="mdi mdi-open-in-new text-xl" />
              </a>
            </div>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
            {{ project.title }}
          </h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ project.description }}</p>
          <div v-if="project.tags && project.tags.length" class="mt-5 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
        </article>
      </div>

      <EmptyState v-else title="~/side-projects" command="ls -la ~/side-projects"
        :output="['total 0', '# nothing deployed yet — side projects are compiling.', '# watch this space (or my GitHub).']">
        <a :href="githubUrl" target="_blank" rel="noopener" class="btn-ghost">
          <span class="mdi mdi-github text-lg" /> Follow along on GitHub
        </a>
      </EmptyState>
    </div>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import EmptyState from './EmptyState.vue';

export default {
  name: 'ProjectsSection',
  components: { SectionHeading, EmptyState },
  props: {
    projects: {
      type: Array,
      required: true,
    },
    githubUrl: { type: String, default: '' },
  },
};
</script>
