import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Navegación de servicios */}
          <nav>
            <h6 className="footer-title text-white">Services</h6>
            <Link to="/FAQS" target="_self" rel="next" className="link link-hover text-gray-400">
              FAQS
            </Link>
          </nav>

          {/* Navegación de la empresa */}
          <nav>
            <h6 className="footer-title text-white">Company</h6>
            <a className="link link-hover text-gray-400">About us</a>
            <a className="link link-hover text-gray-400">Contact</a>
          </nav>

          {/* Navegación legal */}
          <nav>
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover text-gray-400">Terms of use</a>
            <a className="link link-hover text-gray-400">Privacy policy</a>
            <a className="link link-hover text-gray-400">Cookie policy</a>
          </nav>
        </div>

        <div className="text-center mt-4">
          <p className="text-xs">© 2024 Mi Social App. Todos los derechos reservados.</p>
          <p className='text-xs'>Curated by PortalToCoding</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
