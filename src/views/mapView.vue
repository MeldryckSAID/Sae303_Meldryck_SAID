<script setup lang="ts">
import Map from "../components/carte/map.vue";
import Footerr from "../components/footerr.vue";

import Mapd from "../components/region/mapd_bar.vue";
</script>

<template>
  <header></header>
  <main>
    <h1 class="text-center font-inria-sans text-4xl font-extrabold">- Région</h1>

    <h2 class="ml-5 text-left font-inria-sans text-2xl font-bold">Voici une carte vous permettant de voir les festivals par région</h2>

    <Map></Map>

    <h2 class="my-5 font-Roboto font-light">
      voici un digramme en donut vous permettant de voir le nombre de festival par région et le poucentage sur la totalité
    </h2>
    <div class="my-4 flex justify-center">
      <Mapd class="w-4/5" />
      <a
        href="https://data.culture.gouv.fr/explore/dataset/festivals-global-festivals-_-pl/api/?lang=fr&rows=500&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6ImZlc3RpdmFscy1nbG9iYWwtZmVzdGl2YWxzLV8tcGwiLCJvcHRpb25zIjp7ImxhbmciOiJmciJ9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoibGluZSIsImZ1bmMiOiJDT1VOVCIsInlBeGlzIjoiaWRlbnRpZmlhbnRfY25tIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI2M0M2EyZiJ9XSwieEF4aXMiOiJyZWdpb25fcHJpbmNpcGFsZV9kZV9kZXJvdWxlbWVudCIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIifV0sInRpbWVzY2FsZSI6IiIsImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9"
        >Notre Base de donné : data. culture.gouv.fr</a
      >
    </div>
    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Les Région</h1>
      <p class="ml-10 w-2/3 text-left font-Roboto font-light">
        Une grande quantités de <span class="text-vert"> Régions</span> vous pourrez vous y perdent voici un petit indice qui vous permettra
        de savoir le nombre de festival qui se sont déja produit dans certains <span class="text-vert"> Régions</span> . <br />
        Par région prenons pour exemple l'Auvergne-Rhône-Alpes qui ont une quantité assez conséquente de festivals Vous pourriez avoir plus
        d'informations sur le festivals qui vous intéresse sur notre page
        <router-link class="font-inria-sans text-vert no-underline" to="/fest">Festival</router-link>
      </p>
    </div>
  </main>
  <footer>
    <Footerr />
  </footer>
</template>
