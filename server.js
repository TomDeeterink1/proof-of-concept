// Importeer het npm pakket express uit de node_modules map
import express from "express";

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from "./helpers/fetch-json.js";

const apiUrl = "https://dtnl-frontend-case.vercel.app/api/";
const forecastUrl = apiUrl + "get-forecast";
const currentWeatherUrl = apiUrl + "get-weather";
const thingsToDoUrl = apiUrl + "get-things-to-do";


// Maak een nieuwe express app aan
const app = express();

// Stel ejs in als template engine
app.set("view engine", "ejs");

// Stel de map met ejs templates in
app.set("views", "./views");

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static("public"));

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }));


app.get('/', async function (request, response) {
  try {
    const forecastData = await fetchJson(forecastUrl);
    const currentWeatherData = await fetchJson(currentWeatherUrl);
    const thingsToDoData = await fetchJson(thingsToDoUrl);
    console.log(currentWeatherData.weatherInfo); 
    response.render('index', {
      allcast: forecastData.forecast || [],
      weather: currentWeatherData.temperature || [],
      weatherinfo: currentWeatherData.weatherInfo || {},
      thingsToDo: thingsToDoData.activities || []
    });

    
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Error fetching data.");
  }
});


// Stel het poortnummer in waar express op moet gaan luisteren
app.set("port", process.env.PORT || 8001);


// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})



