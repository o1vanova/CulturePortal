import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './BlockAuthorLocation.scss';
import Place from '../../../model/place';
import mapSettings from '../../../constants/mapSettings';

type PropsType = {
  places?: Place[] | null;
};

type StateType = {
  viewport: {
    width: string;
    height: string;
    latitude: number;
    longitude: number;
    zoom: number;
  };
  userLocation: Place[];
};

class BlockAuthorLocation extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    const viewportStartPoint = {
      width: mapSettings.MAPSIZE,
      height: mapSettings.MAPSIZE,
      latitude: mapSettings.MINSKLAT,
      longitude: mapSettings.MINSKLNG,
      zoom: mapSettings.ZOOM
    };

    if (props.places) {
      if (props.places[0]) {
        viewportStartPoint.latitude = Number(props.places[0].lat);
        viewportStartPoint.longitude = Number(props.places[0].lng);
      }
      this.state = {
        viewport: viewportStartPoint,
        userLocation: props.places,
      };
    } else {
      this.state = {
        viewport: viewportStartPoint,
        userLocation: [],
      };
    }
  }

  render() {
    return (
      <div className="map__container">
        <ReactMapGL className="map"
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken="pk.eyJ1IjoiaWxkYXIxMDciLCJhIjoiY2s2dG9la25vMDE3YjNsazNhOWV0NzUyYiJ9.PZ4hkyRPbL0fCc1YURD6wg"
          mapStyle={mapSettings.MAPSTYLEEN}
        >
          {this.state.userLocation.map((x, i) => {
            return (
              <Marker key={i} latitude={Number(x.lat)} longitude={Number(x.lng)}>
                <div className="mark__container">
                  <p className="mark__title">{x.title}</p>
                  <img src={"/images/pin.svg"} className="marker__image"/>
                </div>
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    );
  }
}

export default BlockAuthorLocation;
