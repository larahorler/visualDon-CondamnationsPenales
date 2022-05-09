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
    top: 200,
    right: 10,
    bottom: 0,
    left: 0,
  };

  const width = 600 - margin.left - margin.right;
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

  console.log(data);

  const min = d3.min(data, (d) => d.value);
  const max = d3.max(data, (d) => d.value);
  const x = d3.scaleLinear().domain([0, max]).range([0, width]);

  const minNb = 0;
  const maxNb = data.length - 1;
  const y = d3.scaleLinear().domain([minNb, maxNb]).range([0, heightSVG]);

  //sort the data in ascending order
  data.sort((a, b) => b.value - a.value);

  let div = d3
    .select("#page4")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px");

  const bar = svgGraph4
    .selectAll("rect")
    .data(data)
    .join((enter) =>
      enter
        .append("rect")
        .attr("width", (d) => {
          width - x(d.value);
        })
        //  (d) => {
        // console.log(x(d.value));
        // return x(d.value*1.015);
        // }))
    
        .attr("length", 50)
        .attr("y", (d, i) => {
          console.log(i * 2);
          return y(i * 0.4);
        })
        .attr("x", 0)
        .style("fill", "MediumPurple")
        .attr("height", 30)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
        .on("mouseover", function (event, d) {
          div.transition()
            .duration(200)
            .style("opacity", .9);
          div
            .html(
              d.title + "<br>" + "La différence de salaire est de : " + d.value
            )
            .style("left", event.clientX + "px")
            .style("top", event.clientY + "px");
        })
        .on("mouseout", function (d) {
          div.transition().duration(500).style("opacity", 0);
        })

        .transition().duration(30000)

        //.attr("x", function(d) { return x(d.value); })
        .attr("width", (d) => {
          return x(d.value);
        })

    );
    
}

export default afficheSalaireSelonResponsabilite;
