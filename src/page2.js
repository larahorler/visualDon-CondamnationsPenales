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
      
      const svgGraph2 = d3.select("#page2")
        .append("svg")
        .attr("width", width)
        .attr("height", heightSVG * data.length)

        /*
    var g = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
        return "translate(0," + i * heightSVG + ")";
    });


   g.append("rect")
   .attr("width", function (d) {
       return scale(d);
   })
   .attr("height", heightSVG - margin)

    g.append("text")
    .attr("x", function (d) {
        return scale(d);
    })
    .attr("y", heightSVG / 2)
    .attr("dy", "0.35em")
    .text(function (d) {
        return d;
    });
       */
      svgGraph2
        .attr("width", width + margin.left + margin.right)
        .attr("height", heightSVG + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
      
      //const Secteur = differences.map((d) => d["title"]);
      //console.log(data);
      const bars = svgGraph2
        .selectAll(".myBars")
        .data(data)
        .enter()
        .append("rect")
        .style("fill", "MediumPurple");
      
      


      bars
        .attr("y", 100)
        .attr("x", function (d, i) {
          return 10 + i * 40;
        })
        .attr("height", function (d) {
          return d.value / 3;
        })
        .attr("width", 30);

        const bar = svgGraph2
        .selectAll(".myBars")
        .data(difference["value"][0])
        .append("rect")
        .style("fill", "MediumPurple");
        bar
        .attr("y", 100)
        .attr("x", function (d, i) {
          return 10 + i * 40;
        })
        .attr("height", -function (d) {
          return d.value / 3;
        })
        .attr("width", 30);
      
       
}

  

  
export default afficheSalaireSelonSecteur;