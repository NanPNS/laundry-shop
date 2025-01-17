<template>
  <div class="body">
  <div class="laundry-page">
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <h1>Welcome, {{ username }}</h1>
        <p>สามารถเช็คเครื่องซักผ้าที่ว่าง หรือ จ่ายเงินเพื่อใช้เครื่องได้เลย</p>
      <router-link to="/user-points" class="PointButton">
        <button type="Point" class="Point">สะสมคะแนน</button>
      </router-link>
      </div>
    </header>

    <!-- Machine Statuses -->
    <h2 class="statusMachine">สถานะเครื่องที่คุณใช้</h2>
    <div class="status-container">
    
      <div
        class="status-card"
        v-for="status in machineStatuses"
        :key="status.id"
      >
        <div class="card-header">สถานะเครื่อง</div>
        <div class="card-body">
          <h3>{{ status.machineName }} กำลังทำงาน </h3>
          <p>ทำงานอีก : {{ status.remainingTime }} นาที</p>
        </div>
      </div>
    </div>

    <!-- Washing Machines -->
    <!-- Machine Status -->
    <h2 class="statusMachine2">เช็คเครื่องที่ว่าง</h2>
    <div class="machine-container">
      
  <!-- Washing Machine -->
  <router-link to="/Washing" class="machine-card-link">
    <div class="machine-card">
      <img :src="WashingMachineImg" alt="Washing Machine" class="machine-image" />
      <div class="machine-info">
        <h3>Washing Machine เครื่องซัก</h3>
        <div class="weight-list">
          <span>9 KG</span>
          <span>18 KG</span>
          <span>28 KG</span>
        </div>
      </div>
    </div>
  </router-link>
  <!-- Dryer Machine -->
  <router-link to="/Dryer" class="machine-card-link">
    <div class="machine-card">
      <img :src="DryerMachineImg" alt="Dryer Machine" class="machine-image" />
      <div class="machine-info">
        <h3>Dryer Machine เครื่องอบ</h3>
        
        <div class="weight-list">
          <span>15 KG</span>
          <span>25 KG</span>
        </div>
      </div>
    </div>
  </router-link>
</div>


  
  <div class="more">
    <h2 class="more-text">บริการเพิ่มเติม</h2>
  <div class="additional-services">
    <!-- Card 1 -->
    <div class="service-card">
      <h2 class="service-title">รับรีดผ้า</h2>
      <img alt="iron-icon" :src="require('@/assets/image/timer.png')" class="service-image" />
    </div>

    <!-- Card 2 -->
    <div class="service-card">
      <h2 class="service-title">รับพับผ้า</h2>
      <img alt="basket-icon" :src="require('@/assets/image/spin.png')" class="service-image" />
    </div>
     <!-- Card 3 -->
    <div class="service-card">
      <h2 class="service-title">รับบริการจัดส่งถึงบ้าน</h2>
      <img alt="basket-icon" :src="require('@/assets/image/delivery-bike.png')" class="service-image" />
    </div>
    <!-- Card 4 -->
    <div class="service-card">
      <h2 class="service-title">จองล่วงหน้า</h2>
      <img alt="basket-icon" :src="require('@/assets/image/booking.png')" class="service-image" />
    </div>
     <!-- Card 5 -->
    <div class="service-card">
      <h2 class="service-title">รับติดประกาศ</h2>
      <img alt="basket-icon" :src="require('@/assets/image/loudspeaker.png')" class="service-image" />
    </div>
    <!-- Card 6 -->
    <div class="service-card">
      <h2 class="service-title">บริการช่วยเหลือ</h2>
      <img alt="basket-icon" :src="require('@/assets/image/chat.png')" class="service-image" />
    </div>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import WashingMachineImg from "@/assets/image/laun.avif";
import DryerMachineImg from "@/assets/image/Dry.avif";

export default {
  name: "HomePage",
  data() {
    return {
      username: this.$route.query.username || "Guest",
      WashingMachineImg,
      DryerMachineImg,
      machineStatuses: [
        { id: 1, machineName: "เครื่องซัก", remainingTime: 5 },
        { id: 2, machineName: "เครื่องอบ", remainingTime: 15 },
        { id: 3, machineName: "เครื่องซัก", remainingTime: 20 },
        { id: 4, machineName: "เครื่องอบ", remainingTime: 25 },
        { id: 5, machineName: "เครื่องซัก", remainingTime: 10 },
        { id: 6, machineName: "เครื่องอบ", remainingTime: 15 },

      ],
    };
  },
};
</script>

<style scoped>
.body{
  background:#191e2b;
}
h2{


  font-size: 30px;
  color: #fff;
  text-shadow:


    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
}
.more {
  margin-bottom: 20px;
  margin-top: 100px;
  text-align: center;
}

.more-text {
  font-size: 30px;
  margin-bottom: 20px;

}

.additional-services {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap; 
}

.service-card {
  background: rgb(194, 41, 56);
background: linear-gradient(0deg, rgb(231, 148, 115) 0%, rgba(253,195,45,1) 100%);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  padding: 20px;
  text-align: center;
  width: 200px;
  min-height: 220px;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.service-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff;
}

.service-image {
  width: 100px;
  height: auto;
  margin: 10px auto;
}


.statusMachine{

  font-size: 30px;
  padding: 10px;
  margin-top: 25px;
   
}
.Point{
  background :#ff45d7;
  padding: 10px;
  color: #e3f2fd;
  border-radius: 12px;
  margin-top: 20px;
  font-size: 20px;
  
}
.laundry-page {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.header {
  
  color: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  background: rgb(255,77,239);
  background: linear-gradient(211deg, rgba(255,77,239,1) 0%, rgba(26,199,228,1) 82%, rgba(83,255,204,1) 100%);  
}

.header-content h1 {
  font-size: 50px;
  margin-bottom: 10px;
}

.header-content p {
  font-size: 20px;
  opacity: 0.9;
}


.status-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 15px;
  padding: 10px 0; 
  margin: 0 auto; 
  max-width: 1200px; 
  box-sizing: border-box;
}

.status-container::-webkit-scrollbar {
  height: 6px;
}

.status-container::-webkit-scrollbar-thumb {
  background-color: #4a90e2;
  border-radius: 4px;
}

.status-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center; 
  flex: 0 0 auto;
  transition: transform 0.3s ease; 
}

.status-card:hover {
  transform: translateY(-5px); 
}

.card-header {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 10px;
  text-align: center;
}

.card-body h3 {
  font-size: 1.4rem;
  margin: 5px 0;
  color: #333;
}

.card-body p {
  font-size: 1rem;
  margin: 5px 0 0;
  color: #666;
}
.statusMachine2{
  margin-top: 100px;
}
.machine-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;
  justify-items: center;
}

.machine-section {
  flex: 1;
  max-width: 700px; 
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.machine-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  margin: 0 auto;
}

.machine-card {
  background: rgb(77,255,223);
  background: linear-gradient(211deg, rgba(77,255,223,1) 0%, rgba(26,145,228,1) 82%, rgba(83,255,201,1) 100%);  background-size: cover; /* ปรับภาพให้ครอบคลุมพื้นที่ */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: 500px; 
  max-width: 500px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.machine-card:hover {
  transform: translateY(-5px);
}

.machine-image {
  width: 200px;
  height: auto;
  margin-bottom: 15px;
}

.machine-info h3 {
  margin: 0;
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 10px;
}

.weight-list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.weight-list span {
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333;
}

@media (max-width: 1024px) {
  .machine-container {
    grid-template-columns: repeat(1, 1fr); 
  }
}


@media (max-width: 480px) {
  .machine-container {
    grid-template-columns: repeat(1, 1fr); 
    gap: 15px;
  }
}
</style>
