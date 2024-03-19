      // Function to fetch countries from PHP backend
    function fetchCountries() {
      console.log("this is triggerd!!!")
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var countries = JSON.parse(xhr.responseText);
              var select = document.getElementById("countries");
              countries.forEach(function(country) {
                  var option = document.createElement("option");
                  option.value = country.countryCode;
                  option.textContent = country.countryName;
                  select.appendChild(option);
              });
          }
      };
      xhr.open("GET", "libs/php/fetch_countries.php", true); 
      xhr.send();
  }


  window.onload = function() {
      fetchCountries();
  };

   // Add event listener to form submit
   document.getElementById('countryForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      var country = document.getElementById('countries').value;
      var language = document.getElementById('selLanguage').value;
      console.log("language", language)
    
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var response = JSON.parse(xhr.responseText);
              displayCountryInfo(response);
          }
      };
      var apiUrl = `libs/php/backend.php?country=${country}&lang=${language}`;
      xhr.open('GET', apiUrl, true);
      xhr.send();
  });

  // Function to display country info in table
  function displayCountryInfo(data) {
      var countryInfoBody = document.getElementById('country-info-body');
      countryInfoBody.innerHTML = ''; // Clear previous data

      for (var key in data) {
          var row = document.createElement('tr');
          var propCell = document.createElement('td');
          var valueCell = document.createElement('td');
          propCell.textContent = key;
          valueCell.textContent = data[key];
          row.appendChild(propCell);
          row.appendChild(valueCell);
          countryInfoBody.appendChild(row);
      }
  }


document.getElementById('weather-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

      
      var north = document.getElementById('north').value;
      var south = document.getElementById('south').value;
      var east = document.getElementById('east').value;
      var west = document.getElementById('west').value;

  
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              var response = JSON.parse(xhr.responseText);
              displayWeatherResults(response);
          }
      };
      var apiUrl = `libs/php/weather.php?north=${north}&south=${south}&east=${east}&west=${west}`;
      xhr.open('GET', apiUrl, true);
      xhr.send();
  });

  // Function to display weather results in table
  function displayWeatherResults(data) {
      var weatherResultsBody = document.getElementById('weather-results-body');
      weatherResultsBody.innerHTML = ''; // Clear previous data

      data.weatherObservations.forEach(function(observation) {
          var row = document.createElement('tr');
          row.innerHTML = `
              <td>${observation.datetime}</td>
              <td>${observation.stationName}</td>
              <td>${observation.observation}</td>
              <td>${observation.temperature}</td>
              <td>${observation.humidity}</td>
              <td>${observation.weatherCondition}</td>
              <td>${observation.clouds}</td>
              <td>${observation.windSpeed}</td>
          `;
          weatherResultsBody.appendChild(row);
      });
  }



 
  document.getElementById('timezone_info').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;

  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            displayTimezoneInfo(response);
        }
    };
    var apiUrl = `libs/php/timezone_backend.php?latitude=${latitude}&longitude=${longitude}`;
    xhr.open('GET', apiUrl, true);
    xhr.send();
});

// Function to display timezone information in table
function displayTimezoneInfo(data) {
    var timezoneInfoBody = document.getElementById('timezone-info-body');
    timezoneInfoBody.innerHTML = ''; 

    for (var key in data) {
        var row = document.createElement('tr');
        var propCell = document.createElement('td');
        var valueCell = document.createElement('td');
        propCell.textContent = key;
        valueCell.textContent = data[key];
        row.appendChild(propCell);
        row.appendChild(valueCell);
        timezoneInfoBody.appendChild(row);
    }
}