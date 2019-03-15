var sightings = data;

// YOUR CODE HERE!
var input = d3.select("#filter-btn");

input.on("click", function() {
  d3.event.preventDefault();
  var inputDict = {}
  if(d3.select("#datetime").property("value")) {
    inputDict['datetime'] = [d3.select("#datetime").property("value")];}
  if(d3.select("#city").property("value")) {
    inputDict['city'] = [d3.select("#city").property("value")];}
  if(d3.select("#state").property("value")) {
    inputDict['state'] = [d3.select("#state").property("value")];}
  if(d3.select("#country").property("value")) {
    inputDict['country'] = [d3.select("#country").property("value")];}
  if(d3.select("#shape").property("value")) {
    inputDict['shape'] = [d3.select("#shape").property("value")];}
  //console.log(inputDict)
  
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";

    function filterData(dataArray, filters) {
      const filterKeys = Object.keys(filters);
      return dataArray.filter((sighting) => {
        return filterKeys.every(key => {
          return filters[key].includes(sighting[key]);
        })
      })
    }

    outputData = filterData(sightings, inputDict);

    d3.select("#dataTable").remove();
    d3.select("#ufo-table").append("tbody").attr("id","dataTable");

    var tbody = d3.select("tbody");

    outputData.forEach((sighting) => {
      row = tbody.append("tr");
      row.append("td").text(sighting.datetime);
      row.append("td").text(sighting.city.toUpperCase());
      row.append("td").text(sighting.state.toUpperCase());
      row.append("td").text(sighting.country.toUpperCase());
      row.append("td").text(sighting.shape);
      row.append("td").text(sighting.durationMinutes);
      row.append("td").text(sighting.comments);
    }) 
    // d3.select("#dataTable").remove();
    // d3.select("#ufo-table").append("tbody").attr("id","dataTable");

    // // Build table based on filteredData
    // var tbody = d3.select("tbody");

    // // Loop through filtered data and add a row for each entry
    // dataTable.forEach(sighting => {
    //     var row = tbody.append("tr");

    //     // Loop through each entry and get the key and value for each item
    //     Object.entries(sighting).forEach(([key, value]) => {
    //     console.log(key, value);

    //     // Append a cell to the row for each value
    //     var cell = tbody.append("td");

    //     // Fill each cell with the corresponding value
    //     cell.text(value);
    //     })
    // })
  

})