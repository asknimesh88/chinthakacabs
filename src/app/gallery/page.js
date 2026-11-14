'use client';

import { useState } from 'react';
import { galleryImages, galleryCategories } from '@/data/destinations';


export default function GalleryPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === active);

  return (
    <div className="bg-warm-50 min-h-screen">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-warm-900 text-center">
            Photo Gallery
          </h1>
          <p className="mt-3 text-center text-warm-700 max-w-xl mx-auto">
            Real moments from real trips with Chinthaka across Sri Lanka.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-warm-700 border border-warm-200 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, i) => (
              <div key={img.src} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <picture>
                  <source
                    srcSet={`${img.src}-400w.webp 400w, ${img.src}-800w.webp 800w`}
                    type="image/webp"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                  <img
                    src={`${img.src}-800w.jpg`}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={i < 6 ? 'eager' : 'lazy'}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white text-sm font-semibold">{img.location}</p>
                    <p className="text-white/70 text-xs mt-0.5">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-warm-600">No photos in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
