<template>
  <body class="body">
   <div class="head">
    <h1>เครื่องซักผ้า</h1>
    <p>มีเครื่องทั้งหมด: {{ washingMachines.length }} เครื่อง</p>
    <router-link to="/Dryer" class="DryButton">
        <button type="Drybtm" class="DryBtm">เครื่องอบผ้า
        <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </button>
    </router-link>
  </div>
  
   <div class="machine-container">
   
    <div v-if="!washingMachines || washingMachines.length === 0">
      <p>No washing machines available</p>
    </div>
    <div v-else>
    
      <div class="machine-list">
        <div
          v-for="machine in washingMachines"
          :key="machine.id"
          class="machine-card"
          :class="{ 'in-use': machine.status === 'In Use', 'available': machine.status === 'Available' }"
        >
          <img :src="machine.image" :alt="'Washing Machine ' + machine.id" />
          <h2>เครื่องที่ {{ machine.id }}</h2>
          <p>สถานะ: {{ machine.status }}</p>
          <div v-if="machine.status === 'In Use'">
            <p>เวลาที่เหลือ: {{ formatTime(machine.remainingTime) }}</p>
          </div>
          <router-link
            v-if="machine.status === 'Available'"
            :to="{ name: 'Payment', query: { id: machine.id } }"
            class="payment-button"
          >
            ชำระเงิน
          </router-link>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {
  name: "WashingMachine",
  data() {
    return {
      washingMachines: [
        { id: 1, status: "Available", remainingTime: null, image: require("@/assets/image/laun.avif") },
        { id: 2, status: "In Use", remainingTime: 600, image: require("@/assets/image/laun.avif") },
        { id: 3, status: "In Use", remainingTime: 1200, image: require("@/assets/image/laun.avif") },
        { id: 4, status: "Available", remainingTime: null, image: require("@/assets/image/laun.avif") },
        { id: 5, status: "Available", remainingTime: null, image: require("@/assets/image/laun.avif") },
        { id: 6, status: "In Use", remainingTime: 900, image: require("@/assets/image/laun.avif") },
      ],
    };
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs.toString().padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped>
.body{
  background:#191e2b;
}
.DryBtm{
  background :#ff45d7;
  padding: 10px;
  color: #e3f2fd;
  border-radius: 12px;
  margin-top: 20px;
  font-size: 20px;

}

  
.head{
  margin-top: 20px;
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
.machine-container {
  text-align: center;
  margin: 20px;
}

.machine-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;
  justify-items: center;

}

.machine-card {
  margin-top: 50px ;
  color: rgb(255, 255, 255);
  width: 100%;
  max-width: 350px; 
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.machine-card img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  border-radius: 8px;
}

.machine-card.available {
  background: rgb(9,24,69);
  background: linear-gradient(33deg, rgba(9,24,69,1) 0%, rgba(21,185,172,1) 44%, rgba(176,255,229,1) 100%);
}

.machine-card.in-use {

  background: rgb(9,24,69);
  background: linear-gradient(0deg, rgb(30, 31, 33) 0%, rgb(33, 44, 51) 44%, rgb(31, 53, 58) 100%);
}

.payment-button {
  background-color: #29cc2e;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
}

.payment-button:hover {
  background-color: #1f5f36;
}




@media (max-width: 600px) {
  .machine-list {
    grid-template-columns: 1fr; 
  }
}


@media (min-width: 601px) and (max-width: 1024px) {
  .machine-list {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (min-width: 1025px) {
  .machine-list {
    grid-template-columns: repeat(3, 1fr); 
  }
}


</style>
