import React, { Component } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import './BlockAuthorLocation.scss';


const mapStyleRu = 'mapbox://styles/ildar107/ck74i1rc300lz1imca0ith2f9'
const mapStyleEn = 'mapbox://styles/ildar107/ck6w6c31f0fah1ipl0crxsqo6'

type PropsType = {}

type StateType = {
    viewport : {
        width: string,
        height: string,
        latitude: number,
        longitude: number,
        zoom: number
    }
    userLocation : {
      latitude: number,
      longitude: number
    }
};

class BlockAuthorLocation extends Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 58.7098083,
        longitude: 25.9533882,
        zoom: 16
      },
      userLocation: {
        latitude: 58.7098083,
        longitude: 25.9533882,
      }
    };
  }

  render() {
    return (<div  className='map__container'>
      <ReactMapGL 
        {...this.state.viewport} 
        onViewportChange={(viewport => this.setState({viewport}))}
        mapboxApiAccessToken='pk.eyJ1IjoiaWxkYXIxMDciLCJhIjoiY2s2dG9la25vMDE3YjNsazNhOWV0NzUyYiJ9.PZ4hkyRPbL0fCc1YURD6wg' 
        mapStyle={mapStyleRu}>
        
        <Marker
          latitude={this.state.userLocation.latitude}
          longitude={this.state.userLocation.longitude}>
        <img src='/images/pin.svg' className="marker__image" />
        </Marker>
      </ReactMapGL>
    </div>);
  }
}

export default BlockAuthorLocation;