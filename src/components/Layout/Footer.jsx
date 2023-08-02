import './footer.css'
import instagr from '../../assets/instagr.avif'
import telegram from '../../assets/telegram.png'
import facebook from '../../assets/facebook.jpg'
import lnk from '../../assets/lnk.webp'
import { Link } from 'react-router-dom'


const Footer = () => {
  const Instagram = () => {
    window.location.href = "https://www.instagram.com/samariddin_nurmamatov/"
  }
  const Telegram = () => {
    window.location.href = "https://t.me/samariddin_nurmamatov"
  }
  const Linkidin = () => {
    window.location.href = "https://www.linkedin.com/in/samariddin-nurmamatov-716811272/"
  }
  return (
    <footer>
      <div className="footer-waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul>
        <li>
          <Link onClick={Instagram}>
            <img className="footer-icons" src={instagr} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link onClick={Telegram}>
            <img className="footer-icons" src={telegram} alt="Telegram" />
          </Link>
        </li>
        <li>
          <Link>
            <img className="footer-icons" src={facebook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link onClick={Linkidin}>
            <img className="footer-icons" src={lnk} alt="linkidin" />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer