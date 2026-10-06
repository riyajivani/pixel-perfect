import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Check,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Leaf,
  Menu,
  PackageCheck,
  SearchCheck,
  Ship,
  Truck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import harborImage from "@/assets/harbor-trade.jpg";
import agricultureImage from "@/assets/agricultural-export.jpg";
import industrialImage from "@/assets/industrial-export.jpg";
import consumerImage from "@/assets/consumer-export.jpg";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Global presence", to: "/global-presence" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="trade-header">
      <div className="trade-header-inner">
        <Link to="/" className="trade-wordmark" aria-label="Global Trade home">
          <span className="trade-wordmark-icon" aria-hidden="true"><Globe2 /></span>
          <span className="trade-wordmark-copy">
            <span className="trade-wordmark-name">GLOBAL TRADE</span>
            <span className="trade-wordmark-caption">IMPORT · EXPORT · SOURCING</span>
          </span>
        </Link>

        <nav className="trade-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "is-current" }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="trade-header-cta">
          <Link to="/contact">Get in touch <ArrowUpRight aria-hidden="true" /></Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="trade-menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-trade-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {menuOpen && (
        <nav id="mobile-trade-navigation" className="trade-mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "is-current" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}<ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="trade-footer">
      <div className="trade-footer-main">
        <div className="trade-footer-brand">
          <Link to="/" className="trade-wordmark" aria-label="Global Trade home">
            <span className="trade-wordmark-icon" aria-hidden="true"><Globe2 /></span>
            <span className="trade-wordmark-copy">
              <span className="trade-wordmark-name">GLOBAL TRADE</span>
              <span className="trade-wordmark-caption">IMPORT · EXPORT · SOURCING</span>
            </span>
          </Link>
          <p>Thoughtful sourcing and dependable trade, from first conversation to final delivery.</p>
        </div>
        <div className="trade-footer-links">
          <span className="trade-footer-label">Explore</span>
          {navigation.slice(1).map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>
        <div className="trade-footer-contact">
          <span className="trade-footer-label">Start a conversation</span>
          <p>Share your product, origin or destination requirements with our team.</p>
          <Link to="/contact" className="trade-text-link">Make an inquiry <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="trade-footer-bottom">
        <span>© 2026 Global Trade. All rights reserved.</span>
        <span>Trade with clarity. Move with confidence.</span>
      </div>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="trade-section-intro">
      <span className="trade-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="trade-page-intro">
      <span className="trade-eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function TradeCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`trade-cta ${compact ? "trade-cta-compact" : ""}`}>
      <div className="trade-cta-inner">
        <div>
          <span className="trade-eyebrow">A good place to begin</span>
          <h2>Looking for a reliable global trade partner?</h2>
          <p>Let’s discuss your sourcing, import or export requirements.</p>
        </div>
        <Button asChild variant="secondary" className="trade-cta-button">
          <Link to="/contact">Get in touch <ArrowUpRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  );
}

const productGroups = [
  {
    name: "Agricultural produce",
    category: "FRESH & PROCESSED",
    description: "Sourcing conversations for selected produce, ingredients and agricultural goods.",
    image: agricultureImage,
    alt: "Fresh produce sorted in export-ready crates",
    icon: Leaf,
  },
  {
    name: "Industrial materials",
    category: "MATERIALS & INPUTS",
    description: "Product enquiries for materials and industrial inputs, matched to specification.",
    image: industrialImage,
    alt: "Steel coils and timber prepared in an export warehouse",
    icon: Boxes,
  },
  {
    name: "Consumer goods",
    category: "FINISHED PRODUCTS",
    description: "Trade support for considered consumer goods, homeware and textiles.",
    image: consumerImage,
    alt: "Homeware and textiles carefully packed for export",
    icon: PackageCheck,
  },
];

function ProductCards({ compact = false }: { compact?: boolean }) {
  const items = compact ? productGroups.slice(0, 3) : productGroups;
  return (
    <div className="trade-product-grid">
      {items.map((product) => (
        <article key={product.name} className="trade-product-item">
          <Link to="/contact" className="trade-product-image-link" aria-label={`Ask about ${product.name}`}>
            <img src={product.image} alt={product.alt} width={1200} height={912} loading="lazy" />
            <span className="trade-product-image-arrow"><ArrowUpRight aria-hidden="true" /></span>
          </Link>
          <div className="trade-product-info">
            <span className="trade-product-category">{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to="/contact" className="trade-text-link">Discuss this category <ArrowRight aria-hidden="true" /></Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <main>
      <section className="trade-hero">
        <img className="trade-hero-image" src={harborImage} alt="Container ship moving through an international port at sunrise" width={1536} height={1024} fetchPriority="high" />
        <div className="trade-hero-content">
          <span className="trade-eyebrow">Global import & export</span>
          <h1>Connecting quality products with global markets.</h1>
          <p>We bring trusted suppliers, considered sourcing and international markets together through clear, dependable trade.</p>
          <div className="trade-hero-actions">
            <Button asChild className="trade-button-light"><Link to="/products">Explore products <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" className="trade-button-outline"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
        <span className="trade-hero-caption"><Ship aria-hidden="true" /> Sourcing · Trade · Delivery</span>
      </section>

      <section className="trade-pillars" aria-label="Trade commitments">
        <div><span className="trade-pillar-index">01</span><span>Careful sourcing</span></div>
        <div><span className="trade-pillar-index">02</span><span>Quality at every handover</span></div>
        <div><span className="trade-pillar-index">03</span><span>Clear communication</span></div>
        <div><span className="trade-pillar-index">04</span><span>Reliable coordination</span></div>
      </section>

      <section className="trade-home-about trade-section-wrap">
        <div className="trade-home-about-image">
          <img src={harborImage} alt="A cargo ship and containers at a working port" width={1536} height={1024} loading="lazy" />
          <span className="trade-image-note">From origin to destination</span>
        </div>
        <div className="trade-home-about-copy">
          <span className="trade-eyebrow">A considered approach</span>
          <h2>Trade is built on trust, long before a shipment moves.</h2>
          <p>Every successful order starts with understanding what matters: the product, the people behind it and the requirements of the destination market.</p>
          <p>We keep the process clear, connect the right partners and stay attentive to detail at every step.</p>
          <Link to="/about" className="trade-text-link">About our approach <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="trade-products-section trade-section-wrap">
        <SectionIntro eyebrow="Product areas" title="The right product. The right connection." text="A selection of broad product categories to begin the conversation. Share your specification and destination for a considered response." />
        <ProductCards compact />
        <div className="trade-centered-link"><Link to="/products" className="trade-text-link">View product areas <ArrowRight aria-hidden="true" /></Link></div>
      </section>

      <section className="trade-home-services">
        <div className="trade-section-wrap">
          <SectionIntro eyebrow="Trade support" title="A clear path through every handover." text="From the first brief to the final documentation, careful coordination helps international trade move with confidence." />
          <div className="trade-service-preview">
            <div><span>01</span><h3>Understand</h3><p>We start with your product, specifications and destination requirements.</p></div>
            <div><span>02</span><h3>Source</h3><p>We identify a suitable supply path and align expectations early.</p></div>
            <div><span>03</span><h3>Coordinate</h3><p>Quality checks, documentation and logistics stay connected.</p></div>
            <div><span>04</span><h3>Deliver</h3><p>Updates stay clear through dispatch and delivery.</p></div>
          </div>
          <div className="trade-centered-link"><Link to="/services" className="trade-text-link">Explore our services <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <TradeCta />
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="trade-inner-page">
      <PageIntro eyebrow="About us" title="Good trade begins with good understanding." text="International trade is more than a movement of goods. It is a relationship built through clear expectations, careful coordination and trust." />
      <section className="trade-about-detail trade-section-wrap">
        <div className="trade-about-image">
          <img src={harborImage} alt="A cargo ship being handled at an international port" width={1536} height={1024} loading="lazy" />
        </div>
        <div className="trade-about-copy">
          <span className="trade-eyebrow">Our approach</span>
          <h2>A partner in the details that make trade work.</h2>
          <p>Every market brings its own requirements. We begin by listening closely, clarifying specifications and understanding what a successful outcome looks like for you.</p>
          <p>Then we bring sourcing, supplier communication, quality considerations and shipment coordination into one clear conversation.</p>
          <p>Our aim is simple: make each handover easier to understand and easier to rely on.</p>
          <Button asChild className="trade-inline-button"><Link to="/contact">Start a conversation <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
      <section className="trade-values-section">
        <div className="trade-section-wrap">
          <SectionIntro eyebrow="What guides us" title="Principles that travel well." text="Consistency and care matter at every stage of a cross-border partnership." />
          <div className="trade-values-grid">
            <article><BadgeCheck aria-hidden="true" /><h3>Quality minded</h3><p>Specifications and expectations are made clear before a commitment is made.</p></article>
            <article><Globe2 aria-hidden="true" /><h3>Globally aware</h3><p>We consider origin, destination and local requirements as part of one process.</p></article>
            <article><ClipboardCheck aria-hidden="true" /><h3>Accountable</h3><p>Clear updates help every partner understand what has happened and what comes next.</p></article>
          </div>
        </div>
      </section>
      <TradeCta compact />
    </main>
  );
}

export function ProductsPage() {
  return (
    <main className="trade-inner-page">
      <PageIntro eyebrow="Products" title="Quality products, thoughtfully sourced." text="Explore a few broad product areas. Every enquiry is considered against the specification, origin and destination you have in mind." />
      <section className="trade-products-page trade-section-wrap">
        <ProductCards />
        <div className="trade-product-note"><PackageCheck aria-hidden="true" /><p>These categories are illustrative starting points. Share the product and requirements you are looking for, and we can discuss the next steps.</p></div>
      </section>
      <TradeCta compact />
    </main>
  );
}

const serviceItems = [
  { title: "Import & export", text: "Trade coordination shaped around your product, origin and destination.", icon: Ship },
  { title: "Global sourcing", text: "Supplier search and product matching guided by a clear brief.", icon: SearchCheck },
  { title: "Supplier management", text: "Structured communication to keep expectations and details aligned.", icon: BadgeCheck },
  { title: "Quality inspection", text: "Quality checkpoints and product specifications considered before dispatch.", icon: ClipboardCheck },
  { title: "Documentation & compliance", text: "Attention to the documents and destination requirements involved in trade.", icon: FileCheck2 },
  { title: "Logistics coordination", text: "Connected planning across packaging, shipping and delivery milestones.", icon: Truck },
];

const processSteps = [
  "Understand your requirement",
  "Source the right product",
  "Quality & documentation",
  "Logistics & shipping",
  "Delivery & support",
];

export function ServicesPage() {
  return (
    <main className="trade-inner-page">
      <PageIntro eyebrow="Services" title="From first brief to final delivery." text="Practical support across the trade journey, with clear responsibilities and communication at each step." />
      <section className="trade-services-page trade-section-wrap">
        <div className="trade-services-grid">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="trade-service-item">
                <Icon aria-hidden="true" />
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <Link to="/contact" aria-label={`Enquire about ${service.title}`}><ArrowUpRight aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>
      </section>
      <section className="trade-process-section">
        <div className="trade-section-wrap">
          <SectionIntro eyebrow="How we work" title="Five steps. One connected process." text="A straightforward sequence keeps your priorities visible from the outset." />
          <ol className="trade-process-list">
            {processSteps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></li>
            ))}
          </ol>
        </div>
      </section>
      <TradeCta compact />
    </main>
  );
}

const marketAreas = [
  { name: "Asia Pacific", detail: "Discuss sourcing origins, regional product availability and destination requirements across Asia Pacific." },
  { name: "Europe", detail: "Share the destination market and product details to discuss documentation and trade requirements." },
  { name: "Middle East & Africa", detail: "Start with your route, product and timing. We can map the practical considerations together." },
  { name: "The Americas", detail: "Tell us your origin and destination markets to begin a focused trade conversation." },
];

export function GlobalPresencePage() {
  const [selectedArea, setSelectedArea] = useState(marketAreas[0]);

  return (
    <main className="trade-inner-page">
      <PageIntro eyebrow="Global presence" title="Trade connects markets. Relationships connect people." text="Every cross-border opportunity starts with the right product, a clear route and an understanding of local requirements." />
      <section className="trade-global-panel trade-section-wrap">
        <div className="trade-global-heading">
          <span className="trade-eyebrow">Start with a market</span>
          <h2>Where would you like to trade?</h2>
          <p>Choose a region to see the kinds of details that help frame an enquiry.</p>
        </div>
        <div className="trade-market-explorer">
          <div className="trade-market-list" role="tablist" aria-label="Market regions">
            {marketAreas.map((area) => (
              <button
                key={area.name}
                type="button"
                role="tab"
                aria-selected={selectedArea.name === area.name}
                className={selectedArea.name === area.name ? "is-selected" : ""}
                onClick={() => setSelectedArea(area)}
              >
                <span>{area.name}</span><ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="trade-market-detail" role="tabpanel">
            <Globe2 aria-hidden="true" />
            <span className="trade-eyebrow">{selectedArea.name}</span>
            <p>{selectedArea.detail}</p>
            <Link to="/contact" className="trade-text-link">Discuss a market <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <p className="trade-market-caveat">Availability depends on product, origin, destination and applicable trade requirements.</p>
      </section>
      <section className="trade-global-principles">
        <div className="trade-section-wrap">
          <SectionIntro eyebrow="Across borders" title="Local details. A shared standard." text="Thoughtful trade planning brings product expectations, documentation and delivery into view early." />
          <div className="trade-global-points">
            <div><span>01</span><h3>Know the route</h3><p>Origin and destination shape every practical decision.</p></div>
            <div><span>02</span><h3>Clarify the details</h3><p>Product, packaging and compliance requirements all matter.</p></div>
            <div><span>03</span><h3>Keep partners aligned</h3><p>Clear communication helps maintain confidence from start to finish.</p></div>
          </div>
        </div>
      </section>
      <TradeCta compact />
    </main>
  );
}

type InquiryValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  message: string;
};

export function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  async function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as InquiryValues;
    const inquiry = [
      "Global Trade inquiry",
      `Name: ${values.name}`,
      `Company: ${values.company || "Not provided"}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Country: ${values.country || "Not provided"}`,
      "",
      "Requirement:",
      values.message,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(inquiry);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
      setCopied(false);
    }
  }

  return (
    <main className="trade-inner-page">
      <PageIntro eyebrow="Contact" title="Let’s start a useful conversation." text="Tell us what you need to source, move or bring to market. We’ll start with the details that matter to you." />
      <section className="trade-contact-section trade-section-wrap">
        <div className="trade-contact-aside">
          <span className="trade-eyebrow">Make an inquiry</span>
          <h2>A clear brief is the first step.</h2>
          <p>Share the product, origin or destination you have in mind. Include as much detail as is useful, and your request will be prepared as a message you can send.</p>
          <div className="trade-contact-note"><Globe2 aria-hidden="true" /><span>International trade enquiries welcome</span></div>
          <div className="trade-contact-note"><Check aria-hidden="true" /><span>No obligation to enquire</span></div>
        </div>

        <form className="trade-inquiry-form" onSubmit={prepareInquiry}>
          <div className="trade-form-grid">
            <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
            <label>Email <span aria-hidden="true">*</span><input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label>
            <label>Phone<input type="tel" name="phone" autoComplete="tel" placeholder="Include country code" /></label>
            <label className="trade-form-wide">Country<input name="country" autoComplete="country-name" placeholder="Your country" /></label>
            <label className="trade-form-wide">Requirement / message <span aria-hidden="true">*</span><textarea name="message" required rows={5} placeholder="Product, quantity, origin, destination or other requirements" /></label>
          </div>
          <Button type="submit" className="trade-submit-button">Prepare inquiry <ArrowRight aria-hidden="true" /></Button>
          {copied && <p className="trade-form-feedback" role="status">Inquiry copied. Paste it into your email to send.</p>}
          {copyFailed && <p className="trade-form-feedback" role="status">Your browser could not copy the inquiry. Please try again or copy your details before leaving this page.</p>}
          <p className="trade-form-footnote">Your inquiry is prepared on this device. Nothing is sent until you choose to share it.</p>
        </form>
      </section>
    </main>
  );
}