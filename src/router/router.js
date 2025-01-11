import { createRouter, createWebHashHistory } from "vue-router";
import ChoiseSide from "../pages/ChoiseSide.vue";
import Home from "../pages/Home.vue";
import Loading from "../pages/Loading.vue";
import Profile from "../pages/Profile.vue";
import RoomLoading from "../pages/RoomLoading.vue";
import FirstPlayerRoom from "../pages/FirstPlayerRoom.vue";
import SecondPlayerRoom from "../pages/SecondPlayerRoom.vue";
import HistoryGames from "../pages/HistoryGames.vue";

const routes = [
  {
    path: "/",
    name: "Loading",
    component: Loading,
  },
  {
    path: "/choise-side",
    name: "ChoiseSide",
    component: ChoiseSide,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/room-loading",
    name: "RoomLoading",
    component: RoomLoading,
  },
  {
    path: "/first-player-room",
    name: "FirstPlayerRoom",
    component: FirstPlayerRoom,
  },
  {
    path: "/second-player-room",
    name: "SecondPlayerRoom",
    component: SecondPlayerRoom,
  },
  {
    path: "/history-games",
    name: "HistoryGames",
    component: HistoryGames,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
