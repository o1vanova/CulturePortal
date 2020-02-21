import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './BlockAuthorLocation.scss';

class BlockAuthorLocation extends Component {
    constructor(props) {
        super(props);
    }

    mapContainer: any;

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaWxkYXIxMDciLCJhIjoiY2s2dG9la25vMDE3YjNsazNhOWV0NzUyYiJ9.PZ4hkyRPbL0fCc1YURD6wg';
        const initMap = {
            lng: 27.9533882,
            lat: 53.7098083,
            zoom: 8
        };
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/ildar107/ck6w6c31f0fah1ipl0crxsqo6',
        center: [initMap.lng, initMap.lat],
        zoom: initMap.zoom
        });
    }

    render() {
        return (<div>
            <div ref={el => this.mapContainer = el} className='map__container'></div>
        </div>);
    }
}

export default BlockAuthorLocation;