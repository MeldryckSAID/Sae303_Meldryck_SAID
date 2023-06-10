<template>
  <footer class="flex h-60 items-center justify-evenly bg-black">
    <div class="ml-4 flex items-center">
      <router-link class="hover:text-jaune-100 text-white no-underline" to="/">
        <img class="w-1/4" src="public\img\logo.svg" alt="Logo" />
      </router-link>
      <div class="flex flex-col">
      <h4 class="mx-2 font-inria-sans text-xl font-bold text-white">Mention Légales</h4>
      <h4 class="mx-2 font-inria-sans text-xl font-bold text-white">Contact</h4>
    </div>
    </div>
    
    <router-link to="/">
      <h1 class="mx-2 text-center font-inria-sans text-xl font-bold text-white">SAE 303</h1>
    </router-link>
    <div class="mx-4 flex items-center">
      <h4 class="mx-2 font-Roboto text-lg font-bold text-white">
        Exercice réalisé dans le cadre d'un exercice pédagogique au <br />
        département MMI de Montbéliard
      </h4>

      <img class="m-2 w-20" src="/public/img/logo_mmi.png" alt="Logo MMi" />
    </div>
  </footer>
</template>
