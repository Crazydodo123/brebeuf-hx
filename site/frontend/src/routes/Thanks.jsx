import { Link } from 'react-router-dom'


const Thanks = () => {
    return (
        <div id="thanks-div">
            <h1 id='thanks-header'>Thank you!</h1>
            <Link id="return-button" to="/">Return to home</Link>
        </div>
    )
}

export default Thanks