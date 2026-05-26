type PageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

const trustItems = [
  "Since 2008 - 17+ years experience",
  "Factory-style spray finish",
  "Finished in 3 days",
  "From $3,000"
];

const galleryItems = [
  {
    city: "Mississauga",
    label: "Before",
    src: "/assets/gallery-01.jpg",
    alt: "Before view of a P2D kitchen cabinet refinishing project in Mississauga"
  },
  {
    city: "Vaughan",
    label: "After",
    src: "/assets/gallery-02.jpg",
    alt: "After view of a P2D kitchen cabinet colour refinishing project in Vaughan"
  },
  {
    city: "Etobicoke",
    label: "Before",
    src: "/assets/gallery-03.jpg",
    alt: "Before view of a GTA kitchen cabinet refinishing project in Etobicoke"
  },
  {
    city: "Oakville",
    label: "After",
    src: "/assets/gallery-04.jpg",
    alt: "After view of a bright refinished kitchen cabinet project in Oakville"
  },
  {
    city: "Toronto",
    label: "Before",
    src: "/assets/gallery-05.jpg",
    alt: "Before view of a Toronto kitchen cabinet refinishing project"
  },
  {
    city: "Brampton",
    label: "After",
    src: "/assets/gallery-06.jpg",
    alt: "After view of a P2D kitchen cabinet refinishing project in Brampton"
  },
  {
    city: "Burlington",
    label: "Before",
    src: "/assets/gallery-07.jpg",
    alt: "Before view of a Burlington cabinet refinishing project"
  },
  {
    city: "Ajax",
    label: "After",
    src: "/assets/gallery-08.jpg",
    alt: "After view of an Ajax kitchen cabinet refinishing project"
  }
];

const benefits = [
  {
    title: "Save thousands",
    body: "Most kitchens cost between $3,000 and $8,500 with P2D instead of tens of thousands for full replacement."
  },
  {
    title: "Done in 3 days",
    body: "Onsite work is finished in just 3 days. No demolition, no weeks without a kitchen, and no full renovation disruption."
  },
  {
    title: "Factory-style finish",
    body: "Doors and drawer fronts are sprayed in a temperature-controlled paint booth with primer and damage-resistant lacquer."
  },
  {
    title: "Melamine, laminate, wood",
    body: "We specialize in painting surfaces many painters avoid, using the right primers so the new finish bonds properly."
  },
  {
    title: "No dust, no strong smells",
    body: "Spray work happens offsite. Onsite painting is by hand and low-VOC, so your kitchen stays usable."
  },
  {
    title: "Eco-friendly update",
    body: "Your existing cabinet boxes stay out of landfill while still getting a clean, modern custom look."
  }
];

const steps = [
  "Free consultation and colour selection",
  "Remove doors and drawer fronts",
  "Sand, clean, and prime in our paint booth",
  "Spray multiple coats of damage-resistant lacquer",
  "Paint fixed cabinet boxes onsite by hand",
  "Reinstall and walk through the finished kitchen"
];

const faqs = [
  {
    q: "How long does the refinishing process take?",
    a: "Onsite work typically takes 3 days. Doors and drawer fronts are sprayed offsite in our paint booth, and the fixed boxes are painted in your home over 1-2 working days."
  },
  {
    q: "How much does it cost to refinish kitchen cabinets in Toronto?",
    a: "Most GTA kitchens fall between $3,000 and $8,500 depending on size, condition, and finish choice. Send us photos for a clear quote within 24 hours."
  },
  {
    q: "Can you refinish melamine or laminate cabinets?",
    a: "Yes. This is one of P2D's specialties. We use primers matched to melamine and laminate so the new finish bonds properly and stays durable."
  },
  {
    q: "Do I need to empty my cabinets?",
    a: "No. There is no need to remove items from inside your cabinets. The boxes are painted in place and we work around your daily routine."
  },
  {
    q: "Will the finish hold up to daily use?",
    a: "Yes. Doors and drawer fronts receive multiple coats of damage-resistant lacquer in a temperature-controlled spray booth."
  },
  {
    q: "Which areas do you serve?",
    a: "Toronto, Woodbridge, Mississauga, Brampton, Oakville, Burlington, Ajax, Guelph, Vaughan, Etobicoke, and nearby GTA areas."
  },
  {
    q: "What colours can I choose?",
    a: "Any colour. Custom colour refinishing is one of our most popular services, and we can help you choose a shade that suits your kitchen."
  },
  {
    q: "Is the work messy?",
    a: "The heavy spray work happens offsite in our booth. Onsite painting is low-VOC, with no big mess and no overpowering smells."
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "P2D Refinishing",
  telephone: "+1-416-831-8489",
  email: "Info@paint2decor.com",
  areaServed: ["Toronto", "Woodbridge", "Mississauga", "Brampton", "Oakville", "Burlington", "Ajax", "Guelph", "Vaughan", "Etobicoke"],
  serviceType: "Kitchen cabinet refinishing",
  award: "HomeStars Best of Awards 2020-2023"
};

const trackingScript = `
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("[data-lead-form]")) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lp_name: form.dataset.lpName,
      service_type: form.dataset.serviceType
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        lp_name: form.dataset.lpName,
        service_type: form.dataset.serviceType
      });
    }
  });
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest("a[href^='tel:']");
    if (!link) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "phone_call_click", phone_number: link.getAttribute("href") });
    if (typeof window.gtag === "function") {
      window.gtag("event", "phone_call_click", { phone_number: link.getAttribute("href") });
    }
  });
`;

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const error = params?.error;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script dangerouslySetInnerHTML={{ __html: trackingScript }} />
      <div className="top-strip">Kitchen cabinet refinishing in Toronto and the GTA</div>
      <header className="site-header lp-header">
        <a className="brand" href="#top" aria-label="P2D Refinishing landing page">
          <img className="brand-logo" src="/assets/p2d-logo.jpg" alt="P2D Refinishing - You can count on us" width="1024" height="209" />
        </a>
        <div className="header-actions">
          <a href="tel:+14168318489">Call +1 (416) 831-8489</a>
          <a className="pill-button" href="#quote">Get My Free Quote</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div>
              <p className="eyebrow">Kitchen cabinet refinishing Toronto</p>
              <h1>
                Transform your kitchen cabinets <span>without replacing them</span>
              </h1>
              <p className="hero-copy">
                Professional kitchen cabinet refinishing and cabinet painting services in Toronto and the GTA. Get a modern factory-style finish in days,
                not weeks, for a fraction of replacement cost.
              </p>
              <a className="pill-button" href="#quote">Get My Free Quote</a>
              <ul className="hero-badges" aria-label="P2D trust highlights">
                {trustItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <form
              className="lead-form"
              id="quote"
              action="/api/lead"
              method="post"
              encType="multipart/form-data"
              data-lead-form
              data-lp-name="kitchen_cabinet_refinishing"
              data-service-type="kitchen_cabinet_refinishing"
            >
              <input type="hidden" name="landingPage" value="Kitchen Cabinet Refinishing Landing Page" />
              <input type="hidden" name="serviceType" value="Kitchen cabinet refinishing" />
              <h2>Send us photos of your kitchen</h2>
              <p>We will reply with a clear, no-pressure quote, usually within 24 hours.</p>
              {error ? (
                <div className="form-alert" role="alert">
                  {error}
                </div>
              ) : null}
              <div className="field-grid">
                <div className="field-grid two">
                  <div className="field">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" name="firstName" autoComplete="given-name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" name="lastName" autoComplete="family-name" required />
                  </div>
                </div>
                <div className="field-grid two">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                </div>
                <div className="field-grid two">
                  <div className="field">
                    <label htmlFor="location">Where are you located?</label>
                    <input id="location" name="location" autoComplete="address-level2" placeholder="Toronto, Mississauga..." />
                  </div>
                  <div className="field">
                    <label htmlFor="doorCount">Doors and drawers</label>
                    <input id="doorCount" name="doorCount" placeholder="Example: 22 doors, 8 drawers" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="photo">Upload photo (optional)</label>
                  <input id="photo" name="photo" type="file" accept="image/*" />
                </div>
                <div className="field">
                  <label htmlFor="message">Project notes</label>
                  <textarea id="message" name="message" placeholder="Tell us about your colour goals, cabinet material, and timing." />
                </div>
              </div>
              <button className="submit-button" type="submit">Get My Free Quote</button>
              <div className="form-note">Your details stay private. No call-back pressure.</div>
            </form>
          </div>
        </section>

        <div className="proof-ribbon">HomeStars Best of Awards 2020-2023 - Google Reviews verified - Since 2008</div>

        <section className="section white">
          <div className="section-inner">
            <p className="section-kicker">Before and after gallery</p>
            <h2 className="section-title">
              Real before and after - <span>Toronto kitchens we have refinished</span>
            </h2>
            <p className="body-copy">
              See what is possible with your existing cabinets. Every kitchen below is a P2D refinishing project across the GTA: no replacements,
              just a fresh factory-style finish.
            </p>
            <div className="gallery-grid" aria-label="Before and after kitchen refinishing examples">
              {galleryItems.map((item) => (
                <div className="gallery-item" data-label={item.label} key={`${item.city}-${item.src}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <span>{item.city}</span>
                </div>
              ))}
            </div>
            <a className="pill-button section-button" href="#quote">Get My Free Quote</a>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="section-kicker">Why GTA homeowners choose refinishing</p>
            <h2 className="section-title">
              Refinishing over <span>replacement</span>
            </h2>
            <p className="body-copy">
              Since 2008, Masoud Kakar and the P2D team have helped GTA families refresh their kitchens without the cost or mess of a full renovation.
            </p>
            <div className="services-grid">
              {benefits.map((benefit) => (
                <article className="service-card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </article>
              ))}
            </div>
            <a className="pill-button section-button" href="#quote">Get My Free Quote</a>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner split">
            <div>
              <p className="section-kicker">Our cabinet refinishing process</p>
              <h2 className="section-title">
                How P2D refinishes your kitchen cabinets <span>step by step</span>
              </h2>
              <p className="body-copy">
                There is no need to remove items from inside your cabinets. Your kitchen stays usable throughout the project.
              </p>
              <ol className="number-list">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <a className="pill-button section-button" href="#quote">Get My Free Quote</a>
            </div>
            <div className="photo-stack" aria-hidden="true">
              <div className="photo-tile large" />
              <div className="photo-tile red">Factory-style finish</div>
              <div className="photo-tile crop-two" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="section-kicker">Customer reviews</p>
            <h2 className="section-title">
              What Toronto and GTA homeowners say about <span>P2D</span>
            </h2>
            <div className="trust-strip">
              <span>HomeStars Best of Awards 2020-2023</span>
              <span>Google Reviews verified by Trustindex</span>
              <span>Since 2008</span>
            </div>
            <blockquote className="featured-review">
              "I am a returning customer and could not be happier! P2D refinished my kitchen cabinets in 2023 when I bought my first house, and the
              results were amazing. When we purchased our second property, we hired them again without hesitation."
              <cite>Google Review</cite>
            </blockquote>
            <a className="pill-button section-button" href="#quote">Get My Free Quote</a>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner">
            <p className="section-kicker">Common questions homeowners ask</p>
            <h2 className="section-title">
              Know what to expect <span>before we begin</span>
            </h2>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band">
          <div className="section-inner">
            <p className="section-kicker">Ready to refresh your kitchen cabinets?</p>
            <h2 className="section-title">
              Send photos today and get a <span>clear quote</span>
            </h2>
            <p className="hero-copy">
              Masoud or the team will reply with a clear, no-pressure quote, usually within 24 hours.
            </p>
            <div className="final-actions">
              <a className="pill-button" href="tel:+14168318489">Call +1 (416) 831-8489</a>
              <a className="dark-button" href="#quote">Get My Free Quote</a>
            </div>
            <p className="contact-line">Email: Info@paint2decor.com | Service area: Toronto, Woodbridge, Mississauga, Brampton, Oakville, Burlington, Ajax, Guelph, Vaughan, Etobicoke</p>
          </div>
        </section>
      </main>

      <div className="sticky-mobile-cta" aria-label="Mobile quote actions">
        <a href="tel:+14168318489">Call</a>
        <a href="#quote">Get Free Quote</a>
      </div>
    </>
  );
}
