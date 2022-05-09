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
    top: 60,
    right: 10,
    bottom: 0,
    left: 0,
  };

  const width = 700 - margin.left - margin.right;
  const heightSVG = 700 - margin.top - margin.bottom;

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

  //console.log(data);

  const min = d3.min(data, (d) => d.value);
  const max = d3.max(data, (d) => d.value);
  const y = d3.scaleLinear().domain([0, max]).range( [heightSVG, 0 ]);

  const minNb = 0
  const maxNb = data.length - 1
  const x = d3.scaleLinear().domain([minNb, maxNb]).range( [0, width]);

  //sort the data in ascending order
  data.sort((a, b) => b.value - a.value);



    let div = d3.select("#page2")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px") 
    
console.log(y(0))
 
  

  const bar = svgGraph2
    .selectAll("rect")
    .data(data)
    .join((enter) =>
      enter
        .append("rect")
        //scale la largeur selon le nombre de donnée dans le tableau data
        .attr("width", 10)
        // .attr("y", function(d) { return heightSVG - y(d.value); })
        .attr("y", y(0))
        .attr("x", function (d, i) {
          return x(i);
        })
        .style("fill", "MediumPurple")
        .attr ("height", heightSVG - y(0))
       /*  .attr("height", (d) => {
          return heightSVG - y(0);
        }) */
        
        .on("mouseover", function (event, d) {
          div.transition()
            .duration(200)
            .style("opacity", .9);
          div.html(d.title + "<br>"+ "La différence de salaire est de : " + d.value)
            .style("left", (event.clientX) + "px")
           .style("top", (event.clientY) + "px");
        })
        .on("mouseout", function (d) {
          div.transition()
            .duration(500)
            .style("opacity", 0);
        })
        .transition().duration(10000)

      .attr("y", function(d) { return y(d.value); })
        .attr("height", (d) => {
          return (heightSVG - y(d.value));
        })
        );

   

 
}




export default afficheSalaireSelonSecteur
