import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "Guest", // ค่าชื่อผู้ใช้เริ่มต้น
  }),
  actions: {
    setUsername(name) {
      this.username = name;
    },
  },
});
