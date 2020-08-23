"use strict";

searchButton.addEventListener('click',searchWeathetr);

function searchWeathetr()
{
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';

    var cityName = searchCity.value;
    if(cityName.trim().length == 0)
    {
        return alert('Please enter city name')
    }
    var http = new XMLHttpRequest();
    var apiKey = '5cf2d5513f2a4b215f4d0fb8dc55e981'; //from https://openweathermap.org/
    var url = 'http:api.openweathermap.org/data/2.5/weather?q='+cityName +'&units=metric&appid='+apiKey;
    var method = 'GET';

    http.open(method, url);// just open not ready to get
    http.onreadystatechange = function()
    {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200)
        {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            // use Weather() constructure which created in weather-data.js file
            
            updateWeather(weatherData);
            //console.log(weatherData);
        }
        else if (http.readyState == XMLHttpRequest.DONE)
        {
            alert('Something went wrong!');
        }
    };
    http.send();
}

function updateWeather(weatherData)
{
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}