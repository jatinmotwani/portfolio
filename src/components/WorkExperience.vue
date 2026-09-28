<template>
  <section id="experience" class="py-16 sm:py-24">
    <div class="container-page">
      <SectionHeading index="02" eyebrow="experience" title="Where I've worked"
        subtitle="From my first internship to leading backend engineering on a fintech platform." />

      <ol class="relative ml-4 border-l border-zinc-200 dark:border-zinc-800">
        <li v-for="job in workExperience" :key="job.company" v-reveal class="relative pb-12 pl-8 last:pb-0 sm:pl-12">
          <span class="absolute -left-[18px] top-0 grid h-9 w-9 place-items-center rounded-full border border-emerald-500/40 bg-zinc-50 font-mono text-xs font-bold text-emerald-600 dark:bg-[#0a0a0f] dark:text-emerald-400">
            {{ initials(job.company) }}
          </span>

          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-1">
            <h3 class="text-xl font-semibold text-zinc-900 dark:text-white">
              <a :href="job.url" target="_blank" rel="noopener" class="group inline-flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400">
                {{ job.company }}
                <span class="mdi mdi-arrow-top-right text-base opacity-40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </h3>
            <span class="font-mono text-xs text-zinc-500">{{ job.period }}</span>
          </div>

          <div class="mt-4 space-y-4">
            <article v-for="role in job.roles" :key="role.title" class="card p-5 transition hover:border-emerald-500/40 sm:p-6">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="font-semibold text-zinc-900 dark:text-white">{{ role.title }}</h4>
                <span v-if="job.roles.length > 1" class="chip">{{ role.period }}</span>
              </div>
              <ul class="mt-4 space-y-2.5">
                <li v-for="(point, i) in role.points" :key="i" class="flex gap-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span class="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{{ point }}</span>
                </li>
              </ul>
              <div v-if="role.tags && role.tags.length" class="mt-5 flex flex-wrap gap-2">
                <span v-for="tag in role.tags" :key="tag" class="chip">{{ tag }}</span>
              </div>
            </article>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';

export default {
  name: 'WorkExperience',
  components: { SectionHeading },
  props: {
    workExperience: {
      type: Array,
      required: true,
    },
  },
  methods: {
    initials(name) {
      return name
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase();
    },
  },
};
</script>
