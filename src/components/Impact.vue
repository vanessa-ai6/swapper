<template>
  <!-- Impact Section -->
    <section id="impact" class="impact">
      <div class="container">
        <h2>Our Impact So Far</h2>
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in statistics" :key="stat.label">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <div class="success-stories">
          <h3>Success Stories</h3>
          <div class="stories-grid">
            <div class="story-card" v-for="story in successStories" :key="story.id">
              <img v-if="story.image" :src="story.image" :alt="story.name" />
              <div class="story-content">
                <h4>{{ story.name }}</h4>
                <p class="story-achievement">{{ story.achievement }}</p>
                <p>{{ story.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="projects-completed">
          <h3>Projects Completed</h3>
          <div class="project-list">
            <div class="project-item" v-for="project in completedProjects" :key="project.id">
              <div class="project-header">
                <h4>{{ project.name }}</h4>
                <span class="project-status">✅ Completed</span>
              </div>
              <p>{{ project.description }}</p>
              <div class="project-stats">
                <span>Beneficiaries: {{ project.beneficiaries }}</span>
                <span>Investment: {{ project.investment }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
   name: 'Impact',

   setup() {
      const statistics = ref([
        { value: '2,847', label: 'Young Players Supported' },
        { value: '156', label: 'Schools Partnered' },
        { value: '89', label: 'Professional Contracts Secured' },
        { value: '£2.3M', label: 'Total Funds Raised' },
        { value: '34', label: 'Countries Reached' },
        { value: '98%', label: 'Education Success Rate' }
      ])
      const successStories = ref([
          {
          id: 1,
          name: 'Marcus Johnson',
          achievement: 'Manchester United Academy',
          description: 'From our program to Man United\'s youth academy. Now studying Sports Science while training.',
          image: 'https://via.placeholder.com/150x150/4CAF50/white?text=MJ'
        },
        {
          id: 2,
          name: 'Amelia Rodriguez',
          achievement: 'England U-19 Captain',
          description: 'Leading England\'s youth team while maintaining straight A\'s in her A-levels.',
          image: 'https://via.placeholder.com/150x150/2196F3/white?text=AR'
        },
        {
          id: 3,
          name: 'David Okafor',
          achievement: 'Chelsea FC Scholar',
          description: 'Secured scholarship with Chelsea FC and accepted to study Engineering at Imperial College.',
          image: 'https://via.placeholder.com/150x150/FF9800/white?text=DO'
        }
      ])
      const completedProjects = ref([
         {
          id: 1,
          name: 'London Youth Football Centers',
          description: 'Established 12 training centers across London providing free coaching to 500+ young players',
          beneficiaries: '500+',
          investment: '£450,000'
        },
        {
          id: 2,
          name: 'Education Support Program',
          description: 'Tutoring and educational support for 200 young footballers in partnership with local schools',
          beneficiaries: '200',
          investment: '£180,000'
        },
        {
          id: 3,
          name: 'Girls Football Initiative',
          description: 'Dedicated program supporting young female footballers with specialized coaching and mentorship',
          beneficiaries: '150',
          investment: '£120,000'
        },
        {
          id: 4,
          name: 'Equipment Donation Drive',
          description: 'Provided football boots, kits, and training equipment to underprivileged young players',
          beneficiaries: '800+',
          investment: '£75,000'
        },
        {
          id: 5,
          name: 'Mental Health Support Network',
          description: 'Counseling and psychological support services for young athletes and their families',
          beneficiaries: '300',
          investment: '£95,000'
        }
      ])

      return {
         statistics,
         successStories,
         completedProjects
      }
   }
}
</script>

<style>

/* Impact Section */
.impact {
  padding: 4rem 0;
  background: #f8f9fa;
}

.impact h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #1e3c72;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 1.1rem;
}

.success-stories h3,
.projects-completed h3 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.story-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.story-card:hover {
  transform: translateY(-5px);
}

.story-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.story-content {
  padding: 1.5rem;
}

.story-achievement {
  color: #4CAF50;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.project-list {
  display: grid;
  gap: 1.5rem;
}

.project-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-status {
  background: #4CAF50;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.project-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  color: #666;
}
</style>