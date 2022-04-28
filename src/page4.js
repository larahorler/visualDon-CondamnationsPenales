import salaireResponsabilite from "../data/donnee_salaire_selonResponsabilite_2016_H-F.csv";

import * as d3 from "d3";

//DONNEES PAGE N°4
//  Différence salaire entre hommes et femmes par réponsabilité 2016

console.log(salaireResponsabilite);

const colonneResponsabilité = Object.keys(salaireResponsabilite[0]);
let differencesResponsabilité = [];
colonneResponsabilité.forEach((d) => {
  differencesResponsabilité.push({
    title: d,
    value: salaireResponsabilite[0][d] - salaireResponsabilite[1][d],
  });
});
differencesResponsabilité.shift();

console.log(differencesResponsabilité);





    


function afficheSalaireSelonResponsabilite() {

    console.log(differencesResponsabilité)

    const data = differencesResponsabilité;

    const margin = {
        top: 50,
        right: 10,
        bottom: 0,
        left: 100,
      };
      
      const width = 1000 - margin.left - margin.right;
      const heightSVG = 600 - margin.top - margin.bottom;

    var svg4 = d3.select("#page4")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
  var x = d3.scaleLinear()
  .domain([d3.min(differencesResponsabilité.value), d3.max(differencesResponsabilité.value)])
  .range([ 0, width]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

     // Y axis
  var y = d3.scaleBand()
  .range([ 0, height ])
  .domain(data.map(function(d) { return d.title; }))
  .padding(.1);
svg.append("g")
  .call(d3.axisLeft(y))
  
}

export default afficheSalaireSelonResponsabilite;