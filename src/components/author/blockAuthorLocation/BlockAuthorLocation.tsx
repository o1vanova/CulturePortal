import React, { Component } from 'react';
import ReactMapGL, { Marker, setRTLTextPlugin } from "react-map-gl";
import './BlockAuthorLocation.scss';

type MapState = {
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

class BlockAuthorLocation extends Component<{}, MapState> {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 53.7098083,
        longitude: 27.9533882,
        zoom: 9
      },
      userLocation: {
        latitude: 53.7098083,
        longitude: 27.9533882,
      }
    };
  }

  render() {
    return (<div  className='map__container'>
      <ReactMapGL 
        {...this.state.viewport} 
        onViewportChange={(viewport => this.setState({viewport}))}
        mapboxApiAccessToken='pk.eyJ1IjoiaWxkYXIxMDciLCJhIjoiY2s2dG9la25vMDE3YjNsazNhOWV0NzUyYiJ9.PZ4hkyRPbL0fCc1YURD6wg' 
        mapStyle='mapbox://styles/ildar107/ck6w6c31f0fah1ipl0crxsqo6'
        mapboxLanguage ="ru">
        
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