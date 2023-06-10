<script setup lang="ts">
import Line from "../components/historique/line.vue";
import Pieperiode from "../components/historique/pieperiode.vue";
import Footerr from "../components/footerr.vue";
</script>

<template>
  <header></header>
  <main>
    <div class="flex flex-col justify-center">
      <h1 class="text-center font-inria-sans text-4xl font-extrabold">- Les Ouvertures Historiques</h1>
      <p class="ml-10 w-1/3 text-left font-Roboto font-light">
        Depuis un long Moments maintent les festivals voients le jours maintenant vous pouvez prendre connaissances de la date de création
        de vos festivals favori
      </p>
    </div>
    <div class="my-4 flex justify-center sm:flex sm:flex-col sm:place-items-center lg:flex-row">
      <Line class="sm:w3/4 w-2/4" />

      <Pieperiode />
      <a
        href="https://data.culture.gouv.fr/explore/dataset/festivals-global-festivals-_-pl/api/?lang=fr&rows=500&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6ImZlc3RpdmFscy1nbG9iYWwtZmVzdGl2YWxzLV8tcGwiLCJvcHRpb25zIjp7ImxhbmciOiJmciJ9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoibGluZSIsImZ1bmMiOiJDT1VOVCIsInlBeGlzIjoiaWRlbnRpZmlhbnRfY25tIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI2M0M2EyZiJ9XSwieEF4aXMiOiJyZWdpb25fcHJpbmNpcGFsZV9kZV9kZXJvdWxlbWVudCIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIifV0sInRpbWVzY2FsZSI6IiIsImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9"
        >Notre Base de donné :data. culture.gouv.fr</a
      >
    </div>
    <p class="ml-10 mb-10 w-1/3 text-left font-Roboto font-extralight">
      Cette coubre vous montrera précisément l'évolution au cours des années des hauts et des bats pour les festivals et ce donut un
      pourcentages aproximatif de quels décénies a été la plus florissantes pour l'histoire des festivals.<br />
      Vous comprenez donc a présent a quels points les festivals ont connues une essort fulgurantes apportant leurs lots de nouveautées
    </p>
  </main>
  <footer>
    <Footerr />
  </footer>
</template>
