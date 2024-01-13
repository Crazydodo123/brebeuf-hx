import { Loader } from '@googlemaps/js-api-loader'
import { useState, useEffect } from 'react'

import locationServices from '../services/locations'

const Map = () => {
    const loader = new Loader({
        apiKey: "AIzaSyCBzmiH3cMYxNYDfU99x7tPjZv01-ALqzk",
        version: "weekly",
        libraries: ["visualization"]
      })
    
    let map
    const d = new Date()

    loader
        .importLibrary('maps')
        .then(({Map}) => {
            map = new Map(document.getElementById("map"), {
                center: { lat: 45.4855, lng: -73.6278 },
                zoom: 14,
            })
        })

    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        locationServices.getAll().then(locations => {
            setLocationData(locations)
        })
    }, [])

    console.log('hi')
    console.log(locationData)

    loader
        .importLibrary('visualization')
        .then(() => {
            const heatmapData = locationData.map(location => {
                let weight

                if (location.time - d.getTime() < 129600) {
                    weight = 129600 - location.time - d.getTime()
                } else {
                    weight = 0
                }

                return {
                    location: new google.maps.LatLng(location.lat, location.lon),
                    weight: weight
                }
            })

            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData
            })
            heatmap.setMap(map)
        })

    const report = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.")
            
        } else if (document.cookie) {
            alert('Too many reports, please try again later')
        } else {
            navigator.geolocation.getCurrentPosition(sendPosition)
        }
        
    }

    const sendPosition = (position) => {
        locationServices.create({
            lat: position.coords.latitude, 
            lon: position.coords.longitude,
            time: d.getTime(),
        }).then(newLocation => {
            setLocationData(locationData.concat(newLocation))
            const expires = (new Date(Date.now() + 5000)).toUTCString();
            document.cookie = "timeout=true; expires=" + expires + ";path=/;"
        })
        
    }

    return (
        <div>
            <h2 className="subheader">Heatmap of the Homeless</h2>
            <div id="map"></div>            
            <button id='report-button' onClick={report}>Report Homeless</button>
        </div>

    )
}

export default Map