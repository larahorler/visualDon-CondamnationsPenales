import * as d3 from 'd3'
//Pour importer les données

//pour différence salariale p.1 et pour évolution des années :
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

//DONNEES PAGE N°1
//Afficher la différence moyenne de salaire entre homme et femme en 2016
const différenceSalarialeMoyenne = Math.round(annee2016Homme - annee2016Femme);


//SVG
function afficheDiffSalairialeMoyenne(){
    const margin = {
        top: 50,
        right: 10,
        bottom: 0,
        left: 100
    }

const width = 1000 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;
    
    const svg = d3.select('#page1').append('svg').attr('class', 'graph');
    
    svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
    
const data = différenceSalarialeMoyenne;

const positionChiffreX = 350;
const chffre = svg.append("text")
                .attr("x", positionChiffreX)
                .attr("y", 450)
                .attr("font-weight", "bold")
                .attr("font-size", 350)
                .attr("font-family", "Arial")
                .text(différenceSalarialeMoyenne)
                .style("fill", "blue");

const chf = svg.append("text")
                .attr("x", 250 + positionChiffreX)
                .attr("y", 520)
                .attr("font-weight", "bold")
                .attr("font-size", 50)
                .attr("font-family", "Arial")
                .text("CHF")
                .style("fill", "blue");
}


export default afficheDiffSalairialeMoyenne;