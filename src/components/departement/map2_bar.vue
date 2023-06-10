<script setup>
//import des éléments de vue
import { reactive, ref, onMounted } from "vue";

//import d'un type de graphique de type barChart
import { Bar } from "vue-chartjs";

//import des objets graphiques de la bibliotheque chartJs
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

//élement utilisés par le graphique
ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

//propriété du graphique utilisée dans le template
//on definit son type de donnée et sa valeur par défaut
//On peut utiliser une grande variété de types, voire des objets
const propChart = defineProps({
  chartId: { type: String, default: "bar-chart" }, //Id du graphique
  datasetIdKey: { type: String, default: "label" }, //Id du dataset
  width: { type: Number, default: 150 }, //largeur
  height: { type: Number, default: 60 }, //hauteur
  cssClasses: { type: String, default: "" }, //Classes css utilisées
  styles: { type: Object, default: () => {} }, //Id du graphique
  plugins: { type: Object, default: () => {} }, //Information personnalisé plugin
});

//données injectée dans le graphique
let chartData = reactive({
  //etiquette de l'axe
  labels: [],
  //valeurs des données du graphique
  datasets: [
    {
      //Etiquette du jeu de donnée à projeter
      label: "",
      //valeurs des données
      data: [{}],
      //couleurs des bars en regard des valeurs
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 164, 235, 0.2)",
      ],
      //couleur de chaque bordure de chaque barre
      borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 164, 235)"],
      borderWidth: 1,
    },
  ],
});

//options du graphique
let chartOptions = reactive({
  //Aspect responsive du graphique
  responsive: true,
  //maintien du ratio
  maintainAspectRation: false,

  //Types de projection utilisée
  indexAxis: "x",
  //Echelle du graphique
  scales: {
    //axe des ordonnées
    y: {
      //valeur max des y
      suggestedMax: 100,
      ticks: {
        font: {
          size: 16,
        },
      },
    },
    //axe des abscisses
    x: {
      ticks: {
        font: {
          size: 16,
        },
      },
    },
  },

  //Plugins
  plugins: {
    title: {
      //affiche titre
      display: true,
      //libellé du graphique
      text: "Nombre de festival Par département ",
      //couleur du text
      color: "black",
      font: {
        size: 16,
      },
    },
  },
});
let liste = ref();
onMounted(async () => {
  let request =
    "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=festivals-global-festivals-_-pl&q=&lang=fr&rows=8000&facet=region_principale_de_deroulement&facet=departement_principal_de_deroulement&facet=commune_principale_de_deroulement&facet=discipline_dominante"

  await fetch(request)
    //réponse demandé en JSON
    .then((response) => response.json())
    //recupération de la réponse
    .then((response) => {
      liste.value = new Array(response);
      //on vérifie dans la console l'obtention des résultats
      console.log("reponse ", liste.value);
      
      let setLabels = new Set();
      //parcours des valeurs, récupération des années
      liste.value[0].records.forEach((el) => {
        setLabels.add(el.fields.departement_principal_de_deroulement);
      });
      //transmission des valeurs du set aux labels
      chartData.labels = Array.from(setLabels);
      //tri des labels par ordre croissant
      //à voir le plus pertinent ? croissant ou décroissant
      // chartData.labels.sort()

      //calcul des valeurs par labels
      let cpt = [];

      //parcours des labels
      chartData.labels.forEach((label) => {
        //parcours des données
        //compteurs pour un labels
        let nb = 0;

        //parcours de la liste
        liste.value[0].records.forEach((reg) => {
          //si c'est le bon departement
          //on compte +1
//console.log("...",reg);
          if (label == reg.fields.departement_principal_de_deroulement) {
            nb++
          }
        });
        //on place le nb de festival par departement
        //dans le tableau de comptage
        cpt.push(nb);
      });

//console.log("cpt", cpt)      
      //chargement des données
      //mise à jour des tableaux
      chartData.datasets[0].data = cpt;


    })
    .catch((error) => console.log("erreur Ajax", error));
});
</script>

<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset_id_key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<style scoped></style>
