import * as d3 from 'd3'

//Pour importer les données

import file1 from '../data/donnee_salaireBrut_2012.csv'
import file2 from '../data/donnee_salaireBrut_2014.csv'
import file3 from '../data/donnee_salaireBrut_2016.csv'
//pour différence salariale p.1 et pour évolution des années :
import diffFemmesVsHommes from '../data/hommesVsfemmes-Annees.csv'

//pour différence en fonction du lieu :
import regions2012 from '../data/2012-regions.csv'
import regions2014 from '../data/2014-regions.csv'
import regions2016 from '../data/2016-regions.csv'

//pour afficher les secteurs et positions qui n'ont pas d'employé.e homme ou femme
import secteurSansDonnees from '../data/tousLesSecteursEtPosition.csv'



console.log(diffFemmesVsHommes);
console.log(regions2012);

let annee2012Femme;
let annee2014Femme;
let annee2016Femme;

let annee2012Homme;
let annee2014Homme;
let annee2016Homme;

diffFemmesVsHommes.forEach(d => {
    if (d[""] == "Femme") {
        annee2012Femme = d['2012'];
        annee2014Femme = d["2014"];
        annee2016Femme = d["2016"];
    } 
    if (d[""] == "Homme") {
        annee2012Homme = d['2012'];
        annee2014Homme = d["2014"];
        annee2016Homme = d["2016"];
    }
});

//DONNEES PAGE N°1
const différenceSalarialeMoyenne = Math.round(annee2016Homme - annee2016Femme);
console.log(différenceSalarialeMoyenne);

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

regions2016.forEach(d => {
    if (d[""] == "Femme") {
        tessinFemme = d['Ticino'];
        zurichFemme = d["Zürich"];
        suisseCentraleFemme = d["Zentralschweiz"];
        regionLemaniqueFemme = d["Région lémanique"];
        estSuisseFemme = d["Ostschweiz"];
        nordSuisseFemme = d["Nordwestschweiz"];
        moyenPaysFemme = d["Espace Mittelland"];

    } 
    if (d[""] == "Homme") {
        tessinHomme = d['Ticino'];
        zurichHomme = d["Zürich"];
        suisseCentraleHomme = d["Zentralschweiz"];
        regionLemaniqueHomme = d["Région lémanique"];
        estSuisseHomme = d["Ostschweiz"];
        nordSuisseHomme = d["Nordwestschweiz"];
        moyenPaysHomme = d["Espace Mittelland"];
    }
});

//DONNEES PAGE N°3
//Différence entre hommes et femmes par région 2016
const ecartTessin = Math.abs(tessinHomme - tessinFemme);
const ecartZurich = Math.abs(zurichHomme - zurichFemme);
const ecartSuisseCentrale = Math.abs(suisseCentraleHomme - suisseCentraleFemme);
const ecartLeman = Math.abs(regionLemaniqueHomme - regionLemaniqueFemme);
const ecartEst = Math.abs(estSuisseHomme - estSuisseFemme);
const ecartNord = Math.abs(nordSuisseHomme - nordSuisseHomme);
const ecartMoyenPays = Math.abs(moyenPaysHomme - moyenPaysFemme);



secteurSansDonnees.forEach(element => {
    console.log(element);
});