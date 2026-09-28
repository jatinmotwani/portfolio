// v-reveal: fades an element up the first time it scrolls into view.
export default {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.classList.add('reveal');
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`;

    el._revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add('reveal--in');
        el._revealObserver.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    el._revealObserver.observe(el);
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect();
  },
};
