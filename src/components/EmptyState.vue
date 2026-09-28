<template>
  <TerminalWindow v-reveal dashed :title="title">
    <TerminalPrompt :command="command" />
    <p v-for="(line, i) in output" :key="i" class="mt-1.5 text-zinc-500">{{ line }}</p>
    <TerminalPrompt class="mt-4" cursor />
    <div v-if="$slots.default" class="mt-6 font-sans">
      <slot />
    </div>
  </TerminalWindow>
</template>

<script>
import TerminalWindow from './TerminalWindow.vue';
import TerminalPrompt from './TerminalPrompt.vue';

export default {
  name: 'EmptyState',
  components: { TerminalWindow, TerminalPrompt },
  props: {
    title: { type: String, default: 'jatin@bengaluru: ~' },
    command: { type: String, required: true },
    output: { type: Array, default: () => [] },
  },
};
</script>
