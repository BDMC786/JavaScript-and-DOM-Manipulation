var tableData = data;

// YOUR CODE HERE!
var input = d3.select("#filter-btn");

input.on("click", function() {
  d3.event.preventDefault();
  var input_dict = {}
  if(d3.select("#datetime").property("value")) {
    input_dict['datetime'] = [d3.select("#datetime").property("value")];}
  if(d3.select("#city").property("value")) {
    input_dict['city'] = [d3.select("#city").property("value")];}
  if(d3.select("#state").property("value")) {
    input_dict['state'] = [d3.select("#state").property("value")];}
  if(d3.select("#country").property("value")) {
    input_dict['country'] = [d3.select("#country").property("value")];}
  if(d3.select("#shape").property("value")) {
    input_dict['shape'] = [d3.select("#shape").property("value")];}
  //console.log(input_dict)
  
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";

    function filterData(data_table, filters) {
      const filter_keys = Object.keys(filters);
      return data_table.filter((sighting) => {
        return filter_keys.every(key => {
          return filters[key].includes(sighting[key]);
        })
      })
    }

    outputData = filterData(data, input_dict);

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

})