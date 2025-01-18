<template>
  <div class="body">
    <div class="timer-page">
      <StepIndicator :currentStep="2" />
      <div class="header">
        <h1>เครื่องกำลังทำงาน</h1>
        <p class="sub-text">กรุณารอขณะที่เครื่องทำงาน</p>
      </div>
      <div class="timer-section">
        <div class="timer-circle">
          <div class="time-display">{{ formatTime(timeRemaining) }}</div>
        </div>
        <div class="timer-details">
          <p>ระดับน้ำ: {{ waterLevel }}</p>
          <p>อุณหภูมิ: {{ waterTemperature }}</p>
        </div>
      </div>
      <div class="progress-section">
        <div class="progress-bar">
          <div
            class="progress-bar-inner"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <p>{{ progressPercentage }}%</p>
      </div>
      <div class="actions">
        <p>เพิ่มเวลา 10 นาที ในราคา {{ extraCost }} บาท</p>
        <button v-if="!isPayingExtra" @click="startAddingTime">
          เพิ่มเวลา
        </button>
        <button @click="togglePause">
          {{ isPaused ? "เริ่มทำงานต่อ" : "หยุดชั่วคราว" }}
        </button>
        <button @click="skipTime" class="skip-button">ข้ามไป 1 นาที 30 วิ</button>
      </div>
      <div class="coin-input" v-if="isPayingExtra">
        <h3>ชำระเงินสำหรับเพิ่มเวลา</h3>
        <p>ยอดเงินที่ต้องจ่าย: {{ extraCost }} บาท</p>
        <p>ยอดเงินที่จ่ายแล้ว: {{ paidAmount }} บาท</p>
        <div class="coin-buttons">
          <button v-for="coin in coins" :key="coin" @click="addCoin(coin)" class="coin-button">
            {{ coin }} บาท
          </button>
        </div>
        <button
          v-if="paidAmount >= extraCost"
          @click="confirmAddTime"
          class="confirm-button"
        >
          ยืนยัน
        </button>
      </div>
      <!-- Block Notification -->
      <div v-if="showNotification" class="notification-block">
        <div class="notification-content">
          <p>{{ notificationMessage }}</p>
          <button @click="closeNotification">ปิด</button>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import StepIndicator from "@/components/StepIndicator.vue";

export default {
  name: "TimerPage",
  components: { StepIndicator },
  data() {
    return {
      timeRemaining: parseInt(this.$route.query.time) || 1800,
      intervalId: null,
      isPaused: false,
      waterLevel: this.$route.query.waterLevel || "Unknown",
      waterTemperature: this.$route.query.waterTemperature || "Unknown",
      extraCost: 5,
      paidAmount: 0,
      coins: [1, 2, 5, 10],
      isPayingExtra: false,
      showNotification: false, 
      notificationMessage: "", 
    };
  },
  computed: {
    progressPercentage() {
      const total = 1800; 
      return Math.floor(((total - this.timeRemaining) / total) * 100);
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (!this.isPaused && this.timeRemaining > 0) {
          this.timeRemaining--;

        
          if (this.timeRemaining === 60) {
            this.showAlert("เหลือเวลาอีก 1 นาที");
          }

        
          if (this.timeRemaining === 0) {
            this.showAlert("เครื่องทำงานเสร็จแล้ว");
            clearInterval(this.intervalId);
          }
        }
      }, 1000);
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs.toString().padStart(2, "0")}`;
    },
    togglePause() {
      this.isPaused = !this.isPaused;
    },
    startAddingTime() {
      this.isPayingExtra = true;
      this.paidAmount = 0;
    },
    addCoin(coin) {
      this.paidAmount += coin;
    },
    confirmAddTime() {
      if (this.paidAmount >= this.extraCost) {
        this.timeRemaining += 600;
        this.isPayingExtra = false;
        this.paidAmount = 0;
      }
    },
    skipTime() {
      this.timeRemaining = Math.max(0, this.timeRemaining - 90); // Reduce 90 seconds
    },
    showAlert(message) {
      this.notificationMessage = message;
      this.showNotification = true;
    },
    closeNotification() {
      this.showNotification = false;
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>




<style scoped>
.notification-block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.notification-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.notification-content p {
  font-size: 18px;
  color: #1e3a8a;
  margin-bottom: 20px;
}

.notification-content button {
  background-color: #4ade80;
  color: #1e3a8a;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.notification-content button:hover {
  background-color: #22c55e;
}
html,
body {
  overflow-y: auto;
  margin: 0;
  padding: 0;
}

.body {
  background: rgb(26, 26, 26);
  background: linear-gradient(33deg, rgba(26, 26, 26, 1) 28%, rgba(27, 71, 116, 1) 60%, rgba(176, 255, 229, 1) 99%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
}

.timer-page {
  text-align: center;
  background: linear-gradient(135deg, #1e3a8a, #2563eb);
  color: white;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  overflow-y: auto;
  border-radius: 15px;
  box-sizing: border-box;
}

.timer-circle {
  width: 200px;
  height: 200px;
  border: 8px solid #4ade80;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  background-color: white;
}

.time-display {
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a8a;
}

.progress-section {
  margin: 20px auto;
  width: 80%;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #d1d5db;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar-inner {
  height: 100%;
  background: #4ade80;
}

.actions {
  margin: 20px 0;
}

button {
  background-color: #4ade80;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: #1e3a8a;
  font-weight: bold;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #22c55e;
}

.warning {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

.coin-input {
  margin-top: 20px;
  padding: 20px;
  background: rgba(30, 58, 138, 0.9);
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coin-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.coin-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #2563eb;
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.coin-button:hover {
  background-color: #1e3a8a;
  transform: scale(1.1);
}

.confirm-button {
  background-color: #2563eb;
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.confirm-button:hover {
  background-color: #1e40af;
}


@media (max-width: 768px) {
  .timer-page {
    padding: 15px;
  }

  .timer-circle {
    width: 150px;
    height: 150px;
    border: 6px solid #4ade80;
  }

  .time-display {
    font-size: 1.5rem;
  }

  button {
    padding: 8px 15px;
    font-size: 14px;
  }

  .coin-button {
    width: 60px;
    height: 60px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .timer-page {
    padding: 10px;
  }

  .timer-circle {
    width: 120px;
    height: 120px;
    border: 5px solid #4ade80;
  }

  .time-display {
    font-size: 1.2rem;
  }

  button {
    padding: 6px 10px;
    font-size: 12px;
  }

  .coin-button {
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
}
</style>
