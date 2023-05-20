import { Link } from "react-router-dom";
import React from "react";
import './Header.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Header = () => {
  return (

    <div className='parent'>
      <div className="image">
        <img className="mosol9" src="https://www.mosol9.com/wp-content/uploads/2022/07/Mosol9-logo-02-e1658152621135.png" />
      </div>
      <div className="comps">
          <h4>HOME</h4>
          <h4>ABOUT</h4>
          <h4>SERVICES</h4>
          <h4>ADS</h4>
          <h4>EVENTS</h4>
          <h4>BLOGS</h4>
          <h4>CONTACT</h4>
          <Link to="/Facebook" className='links'><FacebookIcon /></Link>
          <Link to="/Instagram" className='links'><InstagramIcon /></Link>
          <Link to="/Linkedin" className='links'><LinkedInIcon /></Link>
          <Link to="/Twitter" className='links'><WhatsAppIcon /></Link>
      </div>
    </div>
  )
}
export default Header;