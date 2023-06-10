import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import mapView from "../views/mapView.vue";
import GenreView from "../views/GenreView.vue";
import historiqueView from "../views/historiqueView.vue";
import departement from "../views/departement.vue";
import festival from "../views/festival.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    // ici les autre routes
    { path: "/map", name: "Carte", component: mapView },
    { path: "/bar", name: "Genre", component: GenreView },
    { path: "/line", name: "Line", component: historiqueView },
    { path: "/dpt", name: "departement", component: departement },
    { path: "/fest", name: "festival", component: festival },
  ],
});

export default router
