import { defineStore } from "pinia";
import { computed } from "vue";
import { useRoute } from "vue-router";

export const useNavbarStore = defineStore("navbar", () => {
  const route = useRoute();

  const isVisible = computed(() => {
    const allowedRoutes = ["/home", "/profile", "/history-games"];
    return allowedRoutes.includes(route.fullPath);
  });

  return { isVisible };
});
