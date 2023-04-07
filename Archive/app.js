// const csv = "data_copy.csv"
const json1 = "countries.json"
const json2 = "2017data.json"


d3.json(json2)
.then(function (data) {

  // check if the data successfully loaded.
  console.log(data);

});

// create a function to initialize the dashboard
function dashboard() {

  d3.json(json1).then(function(data) {
      //set up a variable for the dropdown menu
      var choices = d3.select("#selDataset");

      //cycle through each selection to populate the dropdown
      Object.entries(data.countries).forEach(([k,v])=>{
          choices.append("option").attr("value", v).text(v);
          //console.log(v);
      });

      //load default data for first id
      let firstCountry = (data.countries[0])
      let firstYear = (data.years[0])

      changeYear(firstYear);
      firstJson();
      display_emissions(firstCountry);

  });
}

//create function to change year, mimicking dashboard dropdown
function changeYear() {

  d3.json(json1).then(function(data) {

      //set up a variable to select the demographics panel
      var panel = d3.select("#selYear");

      // load metadata using key-value pair
      Object.entries(data.years).forEach(([k,v])=>{
          panel.append("option").attr("value", v).text(v);
          console.log(v)
      });
      
  });
}

//create function to load first data_copy json
function firstJson() {

  d3.json(json2).then(function(data) {
    var year = data[0].Year;
    console.log(year)

  });
}

function display_emissions(x){

  d3.json(json2).then(function(data) {

      //set up a variable to select the demographics panel
      var panel = d3.select("#sample-metadata");

      // filter sample results for each sample id
      let sample = data.filter(y => y.Country == x && y.Year == 2021);

      // get results for first id
      let result = sample[0];
      //console.log(result);

      // clear existing metadata
      panel.html("");

      // load metadata using key-value pair
      Object.entries(result).forEach(([k,v])=>{
          panel.append("h5").text(`${k}: ${v}`);
      });
      
  });
}

//create function to update dashboard based on dropdown selection
function optionChanged(selection) { 

  // Log the new selection
  console.log(selection); 

  // // Call all functions 
  // create_bar(selection);
  // create_bubble(selection);
  display_emissions(selection);
  // changeYear();
}

// call the dashboard function
dashboard();

//data.Country[0],data.Year[0],data.Total[0],data.Coal[0],data.Oil[0],data.Gas[0],data.Cement[0],data.Flaring[0],data.Other[0]
