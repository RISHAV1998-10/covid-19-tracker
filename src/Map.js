import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet"; 
import "./Map.css"
import { showDataOnMap } from './utils';

function Map({countries,casesType,center,zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OPenStreetMap</a>'
                />
                {/* Loop Through countroes and draw circles */}
                
                { showDataOnMap( countries, casesType ) }

            </LeafletMap>
            
        </div>
    )
}

export default Map
