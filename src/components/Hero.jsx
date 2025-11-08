import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero({ onStart }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-sky-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient veil to keep text legible and allow pointer-through */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/55 to-white/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wider text-violet-700 shadow-sm">
            Premium demo • Minimal & modern
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Random Video Call
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Beautiful. Fast. Effortless.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl">
            Experience an elegant, professional-grade interface with smooth motion, glassy surfaces, and a calming fragrance-inspired aesthetic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onStart}
              className="group inline-flex items-center justify-center px-7 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 shadow-[0_10px_30px_-8px] shadow-fuchsia-500/60 hover:shadow-fuchsia-500/80 transition-all duration-300">
              <span className="relative">
                Start Video Call
                <span className="absolute -inset-2 rounded-full ring-2 ring-fuchsia-400/35 blur-[2px]" aria-hidden />
              </span>
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-gray-800 font-semibold shadow-lg hover:shadow-xl border border-gray-100">
              How it works
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-sky-500/10 blur-2xl rounded-3xl" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop"
            alt="Friendly video chat banner"
            className="relative rounded-3xl shadow-2xl ring-1 ring-black/5 object-cover w-full h-72 md:h-96"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
