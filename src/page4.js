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

  const data = differencesResponsabilité;

    
  console.log(data);


  const margin = {
    top: 50,
    right: 10,
    bottom: 0,
    left: 100,
  };

  const width = 1000 - margin.left - margin.right;
  const heightSVG = 600 - margin.top - margin.bottom;

  const svgGraph4 = d3
    .select("#page4")
    .append("svg")
    .attr("width", width)
    .attr("height", heightSVG * data.length);

  svgGraph4
    .attr("width", width + margin.left + margin.right)
    .attr("height", heightSVG + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    console.log(data)

  const min = d3.min(data, (d) => d.value);
  const max = d3.max(data, (d) => d.value);
  const x = d3
    .scaleLinear()
    .domain([min, max])
    .range([heightSVG, 0]); 

//sort the data in ascending order
  data.sort((a, b) => a.value - b.value);
  

  const bar = svgGraph4
    .selectAll("rect")
    .data(data)
    .join((enter) =>
      enter
        .append("rect")
        .attr("width", (d) => {
          return x(d.value);
        }))
        .attr("y", (d, i) => {
          return i * 40;
        })
        .attr("x", 10) 
        .style("fill", "MediumPurple")
        .attr("height", 30);
       
    

    
}
  


export default afficheSalaireSelonResponsabilite;