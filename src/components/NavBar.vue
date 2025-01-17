<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="store-name">
        Wash & Dry
      </router-link>
    </div>
    <div class="navbar-right">
      <div class="user-menu" @click="goToPointsPage">
        <img
          :src="require('@/assets/image/user-icon.png')"
          alt="User"
          class="user-icon"
        />
        <span class="username">{{ username || "Guest" }}</span>
      </div>
      <button @click="goBack" class="back-button">ย้อนกลับ</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["username"],
  methods: {
    goToPointsPage() {
      this.$router.push({ name: "UserPoints" });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #76c7ff, #4a90e2);
  color: white;
  padding: 15px 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-left .store-name {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.navbar-left .store-name:hover {
  color: #d9f2ff;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
  object-fit: cover;
  border: 2px solid white;
}

.username {
  font-size: 1rem;
}

.back-button {
  background-color: #ff5c5c;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #e60000;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 15px;
  }

  .navbar-right {
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
  }

  .back-button-container {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
