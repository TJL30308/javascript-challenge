// from data.js
var tableData = data;

// make reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// check that data is pulled correctly from data.js
// console.log(data);

// make loop to pull each object from data.js
// data.forEach(function(ufoSighting) {
//       console.log(ufoSighting);
// });

// Arrow function to loop through data and append date, city, state, country, shape, duration, comments to table
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    tbody.html("");
    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(ufoSighting => ufoSighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    })