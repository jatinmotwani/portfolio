<template>
  <div ref="root" class="relative select-none">
    <button type="button"
      class="group block w-full rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
      :aria-pressed="cool" aria-label="Illustrated avatar of Jatin — click to toggle sunglasses" @click="toggleCool">
      <svg viewBox="0 0 400 400" class="block w-full h-auto drop-shadow-2xl" role="img"
        aria-label="Illustrated avatar of Jatin: swept-back dark hair, full beard, beige shirt">
        <defs>
          <clipPath :id="id('clip')"><circle cx="200" cy="200" r="196" /></clipPath>
          <linearGradient :id="id('bg')" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#34d399" />
            <stop offset="1" stop-color="#0f766e" />
          </linearGradient>
          <linearGradient :id="id('lens')" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#1f2937" />
            <stop offset="1" stop-color="#030712" />
          </linearGradient>
          <pattern :id="id('weave')" width="7" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 3 Q1.75 0.5 3.5 3 T7 3" fill="none" stroke="#9c7a5a" stroke-width="0.9" opacity=".5" />
          </pattern>
          <clipPath :id="id('eyeL')"><path :d="eyeLeft" /></clipPath>
          <clipPath :id="id('eyeR')"><path :d="eyeRight" /></clipPath>
        </defs>

        <g :clip-path="url('clip')">
          <circle cx="200" cy="200" r="196" :fill="url('bg')" />
          <g font-family="'JetBrains Mono', monospace" font-weight="700" fill="#ecfdf5" opacity=".18">
            <text x="44" y="120" font-size="34">{ }</text>
            <text x="300" y="112" font-size="30">&lt;/&gt;</text>
            <text x="318" y="250" font-size="26">;</text>
            <text x="40" y="250" font-size="24">=&gt;</text>
          </g>

          <!-- neck -->
          <path d="M166 248 L166 318 C180 334 220 334 234 318 L234 248 Z" fill="#b97b5a" />

          <!-- shirt -->
          <path :d="shirt" fill="#c9a686" />
          <path :d="shirt" :fill="url('weave')" />
          <path d="M168 300 L232 300 L200 360 Z" fill="#b97b5a" />
          <path d="M200 356 L200 430" stroke="#a9876a" stroke-width="3" />
          <circle cx="200" cy="380" r="4.5" fill="#efe4d4" />
          <circle cx="200" cy="414" r="4.5" fill="#efe4d4" />
          <path d="M158 288 C162 300 172 316 197 356 L166 346 L144 304 Z" fill="#d8b999" />
          <path d="M242 288 C238 300 228 316 203 356 L234 346 L256 304 Z" fill="#d8b999" />
          <path d="M158 288 C162 300 172 316 197 356 M242 288 C238 300 228 316 203 356" fill="none"
            stroke="#a9876a" stroke-width="2" />

          <!-- head (tilts toward the cursor) -->
          <g class="avatar-head" :style="{ transform: `rotate(${tilt}deg)` }">
            <ellipse cx="127" cy="210" rx="13" ry="21" fill="#cf9372" />
            <ellipse cx="129" cy="211" rx="6" ry="12" fill="#b97b5a" />
            <ellipse cx="273" cy="210" rx="13" ry="21" fill="#cf9372" />
            <ellipse cx="271" cy="211" rx="6" ry="12" fill="#b97b5a" />

            <path d="M128 172 C128 94 272 94 272 172 L273 222 C272 270 242 298 200 300 C158 298 128 270 127 222 Z"
              fill="#d9a17d" />
            <ellipse cx="200" cy="142" rx="50" ry="18" fill="#e6b592" opacity=".5" />
            <ellipse cx="160" cy="222" rx="14" ry="8" fill="#e08f78" opacity=".25" />
            <ellipse cx="240" cy="222" rx="14" ry="8" fill="#e08f78" opacity=".25" />

            <!-- beard -->
            <path
              d="M126 198 L136 198 C138 224 148 244 168 252 C178 246 189 244 200 246 C211 244 222 246 232 252 C252 244 262 224 264 198 L274 198 C277 256 258 300 200 312 C142 300 123 256 126 198 Z"
              fill="#1f1b21" />
            <path
              d="M146 270 C160 294 180 302 200 305 C220 302 240 294 254 270 C246 294 228 308 200 314 C172 308 154 294 146 270 Z"
              fill="#131015" opacity=".75" />
            <path d="M170 280 l2 6 M186 288 l1 6 M214 288 l-1 6 M230 280 l-2 6 M200 292 v6" stroke="#3a3440"
              stroke-width="1.6" stroke-linecap="round" />

            <!-- nose -->
            <path d="M205 196 C207 208 211 216 212 224" fill="none" stroke="#b97b5a" stroke-width="3"
              stroke-linecap="round" opacity=".7" />
            <path d="M189 224 C192 233 208 233 211 224 C206 229 194 229 189 224 Z" fill="#a8664a" />
            <path d="M186 222 C184 229 188 233 193 231 M214 222 C216 229 212 233 207 231" fill="none"
              stroke="#b97b5a" stroke-width="2.5" stroke-linecap="round" />

            <!-- lips + moustache -->
            <path :d="cool ? smirk : smile" fill="#a45f4d" class="avatar-morph" />
            <path
              d="M178 247 C186 240 195 240 200 243 C205 240 214 240 222 247 C226 250 228 254 226 256 C219 251 210 249 200 250 C190 249 181 251 174 256 C172 254 174 250 178 247 Z"
              fill="#1f1b21" />

            <!-- brows -->
            <g class="avatar-brows" :class="{ 'avatar-brows--up': browsUp }">
              <path d="M149 172 C158 160 177 158 191 163 L190 171 C178 167 162 168 152 178 Z" fill="#1c1b22" />
              <path d="M251 172 C242 160 223 158 209 163 L210 171 C222 167 238 168 248 178 Z" fill="#1c1b22" />
            </g>

            <!-- eyes -->
            <g class="avatar-eyes" :class="{ 'avatar-eyes--animated': !reducedMotion }">
              <path :d="eyeLeft" fill="#fbf7f2" />
              <path :d="eyeRight" fill="#fbf7f2" />
              <g :clip-path="url('eyeL')">
                <g class="avatar-iris" :style="irisStyle">
                  <circle cx="172" cy="190" r="7" fill="#4a2c1d" />
                  <circle cx="172" cy="190" r="3.4" fill="#120c09" />
                  <circle cx="174.5" cy="187.5" r="1.6" fill="#fff" />
                </g>
              </g>
              <g :clip-path="url('eyeR')">
                <g class="avatar-iris" :style="irisStyle">
                  <circle cx="228" cy="190" r="7" fill="#4a2c1d" />
                  <circle cx="228" cy="190" r="3.4" fill="#120c09" />
                  <circle cx="230.5" cy="187.5" r="1.6" fill="#fff" />
                </g>
              </g>
              <path d="M155 191 C162 180 181 180 188 190 M245 191 C238 180 219 180 212 190" fill="none"
                stroke="#1c1b22" stroke-width="2.8" stroke-linecap="round" />
            </g>
            <path d="M162 201 C168 204 176 204 182 201 M238 201 C232 204 224 204 218 201" fill="none"
              stroke="#b97b5a" stroke-width="2" stroke-linecap="round" opacity=".7" />

            <!-- hair -->
            <path
              d="M132 192 C123 162 121 128 134 102 C147 74 172 54 206 50 C242 46 272 62 282 92 C291 122 285 162 268 192 L264 192 C264 170 262 150 255 136 C245 122 229 116 211 116 C189 115 166 120 150 132 C142 142 138 162 137 192 Z"
              fill="#1c1b22" />
            <path d="M132 192 C124 164 123 142 129 124 L146 136 C140 152 138 170 137 192 Z" fill="#3b3843" />
            <path d="M268 192 C278 166 281 144 277 124 L257 134 C262 150 264 170 264 192 Z" fill="#3b3843" />
            <path d="M148 132 C158 96 194 70 240 72 C262 74 276 86 283 100 C263 86 238 84 214 90 C188 98 166 114 148 132 Z"
              fill="#302e3a" />
            <path d="M160 120 C176 98 204 86 234 86" fill="none" stroke="#45424f" stroke-width="3"
              stroke-linecap="round" />
            <path d="M150 132 C166 120 188 115 211 116 C229 116 245 122 255 136" fill="none" stroke="#111015"
              stroke-width="3" stroke-linecap="round" />
            <path d="M176 76 C200 64 234 62 262 76" fill="none" stroke="#8f8d99" stroke-width="1.6"
              stroke-linecap="round" opacity=".55" />
            <path d="M170 94 C192 80 222 76 250 82" fill="none" stroke="#8f8d99" stroke-width="1.2"
              stroke-linecap="round" opacity=".4" />

            <!-- sunglasses (easter egg) -->
            <g class="avatar-shades" :class="{ 'avatar-shades--on': cool }">
              <path d="M146 182 L128 186 M254 182 L272 186" stroke="#030712" stroke-width="4" stroke-linecap="round" />
              <path d="M146 176 H194 V190 C194 202 186 210 174 210 H166 C154 210 146 202 146 190 Z" :fill="url('lens')" />
              <path d="M206 176 H254 V190 C254 202 246 210 234 210 H226 C214 210 206 202 206 190 Z" :fill="url('lens')" />
              <path d="M192 180 C196 175 204 175 208 180" fill="none" stroke="#030712" stroke-width="4" />
              <path d="M154 182 L166 182 L156 200 Z M214 182 L226 182 L216 200 Z" fill="#fff" opacity=".22" />
            </g>
          </g>
        </g>
      </svg>
    </button>

    <!-- speech bubble -->
    <div class="avatar-bubble pointer-events-none absolute left-1/2 -top-3 sm:top-2 sm:left-auto sm:-right-4 whitespace-nowrap rounded-2xl rounded-bl-sm border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs text-zinc-700 shadow-lg
        dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
      :class="{ 'avatar-bubble--show': bubble }" aria-live="polite">
      {{ bubbleText }}
    </div>
  </div>
</template>

<script>
let uid = 0;

export default {
  name: 'DevAvatar',
  data() {
    return {
      uid: `av${++uid}`,
      look: { x: 0, y: 0 },
      tilt: 0,
      cool: false,
      browsUp: false,
      bubble: false,
      reducedMotion: false,
      eyeLeft: 'M156 191 C162 181 181 181 187 190 C180 197 164 198 156 191 Z',
      eyeRight: 'M244 191 C238 181 219 181 213 190 C220 197 236 198 244 191 Z',
      shirt: 'M14 430 C22 356 80 322 158 298 C172 316 228 316 242 298 C320 322 378 356 386 430 Z',
      smile: 'M186 256 C193 261 207 261 214 256 C209 264 191 264 186 256 Z',
      smirk: 'M186 255 C194 259 208 258 217 252 C211 264 192 265 186 255 Z',
    };
  },
  computed: {
    irisStyle() {
      return { transform: `translate(${this.look.x}px, ${this.look.y}px)` };
    },
    bubbleText() {
      return this.cool ? 'Shipping to prod on a Friday 😎' : "Hi, I'm Jatin 👋";
    },
  },
  mounted() {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.bubbleTimer = setTimeout(() => this.flashBubble(), 900);
    if (this.reducedMotion) return;
    window.addEventListener('pointermove', this.onPointer, { passive: true });
    this.idleTimer = setInterval(this.idleGlance, 2600);
  },
  beforeUnmount() {
    window.removeEventListener('pointermove', this.onPointer);
    clearInterval(this.idleTimer);
    clearTimeout(this.bubbleTimer);
    clearTimeout(this.browTimer);
    if (this.raf) cancelAnimationFrame(this.raf);
  },
  methods: {
    id(name) {
      return `${this.uid}-${name}`;
    },
    url(name) {
      return `url(#${this.id(name)})`;
    },
    onPointer(e) {
      this.lastPointer = Date.now();
      if (this.raf) return;
      const { clientX, clientY } = e;
      this.raf = requestAnimationFrame(() => {
        this.raf = null;
        this.aim(clientX, clientY);
      });
    },
    aim(x, y) {
      const r = this.$refs.root.getBoundingClientRect();
      // The eyes sit a little above the vertical centre of the artwork.
      const dx = x - (r.left + r.width / 2);
      const dy = y - (r.top + r.height * 0.475);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(dist / (r.width * 0.8), 1);
      this.look = { x: (dx / dist) * 3.6 * reach, y: (dy / dist) * 2.4 * reach };
      this.tilt = Math.max(-1, Math.min(1, dx / (window.innerWidth / 2))) * 3;
    },
    idleGlance() {
      if (Date.now() - (this.lastPointer || 0) < 4000) return;
      const angle = Math.random() * Math.PI * 2;
      const mag = Math.random() < 0.35 ? 0 : 1;
      this.look = { x: Math.cos(angle) * 3.2 * mag, y: Math.sin(angle) * 2 * mag };
      this.tilt = 0;
    },
    toggleCool() {
      this.cool = !this.cool;
      this.browsUp = true;
      clearTimeout(this.browTimer);
      this.browTimer = setTimeout(() => (this.browsUp = false), 420);
      this.flashBubble();
    },
    flashBubble() {
      this.bubble = true;
      clearTimeout(this.bubbleTimer);
      this.bubbleTimer = setTimeout(() => (this.bubble = false), 2600);
    },
  },
};
</script>

<style>
.avatar-head {
  transform-box: view-box;
  transform-origin: 200px 300px;
  transition: transform 0.35s ease-out;
}

.avatar-iris {
  transition: transform 0.18s ease-out;
}

.avatar-eyes {
  transform-box: fill-box;
  transform-origin: center;
}

.avatar-eyes--animated {
  animation: avatar-blink 5.5s infinite;
}

@keyframes avatar-blink {
  0%, 93%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.08); }
}

.avatar-brows {
  transition: transform 0.2s ease-out;
}

.avatar-brows--up {
  transform: translateY(-5px);
}

.avatar-morph {
  transition: d 0.3s ease;
}

.avatar-shades {
  opacity: 0;
  transform: translateY(-110px);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
}

.avatar-shades--on {
  opacity: 1;
  transform: translateY(0);
}

.avatar-bubble {
  opacity: 0;
  transform: translateY(6px) scale(0.96);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.group:hover ~ .avatar-bubble,
.group:focus-visible ~ .avatar-bubble,
.avatar-bubble--show {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (max-width: 639px) {
  .avatar-bubble {
    transform: translate(-50%, 6px) scale(0.96);
  }

  .group:hover ~ .avatar-bubble,
  .group:focus-visible ~ .avatar-bubble,
  .avatar-bubble--show {
    transform: translate(-50%, 0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .avatar-head,
  .avatar-iris,
  .avatar-brows,
  .avatar-shades,
  .avatar-bubble {
    transition: none;
  }
}
</style>
