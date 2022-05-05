import * as d3 from 'd3'

import afficheDiffSalairialeMoyenne from "./page1.js";
import "./page2.js";
import afficherDifferenceRegions from "./page3.js";
import "./page4.js";
import "./page5.js";
import "./page6.js";
import scrollerText from "./scroll.js";
/* import scrollerVis  from "./scroll.js"; */

import afficheTableauSecteurProSexe from "./page5.js";
import afficherDifferencesAnnees from "./page6.js";


//Pour importer les données

//pour différence salariale p.1 et pour évolution des années :
import diffFemmesVsHommes from "../data/hommesVsfemmes-Annees.csv";

//pour différence en fonction du lieu :
import regions2012 from "../data/2012-regions.csv";
import regions2014 from "../data/2014-regions.csv";
import regions2016 from "../data/2016-regions.csv";

//pour afficher les secteurs et positions qui n'ont pas d'employé.e homme ou femme
import secteurSansDonnees from "../data/tousLesSecteursEtPosition.csv";

//pour afficher différence selon secteur
import salaireSelonSecteur from "../data/donnee_salaire_selonSecteur_2016_H-F.csv";

//pour afficher différence selon responsabilité
import salaireResponsabilite from "../data/donnee_salaire_selonResponsabilite_2016_H-F.csv";


import afficheSalaireSelonSecteur from "./page2.js";
import afficheSalaireSelonResponsabilite from "./page4.js";
import { flip } from '@turf/turf';



let annee2012Femme;
let annee2014Femme;
let annee2016Femme;

let annee2012Homme;
let annee2014Homme;
let annee2016Homme;

diffFemmesVsHommes.forEach((d) => {
  if (d[""] == "Femme") {
    annee2012Femme = d["2012"];
    annee2014Femme = d["2014"];
    annee2016Femme = d["2016"];
  }
  if (d[""] == "Homme") {
    annee2012Homme = d["2012"];
    annee2014Homme = d["2014"];
    annee2016Homme = d["2016"];
  }
});
//DONNEES PAGE N°6
//Afficher les différences entre les écarts homme-femme en fonction des années
let différenceSalariale2012 = Math.round(annee2012Homme - annee2012Femme);
let différenceSalariale2014 = Math.round(annee2014Homme - annee2014Femme);
let différenceSalariale2016 = Math.round(annee2016Homme - annee2016Femme);

//DONNEES PAGE N°1
/* //Afficher la différence moyenne de salaire entre homme et femme en 2016
const différenceSalarialeMoyenne = Math.round(annee2016Homme - annee2016Femme);
console.log(différenceSalarialeMoyenne); */


let tessinFemme;
let zurichFemme;
let suisseCentraleFemme;
let regionLemaniqueFemme;
let estSuisseFemme;
let nordSuisseFemme;
let moyenPaysFemme;

let tessinHomme;
let zurichHomme;
let suisseCentraleHomme;
let regionLemaniqueHomme;
let estSuisseHomme;
let nordSuisseHomme;
let moyenPaysHomme;

regions2016.forEach((d) => {
  if (d[""] == "Femme") {
    tessinFemme = d["Ticino"];
    zurichFemme = d["Zürich"];
    suisseCentraleFemme = d["Zentralschweiz"];
    regionLemaniqueFemme = d["Région lémanique"];
    estSuisseFemme = d["Ostschweiz"];
    nordSuisseFemme = d["Nordwestschweiz"];
    moyenPaysFemme = d["Espace Mittelland"];
  }
  if (d[""] == "Homme") {
    tessinHomme = d["Ticino"];
    zurichHomme = d["Zürich"];
    suisseCentraleHomme = d["Zentralschweiz"];
    regionLemaniqueHomme = d["Région lémanique"];
    estSuisseHomme = d["Ostschweiz"];
    nordSuisseHomme = d["Nordwestschweiz"];
    moyenPaysHomme = d["Espace Mittelland"];
  }
});

//DONNEE PAGE N°2

const colonne = Object.keys(salaireSelonSecteur[0]);
let differences = [];
colonne.forEach((d) => {
  differences.push({
    title: d,
    value: salaireSelonSecteur[0][d] - salaireSelonSecteur[1][d],
  });
});
differences.shift();



//DONNEES PAGE N°3
//Différence entre hommes et femmes par région 2016
const ecartTessin = Math.abs(tessinHomme - tessinFemme);
const ecartZurich = Math.abs(zurichHomme - zurichFemme);
const ecartSuisseCentrale = Math.abs(suisseCentraleHomme - suisseCentraleFemme);
const ecartLeman = Math.abs(regionLemaniqueHomme - regionLemaniqueFemme);
const ecartEst = Math.abs(estSuisseHomme - estSuisseFemme);
const ecartNord = Math.abs(nordSuisseHomme - nordSuisseFemme);
const ecartMoyenPays = Math.abs(moyenPaysHomme - moyenPaysFemme);

secteurSansDonnees.forEach((element) => {
});

//DONNÉES PAGE N° 5
//Affichage des différents secteurs avec postitions pro ou il n'y a pas de données
const tableauSecteurPositionProHommes = [];
const tableauSecteurPositionProFemmes = [];
let secteur;
let positionPro;
let sexe;
secteurSansDonnees.forEach((element) => {
  if (element["Secteur"]) {
    //console.log(element['Secteur']);
    secteur = element["Secteur"]; //nom du secteur
  }
  if (element["Position professionnelle"]) {
    //console.log(element['Position professionnelle'])
    positionPro = element["Position professionnelle"];
  }
  if (element["Sexe"] == "Femme" && element["Salaire mensuel brut"] == "X") {
    sexe = element["Sexe"];
    tableauSecteurPositionProHommes.push([secteur, positionPro]);
  } else if (element["Salaire mensuel brut"] == "X") {
    sexe = element["Sexe"];
    tableauSecteurPositionProFemmes.push([secteur, positionPro]);
  }
});



function dessinePage1() {
  afficheDiffSalairialeMoyenne();
}

function dessinePage2() {
  afficheSalaireSelonSecteur();
}

function dessinePage3() {

  afficherDifferenceRegions();
}

function dessinePage4() {

  afficheSalaireSelonResponsabilite();
}

function dessinePage5() {

  afficheTableauSecteurProSexe();
}

function dessinePage6() {

  afficherDifferencesAnnees();
}

let activationFunctions = [
  dessinePage1(),
  dessinePage2(),
  dessinePage3(),
  dessinePage4(),
  dessinePage5(),
  dessinePage6()
]

function flipSection(section) {
  if (document.querySelector(".active") != null) {
    document.querySelector(".active").classList.remove("active");
  }
  if (document.querySelector("#page" + (section + 1)) != null) {
    document.querySelector("#page" + (section + 1)).classList.add("active");
  }
}

let scroll = scrollerText()
  .container(d3.select('#container'))
scroll()

let lastIndex, activeIndex = 0


scroll.on('active', function (index) {
  d3.selectAll('.pageText')
    .transition().duration(300)
    .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

  activeIndex = index
  let sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
  let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
  scrolledSections.forEach(i => {
    flipSection(i)
  })
  d3.selectAll('.pageVis')
    .transition().duration(300)
    .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });
  lastIndex = activeIndex;

})

scroll.on('progress', function (index, progress) {
  if (index == 2 & progress > 0.7) {
  }
})

