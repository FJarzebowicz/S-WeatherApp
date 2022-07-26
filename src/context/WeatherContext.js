import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState();
  const [desc, setDesc] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [humidity, setHumidity] = useState();
  const [sCity, setSCity] = useState();
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();

  const fetchTodos2 = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=211472aa4952e604e3bbb74840080f5a&units=metric`
    );
    const data = await response.json();
    setWeather(data);
    setTemperature(Math.round(data["main"]["temp"]));
    setDesc(data["weather"][0]["description"]);
    setFeelsLike(Math.round(data["main"]["feels_like"]));
    setHumidity(data["main"]["humidity"]);
    setSCity(data["name"]);
    setLon(data["coord"]["lon"]);
    setLat(data["coord"]["lat"]);
  };

  useEffect(() => {
    fetchTodos2();
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        city,
        setCity,
        temperature,
        desc,
        feelsLike,
        humidity,
        sCity,
        lon,
        lat,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
