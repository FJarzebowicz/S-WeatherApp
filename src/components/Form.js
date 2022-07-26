import "./Form.css";
import "@fontsource/nunito";
import { useState } from "react";
import { useContext } from "react";
import {
  WeatherContext,
  WeatherContextProvider,
} from "../context/WeatherContext";

export const Form = () => {
  const [inputValue, setInputValue] = useState();

  const weatherContext = useContext(WeatherContext);

  const setInputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const setCityHandler = () => {
    weatherContext.setCity(inputValue);
    console.log(weatherContext.city);
    WeatherContextProvider();
  };

  return (
    <>
      <div className="WeatherHeadingText">Enter city to check weather</div>
      <input
        className="WeatherHeadingInput"
        onChange={setInputValueHandler}
      ></input>
      <button className="WeatherHeadingButton" onClick={setCityHandler}>
        Sprawdź
      </button>
    </>
  );
};
