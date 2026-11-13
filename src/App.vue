<template>
  <div id="app">
    <header class="header" :class="{ scrolled: isScrolled }">
      <nav class="navbar">
        <div class="nav-brand">
          <img src="data:image/png;base64,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" alt="">
          <div>
            <h1>Future Stars Foundation</h1>
            <p>Empowering Young Football Dreams</p>
          </div>
        </div>

        <ul class="nav-menu" :class="{ open: isMobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">About</router-link></li>
          <li><router-link to="/impact" @click="closeMobileMenu">Impact</router-link></li>
          <li><router-link to="/donation" @click="closeMobileMenu">Donate</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
        </ul>

        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ open: isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>

    <main class="page-wrapper">
      <router-view />
    </main>

    <FooterView />
  </div>
</template>

<script>
import FooterView from './views/FooterView.vue'

export default {
  name: 'App',
  components: {
    FooterView
  },
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  background: #0b1221;
  color: #eef0f6;
}

#app {
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.8rem 2rem;
  background: rgba(7, 11, 31, 0.55);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(7, 11, 31, 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-brand img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.nav-brand h1 {
  font-size: 1.4rem;
  margin-bottom: 0.15rem;
}

.nav-brand p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.75rem;
  align-items: center;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  color: #00b4db;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  padding: 0;
  gap: 6px;
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.page-wrapper {
  padding-top: 100px;
}

@media (max-width: 960px) {
  .header {
    padding: 1rem 1rem;
  }
  .nav-menu {
    position: fixed;
    top: 84px;
    right: 0;
    width: min(280px, 100%);
    height: calc(100vh - 84px);
    background: rgba(7, 11, 31, 0.98);
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 1.25rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -10px 0 35px rgba(0, 0, 0, 0.2);
  }

  .nav-menu.open {
    transform: translateX(0);
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>