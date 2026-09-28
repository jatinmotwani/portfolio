<template>
  <section id="about" class="py-16 sm:py-24">
    <div class="container-page">
      <SectionHeading index="01" eyebrow="about" title="A bit about me" />

      <div class="grid gap-6 lg:grid-cols-5">
        <TerminalWindow v-reveal title="~/about.md" class="lg:col-span-3">
          <TerminalPrompt command="cat about.md" />
          <div class="mt-4 space-y-4 font-sans text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p v-for="(para, i) in profile.about" :key="i">{{ para }}</p>
          </div>
          <TerminalPrompt class="mt-5" cursor />
        </TerminalWindow>

        <div class="flex flex-col gap-4 lg:col-span-2">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="i * 80"
              class="card p-5 transition hover:border-emerald-500/50">
              <span class="block text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">{{ stat.value }}</span>
              <span class="mt-1.5 block text-sm leading-snug text-zinc-600 dark:text-zinc-400">{{ stat.label }}</span>
            </div>
          </div>

          <TerminalWindow v-reveal="200" title="~/now.json" class="flex-1">
            <pre class="overflow-x-auto leading-relaxed"><span class="text-zinc-400">{</span>
<template v-for="(value, key, i) in now" :key="key">  <span class="text-sky-600 dark:text-sky-400">"{{ key }}"</span><span class="text-zinc-400">: </span><span class="text-amber-600 dark:text-amber-300">"{{ value }}"</span><span v-if="i < nowSize - 1" class="text-zinc-400">,</span>
</template><span class="text-zinc-400">}</span></pre>
          </TerminalWindow>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import TerminalWindow from './TerminalWindow.vue';
import TerminalPrompt from './TerminalPrompt.vue';

export default {
  name: 'AboutSection',
  components: { SectionHeading, TerminalWindow, TerminalPrompt },
  props: {
    profile: { type: Object, required: true },
    stats: { type: Array, required: true },
    now: { type: Object, required: true },
  },
  computed: {
    nowSize() {
      return Object.keys(this.now).length;
    },
  },
};
</script>
