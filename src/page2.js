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
  const y = d3
    .scaleLinear()
    .domain([min, max])
    .range([heightSVG, 0]);

//sort the data in ascending order
  data.sort((a, b) => a.value - b.value);
  

  const bar = svgGraph2
    .selectAll("rect")
    .data(data)
    .join((enter) =>
      enter
        .append("rect")
        .attr("width", 30)
        .attr("y", (d) => heightSVG - y(d.value))
        .attr("x", function (d, i) {
          return 10 + i * 40;
        })
        .style("fill", "MediumPurple")
        .attr("height", (d) => {
          return y(d.value);
        })
    );

    
    var Tooltip = d3.select("#page2 svg g ")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")


    const mouseover = function(d) {
      Tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("stroke", "black")
        .style("opacity", 1)
    }

    const mousemove = function(d) {
      Tooltip
        .html("La différence de salaire est de : " + d.value)
        .style("left", selection.on("mousemove", (event) => {
      d3.pointer(event) - 10 + "px" 
        }))
        .style("top", selection.on("mousemove", (event) => {
      d3.pointer(event) + "px" 
        }))

        var mouseleave = function(d) {
          Tooltip
            .style("opacity", 0)
          d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
        }

        bar.selectAll( "rect" )
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

      



      
    
}
}



export default afficheSalaireSelonSecteur;
