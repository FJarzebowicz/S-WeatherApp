import { WeatherContext } from "../context/WeatherContext";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { useContext } from "react";

export const BackgroundMap = ({ children }) => {
  const weatherContext = useContext(WeatherContext);

  const center = { lat: weatherContext.lat, lng: weatherContext.lon };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `AIzaSyD7qv42XmyGWT4fkqaua6Dy1HvvQ-PDWFw`,
  });

  return isLoaded ? (
    <div className="Container--Map">
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={{
          width: "500px",
          height: "500px",
          borderRadius: "25px",
        }}
      >
        {children}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
