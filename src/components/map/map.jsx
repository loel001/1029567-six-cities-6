import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {placesPropTypes} from "../../common/prop-types";
import {getPlacesCity, sortPlaces} from "../../common/utils";

const Map = (props) => {

  const {places, activePlaceId, activeCity} = props;

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

      map.setView({lat: latitude, lng: longitude}, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }).addTo(map);
      setMapLeaflet(map);
    } else {
      map = mapLeaflet;
    }

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
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  places: sortPlaces(getPlacesCity(state.places, state.activeCity), state.activeSorting),
  activePlaceId: state.activePlaceId
});

Map.propTypes = {
  places: placesPropTypes,
  activePlaceId: PropTypes.number,
  activeCity: PropTypes.string.isRequired
};


export {Map};

export default connect(mapStateToProps, null)(Map);
