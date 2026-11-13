<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="contact-hero-inner">
        <h1>Contact & FAQ</h1>
        <p>Have a question, want to collaborate, or need more information? We’re here to help.</p>
        <router-link class="hero-cta" to="/">Back to Home</router-link>
      </div>
    </section>

    <ContactSection />

    <section class="faq-section">
      <div class="container">
        <div class="faq-header">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most common questions from our supporters, partners, and families.</p>
        </div>

        <div class="faq-grid">
          <div class="faq-card">
            <h3>How can I support the foundation?</h3>
            <p>Support comes through donations, volunteering, sponsorship, or spreading the word. Visit the donate page to contribute directly.</p>
          </div>
          <div class="faq-card">
            <h3>Can I book an event or partnership?</h3>
            <p>Yes. Use the contact form to tell us about your project, partnership idea, or event opportunity.</p>
          </div>
          <div class="faq-card">
            <h3>Do you offer youth coaching programs?</h3>
            <p>We offer youth development programs designed to empower football and life skills for young athletes in underserved communities.</p>
          </div>
          <div class="faq-card">
            <h3>Where are your programs based?</h3>
            <p>Our main office is in London, UK, and we partner with local organizations to deliver programs across the region.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'ContactView',
  components: {
    ContactSection
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #070b1f;
  color: #fff;
}

.contact-hero {
  padding: 5rem 1.5rem 3rem;
  background: linear-gradient(135deg, #190b31, #051b3a);
  text-align: center;
}

.contact-hero-inner {
  max-width: 900px;
  margin: 0 auto;
}

.contact-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-hero p {
  max-width: 760px;
  margin: 0 auto 2rem;
  color: rgba(255,255,255,0.85);
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #00b4db;
  color: #08101f;
  border-radius: 999px;
  padding: 1rem 2rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.18);
}

.faq-section {
  padding: 4rem 1.5rem 6rem;
}

.faq-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3rem;
}

.faq-header span {
  display: inline-block;
  color: #00b4db;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
}

.faq-header h2 {
  font-size: 2.75rem;
  margin-bottom: 1rem;
}

.faq-header p {
  color: rgba(255,255,255,0.8);
  line-height: 1.8;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.faq-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  padding: 1.75rem;
  min-height: 220px;
}

.faq-card h3 {
  margin-bottom: 1rem;
}

.faq-card p {
  color: rgba(255,255,255,0.75);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2.5rem;
  }
}
</style>
