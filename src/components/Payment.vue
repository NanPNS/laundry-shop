<template>
  <div class="payment-container">
    
    <div class="card">
       <StepIndicator :currentStep="0"></StepIndicator>
      <h1>ชำระเงิน - เครื่องที่ {{ machineId }}</h1>
      <p>เลือกระดับความร้อนของน้ำ:</p>
      <div class="water-level">
        <button
          v-for="option in waterOptions"
          :key="option.level"
          @click="selectWater(option)"
          class="water-option"
        >
          {{ option.label }} ({{ option.price }} บาท)
        </button>
      </div>
    </div>
    <p v-if="!isMachineIdValid" class="error-message">ข้อมูลไม่ถูกต้อง: ไม่พบหมายเลขเครื่อง</p>
  </div>
</template>

<script>
import StepIndicator from "@/components/StepIndicator.vue";

export default {
  name: "PaymentA",
  components: { StepIndicator },
  data() {
    return {
      machineId: this.$route.query.id || "Unknown", 
      waterOptions: [
        { level: "cold", label: "น้ำเย็น", price: 10 },
        { level: "warm", label: "น้ำอุ่น", price: 20 },
        { level: "hot", label: "น้ำร้อน", price: 30 },
      ],
    };
  },
  computed: {
    isMachineIdValid() {
      return this.machineId !== "Unknown";
    },
  },
  methods: {
    selectWater(option) {
      this.$router.push({
        name: "CoinPayment",
        query: { id: this.machineId, price: option.price, waterLevel: option.level },
      });
    },
  },
};
</script>

<style scoped>
.payment-container {
  background: rgb(26, 26, 26);
  background: linear-gradient(33deg, rgba(26, 26, 26, 1) 28%, rgba(27, 71, 116, 1) 60%, rgba(176, 255, 229, 1) 99%);
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.card {
  max-width: 500px;
  width: 90%;
  padding: 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.card h1 {
  font-size: 24px;
  color: #234c7a;
  font-weight: bold;
  margin-bottom: 20px;
}

.water-level {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.water-option {
  background-color: #007bff;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.water-option:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 15px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .card {
    padding: 20px;
  }

  .water-option {
    font-size: 14px;
    padding: 10px 15px;
  }
}
</style>
