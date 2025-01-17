<template>
  <div class="points-page">
    <h1>คะแนนสะสม</h1>
    <div class="points-container">
      <p>ชื่อผู้ใช้: {{ username }}</p>
      <p>คะแนนปัจจุบัน: {{ points }}</p>
      <div v-if="freeWashAvailable" class="reward-message">
        <p>🎉 ใช้คะแนน 100 คะแนน ได้รับสิทธิ์ซักฟรี 1 ครั้ง! 🎉</p>
        <button @click="redeemFreeWash" class="redeem-button">ใช้สิทธิ์</button>
      </div>
      <div v-else>
        <p>สะสมอีก {{ pointsToNextReward }} คะแนน เพื่อรับซักฟรี!</p>
      </div>
    </div>
    <router-link to="/HomePage" class="back-button">กลับสู่หน้าหลัก</router-link>
  </div>
</template>

  
<script>
export default {
  name: "UserPoints",
  data() {
    return {
      username: this.$route.query.username || "Guest", 
      points: 120,
      pointsPerFreeWash: 100, 
    };
  },
  computed: {
    freeWashAvailable() {
    
      return this.points >= this.pointsPerFreeWash;
    },
    pointsToNextReward() {

      return this.pointsPerFreeWash - this.points;
    },
  },
  methods: {
    redeemFreeWash() {
      if (this.freeWashAvailable) {
        this.points -= this.pointsPerFreeWash; 
        alert("คุณได้ใช้สิทธิ์ซักฟรีเรียบร้อยแล้ว!");
      } else {
        alert("คะแนนของคุณไม่เพียงพอสำหรับซักฟรี!");
      }
    },
  },
};
</script>

  
  
<style scoped>
.points-page {
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  font-family: 'Arial', sans-serif;
}

.points-container {
  background: white;
  color: #333;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.points-container p {
  font-size: 18px;
  margin: 10px 0;
}

.reward-message {
  margin-top: 20px;
  padding: 20px;
  background: #e9ffe9;
  color: #2d7a2d;
  border-radius: 10px;
  border: 2px solid #bdf5bd;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.redeem-button {
  margin-top: 15px;
  padding: 12px 20px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, transform 0.2s;
}

.redeem-button:hover {
  background: #218838;
  transform: scale(1.05);
}

.back-button {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 25px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

.back-button:hover {
  background: #0056b3;
  transform: scale(1.05);
}

.points-page h1 {
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}
</style>
