import * as d3 from 'd3'
//Pour importer les données

//pour afficher les secteurs et positions qui n'ont pas d'employé.e homme ou femme
import secteurSansDonnees from "../data/tousLesSecteursEtPosition.csv";


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
    tableauSecteurPositionProFemmes.push([secteur, positionPro]);
  } else if (element["Salaire mensuel brut"] == "X") {
    sexe = element["Sexe"];
    tableauSecteurPositionProHommes.push([secteur, positionPro]);
  }
});


console.log(tableauSecteurPositionProFemmes); //pour les femmes
console.log(tableauSecteurPositionProHommes); //pour les hommes




function afficheTableauSecteurProSexe(){

var svgGraph5 = d3.select("#page5")
  //.append("svg:image")
  .append('img')
  .attr("src", "tableauSecteurPositionProHommes.svg")
  .attr("width", "100%")
  .attr("height", "100%")
.attr ("id", "graph5");
 





}


export default afficheTableauSecteurProSexe;