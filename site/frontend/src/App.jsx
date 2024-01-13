import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Info from './routes/Info'
import Map from './routes/Map'
import Donate from './routes/Donate'
import Thanks from './routes/Thanks'
import Contact from './routes/Contact'

import messageServices from './services/messages'
import Socials from './routes/Socials'

const App = () => {

  const sendMessage = async (newMessage) => {
    try {
      await messageServices.create(newMessage)
      alert('A message has been sent')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  return (
    <Router>
      <header>
        <nav id="navbar">
          <Link className='navlink' to='/'>
            <img id="logo-image" src="src/assets/whitelogo.png" height="30" alt="logo"/>
          </Link>  
          <ul id="navbar-links">
            <p className="opacity-mid">|</p>
            <Link className="navbar-item navbar-text" to="/map">Zones d'intérêt</Link>
            <Link className="navbar-item navbar-text" to="/socials">Médias Sociaux</Link>
            <Link className="navbar-item navbar-text" to="/donate">Dons</Link>
            <p className="opacity-mid">|</p>
          </ul>
          <Link to="/contact" id='nav-button'>
            <button id="contact-button"><span>Contactez-nous</span></button>
          </Link>
        </nav>
      </header>
      

      <Routes>
        <Route path='/map' element={<Map />} />
        <Route path='/contact' element={<Contact sendMessage={sendMessage} /> } />
        <Route path='socials' element={<Socials /> } />
        <Route path='donate' element={<Donate />} />
        <Route path='thank-you' element={<Thanks /> } />
        <Route path='/' element={<Info />} />
      </Routes>
    </Router>
    

  )
}

export default App
