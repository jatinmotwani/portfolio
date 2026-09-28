<template>
  <div class="card overflow-hidden" :class="{ 'border-dashed': dashed }">
    <div class="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
      <span class="h-3 w-3 rounded-full bg-red-400/90" />
      <span class="h-3 w-3 rounded-full bg-amber-400/90" />
      <span class="h-3 w-3 rounded-full bg-emerald-400/90" />
      <span class="ml-3 truncate font-mono text-xs text-zinc-500">{{ title }}</span>
    </div>
    <div class="p-5 font-mono text-sm sm:p-7">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TerminalWindow',
  props: {
    title: { type: String, default: 'jatin@bengaluru: ~' },
    dashed: { type: Boolean, default: false },
  },
};
</script>
