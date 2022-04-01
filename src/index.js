import * as d3 from 'd3'

//Pour importer les données

import file1 from '../data/donnee_salaireBrut_2012.csv'
import file2 from '../data/donnee_salaireBrut_2014.csv'
import file3 from '../data/donnee_salaireBrut_2016.csv'

 console.log(file1);
//pour différence salariale p.1 et pour évolution des années :
import diffFemmesVsHommes from '../data/hommesVsfemmes-Annees.csv'

//pour différence en fonction du lieu :
import regions2012 from '../data/2012-regions.csv'
import regions2014 from '../data/2014-regions.csv'
import regions2016 from '../data/2016-regions.csv'

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
        annee2016Femme = d["2016"];
    } 
    if (d[""] == "Homme") {
        annee2016Homme = d["2016"];
    }
});

const différenceSalarialeMoyenne = Math.round(annee2016Homme - annee2016Femme);
console.log(différenceSalarialeMoyenne);

let tessinFemme;
let zurichFemme;
let suisseCentraleFemme;
let regionLemaniqueFemme;
let estSuisseFemme;
let nordSuisseFemme;
let moyenPaysFemme;

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
        
    }
});


//console.log(file1);

/* const donnee2012 = d3.csv(file1);
console.log(donnee2012); */

//console.log(file1);
//console.log(diffFemmesVsHommes);

/* const tabSalairesFemmes = donnee2012.map(d => {
    return d['Femmes']
}) */


/* //2. PIB sur axe x
const tabPib2021 = pib.map(d => {
    return d['2021'];
})
console.log(tabPib2021);
const x = d3.scaleLinear()
    .domain([0, d3.max(tabPib2021)])
    .range([40, width])

svg.append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
        .ticks(20)); */
