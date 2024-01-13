import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Info from './routes/Info'
import Contact from './routes/Contact'

const App = () => {

  return (
    <Router>
      <header>
        <nav id="navbar">
          <Link to="/">
            <img id="logo-image" src="src\assets\whitelogo.png" alt="logo" height="30"/>
          </Link>
          <ul id="navbar-links">
            <p className = "opacity-mid">|</p>
            <Link className="navbar-item navbar-item-hover navbar-text" to="/roadmap">Areas of Interest</Link>
            <Link className="navbar-item navbar-item-hover navbar-text" to="/socials">Social Media</Link>
            <Link className="navbar-item navbar-item-hover navbar-text" to="/contest">Donate</Link>
            <p className = "opacity-mid">|</p>
          </ul>
          
          <Link to="/contact" id='nav-button'>
            <button className = "navbar-text" id="contact-button"><span>Contact Us</span></button>
          </Link>
        </nav>
      </header>
      

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Info />} />
      </Routes>
    </Router>
    

  )
}

export default App
