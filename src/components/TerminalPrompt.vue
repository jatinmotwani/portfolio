<template>
  <p class="break-words">
    <span class="text-emerald-600 dark:text-emerald-400">jatin@bengaluru</span><span class="text-zinc-400">:</span><span class="text-sky-600 dark:text-sky-400">~</span><span class="text-zinc-400">$</span>
    <span class="text-zinc-800 dark:text-zinc-100">{{ ' ' + command }}</span><span v-if="cursor" class="caret text-zinc-500">▍</span>
  </p>
</template>

<script>
export default {
  name: 'TerminalPrompt',
  props: {
    command: { type: String, default: '' },
    cursor: { type: Boolean, default: false },
  },
};
</script>
