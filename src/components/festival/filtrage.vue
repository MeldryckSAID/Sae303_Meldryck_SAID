<script setup>
import { ref, reactive, onMounted } from "vue";

// Import d'un graphique type barChart
import { Bar } from "vue-chartjs";

import { getfest } from "../../composables/services.js";

import { countDatas, getLabels } from "@/composables/utilsApp.js";

import { densite, aleatoire } from "@/composables/commonChart.js";

// Import des objets du graphique de la bibliothèque ChartJs
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
// Eléments utilisés par notre graphique
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Propriétés du graphique Utilisés dans le template (props)
const propChart = defineProps({
  chartId: { type: String, default: "bar-chart" }, // Id du graphique
  datasetIdKey: { type: String, default: "label" }, // Id du dataSet
  width: { type: Number, default: 350 }, // Hauteur du graphe
  height: { type: Number, default: 500 }, // Largeur du graphe
  cssClasses: { type: String, default: "" }, // Classes css utilisées
  styles: { type: Object, default: () => {} }, // Styles utilisés
  plugins: { type: Object, default: () => {} }, // plugins utilisés
});

let chartData = reactive({
  labels: [],
  datasets: [{}],
});

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      text: null,
      display: true,
    },
  },
});

let items = ref();
let itemsAll = ref();

let modeSelected = ref();
modeSelected.value = false;

let baseColor = ref();
baseColor.value = "rgba(45, 90, 0,#deg#)";

let fields = ref();

fields.value = [
  { key: "fields.nom_du_festival", label: "Nom", type: "string", sortable: true, sort: 1, filter: "" },
  { key: "fields.envergure_territoriale", label: "Envergure", type: "string", sortable: true, sort: 1, filter: "" },
  { key: "fields.region_principale_de_deroulement", label: "Région", type: "string", sortable: true, sort: 1, filter: "" },
  { key: "fields.departement_principal_de_deroulement", label: "Département", type: "number", sortable: true, sort: 1, filter: "" },
  { key: "fields.site_internet_du_festival", label: "Lien du site", type: "number", sortable: true, sort: 1, filter: "" },
  { key: "fields.discipline_dominante", label: "Discipline", type: "number", sortable: true, sort: 1, filter: "" },
];
console.log("resultat", fields.value);

onMounted(async () => {
  await getfest().then((response) => {
    console.log("reponse", response.records);
    items.value = response.records;
    console.log("items", items);

    fields.value.forEach((field) => {
      let t = field.key.split(".");
      let lg = t.length;

      items.value.forEach((item) => {
        if (lg == 2) {
          item[field.key] = item[t[0]][t[1]];
        }
        if (lg == 3) {
          item[field.key] = item[t[0]][t[1]][t[2]];
        }
      });
    });
    console.log("item", items);
    itemsAll.value = items.value;

    updateGraph();
  });
});

const updateGraph = () => {
  chartOptions.plugins.title.text = "Les festivals";
  chartData.labels = getLabels(items.value, "fields.discipline_dominante#1");
  chartData.datasets[0].data = countDatas(items.value, chartData.labels, "fields.discipline_dominante#1");
  chartData.datasets[0].label = "Les festivals";

  selectMode();
};

const selectMode = () => {
  if (modeSelected.value) {
    let [bgColor, bdColor] = aleatoire(chartData.labels);
    chartData.datasets[0].backgroundColor = bgColor;
    chartData.datasets[0].borderColor = bdColor;
  } else {
    let [bgColorDeg, bdColor] = densite(baseColor.value, chartData.datasets[0].data);
    chartData.datasets[0].backgroundColor = bgColorDeg;
    chartData.datasets[0].borderColor = bdColor;
  }
};

const sortCol = (items, field) => {
  const compareString = (a, b) => {
    if (a[field.key] && b[field.key]) {
      return a[field.key].toLowerCase() > b[field.key].toLowerCase() ? 1 * field.sort : -1 * field.sort;
    }
  };
  const compareNumber = (a, b) => {
    if (a[field.key] && b[field.key]) {
      return parseFloat(a[field.key]) > parseFloat(b[field.key]) ? 1 * field.sort : -1 * field.sort;
    }
  };

  if (field.type == "number") {
    items = items.sort(compareNumber);
  } else {
    items = items.sort(compareString);
  }

  field.sort = field.sort * -1;
};

const tableFilter = (field) => {
  items.value = itemsAll.value.filter((festival) => {
    if (festival[field.key]) {
      return festival[field.key].toLowerCase().includes(field.filter.toLowerCase());
    }
  });
  updateGraph();
};
</script>

<template>
  <main class="">
    <div class=" ">
      <div class="">
        <form class="">
          <div class="">
            <input type="checkbox" class="" id="customSwitch1" v-model="modeSelected" @change="selectMode" />
            <label class="items-center" for="customSwitch1">dégradé/aléatoire</label>
          </div>
        </form>

        <Bar
          class="my-9"
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :plugins="plugins"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height"
        />
        <p class="my-5 font-Roboto font-light">Maintenant a vous de chercher via la base de données</p>
      </div>
      <div class="w-3/4">
        <table class="border-collapse border">
          <thead>
            <tr>
              <th class="border" v-for="field in fields" :key="field">
                <div class="border-2 border-black">
                  <span class="font-inria-sans font-bold">{{ field.label }}</span>
                  <span>
                    <i v-if="field.sortable" class="fa fa-sort fa-sm float-right" @click="sortCol(items, field)"></i>
                  </span>
                </div>
                <div class="">
                  <span class="">
                    <i class="fa fa-filter fa-sm"></i>
                  </span>
                  <input
                    class="border-2 border-black font-Roboto placeholder:text-center"
                    placeholder="recherche"
                    @input="tableFilter(field)"
                    v-model="field.filter"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-2 border-black" v-for="item in items" :key="item">
              <td class="break-all" v-for="field in fields" :key="field">
                {{ item[field.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
