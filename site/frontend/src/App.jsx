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
import SignUp from './routes/SignUp'

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
          <Link className='navlink' to='/'>Ganymède</Link>
          <ul id="navbar-links">
            <Link className="navlink" to="/map">Areas of Interest</Link>
            <Link className="navlink" to="/socials">Social Media</Link>
            <Link className="navlink" to="/donate">Donate</Link>
          </ul>
          <Link to="/contact" id='nav-button'>
            <button id="contact-button">Contact Us!</button>
          </Link>
        </nav>
      </header>
      

      <Routes>
        <Route path='sign-up' element={<SignUp />} />
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
