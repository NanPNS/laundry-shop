<template>
  <div class="step-indicator">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{ active: index <= currentStep }"
    >
      <span class="step-number">{{ index + 1 }}</span>
      <span class="step-label">{{ step }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepIndicator",
  props: {
    currentStep: {
      type: Number,
      required: true, 
    },
  },
  data() {
    return {
      steps: ["Payment", "Coin Payment", "Timer"], 
    };
  },
};
</script>

<style scoped>
.step-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
  padding: 10px;
  border-radius: 8px;
  flex-wrap: nowrap; 
  overflow-x: auto; 
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #f1f1f1;
  color: #555;
  font-weight: bold;
  text-align: center;
  min-width: 120px; 
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.step.active {
  background-color: #08c728;
  color: white;
  transform: scale(1.1); 
}

.step-number {
  font-size: 1.2rem;
  font-weight: bold;
}

.step-label {
  font-size: 0.9rem;
  margin-top: 5px;
}


@media (max-width: 768px) {
  .step-indicator {
    gap: 10px;
    padding: 5px;
    overflow-x: auto; 
  }

  .step {
    min-width: 100px;
    padding: 8px 10px;
  }

  .step-number {
    font-size: 1rem;
  }

  .step-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .step {
    min-width: 90px;
    padding: 6px 8px;
  }

  .step-number {
    font-size: 0.9rem;
  }

  .step-label {
    font-size: 0.7rem;
  }
}
</style>

