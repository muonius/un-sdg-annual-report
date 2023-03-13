async function draw(){
  var ctx2 = document.getElementById("chart2").getContext("2d");

  const dataset = await d3.csv("./data/chart1.csv", (d) => {
    d3.autoType(d)
    return d
})

var colors2 = ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'];
var assigned = {};
function c2(name) {
  return assigned[name] || (assigned[name] = colors2[Object.keys(assigned).length % colors2.length]);
}
var chart2 = new Chart(ctx2, {
  type: "sankey",
  data: {
    datasets: [
      {
        data: [
          {
            "from": "Climate action & energy transformation",
            "to": "SDG13",
            "flow": 2
          },
          {
            "from": "Climate action & energy transformation",
            "to": "SDG7",
            "flow": 2
          },
          {
            "from": "Decent jobs & universal social protection",
            "to": "SDG1",
            "flow": 3
          },
          {
            "from": "Decent jobs & universal social protection",
            "to": "SDG13",
            "flow": 2
          },
          {
            "from": "Decent jobs & universal social protection",
            "to": "SDG2",
            "flow": 3
          },
          {
            "from": "Decent jobs & universal social protection",
            "to": "SDG7",
            "flow": 2
          },
          {
            "from": "Food systems transformation",
            "to": "SDG1",
            "flow": 3
          },
          {
            "from": "Food systems transformation",
            "to": "SDG13",
            "flow": 2
          },
          {
            "from": "Food systems transformation",
            "to": "SDG2",
            "flow": 3
          },
          {
            "from": "Food systems transformation",
            "to": "SDG7",
            "flow": 2
          },
          {
            "from": "SDG localization",
            "to": "SDG13",
            "flow": 2
          },
          {
            "from": "SDG localization",
            "to": "SDG7",
            "flow": 2
          },
          {
            "from": "SDG1",
            "to": "Civil Society Organizations",
            "flow": 2
          },
          {
            "from": "SDG1",
            "to": "National Government",
            "flow": 2
          },
          {
            "from": "SDG1",
            "to": "Sub-national Governments",
            "flow": 2
          },
          {
            "from": "SDG13",
            "to": "Civil Society Organizations",
            "flow": 4
          },
          {
            "from": "SDG13",
            "to": "National Government",
            "flow": 4
          },
          {
            "from": "SDG2",
            "to": "Civil Society Organizations",
            "flow": 2
          },
          {
            "from": "SDG2",
            "to": "National Government",
            "flow": 2
          },
          {
            "from": "SDG2",
            "to": "Sub-national Governments",
            "flow": 2
          },
          {
            "from": "SDG7",
            "to": "Civil Society Organizations",
            "flow": 4
          },
          {
            "from": "SDG7",
            "to": "National Government",
            "flow": 4
          }
        ],
        colorFrom: (c) => c2(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => c2(c.dataset.data[c.dataIndex].to),
        borderWidth: 0
      }
    ]
  }
})
} draw()
