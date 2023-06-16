import parkList from './data/nationalparks.json';
import React, { Component } from 'react';

class ParksList extends Component {
    render() {
        return (
            <div>
                {
                    parkList.parks.map((park, i) => {
                        return (
                            <div key={i}>
                                <h2>{park.LocationName} {park.LocationID}</h2>
                                <span>{park.Address}</span><br></br>
                                <span>{park.City}, </span>
                                <span>{park.State}  </span>
                                <span>{park.ZipCode}</span>
                                <br></br>
                                <span>Phone: {park.Phone} | Fax: {park.Fax}</span><br></br>
                                <span>Latitude: {park.Latitude} | Longitude: {park.Longitude}</span>
                                <br></br>
                                <span>Location Coordinates: {park.Location.type} {park.Location.coordinates}</span>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ParksList;

