<template>
  <section id="skills" class="py-16 sm:py-24">
    <div class="container-page">
      <SectionHeading index="03" eyebrow="skills" title="Tools of the trade" />

      <div class="grid gap-5 md:grid-cols-3">
        <div v-for="(group, i) in skills" :key="group.group" v-reveal="i * 90"
          class="card p-6 transition hover:border-emerald-500/50">
          <div class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span class="mdi text-2xl" :class="group.icon" />
            </span>
            <h3 class="font-semibold text-zinc-900 dark:text-white">{{ group.group }}</h3>
          </div>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
          </div>
        </div>
      </div>

      <h3 v-reveal class="mt-16 font-mono text-sm text-zinc-500">// education &amp; certification</h3>
      <div class="mt-5 grid gap-5 md:grid-cols-2">
        <div v-for="(item, i) in education" :key="item.title" v-reveal="i * 90" class="card flex gap-4 p-6">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            <span class="mdi text-2xl" :class="item.icon" />
          </span>
          <div>
            <h4 class="font-semibold text-zinc-900 dark:text-white">{{ item.title }}</h4>
            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{{ item.org }}</p>
            <p class="mt-2 font-mono text-xs text-zinc-500">
              <span v-if="item.period">{{ item.period }} · </span>{{ item.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';

export default {
  name: 'SkillsSection',
  components: { SectionHeading },
  props: {
    skills: { type: Array, required: true },
    education: { type: Array, required: true },
  },
};
</script>
