import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='box'>
          <div className='logo'>
            <img src='../images/logo-light.png' alt='' />
            <h2 className="title_footer">More information here</h2>
            <div className='input flex'></div>
          </div>
        </div>

        {footer.map((val) => (
          <div className='box' key={val.title}>
            <h3>{val.title}</h3>
            <ul>
              {val.text.map((items, index) => (
                <li key={index}>{items.list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='social-icons'>

        {/* Иконка Instagram */}
        <FaInstagram className='iconic' onClick={() => window.open('https://www.instagram.com/gj_wr1d?igsh=bGdwcHlxa2Q1YTVr', '_blank')} />
        {/* Иконка Facebook */}
        <FaFacebook className='iconic' onClick={() => window.open('https://www.facebook.com/Duyshoev_', '_blank')} />
        {/* Иконка WhatsApp */}
        <FaWhatsapp className='iconic' onClick={() => window.open('https://wa.me/<+996 555 871 985>','_blank')} />
      </div>

      <div className='legal'>
        <span>© 2024 Rent Tower by Leasehub.</span>
      </div>
    </footer>
  );
};

export default Footer;
