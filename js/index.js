import Origin from "./class.js";

const URL =
  "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/population-par-groupe-de-nationalite-d-origine/records?order_by=annee&limit=12&offset=84";

let items = [];

function init() {
  fetchData();
}

function fetchData() {
  fetch(URL)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.results[0]);
    })
    .catch((error) => console.error(error, "failed to fetch"))
    .then(function (data) {
      data.results.forEach(function (e) {
        new origin(
          this.nationaliteitsgroep_van_herkomst,
          this.population_total,
          this.annee
        );
      });
    });
}

function onSearch(searchValue) {}

function render() {}

init();
