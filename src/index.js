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

  

  
