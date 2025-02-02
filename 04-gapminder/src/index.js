import * as d3 from 'd3'
import { timeInterval } from 'd3'
import { count } from 'd3';

// Pour importer les données
import gdp from '../data/income_per_person_gdppercapita_ppp_inflation_adjusted.csv'
import lifeExpectancy from '../data/life_expectancy_years.csv'
import population from '../data/population_total.csv'

// Histoire de capter comment les bdd sont construites…
// let xy = 21;
// console.log(gdp);
// console.log(gdp[0][`20${xy}`]);
// console.log(lifeExpectancy[0]['2021']);
// console.log(population[0]['2021']);

// **************************************
// EXERCICE 1

// d3.select("body")
//     .append("div")
//     .attr('id', 'graph')

// let margin = { top: 10, right: 20, bottom: 30, left: 50 },
//     width = 1000 - margin.left - margin.right,
//     height = 600 - margin.top - margin.bottom;

// let svg = d3.select("#graph")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // Générer une taille d'axe X cohérente
// let theBiggestGDP = 0;
// gdp.forEach(pays => {
//     let gdpAnneeCourante = pays['2021'];
//     if (typeof gdpAnneeCourante === 'string') {
//         gdpAnneeCourante = strToInt(pays['2021']);
//     }
//     pays['2021'] = gdpAnneeCourante;

//     // Générer une taille d'axe X cohérente
//     if (pays['2021'] >= theBiggestGDP) {
//         theBiggestGDP = pays['2021'];
//     }
// });

// // Add X axis
// let x = d3.scaleLinear()
//     .domain([0, theBiggestGDP * 1.05])
//     .range([0, width]);
// svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));

// // Générer une taille d'axe Y cohérente
// let theBiggestLifeExp = 0;
// let theSmallestLifeExp = 0;
// console.log(lifeExpectancy);
// lifeExpectancy.forEach(pays => {
//     if (pays['2021'] >= theBiggestLifeExp) {
//         theBiggestLifeExp = pays['2021'];
//     }
//     theSmallestLifeExp = theBiggestLifeExp;
//     if (pays['2021'] <= theSmallestLifeExp) {
//         theSmallestLifeExp = pays['2021'];
//     }
//     if (pays['2021'] === null && pays['2020'] !== null) {
//         pays['2021'] = pays['2020'];
//     } else if (pays['2021'] === null && pays['2020'] === null) {
//         pays['2021'] = pays['2019'];
//     }
// })

// // Add Y axis
// let y = d3.scalePow()
//     .exponent(1.5)
//     .domain([0, theBiggestLifeExp * 1.1])
//     .range([height, 0]);
// svg.append("g")
//     .call(d3.axisLeft(y));

// population.forEach(pays => {
//     let popAnneeCourante = pays['2021'];
//     if (typeof popAnneeCourante === 'string') {
//         popAnneeCourante = strToInt(pays['2021']);
//     }
//     pays['2021'] = popAnneeCourante;
// });

// // Add a scale for bubble size
// let z = d3.scaleLinear()
//     .domain([200000, 1310000000])
//     .range([5, 60]);

// // Add dots
// svg.append('g')
//     .selectAll("dot")
//     .data(gdp)
//     .enter()
//     .append("circle")
//     .attr("cx", function (d) { return x(d["2021"]); })
//     .attr("r", 10)
//     .style("fill", `#${Math.floor(Math.random() * 16777215).toString(16)}`)
//     .style("opacity", "0.7")
//     .attr("stroke", "black")

// svg.selectAll("circle").data(lifeExpectancy).join()
//     .attr("cy", function (d) { return y(d["2021"]); })

// svg.selectAll("circle").data(population).join()
//     .attr("r", function (d) { return z(d["2021"]); })

// function strToInt(nb) {
//     let multi;
//     let number
//     if (nb.slice(-1) === 'k') {
//         multi = 1000;
//         // console.log(gdpAnneeCourante + " ; c'est un k");
//         number = nb.split('k')[0];
//     } else if (nb.slice(-1) === 'M') {
//         multi = 1000000;
//         // console.log("c'est un M");
//         number = nb.split('M')[0];
//     } else if (nb.slice(-1) === 'B') {
//         multi = 1000000000;
//         // console.log("c'est un M");
//         number = nb.split('B')[0];
//     } else {
//         // console.log('ça beug');
//     }
//     number = parseInt(number * multi);
//     return number;
// };

// **************************************
// EXERCICE 2

// let listCountries = []

// lifeExpectancy.forEach(row => {
//     let countryData = {};
//     countryData[row['country']] = row['2021']
//     listCountries.push(countryData)
// });
// console.log(listCountries);

// d3.select("body")
//     .append("div")
//     .attr('id', 'graph')

// let margin = { top: 20, right: 20, bottom: 30, left: 50 },
//     width = 650 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// let svg = d3.select("#graph")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)

// let projection = d3.geoMercator()
//     .scale(70)
//     .center([0, 20])
//     .translate([width / 2, height / 2]);

// let aRandomNb = Math.floor(Math.random() * 6);
// let aRandomScheme;
// switch (aRandomNb) {
//     case 0:
//         aRandomScheme = d3.schemeOranges;
//         break;
//     case 1:
//         aRandomScheme = d3.schemeGreens;
//         break;
//     case 2:
//         aRandomScheme = d3.schemeReds;
//         break;
//     case 3:
//         aRandomScheme = d3.schemeBlues;
//         break;
//     case 4:
//         aRandomScheme = d3.schemeGreys;
//         break;
//     case 5:
//         aRandomScheme = d3.schemePurples;
//         break;
// }

// let colorScale = d3.scaleThreshold()
//     .domain([50, 60, 70, 80, 90, 100])
//     .range(aRandomScheme[7]);

// d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function (d) {
//     // Draw the map
//     svg.append("g")
//         .selectAll("path")
//         .data(d.features)
//         .join("path")
//         // draw each country
//         .attr("d", d3.geoPath()
//             .projection(projection)
//         )
//         // set id
//         .attr("id", function (d) { return d.properties.name; })
//         .attr("fill", function (d) {
//             let number = 0;
//             listCountries.forEach(country => {
//                 if (typeof country[this.id] != "undefined") {
//                     console.log(country[this.id]);
//                     number = country[this.id]
//                 }
//             })
//             console.log(number);
//             return colorScale(number);
//         })
// })

// **************************************
// EXERCICE 3

// CODE DONNÉ POUR L'EXERCICE :

// Récupère toutes les années
const annees = Object.keys(population[0])
// console.log(annees)

let pop = [],
    income = [],
    life = [],
    dataCombined = [];

// Merge data
const mergeByCountry = (a1, a2, a3) => {
    let data = [];
    a1.map(itm => {
        let newObject = {
            ...a2.find((item) => (item.country === itm.country) && item),
            ...a3.find((item) => (item.country === itm.country) && item),
            ...itm
        }
        data.push(newObject);
    })
    return data;
}

annees.forEach(annee => {
    pop.push({ "annee": annee, "data": converterSI(population, annee, "pop") })
    income.push({ "annee": annee, "data": converterSI(gdp, annee, "income") })
    life.push({ "annee": annee, "data": converterSI(lifeExpectancy, annee, "life") })
    const popAnnee = pop.filter(d => d.annee == annee).map(d => d.data)[0];
    const incomeAnnee = income.filter(d => d.annee == annee).map(d => d.data)[0];
    const lifeAnnee = life.filter(d => d.annee == annee).map(d => d.data)[0];
    dataCombined.push({ "annee": annee, "data": mergeByCountry(popAnnee, incomeAnnee, lifeAnnee) })
});

function converterSI(array, variable, variableName) {
    let convertedVariable = array.map(d => {
        // Trouver le format SI (M, B, k)
        let SI = typeof d[variable.toString()] === 'string' || d[variable.toString()] instanceof String ? d[variable.toString()].slice(-1) : d[variable.toString()];
        // Extraire la partie numérique
        let number = typeof d[variable.toString()] === 'string' || d[variable.toString()] instanceof String ? parseFloat(d[variable.toString()].slice(0, -1)) : d[variable.toString()];
        // Selon la valeur SI, multiplier par la puissance
        switch (SI) {
            case 'M': {
                return { "country": d.country, [variableName]: Math.pow(10, 6) * number };
                break;
            }
            case 'B': {
                return { "country": d.country, [variableName]: Math.pow(10, 9) * number };
                break;
            }
            case 'k': {
                return { "country": d.country, [variableName]: Math.pow(10, 3) * number };
                break;
            }
            default: {
                return { "country": d.country, [variableName]: number };
                break;
            }
        }
    })
    return convertedVariable;
};

// DÉVELOPPEMENT INDIVIDUEL :

dataCombined.forEach(annee => {
    annee.data.forEach(pays => {
        if (isUnknow(pays.pop) || isUnknow(pays.life) || isUnknow(pays.income)) {
            pays.pop = undefined;
            pays.life = undefined;
            pays.income = undefined;
        }
    })
});

function isUnknow(elm) {
    if (isNaN(elm) || elm == null || elm == undefined) {
        return true;
    }
}

d3.select("body")
    .append("div")
    .attr('id', 'graph')

let margin = { top: 10, right: 20, bottom: 30, left: 50 },
    width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

let svg = d3.select("#graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Générer une taille d'axe X cohérente
let theBiggestGDP = 0;
dataCombined.forEach(annee => {
    annee.data.forEach(pays => {
        if (pays.income >= theBiggestGDP) {
            theBiggestGDP = pays.income;
        }
    })
});

// Add X axis
let x = d3.scaleSqrt()
    .domain([0, theBiggestGDP])
    .range([0, width]);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Générer une taille d'axe Y cohérente
let theBiggestLifeExp = 0;
dataCombined.forEach(annee => {
    annee.data.forEach(pays => {
        if (pays.life >= theBiggestLifeExp) {
            theBiggestLifeExp = pays.life;
        }
    })
});

// Add Y axis
let y = d3.scalePow()
    .exponent(1.25)
    .domain([0, theBiggestLifeExp * 1.1])
    .range([height, 0]);
svg.append("g")
    .call(d3.axisLeft(y));

// Add a scale for bubble size
let z = d3.scaleLinear()
    .domain([200000, 1310000000])
    .range([5, 60]);

// Variable où on stocke l'id de notre intervalle
let nIntervId;

function animate() {
    // regarder si l'intervalle a été déjà démarré
    if (!nIntervId) {
        nIntervId = setInterval(play, 100);
    }
    console.log(nIntervId);
}

d3.select('body').append('h1').attr('id', 'anneeCourante')

let i = -1;
function play() {
    // Recommencer si à la fin du tableau
    if (i == 250) {
        i = 0;
    } else {
        i++;
    }

    d3.select('#anneeCourante').text(dataCombined[i].annee)
    updateChart(dataCombined[i]);
}

// Mettre en pause
function stop() {
    clearInterval(nIntervId);
    nIntervId = null;
}

// Fonction de mise à jour du graphique
function updateChart(data_iteration) {
    svg.selectAll('circle')
        .data(data_iteration.data)
        .join(enter => enter.append('circle')
            .attr("stroke", "black")
            .style("fill", `#${Math.floor(Math.random() * 16777215).toString(16)}70`)
            .attr('cx', function (d) { return x(d.income); })
            .attr('cy', function (d) { return y(d.life); }).transition(d3.transition()
                .duration(500)
                .ease(d3.easeLinear)).attr('r', function (d) { return z(d.pop); }),
            update => update.transition(d3.transition()
                .duration(500)
                .ease(d3.easeLinear))
                .attr('r', function (d) { return z(d.pop); })
                .attr('cx', function (d) { return x(d.income); })
                .attr('cy', function (d) { return y(d.life); }),
            exit => exit.remove())
}

animate();