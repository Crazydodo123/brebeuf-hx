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
                center: { lat: 45.4955, lng: -73.6278 },
                zoom: 14,
            })
        })

    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        locationServices.getAll().then(locations => {
            setLocationData(locations)
        })
    }, [])

    loader
        .importLibrary('visualization')
        .then(() => {
            const heatmapData = locationData.map(location => {
                let weight

                if (d.getTime() - location.time < 7200000) {
                    weight = 7200000 - (location.time - d.getTime())
                } else {
                    weight = 0
                }

                console.log(weight)

                return {
                    location: new google.maps.LatLng(location.lat, location.lon),
                    weight: weight
                }
            })

            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData
            })

            heatmap.setMap(map)
            heatmap.set('radius', 25)
            heatmap.set('gradient', [
                "rgba(255, 255, 255, 0)",
                "rgba(255, 133, 133, 1)",
                "rgba(255, 0, 0, 1)", 


            ])
        })

    const report = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.")
            
        } else if (document.cookie) {
            alert('Too many reports, please try again later')
        } else {
            navigator.geolocation.watchPosition(sendPosition,
                (error) => console.log(error),
                { enableHighAccuracy: true }
            )
        }
    }

    const sendPosition = (position) => {
        console.log(position)

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

    const manualSendPosition = (e) => {
        e.preventDefault()
        const latitude = e.target[0].value
        const longitude = e.target[1].value
        console.log(lat, lon)

        sendPosition({ coords: { latitude, longitude } })
    }

    return (
        <div>
            <h2 className="subheader">Heatmap of the Homeless</h2>
            <div id="map"></div>            
            <button id='report-button' onClick={report}>Report Homeless</button>
            <form onSubmit={manualSendPosition}>
                <input id='lat'></input>
                <input id='lon'></input>
                <button type='submit'>submit</button>
            </form>
        </div>

    )
}

export default Map