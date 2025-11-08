import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav',
    text: 'Loved the clean design and the quick connect feel. It looks and feels premium!'
  },
  {
    name: 'Mia',
    text: 'The animations and colors are beautiful. Super modern and friendly.'
  },
  {
    name: 'Liam',
    text: 'Exactly the vibe of a professional platform. Smooth and elegant.'
  }
];

function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_35%)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Loved by early testers</h2>
          <p className="mt-3 text-gray-600">Realistic demo vibes with glowing UI details.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-xl p-6">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-gray-700">“{t.text}”</p>
              <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
