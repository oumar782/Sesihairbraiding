import { useEffect, useState } from 'react';
import { Menu, X, Calendar, Clock } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Team', path: '/team' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isHome = currentPath === '/';
  const transparent = isHome && !scrolled && !open;

  const handleLinkClick = (path) => {
    navigate(path);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${transparent ? 'navbar-transparent' : 'navbar-solid'}`}>
        {/* ===== HOURS BANNER ===== */}
        <div className="hours-banner">
          <div className="hours-banner-inner">
            <Clock size={14} className="hours-banner-icon" />
            <span className="hours-banner-text">
              Mon-Fri: 9:00 AM - 8:00 PM
            </span>
            <span className="hours-banner-divider">|</span>
            <span className="hours-banner-text">
              Sat: 10:00 AM - 6:00 PM
            </span>
            <span className="hours-banner-divider">|</span>
            <span className="hours-banner-text">
              Sun: Closed
            </span>
          </div>
        </div>

        <nav className="navbar-inner">
          {/* ===== LOGO ===== */}
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <div className="nav-logo-wrapper">
              <img src={logo} alt="SESI Air Braiding" className="nav-logo-img" />
              <div className="nav-logo-glow" />
            </div>
            <div className="nav-logo-text-group">
              <span className="nav-logo-text">SESI</span>
              <span className="nav-logo-text-sub gold-text">Air Braiding</span>
            </div>
          </Link>

          {/* ===== NAV LINKS ===== */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link link-underline ${
                  currentPath === link.path
                    ? 'active'
                    : transparent
                    ? 'transparent'
                    : 'inactive'
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                <span className="nav-link-number">
                  {String(navLinks.indexOf(link) + 1).padStart(2, '0')}
                </span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* ===== ACTIONS ===== */}
          <div className="nav-actions">
            <Link to="/book" className="nav-book-btn" onClick={() => handleLinkClick('/book')}>
              <Calendar size={16} className="nav-book-icon" />
              <span>Book Now</span>
              <span className="nav-book-shine" />
            </Link>
            <button 
              onClick={() => setOpen(!open)} 
              className={`nav-toggle ${open ? 'open' : ''}`}
              aria-label="Toggle menu"
            >
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
            </button>
          </div>
        </nav>

        {/* ===== PROGRESS BAR ===== */}
        <div className="navbar-progress">
          <div className="navbar-progress-bar" style={{ width: `${scrolled ? 100 : 0}%` }} />
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-background">
            <div className="mobile-menu-glow" />
            <div className="mobile-menu-pattern" />
          </div>
          
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <div className="mobile-menu-logo-wrapper">
                  <img src={logo} alt="SESI Air Braiding" className="mobile-menu-logo-img" />
                  <div className="mobile-menu-logo-glow" />
                </div>
                <div>
                  <span className="mobile-menu-brand">SESI</span>
                  <span className="mobile-menu-brand-sub gold-text">Air Braiding</span>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="mobile-menu-close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu-hours">
              <div className="mobile-hours-item">
                <Clock size={14} className="mobile-hours-icon" />
                <span>Mon-Fri: 9:00 AM - 8:00 PM</span>
              </div>
              <div className="mobile-hours-divider" />
              <div className="mobile-hours-item">
                <Clock size={14} className="mobile-hours-icon" />
                <span>Sat: 10:00 AM - 6:00 PM</span>
              </div>
              <div className="mobile-hours-divider" />
              <div className="mobile-hours-item">
                <Clock size={14} className="mobile-hours-icon" />
                <span>Sun: Closed</span>
              </div>
            </div>

            <div className="mobile-menu-tagline">
              <span className="mobile-tagline-text">BEAUTY · CONFIDENCE · CULTURE</span>
            </div>

            <div className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`mobile-menu-link ${currentPath === link.path ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="mobile-link-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mobile-link-label">{link.label}</span>
                  <span className="mobile-link-arrow">→</span>
                </Link>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <Link
                to="/book"
                onClick={() => handleLinkClick('/book')}
                className="mobile-book-btn"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <div className="mobile-menu-social">
                <a href="#" className="mobile-social-link">Instagram</a>
                <a href="#" className="mobile-social-link">Facebook</a>
                <a href="#" className="mobile-social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}