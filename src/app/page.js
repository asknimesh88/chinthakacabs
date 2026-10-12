import { siteConfig } from '@/data/siteConfig';
import { featuredReview, reviews } from '@/data/reviews';
import { destinations, galleryImages } from '@/data/destinations';

function Stars({ count = 5 }) {
  return (
    <span className="inline-flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1l2.39 6.37H19l-5.3 4.13 1.87 6.5L10 14.26 4.44 18l1.87-6.5L1 7.37h6.61z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  const first6Destinations = destinations.slice(0, 6);
  const first6Gallery = galleryImages.slice(0, 6);

  return (
    <main>
      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-end pb-16 sm:pb-24 md:items-center md:pb-0 scroll-mt-20">
        <picture className="absolute inset-0">
          <source
            srcSet="/images/hero/nine-arches-bridge-640w.webp 640w, /images/hero/nine-arches-bridge-960w.webp 960w, /images/hero/nine-arches-bridge-1920w.webp 1920w"
            type="image/webp"
            sizes="100vw"
          />
          <img
            src="/images/hero/nine-arches-bridge-960w.jpg"
            alt="Nine Arches Bridge in Ella, Sri Lanka"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/90 via-warm-900/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:py-24">
          <p className="text-accent font-medium text-sm sm:text-base tracking-wide uppercase mb-3">
            Private Driver &amp; Car Rental
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-3xl">
            Explore Sri Lanka with a Trusted Local Driver
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
            From airport pickups to week-long island tours. Safe, comfortable, and personal.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
            <svg className="w-5 h-5 fill-accent" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 1l2.39 6.37H19l-5.3 4.13 1.87 6.5L10 14.26 4.44 18l1.87-6.5L1 7.37h6.61z" />
            </svg>
            {siteConfig.googleRating} / 5 on Google Reviews
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book via WhatsApp
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-surface py-6 sm:py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-warm-800 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Island-Wide Service
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 6v6l4 2" />
              </svg>
              Available 24/7
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-accent" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 1l2.39 6.37H19l-5.3 4.13 1.87 6.5L10 14.26 4.44 18l1.87-6.5L1 7.37h6.61z" />
              </svg>
              {siteConfig.googleRating}&#9733; Google Rating
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-warm-50 py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 text-center">
            How Chinthaka Can Help
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Airport Transfers',
                desc: 'Reliable pickup and drop-off at Colombo Bandaranaike International Airport. Chinthaka will be there with your name board.',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                ),
              },
              {
                title: 'Day Tours',
                desc: 'Explore Sigiriya, Kandy, Galle, or any destination with a full-day guided drive. Chinthaka knows the hidden spots.',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                title: 'Multi-Day Tours',
                desc: 'Custom itineraries for 3, 5, 7, or 14-day tours across Sri Lanka. Hotels, routes, and stops planned together.',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
              },
              {
                title: 'Car Rental',
                desc: 'Clean, comfortable, air-conditioned vehicles with or without a driver. Flexible daily and weekly rates.',
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25a1.125 1.125 0 01-1.125-1.125V6.375A1.125 1.125 0 013.375 5.25h17.25a1.125 1.125 0 011.125 1.125v6.75a1.125 1.125 0 01-1.125 1.125" />
                  </svg>
                ),
              },
            ].map((service) => (
              <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-warm-900">{service.title}</h3>
                <p className="mt-2 text-warm-800/80 text-sm leading-relaxed flex-1">{service.desc}</p>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Chat on WhatsApp
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-xl">
              <picture>
                <source
                  srcSet="/images/gallery/safari-with-tourist-400w.webp 400w, /images/gallery/safari-with-tourist-800w.webp 800w"
                  type="image/webp"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <img
                  src="/images/gallery/safari-with-tourist-800w.jpg"
                  alt="Chinthaka with a traveler on safari"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            <div>
              <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">Meet Your Driver</p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900">
                I&rsquo;m Chinthaka
              </h2>
              <p className="mt-4 text-warm-800/80 leading-relaxed">
                I&rsquo;ve been driving travelers across Sri Lanka for years, from sunrise at Horton Plains to sunset at Galle Fort. I started Chinthaka Cab Service because I love showing people my country.
              </p>
              <p className="mt-3 text-warm-800/80 leading-relaxed">
                When you ride with me, you don&rsquo;t just get a driver. You get a local friend who knows every shortcut, the best rice and curry spots, and which viewpoints the tour buses skip. My car is always clean, the AC always works, and I&rsquo;ll never overcharge you. That&rsquo;s my promise.
              </p>
              <div className="mt-8 flex gap-6 sm:gap-10">
                {[
                  { label: 'Island-Wide', value: 'Service' },
                  { label: '24/7', value: 'Available' },
                  { label: `${siteConfig.googleRating}★`, value: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-lg font-bold text-primary">{stat.label}</p>
                    <p className="text-xs text-warm-800/60 uppercase tracking-wide">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-warm-50 py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 text-center">
            Places Chinthaka Will Take You
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {first6Destinations.map((dest) => (
              <article key={dest.slug} className="group overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="overflow-hidden aspect-[4/3]">
                  <picture>
                    <source
                      srcSet={`${dest.image}-400w.webp 400w, ${dest.image}-800w.webp 800w`}
                      type="image/webp"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <img
                      src={`${dest.image}-800w.jpg`}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-warm-900">{dest.name}</h3>
                  <p className="mt-1 text-sm text-warm-800/70">{dest.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-surface py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 text-center">
            What Travelers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-warm-800">
            <Stars />
            <span className="font-semibold">{siteConfig.googleRating}/5.0</span>
            <span className="text-sm text-warm-800/60">on Google</span>
          </div>

          {/* Featured review */}
          <article className="mt-10 mx-auto max-w-3xl rounded-xl bg-white p-6 sm:p-8 shadow-sm relative">
            <svg className="absolute top-4 left-4 w-8 h-8 text-accent/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <div className="pl-8 sm:pl-10">
              <Stars />
              <p className="mt-3 text-warm-800 leading-relaxed">{featuredReview.text}</p>
              <p className="mt-4 font-semibold text-warm-900">{featuredReview.name}</p>
              <p className="text-xs text-warm-800/60">{featuredReview.source} Review</p>
            </div>
          </article>

          {/* Other reviews */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review, i) => (
              <article key={i} className="rounded-xl bg-white p-5 shadow-sm">
                <Stars count={review.rating} />
                <p className="mt-3 text-sm text-warm-800/80 leading-relaxed">{review.text}</p>
                <p className="mt-3 font-semibold text-warm-900 text-sm">{review.name}</p>
                <p className="text-xs text-warm-800/60">{review.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-warm-900 text-center">
            Moments from the Road
          </h2>
          <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-3">
            {first6Gallery.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
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
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/50 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-accent py-16 sm:py-24 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="mt-4 text-white/90 text-lg leading-relaxed max-w-xl mx-auto">
            Send Chinthaka a message on WhatsApp to plan your trip. No middlemen, no booking fees. Just a direct conversation.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-accent-dark hover:bg-warm-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Chinthaka
          </a>
          <p className="mt-4 text-white/80 text-sm">
            Or call directly: <a href={`tel:${siteConfig.phone}`} className="underline hover:text-white">{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
