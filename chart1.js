async function draw(){
  var ctx2 = document.getElementById("chart2").getContext("2d");

  const dataset = await d3.csv("./data/chart1.csv", (d) => {
    d3.autoType(d)
    return d
})

var colors2 = [
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
]

var assigned = {};
function c2(name) {
  return assigned[name] || (assigned[name] = colors2[Object.keys(assigned).length % colors2.length]);
}
var chart2 = new Chart(ctx2, {
  type: "sankey",
  data: {
    datasets: [
      {
        data:dataset,
        colorFrom: (c) => c2(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => c2(c.dataset.data[c.dataIndex].to),
        borderWidth: 0
      }
    ]
  },
  size: "max"
})
} draw()
