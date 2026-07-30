import { MessageCircle, Calendar, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Icônes personnalisées
function InstagramIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/12155550192"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <MessageCircle size={28} color="white" />
        <span className="whatsapp-ping" />
      </a>
      <Link to="/book" className="sticky-book-btn">
        <Calendar size={16} />
        Book Appointment
      </Link>
    </>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-top-btn">
      <ArrowUp size={20} />
    </button>
  );
}

export default function Footer() {
  const footerLinks = {
    Explore: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Our Team', path: '/team' },
    ],
    Services: [
      { label: 'Knotless Braids', path: '/services/knotless-braids' },
      { label: 'Box Braids', path: '/services/box-braids' },
      { label: 'Boho Braids', path: '/services/boho-braids' },
      { label: 'Cornrows', path: '/services/cornrows' },
      { label: 'Locs', path: '/services/locs' },
    ],
    Client: [
      { label: 'Book Appointment', path: '/book' },
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'VIP Membership', path: '/vip' },
      { label: 'Gift Cards', path: '/gift-cards' },
      { label: 'Hair Care Guide', path: '/hair-care-guide' },
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
      { label: 'Cancellation Policy', path: '/cancellation' },
    ],
  };

  return (
    <footer className="footer">
      <div className="container-lux">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span className="footer-logo-text">SESI</span>
              <span className="footer-logo-text gold-text">Air Braiding</span>
            </div>
            <p className="footer-desc">
              Philadelphia's premier luxury African hair braiding salon. Where heritage meets modern luxury, and every braid is a work of art.
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>1234 Broad Street, Philadelphia, PA 19121</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <span>(215) 555-0192</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <span>hello@sesiairbraiding.com</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="#" className="footer-social-link"><InstagramIcon size={16} /></a>
              <a href="#" className="footer-social-link"><FacebookIcon size={16} /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="footer-col-title">{title}</h4>
              <ul className="footer-col-list">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-col-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">© {new Date().getFullYear()} SESI Air Braiding. All rights reserved.</p>
          <p className="footer-bottom-text">Crafted with heritage and luxury in Philadelphia</p>
        </div>
      </div>
    </footer>
  );
}