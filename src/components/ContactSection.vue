<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-header">
        <h2>Contact Us</h2>
        <p>Have questions or want to partner with us? Reach out today.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-card">
          <Icon icon="lucide:mail" class="contact-icon" />
          <h3>Email</h3>
          <p>info@futurestars.org</p>
        </div>
        <div class="contact-card">
          <Icon icon="lucide:phone" class="contact-icon" />
          <h3>Phone</h3>
          <p>+44 20 1234 5678</p>
        </div>
        <div class="contact-card">
          <Icon icon="lucide:map-pin" class="contact-icon" />
          <h3>Office</h3>
          <p>London, UK</p>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <h3>Send a Message</h3>
        <form @submit.prevent="submitContact" class="contact-form">
          <input v-model="contact.name" type="text" placeholder="Your name" required />
          <input v-model="contact.email" type="email" placeholder="Your email" required />
          <textarea v-model="contact.message" rows="5" placeholder="Your message" required></textarea>
          <button class="cta-button" type="submit">Send Message</button>
        </form>
        <p v-if="submitted" class="success-message">Thank you! We will be in touch soon.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitContact() {
      if (!this.contact.name || !this.contact.email || !this.contact.message) {
        return
      }
      this.submitted = true
      setTimeout(() => {
        this.submitted = false
        this.contact = { name: '', email: '', message: '' }
      }, 2000)
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 4rem 0;
  background: #06091a;
  color: #fff;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 1.5rem;
  text-align: center;
}

.contact-icon {
  width: 40px;
  height: 40px;
  color: #00b4db;
  margin-bottom: 1rem;
}

.contact-form-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.65);
}

.cta-button {
  background: linear-gradient(135deg, #38003c, #00b4db);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.success-message {
  margin-top: 1rem;
  text-align: center;
  color: #00ff87;
}
</style>
