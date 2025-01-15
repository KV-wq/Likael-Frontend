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
      const response = await axios.post("/user/auth", { initData: initData });
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
        userId: user.value.id,
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
      const response = await axios.get("/user/get-story", {
        params: { userId: user.value.id },
      });

      return response.data;
    } catch (e) {
      error.value = e.response?.data?.error || e.message;
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
