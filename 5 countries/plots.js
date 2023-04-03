var choices = d3.select("#choices");
Object.entries(data).forEach(([k,v])=>{
    choices.append("option").attr("value",k).text(k)
    console.log(k);
});
choices.on("change", function(){
    var choice = choices.property("value");
    console.log(choice);
    console.log(data[choice]);
    update_plot(data[choice]);
})

function create_plot(d){
    data = [
        {
           values: Object.values(d),
           labels: Object.keys(d),
           type: "pie"
        }
    ]
    Plotly.newPlot("pie", data);
}

function update_plot(d){
    let values = Object.values(d);
    let labels = Object.keys(d);
    Plotly.restyle("pie", "values", [values]);
    Plotly.restyle("pie", "vlabels", [labels]);
}

// Create an array of each country's numbers
let Brazil = Object.values(data.Brazil);
let Canada = Object.values(data.Canada);
let Cuba = Object.values(data.Cuba);
let Global = Object.values(data.Global);
let USA = Object.values(data.USA);

// Create an array of category labels
let labels = Object.keys(data.Brazil);

// Display the default plot
function init() {
  let data = [{
    values: Brazil,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'Brazil') {
      data = brazil;
  }
  else if (dataset == 'Canada') {
      data = Canada;
  }
  else if (dataset == 'Cuba') {
      data = Cuba;
  }
  else if (dataset == 'Global') {
      data = Global;
  }
  else if (dataset == 'USA') {
    data = USA;
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();