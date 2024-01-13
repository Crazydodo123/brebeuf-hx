import instagram from '../assets/instagram.png'
import discord from '../assets/discord.png'
import github from '../assets/github.png'

const Socials = () => {

  return (
    <div id="socials">
      <h2 className="subtitle" id="socials-title">Join us on Social Media</h2>
      <section id="sl">
      <a 
        href="https://www.instagram.com/_mari_linguistics_/"
        target="_blank">
        <img src={instagram} className="logo" />
      </a>
      <a 
        href="https://discord.gg/CdMWzmGe"
        target="_blank">
        <img src={discord} className="logo" id="discord" />
      </a>
      <a 
        href="https://github.com/Crazydodo123/mari-linguistics"
        target="_blank">
        <img src={github} className="logo" />
      
      </a>
        
      </section>
    </div>
  )
}

export default Socials