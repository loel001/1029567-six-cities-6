import React, {useEffect, useRef, useState} from 'react';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {placesPropTypes} from "../../common/prop-types";
import {useSelector} from 'react-redux';

const Map = (props) => {

  const {places} = props;
  const {activePlaceId, activeCity} = useSelector((state) => state.PLACES);

  const mapRef = useRef();
  const [mapLeaflet, setMapLeaflet] = useState(null);

  useEffect(() => {
    const {latitude, longitude, zoom} = places[0].city.location;

    const iconStandard = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
    let map;

    if (!mapLeaflet) {
      map = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom,
        zoomControl: false,
        marker: true
      });

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }).addTo(map);
      setMapLeaflet(map);
    } else {
      map = mapLeaflet;
    }

    map.setView({lat: latitude, lng: longitude}, zoom);

    const markers = places.map((place) => {
      const icon = place.id === activePlaceId ? iconActive : iconStandard;
      return leaflet
        .marker({
          lat: place.location.latitude,
          lng: place.location.longitude
        }, {icon})
        .addTo(map);
    });

    return () => {
      for (const marker of markers) {
        marker.remove();
      }
    };
  }, [places, activePlaceId, activeCity]);


  return (
    <div style={{height: `100%`}} ref={mapRef}></div>
  );
};

Map.propTypes = {
  places: placesPropTypes,
};

export default Map;
