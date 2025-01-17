<template>
  <div class="body">
    <div class="coin-payment-container">
      <StepIndicator :currentStep="1" />
      <h1>จ่ายเงิน - เครื่องที่ {{ machineId }}</h1>
      <p class="water-level">ระดับน้ำ: {{ waterLevel }}</p>
      <p class="amount">ยอดเงินที่ต้องจ่าย: {{ totalAmount }} บาท</p>
      <p class="amount">ยอดเงินที่จ่ายแล้ว: {{ paidAmount }} บาท</p>

      <div class="coin-buttons">
        <button v-for="coin in coins" :key="coin" @click="addCoin(coin)" class="coin-button">
          <span class="coin-value">{{ coin }}</span>
          <span class="coin-label">บาท</span>
        </button>
      </div>

      <button v-if="paidAmount >= totalAmount" @click="goToTimerPage" class="start-button">
        เริ่มทำงาน
      </button>
    </div>
  </div>
</template>

<script>
import StepIndicator from "@/components/StepIndicator.vue";

export default {
  name: "CoinPayment",
  components: { StepIndicator },
  data() {
    return {
      machineId: this.$route.query.id || "Unknown",
      totalAmount: parseInt(this.$route.query.price) || 0,
      waterLevel: this.$route.query.waterLevel || "Unknown",
      paidAmount: 0,
      coins: [1, 2, 5, 10],
    };
  },
  methods: {
    addCoin(coin) {
      this.paidAmount += coin;
    },
    goToTimerPage() {
      this.$router.push({
        name: "TimerPage",
        query: { id: this.machineId, time: 1800, waterLevel: this.waterLevel },
      });
    },
  },
};
</script>

<style scoped>
.body {
  background: rgb(26, 26, 26);
  background: linear-gradient(33deg, rgba(26, 26, 26, 1) 28%, rgba(27, 71, 116, 1) 60%, rgba(176, 255, 229, 1) 99%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.coin-payment-container {
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

.coin-payment-container h1 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #000000;
}

.coin-payment-container .water-level,
.coin-payment-container .amount {
  font-size: 18px;
  margin: 10px 0;
  color: #050505;
}

.coin-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.coin-button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9800;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.coin-button:hover {
  background-color: #e65100;
  transform: scale(1.1);
}

.coin-value {
  font-size: 20px;
  font-weight: bold;
}

.coin-label {
  font-size: 14px;
}

.start-button {
  margin-top: 25px;
  background-color: #4caf50;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.start-button:hover {
  background-color: #388e3c;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .coin-payment-container {
    padding: 20px;
  }

  .coin-payment-container h1 {
    font-size: 20px;
  }

  .coin-button {
    width: 70px;
    height: 70px;
    font-size: 16px;
  }

  .start-button {
    padding: 12px 25px;
    font-size: 16px;
  }
}
</style>
