<template>
   <section id="donate" class="donate">
      <div class="container">
        <h2>Make a Difference Today</h2>
        <div class="donation-form">
          <div class="amount-selection">
            <h3>Select Donation Amount</h3>
            <div class="amount-buttons">
              <button 
                v-for="amount in donationAmounts" 
                :key="amount"
                @click="selectedAmount = amount"
                :class="{ active: selectedAmount === amount }"
                class="amount-btn"
              >
                £{{ amount }}
              </button>
            </div>
            <div class="custom-amount">
              <input 
                v-model="customAmount" 
                type="number" 
                placeholder="Custom amount"
                @input="selectedAmount = null"
              />
            </div>
          </div>

          <div class="donation-impact">
            <h4>Your Impact:</h4>
            <p>{{ getDonationImpact() }}</p>
          </div>

          <div class="donor-form">
            <h3>Donor Information</h3>
            <form @submit.prevent="processDonation">
              <div class="form-group">
                <input v-model="donorInfo.name" type="text" placeholder="Full Name" required />
              </div>
              <div class="form-group">
                <input v-model="donorInfo.email" type="email" placeholder="Email Address" required />
              </div>
              <div class="form-group">
                <input v-model="donorInfo.phone" type="tel" placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label>
                  <input v-model="donorInfo.anonymous" type="checkbox" />
                  Make this donation anonymous
                </label>
              </div>
              <button type="submit" class="donate-btn">
                Donate £{{ getFinalAmount() }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Donors -->
    <section class="recent-donors">
      <div class="container">
        <h3>Recent Supporters</h3>
        <div class="donors-list">
          <div class="donor-item" v-for="donor in recentDonors" :key="donor.id">
            <div class="donor-avatar">{{ donor.initials }}</div>
            <div class="donor-info">
              <p class="donor-name">{{ donor.name }}</p>
              <p class="donor-amount">£{{ donor.amount }}</p>
              <p class="donor-time">{{ donor.timeAgo }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay" @click="showSuccessModal = false">
      <div class="modal-content" @click.stop>
        <h3>Thank You!</h3>
        <p>Your donation of £{{ getFinalAmount() }} has been received.</p>
        <p>You will receive a confirmation email shortly.</p>
        <button @click="showSuccessModal = false" class="close-btn">Close</button>
      </div>
    </div>
</template>

<script>
export default {
 name: 'Donation',

 data() {
   return {
      selectedAmount: null,
      customAmount: '',
      showSuccessModal: false,
      donorInfo: {
        name: '',
        email: '',
        phone: '',
        anonymous: false
      },
      donationAmounts: [25, 50, 100, 250, 500, 1000],
       recentDonors: [
        { id: 1, name: 'Anonymous Donor', initials: 'AD', amount: '500', timeAgo: '2 hours ago' },
        { id: 2, name: 'Sarah Mitchell', initials: 'SM', amount: '100', timeAgo: '5 hours ago' },
        { id: 3, name: 'John Thompson', initials: 'JT', amount: '250', timeAgo: '1 day ago' },
        { id: 4, name: 'Anonymous Donor', initials: 'AD', amount: '50', timeAgo: '1 day ago' },
        { id: 5, name: 'Emma Wilson', initials: 'EW', amount: '75', timeAgo: '2 days ago' }
      ]
   }
 },

  methods: {
    scrollTo(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
    },
    getFinalAmount() {
      return this.customAmount || this.selectedAmount || 0;
    },
    getDonationImpact() {
      const amount = this.getFinalAmount();
      if (amount >= 1000) return 'Could sponsor a young player for an entire year including training and education support';
      if (amount >= 500) return 'Could provide 6 months of professional coaching for a talented youngster';
      if (amount >= 250) return 'Could fund educational support and tutoring for 3 months';
      if (amount >= 100) return 'Could provide football equipment and kit for 2 young players';
      if (amount >= 50) return 'Could fund one month of training sessions for a young footballer';
      if (amount >= 25) return 'Could provide nutritional support for a week';
      return 'Every donation makes a difference in a young person\'s life';
    },
    processDonation() {
      // Simulate donation processing
      setTimeout(() => {
        this.showSuccessModal = true;
        this.resetForm();
        this.addToRecentDonors();
      }, 1000);
    },
    resetForm() {
      this.donorInfo = {
        name: '',
        email: '',
        phone: '',
        anonymous: false
      };
      this.selectedAmount = null;
      this.customAmount = '';
    },
    addToRecentDonors() {
      const newDonor = {
        id: Date.now(),
        name: this.donorInfo.anonymous ? 'Anonymous Donor' : this.donorInfo.name,
        initials: this.donorInfo.anonymous ? 'AD' : this.getInitials(this.donorInfo.name),
        amount: this.getFinalAmount(),
        timeAgo: 'Just now'
      };
      this.recentDonors.unshift(newDonor);
      if (this.recentDonors.length > 5) {
        this.recentDonors.pop();
      }
    },
    getInitials(name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
  }
}
</script>

<style>

/* Donation Section */
.donate {
  padding: 4rem 0;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
}

.donate h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.donation-form {
  max-width: 600px;
  margin: 0 auto;
}

.amount-selection h3 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.amount-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.amount-btn {
  padding: 1rem;
  border: 2px solid rgba(255,255,255,0.3);
  background: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.amount-btn:hover,
.amount-btn.active {
  background: #4CAF50;
  border-color: #4CAF50;
}

.custom-amount input {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255,255,255,0.3);
  background: transparent;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
}

.custom-amount input::placeholder {
  color: rgba(255,255,255,0.7);
}

.donation-impact {
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 5px;
  margin: 2rem 0;
}

.donor-form h3 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255,255,255,0.3);
  background: transparent;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
}

.form-group input::placeholder {
  color: rgba(255,255,255,0.7);
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.donate-btn {
  width: 100%;
  padding: 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
}

.donate-btn:hover {
  background: #45a049;
}

/* Recent Donors */
.recent-donors {
  padding: 3rem 0;
  background: #f8f9fa;
}

.recent-donors h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.donors-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.donor-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.donor-avatar {
  width: 50px;
  height: 50px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.donor-name {
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.donor-amount {
  color: #4CAF50;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.donor-time {
  color: #666;
  font-size: 0.9rem;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: 0 20px;
}

.modal-content h3 {
  color: #4CAF50;

}
</style>