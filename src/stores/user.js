import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const isLoggedIn = ref(false);
  const isLoading = ref(false);
  const error = ref(null);

  const auth = async (initData) => {
    try {
      isLoading.value = true;
      error.value = null;
      const response = await axios.post("/user/auth", initData);
      console.log(response);
      user.value = response.data.user;
      isLoggedIn.value = true;
    } catch (e) {
      error.value = e.response?.data?.error || e.message;
      user.value = null;
      isLoggedIn.value = false;
    } finally {
      isLoading.value = false;
    }
  };

  const choiseSide = async (side) => {
    try {
      isLoading.value = true;
      error.value = null;
      const response = await axios.post("/user/choise-side", {
        currentSide: side,
        userId: user.value.user_id,
      });
      user.value.current_side = response.data;
    } catch (e) {
      error.value = e.response?.data?.error || e.message;
    } finally {
      isLoading.value = false;
    }
  };

  const getUserHistory = async () => {
    try {
      isLoading.value = true;
      error.value = null;
      const response = await axios.patch("/user/get-story", {
        userId: user.value.user_id,
      });
      user.value.history = response.data; // Обновляем историю
    } catch (e) {
      error.value = e.response?.data?.error || e.message;
    } finally {
      isLoading.value = false;
    }
  };

  const isAuthenticated = computed(() => isLoggedIn.value);
  const userData = computed(() => user.value);

  return {
    isLoading,
    error,
    auth,
    choiseSide,
    getUserHistory,
    isAuthenticated,
    userData,
  };
});
