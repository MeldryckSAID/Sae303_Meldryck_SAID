<script setup lang="ts">
import { ref } from "vue";
const menuVisible = ref(true);
</script>

<template>
  <div class="z-10">
    <!-- Menu responsive -->

    <div class="fixed h-full w-screen overflow-y-hidden bg-black" :class="{ hidden: menuVisible }">
      <div class="mt-4 flex justify-end">
        <button v-if="!menuVisible" v-on:click="menuVisible = !menuVisible" class="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul class="font-inter leading-extra-loose font-Montserrat m-8 flex flex-col text-center text-xl">
        <li class="mb-7 flex justify-center">
          <router-link class="hover:text-jaune-100 text-white no-underline" to="/">
            <img class="w-1/4" src="../../public/img/logo.svg" alt="Logo" />
          </router-link>
        </li>
        <li class="mb-7">
          <router-link class="text-white no-underline" to="/bar">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Genres</p>
          </router-link>
        </li>
        <li class="mb-7">
          <router-link class="text-white no-underline" to="/line">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Ouverture</p>
          </router-link>
        </li>
        <li class="mb-7">
          <router-link class="text-white" to="/fest">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Les festivals</p>
          </router-link>
        </li>

        <li class="mb-7">
          <router-link class="shrink-0 text-white" to="/dpt">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Département</p>
          </router-link>
        </li>
        <li class="mb-7">
          <router-link class="text-white no-underline" to="/map">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Région</p>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Menu desktop -->
    <div class="mb-5 bg-black">
      <div class="hidden justify-between lg:flex">
        <div class="flex items-center">
          <RouterLink class="font-yeseva text-5xl" to="/">
            <img class="m-4 w-1/5" src="../../public/img/logo.svg" alt="Logo" />
          </RouterLink>
        </div>

        <div class="mr-8 hidden items-center space-x-6 font-inria-sans text-2xl text-white lg:flex">
          <router-link class="" to="/bar">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Genre</p>
          </router-link>
          <router-link class="text-white" to="/line">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Ouvertures</p>
          </router-link>
          <router-link class="text-white" to="/fest">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Les festivals</p>
          </router-link>
          <router-link class="shrink-0 text-white" to="/dpt">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Departement</p>
          </router-link>
          <router-link class="text-white" to="/map">
            <p class="font-semibold hover:border-b hover:border-white hover:text-vert">Région</p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mb-12 bg-black lg:hidden">
      <div class="flex items-center justify-between">
        <div class="mx-4 mt-4">
          <RouterLink class="font-yeseva text-5xl text-black" to="/">
            <img class="w-2/4" src="../../public/img/logo.svg" alt="Logo" />
          </RouterLink>
        </div>
        <button v-on:click="menuVisible = !menuVisible" class="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-verde h-8 w-8"
            viewBox="0 0 20 20"
            fill="white"
            :class="{ hidden: !menuVisible }"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
