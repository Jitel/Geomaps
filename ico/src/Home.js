/**
 * Created by jitel on 21.4.18.
 */
import React, {Component} from "react";
import './Home.css'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


 export default class Home extends Component {




    render() {
        const position = [51.505, -0.09];

        return (
            <div className="leaflet-marker-pane">
                <Map center={position} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>

            </div>



        );
    }


}

