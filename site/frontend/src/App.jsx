import {
  Routes, Route, Link, useLocation, useNavigate, 
} from 'react-router-dom'

import Info from './routes/Info'
import Donate from './routes/Donate'
import Contact from './routes/Contact'
import Admin from './routes/Admin'

import messageServices from './services/messages'
import userServices from './services/user'
import PlaceServices from './services/places'
import Socials from './routes/Socials'
import SignUp from './routes/SignUp'

const App = () => {
  const sendMessage = async (newMessage) => {
    try {
      await messageServices.create(newMessage)
      alert('Votre message a été envoyé.')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  const sendUser = async (newUser) => {
    try {
      await userServices.create(newUser)
      alert('Bienvenue à bord!')

    } catch({ response }) {
      console.log(response.data)
      alert(response.data.error)
    }
  }

  const sendPlace = async (newPlace) => {
    try {
      await PlaceServices.create(newPlace)
      alert("Nouveau point d'intérêt créé")

    } catch({ response }) {
      console.log(response)
      console.log(response.data)
      alert(response.data.error)
    }
  }

  return (
    <div id="pc-part">
        <header>
          <nav id="navbar">
            <Link className='navlink navbar-item' to='/'>
              <span className='navbar-text' id='logo-name'>Projet Ganymède</span>
            </Link>  
            <ul id="navbar-links">
              <p className="opacity-mid">|</p>
              <Link className="navbar-item navbar-text" to="/donate">Dons</Link>
              <Link className="navbar-item navbar-text" to="/contact">Nous joindre</Link>
              <Link className="navbar-item navbar-text" to="/socials">Médias Sociaux</Link>
              <p className="opacity-mid">|</p>
            </ul>
            <Link to="/sign-up" id='nav-button'>
              <button id="contact-button"><span>Devenir bénévole</span></button>
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path='/contact' element={<Contact sendMessage={sendMessage} /> } />
          <Route path='/socials' element={<Socials /> } />
          <Route path='/donate' element={<Donate />} />
          <Route path='/sign-up' element={<SignUp sendUser={sendUser} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/' element={<Info />} componentDidMount={() => console.log('Entered /')} />
        </Routes>
    </div>
  )
}

export default App
