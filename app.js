// const csv = "data_copy.csv"
const json1 = "countries.json"
const json2 = "data_copy.json"


d3.json(json2)
.then(function (data) {

  // check if the data successfully loaded.
  //console.log(data);
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
      let first = (data.countries[0])

      changeYear();
      firstJson();
      display_emissions(first);

  });
}

//create function to change year, mimicking dashboard dropdown
function changeYear() {

  d3.json(json1).then(function(data) {

      //set up a variable to select the demographics panel
      var panel = d3.select("#selYear");

      // // filter sample results for each sample id
      // let sample = data.Years.filter(y => y.id == x);

      // // get results for first id
      // let result = sample[0];
      // //console.log(result);

      // // clear existing metadata
      // panel.html("");

      // load metadata using key-value pair
      Object.entries(data.years).forEach(([k,v])=>{
          panel.append("option").attr("value", v).text(v);
      });
      
  });
}

//create function to load first data_copy json
function firstJson() {

  d3.json(json2).then(function(data) {
    let first = (data.Country[0]);
    console.log(first);      
  });
}

function display_emissions(x){

  d3.json(json2).then(function(data) {

      //set up a variable to select the demographics panel
      var panel = d3.select("#sample-metadata");

      // filter sample results for each sample id
      let sample = data.Total.filter(y => y.id == x);

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