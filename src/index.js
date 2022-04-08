import * as d3 from 'd3'

//Pour importer les données

//pour différence salariale p.1 et pour évolution des années :
import diffFemmesVsHommes from '../data/hommesVsfemmes-Annees.csv'

//pour différence en fonction du lieu :
import regions2012 from '../data/2012-regions.csv'
import regions2014 from '../data/2014-regions.csv'
import regions2016 from '../data/2016-regions.csv'

//pour afficher les secteurs et positions qui n'ont pas d'employé.e homme ou femme
import secteurSansDonnees from '../data/tousLesSecteursEtPosition.csv'

//pour afficher différence selon secteur
import salaireSelonSecteur from '../data/donnee_salaire_selonSecteur_2016_H-F.csv'

//pour afficher différence selon responsabilité
import salaireResponsabilite from '../data/donnee_salaire_selonResponsabilite_2016_H-F.csv'


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
//DONNEES PAGE N°6
//Afficher les différences entre les écarts homme-femme en fonction des années
let différenceSalariale2012 = Math.round(annee2012Homme - annee2012Femme);
let différenceSalariale2014 = Math.round(annee2014Homme - annee2014Femme);
let différenceSalariale2016 = Math.round(annee2016Homme - annee2016Femme);

//DONNEES PAGE N°1
//Afficher la différence moyenne de salaire entre homme et femme en 2016
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


//DONNEE PAGE N°2
//Différence salaire entre homme et femme par secteur économique 2016
//bouble pour chaque secteur - compararer 
/*for (let index = 0; index < salaireSelonSecteur.length; index++) {
    const element = salaireSelonSecteur[index];
    console.log(element);
    for (let j = 0; j < salaireSelonSecteur[index].length; j++) {
     console.log(salaireSelonSecteur[i][j])
        
    }
}*/

//DONNEES PAGE N°3
//Différence entre hommes et femmes par région 2016
const ecartTessin = Math.abs(tessinHomme - tessinFemme);
const ecartZurich = Math.abs(zurichHomme - zurichFemme);
const ecartSuisseCentrale = Math.abs(suisseCentraleHomme - suisseCentraleFemme);
const ecartLeman = Math.abs(regionLemaniqueHomme - regionLemaniqueFemme);
const ecartEst = Math.abs(estSuisseHomme - estSuisseFemme);
const ecartNord = Math.abs(nordSuisseHomme - nordSuisseHomme);
const ecartMoyenPays = Math.abs(moyenPaysHomme - moyenPaysFemme);

//DONNÉES PAGE N° 5
//Affichage des différents secteurs avec postitions pro ou il n'y a pas de données
const tableauSecteurPositionProHommes = [];
const tableauSecteurPositionProFemmes = [];
let secteur;
let positionPro;
let sexe;
secteurSansDonnees.forEach(element => {
   
       if(element['Secteur']){
        //console.log(element['Secteur']);
        secteur = element['Secteur']; //nom du secteur
       }
       if(element['Position professionnelle']){
           //console.log(element['Position professionnelle'])
           positionPro = element['Position professionnelle'];
       }
       if(element['Sexe'] == 'Femme' && element['Salaire mensuel brut'] == 'X'){
        sexe = element['Sexe'];
        tableauSecteurPositionProFemmes.push([secteur, positionPro]);
       } else if(element['Salaire mensuel brut'] == 'X'){
        sexe = element['Sexe'];
        tableauSecteurPositionProHommes.push([secteur, positionPro]);
       }
});

console.log(tableauSecteurPositionProFemmes); //pour les femmes
console.log(tableauSecteurPositionProHommes); //pour les hommes 
