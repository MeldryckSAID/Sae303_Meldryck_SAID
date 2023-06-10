<script setup lang="ts">
import Bar from "../components/genre/bar.vue";
import Footerr from "../components/footerr.vue";
</script>

<template>
  <header></header>
  <main class="min-h-screen">
    <h1 class="m-5 text-center font-Roboto text-xl font-bold">
      Bonjour ici nous vous présenterons les différents festivals que vous pourriez découvrir en france avec quelques genre classiques que
      vous pourriez aimées..
    </h1>
    <div class="flex justify-center">
      <h1 class="font-inria-sans font-extrabold text-2xl">
        - Genres 
      </h1>
      <Bar class="w-1/2 m-4" />
    </div>
    <p class="font-Roboto text-lg text-left pl-5">
        Comme vous pouvez le constatez nos festival<br>  répertoriées
      sont principalements axées  sur des thèmes assez basique 
    </p>
  </main>
  <footer>
    <Footerr/>
  </footer>
</template>
