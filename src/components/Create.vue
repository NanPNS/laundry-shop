<template>
  <div class="ALL">
    <div class="create-account-container">
      <h1 class="create-account-title">Create Account</h1>
      <img
        alt="startimage"
        :src="require('@/assets/image/washclothes.webp')"
        class="create-account-image"
      />
      <form @submit.prevent="handleCreateAccount" class="create-account-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="formData.confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" class="create-account-button">Create Account</button>
      </form>
      <p class="login-link">
        Already have an account?
        <router-link to="/Login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePage",
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    handleCreateAccount() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      this.$router.push({
        path: "/Login",
        query: { username: this.formData.username },
      });
    },
  },
};
</script>

<style scoped>
.ALL {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(116, 220, 255, 1) 0%,
    rgba(0, 159, 255, 1) 44%,
    rgba(176, 242, 255, 1) 100%
  );
  padding: 20px; 
  box-sizing: border-box;
}

.create-account-container {
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

.create-account-image {
  max-width: 60%;
  height: auto;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.create-account-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #0056b3;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.create-account-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-account-button:hover {
  background-color: #0056b3;
}

.login-link {
  margin-top: 15px;
  font-size: 0.9rem;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .create-account-container {
    width: 90%;
  }

  .create-account-title {
    font-size: 1.5rem;
  }

  input {
    font-size: 0.9rem;
  }

  .create-account-image {
    max-width: 70%;
  }
}

@media (max-width: 480px) {
  .create-account-title {
    font-size: 1.2rem;
  }

  .create-account-image {
    max-width: 80%;
  }

  input {
    font-size: 0.8rem;
  }

  .create-account-button {
    font-size: 0.8rem;
  }
}
</style>
