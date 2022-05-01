import * as d3 from 'd3'
import diffFemmesVsHommes from '../data/hommesVsfemmes-Annees.csv'

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
const différenceSalariale2012 = Math.round(annee2012Homme - annee2012Femme);
const différenceSalariale2014 = Math.round(annee2014Homme - annee2014Femme);
const différenceSalariale2016 = Math.round(annee2016Homme - annee2016Femme);
const tabDiffAnnees = [différenceSalariale2012, différenceSalariale2014, différenceSalariale2016];



//trouver le min et max espérence de vie
let diffMin = 100000;
let diffMax = 0;
tabDiffAnnees.forEach(element => {
    if (element > diffMax) {
        diffMax = element;
    }
    if (element < diffMin) {
        diffMin = element;
    }
});

function afficherDifferencesAnnees(){

const div6 = d3.select("#page6");
const margin = { top: 10, right: 40, bottom: 10, left: 40 },
    width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

const svg = div6.append('svg')
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


const echelleX = d3.scaleLinear()
.domain(['2010', '2018'])
.range([0, width]); // pas compris

const echelleY = d3.scaleLinear()
.domain([diffMin-100, diffMax+100]) //définir avec variables de csv
.range([height, 0]); // pas compris


const axeX = d3.axisTop(echelleX);
const axeY = d3.axisLeft(echelleY);

svg.append('g')
   .attr("transform", "translate(35," + height + ")")
   .call(axeX);

svg.append('g')
   .attr("transform", "translate(35, 0)")   
   .call(axeY);

svg.append('circle')
    .attr("cx", echelleX(2012))
    .attr("cy", echelleY(différenceSalariale2012))
    .attr("r", '30')
    .attr("fill", "purple");
svg.append('circle')
    .attr("cx", echelleX(2014))
    .attr("cy", echelleY(différenceSalariale2014))
    .attr("r", '30')
    .attr("fill", "purple");
svg.append('circle')
    .attr("cx", echelleX(2016))
    .attr("cy", echelleY(différenceSalariale2016))
    .attr("r", '30')
    .attr("fill", "purple");
}

export default afficherDifferencesAnnees;