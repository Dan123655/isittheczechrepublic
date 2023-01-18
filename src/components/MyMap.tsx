import React from "react";
import mapData from "../data/countries.json";
import "leaflet/dist/leaflet.css";
import "../assets/styles/MyMap.css";
import { countryStyle } from "../assets/styles/countryStyle";
import { MapContainer, GeoJSON } from "react-leaflet";
import { Popup } from "../utils/Popup";
import { ClickHighlight } from "../utils/LayerHighlight";
const MyMap: React.FC = (): JSX.Element => {
  const onCountry = (country: GeoJSON.Feature<GeoJSON.Polygon>, layer: any) => {
    const countryName = country.properties?.ADMIN;
    layer.bindPopup(Popup(countryName), {
      autoClose: false,
      closeOnClick: true,
      className: "popup",
    });
    layer.on({
      mouseover: () => {
        layer.setStyle({ fillColor: "gray" });
      },
      mouseout: () => {
        layer.setStyle(countryStyle);
      },
      click: (event: any) => {
        ClickHighlight(event);
      },
    });
  };
  return (
    <div>
      <h1 id="title">Is it the Czech Republic?</h1>
      <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
        <GeoJSON
          style={countryStyle}
          /*@ts-expect-error */
          data={mapData.features}
          onEachFeature={onCountry}
        />
      </MapContainer>
    </div>
  );
};

export default MyMap;
