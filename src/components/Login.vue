<template>
  <div class="ALL">
    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <img alt="startimage" :src="require('@/assets/image/washclothes.webp')" />
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p class="create-account-link">
        Don't have an account?
        <router-link to="/Create">Create Account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: this.$route.query.username || "", 
      password: "",
    };
  },
  methods: {
    handleLogin() {

      if (this.username && this.password) {
        alert(`Login successful as ${this.username}`);

        this.$router.push({
          path: "/HomePage",
          query: { username: this.username },
        });
      } else {
        alert("Invalid username or password");
      }
    },
  },
};
</script>

<style scoped>



.ALL {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw; 
  height: 100vh; 
  background: linear-gradient(
    90deg,
    rgb(116, 220, 255) 0%,
    rgba(0, 159, 255, 1) 44%,
    rgba(176, 242, 255, 1) 100%
  );
  box-sizing: border-box;
  overflow: hidden;
}

.login-container img {
  max-width: 100%; 
  height: auto; 
  margin-bottom: 20px; 
  border-radius: 10px; 
}

.login-container {
  border-radius: 20px;
  width: 100%;
  max-width: 400px; 
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.login-title {
  font-size: 2rem;
  margin-bottom: 50px;
  color: #351391;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  box-sizing: border-box; 
}

.form-group label {
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  padding: 10px 15px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.create-account-link {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #333;
}

.create-account-link a {
  color: #007bff;
  text-decoration: none;
}

.create-account-link a:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .login-container {
    width: 90%;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .login-form input {
    font-size: 0.9rem;
  }

  .login-button {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .login-title {
    font-size: 1.2rem;
  }

  .login-form {
    gap: 10px;
  }

  .login-button {
    font-size: 0.8rem;
  }
}
</style>
