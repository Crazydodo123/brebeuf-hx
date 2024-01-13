import { useField } from '../hooks/index'

import Map from '../routes/Map'

const Report = () => {
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
    
    const nom = useField('nom')
    const type = useField('type')
    const phone = useField('phone')
    const email = useField('email')
    const website = useField('website')
    const address = useField('address')
    const description = useField('description')
    
    return (
        <div id='report-section'>
            <Map />
            <h3>Signaler un ininérant</h3>
            <button className='report-button' onClick={report}>Signaler un itinérant</button>
            <h3>Signaler un point d'intérêt</h3>
            <form>
                <ol>
                    <li className='report-label'>
                        <label htmlFor="nom">Quel est le nom de l'établissement?</label><br />
                        <input className='report-input' required { ...nom }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="type">Quel est le type de l'établissement?</label><br />
                        <input className='report-input' required { ...type }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="phone">Quel est le numéro de téléphone de l'établissement?</label><br />
                        <input className='report-input' required { ...phone }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="email">Quelle est l'addresse courielle de l'établissement?</label><br />
                        <input className='report-input' required { ...email }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="website">Quel est le site Web de l'établissement?</label><br />
                        <input className='report-input' required { ...website }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="address">Quelle est l'addresse de l'établissement?</label><br />
                        <input className='report-input' required { ...address }></input>
                    </li>
                    <li className='report-label'>
                        <label htmlFor="description">Donnez une description de l'établissement.</label><br />
                        <input className='report-input' required { ...description }></input>
                    </li>
                </ol>
                <button className='report-button'>Soumettre</button>
            </form>
        </div>
    )

}

export default Report

