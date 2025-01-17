<template>
  <div class="body">
    <div class="payment-container">
      <div class="card">
        <StepIndicator :currentStep="0" /> <!-- Step Indicator moved to the top -->
        <h1>ชำระเงิน - เครื่องอบที่ {{ machineId }}</h1>
        <p>เลือกอุณหภูมิของเครื่องอบ:</p>
        <div class="temperature-level">
          <button
            v-for="option in temperatureOptions"
            :key="option.level"
            @click="selectTemperature(option)"
            class="temperature-option"
          >
            {{ option.label }} ({{ option.price }} บาท)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepIndicator from "@/components/StepIndicator.vue";

export default {
  name: "PaymentDryer",
  components: { StepIndicator },
  data() {
    return {
      machineId: this.$route.query.id || "Unknown",
      temperatureOptions: [
        { level: "low", label: "อุณหภูมิต่ำ", price: 15 },
        { level: "medium", label: "อุณหภูมิปานกลาง", price: 25 },
        { level: "high", label: "อุณหภูมิสูง", price: 35 },
      ],
    };
  },
  methods: {
    selectTemperature(option) {
      this.$router.push({
        name: "CoinPayment",
        query: { id: this.machineId, price: option.price, temperature: option.level },
      });
    },
  },
};
</script>

<style scoped>
.body {
  background: rgb(26, 26, 26);
  background: linear-gradient(33deg, rgba(26, 26, 26, 1) 28%, rgba(27, 71, 116, 1) 60%, rgba(176, 255, 229, 1) 99%);
  height: 100vh; /* Full height of the viewport */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add padding to avoid card sticking to edges */
  box-sizing: border-box;
}

.payment-container {
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 800px; 
  width: 90%; 
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
}

.payment-container h1 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #080303;
  font-weight: bold;
}

.temperature-level {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px; 
  flex-wrap: wrap; 
}

.temperature-option {
  background-color: #ff9800;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.temperature-option:hover {
  background-color: #e65100;
  transform: scale(1.1); 
}

@media (max-width: 768px) {
  .card {
    padding: 20px; 
  }

  .payment-container h1 {
    font-size: 20px;
  }

  .temperature-option {
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style>
