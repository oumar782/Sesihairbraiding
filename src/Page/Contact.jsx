import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Sparkles, Award, Gem, Heart, Users, 
  Star, MessageCircle, CheckCircle, AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { images } from '../data/service';

import "./contact.css"
// ===== ICÔNE STAR PERSONNALISÉE =====
const StarIcon = ({ size = 16, className = '', fill = 'none' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { error } = await supabase.from('contacts').insert({
        name: form.name, email: form.email, phone: form.phone, message: form.message,
      });
      if (error) throw error;
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const info = [
    { Icon: MapPin, label: 'Visit Us', value: '1234 Broad Street, Philadelphia, PA 19121', detail: 'Find us in the heart of the city' },
    { Icon: Phone, label: 'Call Us', value: '(215) 555-0192', detail: 'Available during business hours' },
    { Icon: Mail, label: 'Email Us', value: 'hello@sesiairbraiding.com', detail: 'We respond within 24 hours' },
    { Icon: Clock, label: 'Hours', value: 'Tue–Sat: 9AM–7PM · Sun: 10AM–5PM · Mon: Closed', detail: 'Walk-ins welcome!' },
  ];

  const stats = [
    { number: '12K+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Satisfaction', icon: StarIcon },
    { number: '4.9★', label: 'Rating', icon: StarIcon },
    { number: '50+', label: 'Expert Stylists', icon: Award },
  ];

  return (
    <main className="contact-page">
      {/* ============================================
          HERO SECTION - CINEMATIC SPECTACULAR
          ============================================ */}
      <section className="contact-hero">
        <div className="contact-hero-bg-layer" />
        <img 
          src={images.salon4} 
          alt="SESI Air Braiding Contact" 
          className="contact-hero-img"
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-glow-primary" />
        <div className="contact-hero-glow-secondary" />
        
        <div className="contact-hero-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className={`contact-particle contact-particle-${i}`} />
          ))}
        </div>
        
        <div className="contact-hero-ornaments">
          <span className="contact-ornament contact-ornament-1">✦</span>
          <span className="contact-ornament contact-ornament-2">✦</span>
          <span className="contact-ornament contact-ornament-3">✦</span>
          <span className="contact-ornament contact-ornament-4">✦</span>
          <span className="contact-ornament contact-ornament-5">✦</span>
          <span className="contact-ornament contact-ornament-6">✦</span>
        </div>
        
        <div className="contact-hero-content">
          <div className="contact-hero-badge">
            <span className="contact-hero-badge-dot" />
            <span className="contact-hero-badge-text">✦ CONNECT · COMMUNICATE · CREATE ✦</span>
            <span className="contact-hero-badge-shine" />
          </div>
          
          <div className="contact-hero-title-wrapper">
            <div className="contact-hero-subtitle-line">
              <span className="contact-hero-subtitle-text">Get in Touch</span>
            </div>
            <h1 className="contact-hero-title">
              <span className="contact-hero-title-line">Let's</span>
              <span className="contact-hero-title-line">
                <span className="contact-hero-title-gold">Connect</span>
                <span className="contact-hero-title-glow">✦</span>
              </span>
              <span className="contact-hero-title-underline">
                <span className="contact-hero-title-underline-line" />
              </span>
            </h1>
          </div>
          
          <p className="contact-hero-subtitle">
            Have a question or ready to book? We're here to help. Reach out and 
            let's start your braiding journey.
          </p>
          
          <div className="contact-hero-stats">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="contact-hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <div className="contact-hero-stat-icon">
                    <IconComponent size={16} />
                  </div>
                  <div>
                    <span className="contact-hero-stat-number">{stat.number}</span>
                    <span className="contact-hero-stat-label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="contact-hero-scroll">
          <span className="contact-hero-scroll-text">Reach Out</span>
          <div className="contact-hero-scroll-line">
            <div className="contact-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION - SPECTACULAR
          ============================================ */}
      <section className="contact-section">
        <div className="contact-section-bg">
          <div className="contact-section-bg-circle" />
          <div className="contact-section-bg-circle" />
          <div className="contact-section-bg-circle" />
        </div>
        
        <div className="contact-section-floating">CONNECT · COMMUNICATE · CREATE</div>
        <div className="contact-section-pattern" />
        
        <div className="contact-section-content">
          <div className="contact-section-header">
            <div className="contact-section-header-line" />
            <span className="eyebrow gold">Contact</span>
            <h2 className="contact-section-title">
              We'd Love to <span className="contact-section-title-gold">Hear From You</span>
            </h2>
            <div className="contact-section-title-line" />
            <p className="contact-section-desc">
              Whether you have a question about our services, want to book an appointment, 
              or just want to say hello — we're here for you.
            </p>
          </div>

          <div className="contact-grid">
            {/* ===== INFO CARDS ===== */}
            <div className="contact-info">
              <div className="contact-info-header">
                <h3 className="contact-info-title">Get in Touch</h3>
                <p className="contact-info-desc">
                  Reach out through any of these channels and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="contact-info-list">
                {info.map((item, i) => (
                  <div key={i} className="contact-info-item" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                    <div className="contact-info-icon">
                      <item.Icon size={20} />
                    </div>
                    <div className="contact-info-content">
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                      <span className="contact-info-detail">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== CONTACT FORM ===== */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-header">
                  <div className="contact-form-badge">
                    <MessageCircle size={14} />
                    <span>Send a Message</span>
                  </div>
                  <h3 className="contact-form-title">Let's Talk</h3>
                  <p className="contact-form-desc">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                {status === 'sent' && (
                  <div className="contact-form-alert success">
                    <CheckCircle size={18} />
                    <span>Message sent! We'll be in touch soon.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="contact-form-alert error">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your full name" 
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    className="contact-form-input"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email address" 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    className="contact-form-input"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    value={form.phone} 
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                    className="contact-form-input"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label">Your Message</label>
                  <textarea 
                    required 
                    rows={5} 
                    placeholder="Tell us how we can help you..." 
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    className="contact-form-textarea"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'sending'} 
                  className="contact-form-btn"
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                  <span className="contact-form-btn-shine" />
                </button>
                
                <div className="contact-form-footer">
                  <span className="contact-form-footer-item">
                    <Sparkles size={12} />
                    We respond within 24 hours
                  </span>
                  <span className="contact-form-footer-item">
                    <Heart size={12} />
                    Your privacy matters
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          MAP SECTION
          ============================================ */}
      <section className="contact-map">
        <div className="contact-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.143909065463!2d-75.167678!3d39.952583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7b0c7b0c7b0%3A0x7b0c7b0c7b0c7b0!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SESI Air Braiding Location"
          />
          <div className="contact-map-overlay">
            <div className="contact-map-content">
              <div className="contact-map-badge">
                <MapPin size={14} />
                <span>Find Us</span>
              </div>
              <h3 className="contact-map-title">Visit Our Salon</h3>
              <p className="contact-map-address">1234 Broad Street, Philadelphia, PA 19121</p>
              <button onClick={() => navigate('/book')} className="contact-map-btn">
                <span>Book Now</span>
                <Sparkles size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - SPECTACULAR
          ============================================ */}
      <section className="contact-cta">
        <div className="contact-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="contact-cta-overlay" />
        </div>
        
        <div className="contact-cta-glow" />
        <div className="contact-cta-pattern" />
        
        <div className="contact-cta-content">
          <div className="contact-cta-badge-wrapper">
            <span className="contact-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          
          <h2 className="contact-cta-title">
            Ready to <span className="contact-cta-title-gold">Transform</span> Your Hair?
          </h2>
          
          <p className="contact-cta-desc">
            Book your appointment today and experience the SESI Air Braiding difference.
          </p>
          
          <button onClick={() => navigate('/book')} className="contact-cta-btn">
            <span>Book Now</span>
            <Sparkles size={18} />
            <span className="contact-cta-btn-shine" />
          </button>
          
          <div className="contact-cta-features">
            <span className="contact-cta-feature">
              <Sparkles size={14} />
              Premium Products
            </span>
            <span className="contact-cta-feature">
              <Clock size={14} />
              Flexible Scheduling
            </span>
            <span className="contact-cta-feature">
              <Award size={14} />
              Award Winning
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}