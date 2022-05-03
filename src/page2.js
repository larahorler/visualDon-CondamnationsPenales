import salaireSelonSecteur from "../data/donnee_salaire_selonSecteur_2016_H-F.csv";

import * as d3 from "d3";

//DONNEE PAGE N°2

//Différence salaire entre homme et femme par secteur économique 2016

console.log(salaireSelonSecteur.map((d) => d["Industries extractives"]));

const colonne = Object.keys(salaireSelonSecteur[0]);
let differences = [];
colonne.forEach((d) => {
  differences.push({
    title: d,
    value: salaireSelonSecteur[0][d] - salaireSelonSecteur[1][d],
  });
});
differences.shift();

console.log(differences);

//Visualiser les données
//initalistion du svg

function afficheSalaireSelonSecteur() {
  const data = differences;

  console.log(data);

  const margin = {
    top: 50,
    right: 10,
    bottom: 0,
    left: 100,
  };

  const width = 1000 - margin.left - margin.right;
  const heightSVG = 600 - margin.top - margin.bottom;

  //   var scale = d3.scaleLinear()
  //   .domain([d3.min(data.value), d3.max(data.value)])
  //   .range([0, heightSVG]);

  const svgGraph2 = d3
    .select("#page2")
    .append("svg")
    .attr("width", width)
    .attr("height", heightSVG * data.length);

  svgGraph2
    .attr("width", width + margin.left + margin.right)
    .attr("height", heightSVG + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  console.log(data);

  const min = d3.min(data, (d) => d.value);
  const max = d3.max(data, (d) => d.value);
  const y = d3.scaleLinear().domain([min, max]).range( [0, heightSVG]);

  const minNb = 0
  const maxNb = data.length - 1
  const x = d3.scaleLinear().domain([minNb, maxNb]).range( [0, width]);

  //sort the data in ascending order
  data.sort((a, b) => b.value - a.value);

/*   let Tooltip = d3
    .select("#page2")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .attr("width", "200px")
    .attr("height", "50px")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px") */
    /* .style("position", absolute)
   .style ("z-index", "1") 
    .style("bottom", "125%")
    .style("left", "50%")
    .style("margin-left", "60px")
     */

    let div = d3.select("#page2")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px") 

 /*  const mouseover = function (d) {
    Tooltip.style("opacity", 1).style("stroke", "black").style("opacity", 1);
    Tooltip.html("hello");
  }; */

  /* const mousemove = function (d) {
    Tooltip.html("La différence de salaire est de : " + d.value)
      .style(
        "left",
        selection.on("mousemove", (event) => {
          d3.pointer(event) - 10 + "px";
        })
      )
      .style(
        "top",
        selection.on("mousemove", (event) => {
          d3.pointer(event) + "px";
        })
      );
  }; */

/*   let mouseleave = function (d) {
   Tooltip.style("opacity", 0) 
 .style("stroke", "none") */
/* Tooltip.transition().duration(1000)
.style("opacity", 0)
.style("stroke", "none");
  */
  

  const bar = svgGraph2
    .selectAll("rect")
    .data(data)
    .join((enter) =>
      enter
        .append("rect")
        //scale la largeur selon le nombre de donnée dans le tableau data
        .attr("width", 18)
        .attr("y", (d) => heightSVG - y(d.value))
        .attr("x", function (d, i) {
          return x(i);
        })
        .style("fill", "MediumPurple")
        .attr("height", (d) => {
          return y(d.value *5  );
        })
        .on("mouseover", function (event, d) {
          div.transition()
            .duration(200)
            .style("opacity", .9);
          div.html(d.title + "<br>"+ "La différence de salaire est de : " + d.value)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
          div.transition()
            .duration(500)
            .style("opacity", 0);
        })
        /* .on("mouseover", mouseover)
/*         .on("mousemove", mousemove) 
        .on("mouseleave", mouseleave) */
    );


}




export default afficheSalaireSelonSecteur
