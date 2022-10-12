import React from "react";
import "./styles/style.css";

export default function Home() {
    const [weatherData, setWeatherData] = React.useState(null)
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      window.navigator.geolocation.getCurrentPosition((pos) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            pos.coords.latitude
          }&lon=${pos.coords.longitude}&appid=${
            import.meta.env.VITE_OPENWEATHER_API_KEY
          }&units=metric`
        )
          .then((res) => res.json())
          .then((res) => setWeatherData(res))
          .catch((err) => console.log(err));
      });
      console.log(weatherData);
    } else {
      /* geolocation IS NOT available */
      console.log("Geolocation is not available");
    }
  }, []);
  return (
    <div className="home__container">
      {weatherData ? <p>{weatherData.main.temp} deg, {weatherData.weather[0].main}</p>: "No weather data"}
      <h1 className="greeting__container">Good Morning, Domsan! 😇</h1>
      <div className="summary__container">
        <div>
          <i className="ri-user-3-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Players</p>
          </span>
        </div>
        <div>
          <i className="ri-store-2-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Marketplaces</p>
          </span>
        </div>
        <div>
          <i className="ri-question-answer-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Questionaires</p>
          </span>
        </div>
        <div>
          <i className="ri-folder-chart-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Results</p>
          </span>
        </div>
      </div>
    </div>
  );
}
