<script setup lang="ts">
import Filtrage from "../components/festival/filtrage.vue";
import Footerr from "../components/footerr.vue";
</script>

<template>
  <header></header>
  <main>
    <h1 class="text-center font-inria-sans text-4xl font-extrabold">- festivals</h1>

    <h2 class="ml-5 text-left font-inria-sans text-2xl font-bold">
      Voici une liste vous permettant de voir les festivals et de cherchez vos préférez
    </h2>
    <a href="https://data.culture.gouv.fr/explore/dataset/festivals-global-festivals-_-pl/api/?lang=fr&rows=500&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6ImZlc3RpdmFscy1nbG9iYWwtZmVzdGl2YWxzLV8tcGwiLCJvcHRpb25zIjp7ImxhbmciOiJmciJ9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoibGluZSIsImZ1bmMiOiJDT1VOVCIsInlBeGlzIjoiaWRlbnRpZmlhbnRfY25tIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI2M0M2EyZiJ9XSwieEF4aXMiOiJyZWdpb25fcHJpbmNpcGFsZV9kZV9kZXJvdWxlbWVudCIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIifV0sInRpbWVzY2FsZSI6IiIsImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9">Notre Base de donné</a>

    <div class="my-4 flex justify-center">
      <Filtrage class="w-3/4" />
    </div>
  </main>
  <footer>
    <Footerr />
  </footer>
</template>
