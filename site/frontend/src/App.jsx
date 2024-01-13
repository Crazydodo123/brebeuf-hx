import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Info from './routes/Info'
import Contact from './routes/Contact'


import messageService from './services/messages'

const App = () => {

  const sendMessage = async (newMessage) => {
    try {
      await messageService.create(newMessage)
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
          <p></p>
          <ul id="navbar-links">
            <Link className="navlink" to="/map">Areas of Interest</Link>
            <Link className="navlink" to="/socials">Social Media</Link>
            <Link className="navlink" to="/contest">Donate</Link>
          </ul>
          <Link to="/contact" id='nav-button'>
            <button id="contact-button">Contact Us!</button>
          </Link>
        </nav>
      </header>
      

      <Routes>
        <Route path='/contact' element={<Contact sendMessage={sendMessage} />} />
        <Route path='/' element={<Info />} />
      </Routes>
    </Router>
    

  )
}

export default App
