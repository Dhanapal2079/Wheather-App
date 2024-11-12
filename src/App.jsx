import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import Current from "./Components/Current";
import Forecast from "./Components/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap";
import BackgroundLayout from "./Components/BackgroundLayout";

function App() {
  const [city, setCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [currentWheather, setCurrent] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [forecastWheather, setforecast] = useState();
  const [loationWheather, setlocation] = useState();

  const autoCompURL =
    "https://api.weatherapi.com/v1/search.json?key=9b5829160c874c2598c91954241510&q=";

  const WeatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3) {
      FetchAutoCompAPI();
    }
  }, [city]);

  const FetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;
      console.log("Api call---", resp);
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setCitySuggestion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };
  const handleselectedcity = (city) => {
    console.log("Clicked City", city);
    FetchWheatherAPI(city);
    setClickedCity(city);
    setCitySuggestion([]);
  };
  const FetchWheatherAPI = async (city) => {
    try {
      const response = await axios.get(WeatherURL(city));
      const resp = response.data;
      //console.log(resp);
      setCurrent(resp.current);
      setforecast(resp.forecast);
      setlocation(resp.location);
      console.log("Current", resp.current);
      console.log("Current", resp.forecast);
    } catch (e) {
      console.log(" Whether API error", e);
    }
  };

  return (
    <div>
      <BackgroundLayout></BackgroundLayout>
      <div
        className="container p-4 rounded mt-50 position-absolute top-0 start-50 translate-middle-x back background box "
        style={{
          margin: "10px",
          background: "linear-gradient(to bottom, #2fa5ed, #b5d3f9, #ebeefb)",
          backgroundColor: "#ebeefb",
        }}
      >
        {/* <BackgroundLayout></BackgroundLayout> */}

        <h4 className="font-bold tracking-wide text-3xl text-center">
          {" "}
          What's the Wheather Like ? {" "}
        </h4>

        <input
          type="text"
          value={clickedCity}
          className="form-control text-center"
          placeholder="Enter Your City "
          onChange={(e) => {
            setCity(e.target.value);
            if (e.target.value === "") {
              setCurrent();
              setforecast();
              setlocation();
              setClickedCity();
            }
          }}
        ></input>
        {/* {city && <h4>{city}</h4>} */}
        {citySuggestion &&
          citySuggestion.map((city, index) => {
            return (
              <div
                className="text-center bg-info p-1 rounded opacity-10 border"
                style={{ cursor: "pointer" }}
                onClick={() => handleselectedcity(city)}
                key={index}
              >
                {city}
              </div>
            );
          })}
        {currentWheather && (
          <Current
            currentWheather={currentWheather}
            loationWheather={loationWheather}
          />
        )}
        {forecastWheather && (
          <Forecast
            forecastWheather={forecastWheather}
            loationWheather={loationWheather}
          />
        )}
      </div>
    </div>
  );
}

export default App;
