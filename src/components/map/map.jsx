import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {placesPropTypes} from "../../common/prop-types";

const Map = (props) => {

  const {places} = props;

  const mapRef = useRef();

  useEffect(() => {
    const CITY = [52.38333, 4.9];
    const ZOOM = 12;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    mapRef.current = leaflet.map(`map`, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(CITY, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(mapRef.current);


    places.map((place) => {
      leaflet
        .marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        }, {icon})
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  });


  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  places: placesPropTypes
};


export default Map;
