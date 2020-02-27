import React, { Component } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import './BlockAuthorLocation.scss';
import Place from '../../../model/place'


//const mapStyleRu = 'mapbox://styles/ildar107/ck74i1rc300lz1imca0ith2f9';
const mapStyleEn = 'mapbox://styles/ildar107/ck6w6c31f0fah1ipl0crxsqo6';
const minskLat = 53.893009;
const minskLng = 27.567444;
const viewportStartPoint = {
  width: "100%",
  height: "100%",
  latitude: minskLat,
  longitude: minskLng,
  zoom: 10
};

type PropsType = {
  places? : Place[] | null
}

type StateType = {
    viewport : {
        width: string,
        height: string,
        latitude: number,
        longitude: number,
        zoom: number
    }
    userLocation : Place[]
};

class BlockAuthorLocation extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    if(props.places) {
      if(props.places[0]) {
        viewportStartPoint.latitude = Number(props.places[0].lat);
        viewportStartPoint.longitude = Number(props.places[0].lng);
      }
      this.state = {
        viewport: viewportStartPoint,
        userLocation: props.places
      }
    }
    else {
      this.state = {
        viewport: viewportStartPoint,
        userLocation: []
      }
    }
  }

  render() {
    return (<div  className='map__container'>
      <ReactMapGL 
        {...this.state.viewport} 
        onViewportChange={(viewport => this.setState({viewport}))}
        mapboxApiAccessToken='pk.eyJ1IjoiaWxkYXIxMDciLCJhIjoiY2s2dG9la25vMDE3YjNsazNhOWV0NzUyYiJ9.PZ4hkyRPbL0fCc1YURD6wg' 
        mapStyle={mapStyleEn}>
        {this.state.userLocation.map((x) => {
          return (<Marker
            latitude={Number(x.lat)}
            longitude={Number(x.lng)}>
          <img src={x.title ? '/images/pin.svg': '/images/pin.svg'} className="marker__image" />
          </Marker>
          )}
        )}
      </ReactMapGL>
    </div>);
  }
}

export default BlockAuthorLocation;