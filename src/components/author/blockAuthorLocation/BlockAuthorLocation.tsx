import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './BlockAuthorLocation.scss';
import Place from '../../../model/place';
import mapSettings from '../../../constants/mapSettings';
import { useTranslation } from 'react-i18next';

type PropsType = {
  places?: Place[] | null;
};

type ViewPortType = {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

const viewportStartPoint = {
  width: mapSettings.MAPSIZE,
  height: mapSettings.MAPSIZE,
  latitude: mapSettings.MINSKLAT,
  longitude: mapSettings.MINSKLNG,
  zoom: mapSettings.ZOOM,
};

const BlockAuthorLocation = (props: PropsType) => {
  const { t } = useTranslation();
  if (props.places && props.places[0]) {
    viewportStartPoint.latitude = Number(props.places[0].lat);
    viewportStartPoint.longitude = Number(props.places[0].lng);
  }
  const [viewport, updateView] = useState<ViewPortType>(viewportStartPoint);
  const userLocation = props.places || [];

  return (
    <div className="map__container">
      <ReactMapGL
        className="map"
        {...viewport}
        onViewportChange={viewport => updateView(viewport)}
        mapboxApiAccessToken={mapSettings.TOKEN}
        mapStyle={mapSettings.MAPSTYLEEN}
      >
        {userLocation.map((x, i) => {
          return (
            <Marker key={i} latitude={Number(x.lat)} longitude={Number(x.lng)}>
              <div className="mark__container">
                <p className="mark__title">{t(x.title || '')}</p>
                <img src={'/images/pin.svg'} className="marker__image" alt="marker" />
              </div>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default BlockAuthorLocation;
