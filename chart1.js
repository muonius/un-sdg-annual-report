async function draw(){

var ctx = document.getElementById("chart").getContext("2d");

const palette = [
  "#E5233D",
  "#DEA739",
  "#4CA146",
  "#C7212E",
  "#EF402D",
  "#27BFE6",
  "#FBC412",
  "#A21D43",
  "#F26A2E",
  "#E01583",
  "#F89D2A",
  "#BF8D2C",
  "#407F46",
  "#2097D4",
  "#59BA48",
  "#126A9E",
  "#15496B",
];

var colors = {
  Oil: "black",
  Coal: "gray",
  "Fossil Fuels": "slategray",
  Electricity: "blue",
  Energy: "orange"
};

// the y-order of nodes, smaller = higher
var priority = {
  Oil: 1,
  'Narural Gas': 2,
  Coal: 3,
  'Fossil Fuels': 1,
  Electricity: 2,
  Energy: 1
};

// var labels = {
//   Oil: 'black gold (label changed)'
// }

function getColor(name) {
  return colors[name] || "green";
}

var chart = new Chart(ctx, {
  type: "sankey",
  data: {
    datasets: [
      {
        data: [
          { from: "Oil", to: "Fossil Fuels", flow: 15 },
          { from: "Natural Gas", to: "Fossil Fuels", flow: 20 },
          { from: "Coal", to: "Fossil Fuels", flow: 25 },
          { from: "Coal", to: "Electricity", flow: 25 },
          { from: "Fossil Fuels", to: "Energy", flow: 60 },
          { from: "Electricity", to: "Energy", flow: 25 }
        ],
        priority,
        // labels,
        colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
        borderWidth: 2,
        borderColor: 'black'
      }
    ]
  }
});
} draw()
