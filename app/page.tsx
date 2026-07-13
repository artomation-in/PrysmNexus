"use client";

import { useState } from "react";

const services = [
  ["01", "Search Engine Optimization", "We build search strategies that improve rankings, grow authority, and turn qualified traffic into measurable revenue."],
  ["02", "Social Media Marketing", "We create engaging social strategies that grow your audience, increase brand awareness, and drive meaningful conversions."],
  ["03", "Market Research & Analysis", "Clear audience insights and competitive intelligence reveal the strongest opportunities for sustainable growth."],
  ["04", "Branding & Strategy", "Distinct positioning, memorable identity, and a practical brand system keep every touchpoint aligned."],
  ["05", "Content Marketing", "Editorial systems and high-value content move customers from first impression to lasting loyalty."],
];

const plans = [
  { name: "Starter Plan", price: "59", featured: false },
  { name: "Business Plan", price: "79", featured: true },
  { name: "Enterprise Plan", price: "99", featured: false },
];

export default function Home() {
  const [activeService, setActiveService] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="home">
        <header className="siteHeader">
          <a className="logo" href="#home" aria-label="Marpixel home">
            <span className="logoMark"><i /><i /><i /></span>
            <span><b>Marpixel</b><small>MARKETING AGENCY</small></span>
          </a>
          <button className="menuButton" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
            <a href="#home">Home <em>⌄</em></a><a href="#services">Service <em>⌄</em></a><a href="#about">Pages <em>⌄</em></a><a href="#insights">Blog <em>⌄</em></a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <div className="headerActions"><span className="dash" /><a className="consult" href="#contact">Free Consultation</a><button className="gridButton" aria-label="Open menu"><i /><i /><i /><i /><i /><i /><i /><i /><i /></button></div>
        </header>
        <div className="heroGlow" />
        <img className="heroPortrait" src="https://themexriver.com/wp/marpixel/wp-content/uploads/2026/04/hero.png" alt="Creative professional in dramatic colored light" />
        <div className="heroTitle"><span>Growth</span><strong>Marketing</strong><small>Built For Modern Businesses.</small></div>
        <div className="focused">Focused</div>
        <div className="heroCopy"><p>We help brands grow faster with data-driven strategies, creative campaigns, and performance marketing that delivers measurable results and long-term success.</p><a className="gradientButton" href="#work">View All Works <b>↗</b></a></div>
      </section>

      <section className="pillars" id="work">
        {[
          ["Performance Marketing", "Run targeted ad campaigns that generate leads, sales, measurable growth."],
          ["Data-Driven Strategy", "We use data insights to build effective marketing strategies."],
          ["Expert Marketing Team", "Our expert team delivers strategic marketing results consistently."],
          ["SEO & Organic Growth", "We improve rankings and drive consistent organic traffic for your website."],
        ].map(([title, text], i) => <article key={title}><span className="orb">{i + 1}</span><h3>{title}</h3><p>{text}</p><a href="#services" aria-label={`Learn about ${title}`}>↗</a></article>)}
      </section>

      <section className="about" id="about">
        <div className="eyebrow">About Us</div>
        <h2>We help brands grow faster with powerful digital marketing strategies.</h2>
        <div className="aboutGrid">
          <div className="aboutVisual"><img src="https://themexriver.com/wp/marpixel/wp-content/uploads/2026/04/about-img.jpg" alt="Team collaborating around a table" /><span className="seal">IDEAS<br />THAT<br />MOVE ↗</span></div>
          <div className="stats"><div><strong>10<sup>+</sup></strong><p>Years Of Working Experience</p></div><div><strong>2M<sup>+</sup></strong><p>Customer Happiness and Loyalty</p></div></div>
          <div className="mission"><div className="tabs"><button className="active">Our Mission</button><button>Our Vision</button><button>Our Goal</button></div><p>Our mission is to empower businesses with clear strategies, data-driven insights, and practical solutions that drive sustainable growth, improve performance, and create lasting value.</p><p>We combine strategy, creativity, and analytics to build marketing systems that drive real business growth.</p><a className="darkButton" href="#contact">Know About Us <b>↗</b></a></div>
        </div>
      </section>

      <section className="reviews"><div className="reviewTrack">{["Trusted partner through every business challenge.","Delivered solutions that improved our operations.","Outstanding guidance from a knowledgeable team.","Clear insights, strong outcomes, great support."].map((r,i)=><div key={r}><span>“{r}”</span><b>{i % 2 ? "99% Recommend" : "100% Real Reviews"}</b></div>)}</div></section>

      <section className="services" id="services">
        <div className="eyebrow light">Our Services</div>
        <h2>Our Marketing Services<br />That Drive Growth.</h2>
        <div className="serviceGrid">
          <div className="serviceList">{services.map(([num,title],i)=><button className={activeService===i?"active":""} onClick={()=>setActiveService(i)} key={title}><span>{num}</span>{title}<b>↗</b></button>)}<a href="#contact">View All Services</a></div>
          <div className="serviceDetail"><div><p>{services[activeService][2]}</p><ul><li>Growth strategy &amp; planning</li><li>Content creation and posting strategy</li><li>Performance tracking &amp; analytics</li><li>Brand consistency across all platforms</li></ul><a href="#contact">Read More ↗</a></div><div className="serviceImage"><img src="https://themexriver.com/wp/marpixel/wp-content/uploads/2026/03/wp2.webp" alt="Marketing strategy session" /></div></div>
        </div>
      </section>

      <section className="clients">
        <div className="eyebrow">Our Clients</div><h2>Trusted by 2,000+ Organizations Across Diverse Industries.</h2><p>We help businesses define clear goals, develop actionable strategies, and create structured plans that align vision and resources.</p>
        <div className="logos"><span>Vertex</span><span>ALTO</span><span>ORBIT</span><span>NEXUS</span><span>MONO</span><span>STUDIO</span></div>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricingIntro"><div><div className="eyebrow">Pricing Plan</div><h2>Flexible Pricing Plans Designed For Every Business.</h2></div><p>Choose the perfect plan that fits your business goals and growth stage. We offer flexible, transparent pricing designed to deliver real marketing results.</p></div>
        <div className="plans">{plans.map(plan=><article className={plan.featured?"featured":""} key={plan.name}>{plan.featured&&<span className="popular">Most Popular</span>}<h4>{plan.name}</h4><div className="price"><small>$</small>{plan.price}<em>/Per monthly</em></div><p>Perfect for individuals &amp; small creators just getting started.</p><b>What&apos;s Included:</b><ul><li>Advanced SEO optimization</li><li>Monthly performance report</li><li>Paid ad campaign management</li><li>Dedicated account manager</li><li>24/7 priority support</li></ul><a href="#contact">Get Started Free</a></article>)}</div>
      </section>

      <section className="insights" id="insights"><div className="eyebrow light">Latest Insights</div><h2>Fresh thinking for ambitious brands.</h2><div className="posts"><article><span>Strategy · 8 min</span><h3>How modern brands turn attention into measurable growth</h3><a href="#contact">Read Article ↗</a></article><article><span>Performance · 6 min</span><h3>The metrics that reveal what your customers really value</h3><a href="#contact">Read Article ↗</a></article><article><span>Creative · 5 min</span><h3>Building a visual identity designed to move at culture speed</h3><a href="#contact">Read Article ↗</a></article></div></section>

      <footer id="contact"><div className="footerTop"><div className="eyebrow light">Let&apos;s Work Together</div><h2>Ready to grow<br />something great?</h2><a className="gradientButton" href="mailto:hello@marpixel.agency">Start a project <b>↗</b></a></div><div className="footerBottom"><a className="logo inverse" href="#home"><span className="logoMark"><i/><i/><i/></span><span><b>Marpixel</b><small>MARKETING AGENCY</small></span></a><p>Strategy-led creativity for brands built to grow.</p><div><a href="#services">Services</a><a href="#about">About</a><a href="#insights">Insights</a><a href="mailto:hello@marpixel.agency">Contact</a></div></div><small className="copyright">© 2026 Marpixel. All rights reserved.</small></footer>
    </main>
  );
}
