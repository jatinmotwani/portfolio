<template>
  <div ref="root" class="relative select-none">
    <button type="button"
      class="group block w-full rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
      :aria-pressed="cool" aria-label="Illustrated avatar of Jatin — click to toggle sunglasses" @click="toggleCool">
      <svg viewBox="0 0 400 400" class="block w-full h-auto drop-shadow-2xl" role="img"
        aria-label="Illustrated avatar of Jatin: swept-back black hair, thick eyebrows, full black beard, beige shirt">
        <defs>
            <clipPath :id="id('clip')"><circle cx="200" cy="200" r="196" /></clipPath>
            <linearGradient :id="id('bg')" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399" /><stop offset="1" stop-color="#0f766e" /></linearGradient>
            <radialGradient :id="id('skin')" cx="200" cy="175" r="118" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#eebfa9" /><stop offset=".55" stop-color="#e0aa93" /><stop offset="1" stop-color="#c98f79" />
            </radialGradient>
            <linearGradient :id="id('hair')" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2b31" /><stop offset="1" stop-color="#141519" /></linearGradient>
            <linearGradient :id="id('beardG')" x1="0" y1="172" x2="0" y2="322" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2e2a2d" stop-opacity=".5" /><stop offset=".28" stop-color="#2b272b" stop-opacity=".82" /><stop offset=".48" stop-color="#262326" /><stop offset="1" stop-color="#151315" /></linearGradient>
            <radialGradient :id="id('iris')" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#553626" /><stop offset="1" stop-color="#22160f" /></radialGradient>
            <pattern :id="id('weave')" width="7" height="6" patternUnits="userSpaceOnUse"><path d="M0 3 Q1.75 0.5 3.5 3 T7 3" fill="none" stroke="#9c7a5a" stroke-width="0.9" opacity=".5" /></pattern>
            <filter :id="id('tiny')" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.2" /></filter>
            <filter :id="id('soft')" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.4" /></filter>
            <filter :id="id('softer')" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4.5" /></filter>
            <clipPath :id="id('eyeL')"><path :d="eyeLeft" /></clipPath>
            <clipPath :id="id('eyeR')"><path :d="eyeRight" /></clipPath>
            <clipPath :id="id('face')"><path d="M124 150 C122 108 150 86 200 86 C250 86 278 108 276 150 L276 214 C275 262 244 304 200 308 C156 304 125 262 124 214 Z" /></clipPath>
            <linearGradient :id="id('lens')" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f2937" /><stop offset="1" stop-color="#030712" /></linearGradient>
            <clipPath :id="id('stache')"><path :d="moustache" /></clipPath>
          </defs>
          <g :clip-path="url('clip')">
            <circle cx="200" cy="200" r="196" :fill="url('bg')" />
            <g font-family="'JetBrains Mono', monospace" font-weight="700" fill="#ecfdf5" opacity=".18">
              <text x="40" y="120" font-size="34">{ }</text><text x="302" y="118" font-size="30">&lt;/&gt;</text>
              <text x="326" y="250" font-size="26">;</text><text x="36" y="250" font-size="24">=&gt;</text>
            </g>

            <!-- neck + shirt -->
            <path d="M160 262 L160 330 C176 346 224 346 240 330 L240 262 Z" fill="#c08670" />
            <path :d="shirt" fill="#c4a084" />
            <path :d="shirt" :fill="url('weave')" />
            <path d="M168 306 L232 306 L200 366 Z" fill="#c08670" />
            <path d="M200 362 L200 430" stroke="#a5846a" stroke-width="3" />
            <circle cx="200" cy="384" r="4.5" fill="#efe4d4" /><circle cx="200" cy="418" r="4.5" fill="#efe4d4" />
            <path d="M152 286 C158 300 170 320 197 362 L162 352 L136 304 Z" fill="#d3b294" />
            <path d="M248 286 C242 300 230 320 203 362 L238 352 L264 304 Z" fill="#d3b294" />
            <path d="M152 286 C158 300 170 320 197 362 M248 286 C242 300 230 320 203 362" fill="none" stroke="#a5846a" stroke-width="2" />

            <!-- head (tilts toward the cursor) -->
            <g class="avatar-head" :style="{ transform: `rotate(${tilt}deg)` }">
            <!-- hair (back mass) -->
            <path d="M113 172 C104 142 101 104 112 80 C124 56 150 40 180 37 C212 34 250 40 270 60 C284 76 287 110 285 140 C284 152 283 162 281 172 Z" :fill="url('hair')" />

            <!-- ears -->
            <path d="M123 172 C114 166 106 172 107 186 C108 200 113 212 124 216 Z" fill="#d69c86" />
            <path d="M121 180 C116 178 113 184 114 191 C115 199 118 205 122 207" fill="none" stroke="#a9695a" stroke-width="2.4" stroke-linecap="round" />
            <path d="M277 168 C286 162 294 168 293 182 C292 196 287 208 276 212 Z" fill="#d69c86" />
            <path d="M279 176 C284 174 287 180 286 187 C285 195 282 201 278 203" fill="none" stroke="#a9695a" stroke-width="2.4" stroke-linecap="round" />

            <!-- face -->
            <path d="M124 150 C122 108 150 86 200 86 C250 86 278 108 276 150 L276 214 C275 262 244 304 200 308 C156 304 125 262 124 214 Z" :fill="url('skin')" />
            <g :clip-path="url('face')">
              <path d="M118 98 C150 84 250 84 282 98 L282 116 C250 102 150 102 118 116 Z" fill="#8f5646" opacity=".35" :filter="url('softer')" />
              <ellipse cx="200" cy="128" rx="46" ry="16" fill="#eab8a2" opacity=".55" :filter="url('softer')" />
              <ellipse cx="164" cy="170" rx="22" ry="7" fill="#9c5f4f" opacity=".22" :filter="url('soft')" />
              <ellipse cx="236" cy="170" rx="22" ry="7" fill="#9c5f4f" opacity=".22" :filter="url('soft')" />
              <ellipse cx="151" cy="208" rx="16" ry="10" fill="#dc7f76" opacity=".2" :filter="url('soft')" />
              <ellipse cx="249" cy="208" rx="16" ry="10" fill="#dc7f76" opacity=".2" :filter="url('soft')" />
              <path d="M124 150 L124 230 L134 230 C130 200 128 176 130 150 Z M276 150 L276 230 L266 230 C270 200 272 176 270 150 Z" fill="#a8695a" opacity=".18" :filter="url('soft')" />
              <ellipse cx="153" cy="203" rx="13" ry="8" fill="#f3c6b1" opacity=".45" :filter="url('soft')" />
              <ellipse cx="247" cy="203" rx="13" ry="8" fill="#f3c6b1" opacity=".45" :filter="url('soft')" />
            </g>

            <!-- nose -->
            <path d="M192 180 C191 194 187 204 182 211 L188 212 C192 203 195 192 196 180 Z" fill="#b0735f" opacity=".35" :filter="url('soft')" />
            <path d="M176 222 C176 214 184 210 190 212 C194 206 206 206 210 212 C216 210 224 214 224 222 C224 229 216 232 208 230 C204 232 196 232 192 230 C184 232 176 229 176 222 Z" fill="#c78a74" opacity=".45" :filter="url('soft')" />
            <path d="M184 226 C190 233 210 233 216 226 C212 230 206 231.5 200 231.5 C194 231.5 188 230 184 226 Z" fill="#9c5f4f" opacity=".5" :filter="url('tiny')" />
            <ellipse cx="180" cy="221" rx="6" ry="6.5" fill="#bf816c" opacity=".45" :filter="url('tiny')" />
            <ellipse cx="220" cy="221" rx="6" ry="6.5" fill="#bf816c" opacity=".45" :filter="url('tiny')" />
            <ellipse cx="200" cy="215" rx="12" ry="9" fill="#f1c2ad" opacity=".8" :filter="url('soft')" />
            <ellipse cx="201" cy="213" rx="4" ry="2.6" fill="#fbe0d3" opacity=".7" :filter="url('tiny')" />
            <path d="M177 211 C170 215 169 225 177 229.5" fill="none" stroke="#a8695a" stroke-width="2.2" stroke-linecap="round" opacity=".85" />
            <path d="M223 211 C230 215 231 225 223 229.5" fill="none" stroke="#a8695a" stroke-width="2.2" stroke-linecap="round" opacity=".85" />
            <path d="M185 228 C188 224 195 224.5 197 229 C193 231 188 230.5 185 228 Z" fill="#7d4638" />
            <path d="M215 228 C212 224 205 224.5 203 229 C207 231 212 230.5 215 228 Z" fill="#7d4638" />
            <path d="M197 229 C199 230.5 201 230.5 203 229" fill="none" stroke="#a8695a" stroke-width="1.2" stroke-linecap="round" opacity=".6" />

            <!-- beard -->
            <path :d="tex.stubble" stroke="#2a2629" stroke-width=".9" stroke-linecap="round" opacity=".28" />
            <path :d="tex.beard" :fill="url('beardG')" opacity=".35" :filter="url('tiny')" />
            <path :d="tex.beard" :fill="url('beardG')" />
            <path :d="tex.cheek" stroke="#221f22" stroke-width="1.3" stroke-linecap="round" opacity=".9" />
            <path :d="tex.edge" stroke="#1b191c" stroke-width="1.5" stroke-linecap="round" />
            <path :d="tex.strands" fill="none" stroke="#39343a" stroke-width=".9" stroke-linecap="round" opacity=".45" />
            <ellipse cx="200" cy="292" rx="34" ry="14" fill="#4a4448" opacity=".25" :filter="url('softer')" />
            <ellipse cx="200" cy="273" rx="8" ry="5" fill="#7a5d58" opacity=".35" :filter="url('soft')" />

            <!-- mouth -->
            <path :d="cool ? smirk : smile" fill="#c9837f" class="avatar-morph" />
            <ellipse cx="200" cy="257" rx="10" ry="2.2" fill="#e8aba6" opacity=".55" />
            <path d="M186 263 C194 265.5 206 265.5 214 263" fill="none" stroke="#9c5f4f" stroke-width="1" opacity=".35" />

            <!-- moustache -->
            <path :d="moustache" fill="#1c1a1d" />
            <path :d="tex.moustache" stroke="#3d383c" stroke-width="1" stroke-linecap="round" opacity=".6" :clip-path="url('stache')" />

            <!-- eyes -->
            <path d="M148 189 C155 192.5 171 192.5 179 188 M252 189 C245 192.5 229 192.5 221 188" fill="none" stroke="#a8695a" stroke-width="1.4" stroke-linecap="round" opacity=".25" />
            <g class="avatar-eyes" :class="{ 'avatar-eyes--animated': !reducedMotion }">
              <path :d="eyeLeft" fill="#efe4dd" />
              <path :d="eyeRight" fill="#efe4dd" />
              <g :clip-path="url('eyeL')">
                <g class="avatar-iris" :style="irisStyle"><circle cx="164" cy="177.5" r="6" :fill="url('iris')" /><circle cx="164" cy="177.5" r="2.7" fill="#130d0a" /><circle cx="166" cy="175.6" r="1.4" fill="#fff" /></g>
                <path d="M144 168 H184 V177 C176 174 154 174 144 178 Z" fill="#3b1f18" opacity=".22" /></g>
              <g :clip-path="url('eyeR')">
                <g class="avatar-iris" :style="irisStyle"><circle cx="236" cy="177.5" r="6" :fill="url('iris')" /><circle cx="236" cy="177.5" r="2.7" fill="#130d0a" /><circle cx="238" cy="175.6" r="1.4" fill="#fff" /></g>
                <path d="M216 168 H256 V177 C248 174 226 174 216 178 Z" fill="#3b1f18" opacity=".22" /></g>
              <path d="M146 179.5 C152 172.8 172 171 182.5 177.8 M254 179.5 C248 172.8 228 171 217.5 177.8" fill="none" stroke="#1d1618" stroke-width="3" stroke-linecap="round" />
              <path d="M149 181.8 C156 184.2 172 184 179 180 M251 181.8 C244 184.2 228 184 221 180" fill="none" stroke="#9c5f4f" stroke-width="1.1" stroke-linecap="round" opacity=".55" />
            </g>
            <path d="M145 176 C150 167 172 165 183 173 C172 169.5 154 170 145 176 Z M255 176 C250 167 228 165 217 173 C228 169.5 246 170 255 176 Z" fill="#b97a66" opacity=".45" />
            <path d="M146 174.5 C152 166.8 171 165.2 181 170.8 M254 174.5 C248 166.8 229 165.2 219 170.8" fill="none" stroke="#9c5f4f" stroke-width="1.5" stroke-linecap="round" opacity=".6" />

            <!-- brows -->
            <g class="avatar-brows" :class="{ 'avatar-brows--up': browsUp }">
            <path d="M191 154 C184 150.5 171 148.5 160 148.5 C149 148.5 140 154 134 163 C141 160 151 158.5 161 158.5 C171 158.5 182 160 190 162.5 C193 160.5 193 156 191 154 Z" fill="#1f1d21" />
            <path d="M209 154 C216 150.5 229 148.5 240 148.5 C251 148.5 260 154 266 163 C259 160 249 158.5 239 158.5 C229 158.5 218 160 210 162.5 C207 160.5 207 156 209 154 Z" fill="#1f1d21" />
            <path :d="tex.brows" stroke="#1f1d21" stroke-width="1.1" stroke-linecap="round" opacity=".8" />

            </g>

            <!-- hair (front) -->
            <path d="M113 172 C104 142 101 104 112 80 C124 56 150 40 180 37 C212 34 250 40 270 60 C284 76 287 110 285 140 C284 152 283 162 281 172 L272 172 C270 152 267 132 259 117 C250 104 232 97 212 94 C196 91 172 90 152 94 C138 98 129 106 127 120 C125 136 123 152 122 172 Z" :fill="url('hair')" />
            <path d="M128 100 C146 70 196 52 262 64 C228 60 188 66 160 80 C146 87 136 94 128 104 Z" fill="#34353d" />
            <path d="M140 92 C160 66 204 52 258 60 C274 64 282 76 284 90 C270 74 240 68 206 72 C180 75 158 84 140 98 Z" fill="#383943" opacity=".55" :filter="url('tiny')" />
            <path :d="tex.hairFuzz" stroke="#1c1d22" stroke-width="1.4" stroke-linecap="round" />
            <g fill="none" stroke-linecap="round">
              <path :d="tex.hairStrands" stroke="#0f1013" stroke-width="1.3" opacity=".7" />
              <path :d="tex.hairShine" stroke="#4a4b57" stroke-width="1.1" opacity=".75" />
              <path :d="tex.hairGrey" stroke="#a9a7b3" stroke-width=".8" opacity=".45" />
            </g>
            <path d="M128 112 C134 100 146 95 160 92 C176 90 196 90.5 212 93.5 C232 97 250 104 259 117" fill="none" stroke="#0d0e11" stroke-width="1.8" stroke-linecap="round" opacity=".8" />
            <!-- sunglasses (easter egg) -->
            <g class="avatar-shades" :class="{ 'avatar-shades--on': cool }">
              <path d="M140 171 L121 176 M260 171 L279 176" stroke="#030712" stroke-width="4" stroke-linecap="round" />
              <path d="M140 167 H188 V180 C188 192 180 199 168 199 H160 C148 199 140 192 140 180 Z" :fill="url('lens')" />
              <path d="M212 167 H260 V180 C260 192 252 199 240 199 H232 C220 199 212 192 212 180 Z" :fill="url('lens')" />
              <path d="M188 171 C194 166 206 166 212 171" fill="none" stroke="#030712" stroke-width="4" />
              <path d="M148 172 L160 172 L150 190 Z M220 172 L232 172 L222 190 Z" fill="#fff" opacity=".22" />
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
import tex from './avatarTextures';

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
      eyeLeft: 'M146 179 C152 173.5 172 172 182 178 C174 182.3 153 182.8 146 179 Z',
      eyeRight: 'M254 179 C248 173.5 228 172 218 178 C226 182.3 247 182.8 254 179 Z',
      shirt: 'M10 430 C18 352 78 318 152 296 C168 318 232 318 248 296 C322 318 382 352 390 430 Z',
      moustache:
        'M148 262 C148 248 160 238 176 234 C187 231 194 230 200 232 C206 230 213 231 224 234 C240 238 252 248 252 262 C246 256 237 252 226 252 C216 251 208 252 200 252 C192 252 184 251 174 252 C163 252 154 256 148 262 Z',
      smile: 'M174 249 C184 254 216 254 226 249 C222 259 211 263.5 200 263.5 C189 263.5 178 259 174 249 Z',
      smirk: 'M174 249 C184 254 216 253 227 247 C224 258 212 263 201 263.5 C190 263.5 178 259 174 249 Z',
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
  created() {
    // Static art data; no need for it to be reactive.
    this.tex = tex;
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
      const dy = y - (r.top + r.height * 0.445);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(dist / (r.width * 0.8), 1);
      this.look = { x: (dx / dist) * 3.2 * reach, y: (dy / dist) * 1.6 * reach };
      this.tilt = Math.max(-1, Math.min(1, dx / (window.innerWidth / 2))) * 3;
    },
    idleGlance() {
      if (Date.now() - (this.lastPointer || 0) < 4000) return;
      const angle = Math.random() * Math.PI * 2;
      const mag = Math.random() < 0.35 ? 0 : 1;
      this.look = { x: Math.cos(angle) * 3 * mag, y: Math.sin(angle) * 1.4 * mag };
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
