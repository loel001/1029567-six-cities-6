import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {placesPropTypes} from "../../common/prop-types";

const Map = (props) => {

  const {places, activePlaceId} = props;

  const mapRef = useRef();
  const [mapLeaflet, setMapLeaflet] = useState(null);

  useEffect(() => {
    const CITY = [52.38333, 4.9];
    const ZOOM = 12;
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
        center: CITY,
        zoom: ZOOM,
        zoomControl: false,
        marker: true
      });

      map.setView(CITY, ZOOM);

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
  }, [places, activePlaceId]);


  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}></div>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  places: state.places,
  activePlaceId: state.activePlaceId
});

Map.propTypes = {
  places: placesPropTypes,
  activePlaceId: PropTypes.number
};


export {Map};

export default connect(mapStateToProps, null)(Map);
