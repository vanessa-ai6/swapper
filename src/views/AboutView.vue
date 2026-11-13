<template>
   <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2>Our Mission</h2>
        <p class="mission-text">
          The Future Stars Foundation is dedicated to nurturing young football talent while ensuring 
          they receive quality education. We bridge the gap between sporting excellence and academic achievement.
        </p>
        
        <div class="reasons-grid">
          <h3>Why Support Young Footballers?</h3>
          <div class="reason-cards">
            <div class="reason-card" v-for="reason in reasons" :key="reason.id">
              <div class="reason-icon">{{ reason.icon }}</div>
              <h4>{{ reason.title }}</h4>
              <p>{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AboutView',

  setup() {
    const reasons = ref([
      {
        id: 1,
        icon: 'lucide:book-open',
        title: 'Education First',
        description: 'Ensuring young players maintain academic excellence alongside their football development'
      },
      {
        id: 2,
        icon: 'lucide:shield-check',
        title: 'Professional Training',
        description: 'Access to world-class coaching and training facilities to develop technical skills'
      },
      {
        id: 3,
        icon: 'lucide:heart-pulse',
        title: 'Health & Wellbeing',
        description: 'Comprehensive healthcare, nutrition guidance, and mental health support'
      },
      {
        id: 4,
        icon: 'lucide:globe',
        title: 'Equal Opportunities',
        description: 'Breaking down barriers and providing opportunities regardless of background'
      },
      {
        id: 5,
        icon: 'lucide:briefcase',
        title: 'Career Development',
        description: 'Preparing players for professional careers both in and outside of football'
      },
      {
        id: 6,
        icon: 'lucide:users',
        title: 'Family Support',
        description: 'Supporting entire families through the journey of youth football development'
      },
      {
        id: 7,
        icon: 'lucide:award',
        title: 'Competition Exposure',
        description: 'Providing access to high-level competitions and scouting opportunities'
      },
      {
        id: 8,
        icon: 'lucide:handshake',
        title: 'Community Impact',
        description: 'Creating positive role models and giving back to local communities'
      }
    ]
    )

    return {
      reasons
    }
  }
}
</script>

<style>

/* About Section */
.about {
  padding: 1.5rem 0;
}

.about h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #1e3c72;
}

.mission-text {
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #666;
}

.reasons-grid h3 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
}

.reason-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.reason-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s;
}

.reason-card:hover {
  transform: translateY(-5px);
}

.reason-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}


.reason-card h4 {
  margin-bottom: 1rem;
  color: #1e3c72;
}

</style>
