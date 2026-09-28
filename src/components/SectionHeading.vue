<template>
  <header v-reveal class="mb-10 sm:mb-14">
    <p class="font-mono text-sm text-emerald-600 dark:text-emerald-400">// {{ index }} · {{ eyebrow }}</p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    index: { type: String, required: true },
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
  },
};
</script>
