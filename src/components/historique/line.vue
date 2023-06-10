<script setup>
//import des éléments de vue
import { reactive, ref, onMounted } from "vue";

/*
//import d'un type de graphique de type barChart
import { Bar } from "vue-chartjs";
//import des objets graphiques de la bibliotheque chartJs
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
//élement utilisés par le graphique
ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);
*/

// Import d'un graphique typeLineChart
import { Line } from "vue-chartjs";

// Import des objets du graphique de la bibliothèque ChartJs
// Voir documentation pour descriptif des éléments
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";

// Eléments utilisés par notre graphique registration pour Vue-chart
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, LineController, CategoryScale, LinearScale, Filler);

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
      borderColor: "rgba(255, 143, 0 ,1)",
      tension: 0.5,
      fill: true,


    },
     {
      borderColor: "rgba(39, 40, 44,  1)",
      tension: 0.5,
      fill: true,

  
    },
    {
      borderColor: "rgba(0, 255, 174 ,1)",
      tension: 0.5,
      fill: true,

    
    },
   
    {
      borderColor: "rgba(0, 0, 255 , 1)",
      tension: 0.5,
      fill: true,

 
    },
    {
      borderColor: "rgba(0, 255, 0, 1)",
      tension: 1,
      fill: true,

 
    },
    {
      borderColor: "rgba(255, 0, 0  ,1)",
      tension: 1,
      fill: true,

     
    },
  ],
  /*
  datasets: [
    {
      //Etiquette du jeu de donnée à projeter
      label: "Entrées totales en 2020",
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
*/
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
      text: "ouverture par année",
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
    "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=festivals-global-festivals-_-pl&q=&lang=fr&rows=8000&facet=region_principale_de_deroulement&facet=departement_principal_de_deroulement&facet=commune_principale_de_deroulement&facet=discipline_dominante";

  await fetch(request)
    .then((response) => response.json())

    .then((response) => {
      liste.value = new Array(response);

      console.log("reponse ", liste.value);

      chartOptions.plugins.title.text += liste.value[0].nhits + " réponse";

      let setLabels = new Set();

      liste.value[0].records.forEach((el) => {
        if (
          el.fields.annee_de_creation_du_festival > "1980" &&
          el.fields.annee_de_creation_du_festival < "2022" &&
          el.fields.annee_de_creation_du_festival.length < 5
        )
          setLabels.add(el.fields.annee_de_creation_du_festival);
      });

      let bob = [];

      bob = Array.from(setLabels);
      bob.sort();
      chartData.labels = bob;
      //      console.log("labels", chartData.labels);

      //-----------------------------------------
      let cpt = [];
      chartData.labels.forEach((lbl) => {
        let c = 0;
        liste.value[0].records.forEach((el) => {
          if (el.fields.discipline_dominante == "Musique" && el.fields.annee_de_creation_du_festival == lbl) {
            c++;
          }
        });
        cpt.push(c);
      });
      chartData.datasets[0].label = "Musique";
      chartData.datasets[0].data = cpt;
      //----------------------------------------
      cpt = [];
      chartData.labels.forEach((lbl) => {
        let c = 0;
        liste.value[0].records.forEach((el) => {
          if (el.fields.discipline_dominante == "Spectacle vivant" && el.fields.annee_de_creation_du_festival == lbl) {
            c++;
          }
        });
        cpt.push(c);
      });
      chartData.datasets[1].label = "Spectacle vivant";
      chartData.datasets[1].data = cpt;
      //-----------------------------------
      cpt = [];
      chartData.labels.forEach((lbl) => {
        let c = 0;
        liste.value[0].records.forEach((el) => {
          if (el.fields.discipline_dominante == "Livre, littérature" && el.fields.annee_de_creation_du_festival == lbl) {
            c++;
          }
        });
        cpt.push(c);
      });
      chartData.datasets[2].label = "Livre, littérature";
      chartData.datasets[2].data = cpt;
      //----------------------------------------
      cpt = [];
      chartData.labels.forEach((lbl) => {
        let c = 0;
        liste.value[0].records.forEach((el) => {
          if (el.fields.discipline_dominante == "Cinéma, audiovisuel" && el.fields.annee_de_creation_du_festival == lbl) {
            c++;
          }
        });
        cpt.push(c);
      });
      chartData.datasets[3].label = "Cinéma, audiovisuel";
      chartData.datasets[3].data = cpt;
      //------------------
      cpt = [];
      chartData.labels.forEach((lbl) => {
        let c = 0;
        liste.value[0].records.forEach((el) => {
          if (el.fields.discipline_dominante == "Pluridisciplinaire" && el.fields.annee_de_creation_du_festival == lbl) {
            c++;
          }
        });
        cpt.push(c);
      });
      chartData.datasets[4].label = "Pluridisciplinaire";
      chartData.datasets[4].data = cpt;

      //------------------
      cpt = [];
      chartData.labels.forEach((lbl) => {
        let c = 0;
        liste.value[0].records.forEach((el) => {
          if (el.fields.discipline_dominante == "Arts visuels, arts numériques" && el.fields.annee_de_creation_du_festival == lbl) {
            c++;
          }
        });
        cpt.push(c);
      });
      chartData.datasets[5].label = "Arts visuels, arts numériques";
      chartData.datasets[5].data = cpt;

      console.log("chartData", chartData);

      /*      
      //code bon
      //place a la guerre

      let musique = [];
      let spectacle = [];
      let livre = [];
      let cine = [];
      let pluridisciplinaire = [];
      let art = [];

      chartData.labels.forEach((label) => {
        let nbm = [];
        let nbs = [];
        let nbl = [];
        let nbc = [];
        let nbp = [];
        let nba = [];

        console.log("label", label);

        liste.value[0].records.forEach((el) => {
          if (label == el.fields.annee_de_creation_du_festival) {
            console.log(nbm);
            //console.log(nbs);
            //console.log(nbl);
            //console.log(nbc);
            //console.log(nbp);
            //console.log(nba);
            nbm[el.fields.discipline_dominante == "musique"] += 1;
            nbs[el.fields.discipline_dominante == "Spectacle vivant"] += 1;
            nbl[el.fields.discipline_dominante == "Livre, littérature"] += 1;
            nbc[el.fields.discipline_dominante == "Cinéma, audiovisuel"] += 1;
            nbp[el.fields.discipline_dominante == "Pluridisciplinaire"] += 1;
            nba[el.fields.discipline_dominante == "Arts visuels, arts numériques"] += 1;
          }
        });
        musique.push(nbm);
        spectacle.push(nbs);
        livre.push(nbl);
        cine.push(nbc);
        pluridisciplinaire.push(nbp);
        art.push(nba);
      });

      chartData.datasets[0].data = musique;
      chartData.datasets[1].data = spectacle;
      chartData.datasets[2].data = livre;
      chartData.datasets[3].data = cine;
      chartData.datasets[4].data = pluridisciplinaire;
      chartData.datasets[5].data = art;

      //  .catch((error) => console.log("erreur Ajax", error));
 */
    });
});
</script>

<template>
  <Line
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
