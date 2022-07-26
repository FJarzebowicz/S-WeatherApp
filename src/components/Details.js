import "./Details.css";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import "@fontsource/nunito";
import { BackgroundMap } from "./BackgroundMap";

export const Details = () => {
  const weatherContext = useContext(WeatherContext);

  return (
    <>
      <div className="Container">
        <div className="Container--City">
          <div className="City">{weatherContext.sCity}</div>
        </div>
        <div className="Container--AllParameters">
          <div className="Container--Temperature">
            <div className="Temperature--Label">Temperature</div>
            <div className="Temperature">{weatherContext.temperature}°C</div>
          </div>
          <div className="Container--Discription">
            <div className="Discription--Label">Description</div>
            <div className="Desc">{weatherContext.desc}</div>
          </div>
          <div className="Container--Humidity">
            <div className="Humidity--Label">Humidity</div>
            <div className="Humidity">{weatherContext.humidity}</div>
          </div>
          <div className="Container--FellsLike">
            <div className="FeelsLike--Label">Feels Like</div>
            <div className="FeelsLike">{weatherContext.feelsLike}°C</div>
          </div>
        </div>
      </div>
    </>
  );
};
