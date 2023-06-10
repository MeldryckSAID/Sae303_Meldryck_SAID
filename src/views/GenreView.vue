<script setup lang="ts">
import Bar from "../components/genre/bar.vue";
import Genre_donut from "../components/genre/genre_donut.vue";
import Footerr from "../components/footerr.vue";
</script>

<template>
  <header></header>
  <main>
    <h1 class="text-center font-inria-sans text-4xl font-extrabold">- Genres</h1>
    <div class="my-4 flex justify-center sm:flex sm:flex-col sm:place-items-center lg:flex-row">
      <Bar class="m-4 w-1/2" />
      <Genre_donut class="m-4 w-1/4" />
      <a
        href="https://data.culture.gouv.fr/explore/dataset/festivals-global-festivals-_-pl/api/?lang=fr&rows=500&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6ImZlc3RpdmFscy1nbG9iYWwtZmVzdGl2YWxzLV8tcGwiLCJvcHRpb25zIjp7ImxhbmciOiJmciJ9fSwiY2hhcnRzIjpbeyJhbGlnbk1vbnRoIjp0cnVlLCJ0eXBlIjoibGluZSIsImZ1bmMiOiJDT1VOVCIsInlBeGlzIjoiaWRlbnRpZmlhbnRfY25tIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI2M0M2EyZiJ9XSwieEF4aXMiOiJyZWdpb25fcHJpbmNpcGFsZV9kZV9kZXJvdWxlbWVudCIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIifV0sInRpbWVzY2FsZSI6IiIsImRpc3BsYXlMZWdlbmQiOnRydWUsImFsaWduTW9udGgiOnRydWV9"
        >Notre Base de donné :data. culture.gouv.fr</a
      >
    </div>

    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Musique</h1>
      <p class="ml-10 w-2/3 text-left font-Roboto font-light">
        Un festival de musique est une manifestation artistique annuelle ou ponctuelle pouvant se dérouler sur plusieurs jours durant
        lesquels des artistes évoluent selon un programme ou une thématique définis. Les festivals de musique sont généralement organisés
        pour promouvoir un artiste1, un genre musical, un instrument.
      </p>
    </div>

    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Livre et Littérature</h1>
      <p class="ml-3 w-2/3 text-left font-Roboto font-light">
        Le Festival du Livre et littérature, est une manifestation consacrée au livre et à l'écrit . La manifestation accueille à la fois
        grands et petits éditeurs et représentants des métiers du livre. Elle est ouverte à la fois aux professionnels et au grand public.
      </p>
    </div>

    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Arts visuels, arts numériques</h1>
      <p class="ml-3 w-2/3 text-left font-Roboto font-light">
        L'art numérique désigne un ensemble varié de catégories de création utilisant les spécificités des langages de programmation et des
        dispositifs numériques, ordinateur, interface ou réseau. Il s'est développé comme genre artistique Portée par la puissance de calcul
        de l'ordinateur et le développement d'interfaces électroniques autorisant une interaction entre le sujet humain, le programme et le
        résultat de cette rencontre, la création numérique s'est considérablement développée en déclinant des catégories artistiques déjà
        bien identifiées. En effet, des sous-catégories spécifiques telles que la « réalité virtuelle », la « réalité augmentée », « l’art
        génératif », « l’art interactif », "intelligence artificielle" viennent compléter les désignations techniques du Net-art, de
        l'imagerie numérique ou de l'art robotique
        <br />
        Ce festival vous emmene découvrir un monde fabuleux et futuriste
      </p>
    </div>

    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Pluridisciplinaire</h1>
      <p class="ml-3 w-2/3 text-left font-Roboto font-light">
        Ce sont des festivals divers pouvants reliants plusieursthemes majeurs ou mineurs en leurs seins exemple : <br />musique, chant,
        théâtre, danse, cinéma, etc. avec comme priorisation les arts de rue et le conte. <br />
        acceuillants toutes persones
      </p>
    </div>

    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Spectacle vivant</h1>
      <p class="ml-3 w-2/3 text-left font-Roboto font-light">
        C’est un spectacle où les artistes sont bien là, « en chair et en os », devant nous sur une scène. Un spectacle vivant c’est
        beaucoup de magie mais c’est aussi chaque jour différent et fragile. Le théâtre, une comédie musicale, un concert, un festival, un
        spectacle de danse ou un ballet sont des spectacles vivants. Les comédiens, les artistes de cirque, les musiciens et les danseurs
        prennent tous des risques fasse au public,
        <br />
        Ce genres de festivals vous tiendra éveillez de longs moments dans la joie et la bonne humeurs
      </p>
    </div>

    <div class="m-4">
      <h1 class="ml-5 mb-4 font-inria-sans text-3xl font-extrabold">- Cinéma, audiovisuel</h1>
      <p class="ml-3 w-2/3 text-left font-Roboto font-light">
        Un festival de cinéma est un évènement annuel au cours duquel sont présentés des films dans des cinémas ou lors de projections
        publiques, en général dans un lieu donné et pour une durée limitée dans le temps.
      </p>
    </div>
  </main>
  <footer>
    <Footerr />
  </footer>
</template>
