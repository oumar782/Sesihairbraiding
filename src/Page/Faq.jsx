import { useState } from 'react';
import { 
  ChevronDown, Calendar, Sparkles, 
  Award, Gem, Heart, Users, Star, 
  MessageCircle, Phone, Mail, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { faqs, images } from '../data/service';
import "./faq.css";

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

export default function Faq() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { number: '50+', label: 'Questions Answered', icon: MessageCircle },
    { number: '98%', label: 'Satisfaction Rate', icon: StarIcon },
    { number: '12K+', label: 'Happy Clients', icon: Users },
    { number: '4.9★', label: 'Rating', icon: StarIcon },
  ];

  const categories = ['All', 'Booking', 'Services', 'Pricing', 'Aftercare', 'About'];

  const filteredFaqs = searchTerm 
    ? faqs.filter(faq => 
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs;

  return (
    <main className="faq-page">
      {/* ============================================
          HERO SECTION - CINEMATIC SPECTACULAR
          ============================================ */}
      <section className="faq-hero">
        <div className="faq-hero-bg-layer" />
        <img 
          src={images.salon6} 
          alt="SESI Air Braiding FAQ" 
          className="faq-hero-img"
        />
        <div className="faq-hero-overlay" />
        <div className="faq-hero-glow-primary" />
        <div className="faq-hero-glow-secondary" />
        
        <div className="faq-hero-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className={`faq-particle faq-particle-${i}`} />
          ))}
        </div>
        
        <div className="faq-hero-ornaments">
          <span className="faq-ornament faq-ornament-1">✦</span>
          <span className="faq-ornament faq-ornament-2">✦</span>
          <span className="faq-ornament faq-ornament-3">✦</span>
          <span className="faq-ornament faq-ornament-4">✦</span>
          <span className="faq-ornament faq-ornament-5">✦</span>
          <span className="faq-ornament faq-ornament-6">✦</span>
        </div>
        
        <div className="faq-hero-content">
          <div className="faq-hero-badge">
            <span className="faq-hero-badge-dot" />
            <span className="faq-hero-badge-text">✦ QUESTIONS · ANSWERS · CLARITY ✦</span>
            <span className="faq-hero-badge-shine" />
          </div>
          
          <div className="faq-hero-title-wrapper">
            <div className="faq-hero-subtitle-line">
              <span className="faq-hero-subtitle-text">Your Questions Answered</span>
            </div>
            <h1 className="faq-hero-title">
              <span className="faq-hero-title-line">Frequently Asked</span>
              <span className="faq-hero-title-line">
                <span className="faq-hero-title-gold">Questions</span>
                <span className="faq-hero-title-glow">✦</span>
              </span>
              <span className="faq-hero-title-underline">
                <span className="faq-hero-title-underline-line" />
              </span>
            </h1>
          </div>
          
          <p className="faq-hero-subtitle">
            Everything you need to know before your visit to SESI Hair Braiding. 
            Find answers to the most common questions about our services.
          </p>
          
          <div className="faq-hero-stats">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="faq-hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <div className="faq-hero-stat-icon">
                    <IconComponent size={16} />
                  </div>
                  <div>
                    <span className="faq-hero-stat-number">{stat.number}</span>
                    <span className="faq-hero-stat-label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="faq-hero-scroll">
          <span className="faq-hero-scroll-text">Explore FAQs</span>
          <div className="faq-hero-scroll-line">
            <div className="faq-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - SPECTACULAR
          ============================================ */}
      <section className="faq-section">
        <div className="faq-section-bg">
          <div className="faq-section-bg-circle" />
          <div className="faq-section-bg-circle" />
          <div className="faq-section-bg-circle" />
        </div>
        
        <div className="faq-section-floating">CLARITY · KNOWLEDGE · TRUST</div>
        <div className="faq-section-pattern" />
        
        <div className="faq-section-content">
          <div className="faq-section-header">
            <div className="faq-section-header-line" />
            <span className="eyebrow gold">FAQ</span>
            <h2 className="faq-section-title">
              Everything You <span className="faq-section-title-gold">Need to Know</span>
            </h2>
            <div className="faq-section-title-line" />
            <p className="faq-section-desc">
              Find answers to the most frequently asked questions about our services, 
              booking, pricing, and more.
            </p>
          </div>

          {/* ===== SEARCH BAR ===== */}
          <div className="faq-search">
            <div className="faq-search-wrapper">
              <input 
                type="text" 
                placeholder="Search questions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="faq-search-input"
              />
              <button className="faq-search-btn">
                <Sparkles size={16} />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* ===== CATEGORY FILTERS ===== */}
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category === 'All' ? '' : category)}
                className={`faq-category-btn ${searchTerm === category || (category === 'All' && searchTerm === '') ? 'active' : ''}`}
              >
                {category === 'All' && <Sparkles size={12} />}
                {category === 'Booking' && <Calendar size={12} />}
                {category === 'Services' && <Gem size={12} />}
                {category === 'Pricing' && <Award size={12} />}
                {category === 'Aftercare' && <Heart size={12} />}
                {category === 'About' && <Users size={12} />}
                {category}
              </button>
            ))}
          </div>

          {/* ===== FAQ LIST ===== */}
          <div className="faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="faq-item"
                  style={{ animationDelay: `${(i % 5) * 0.05}s` }}
                >
                  <button 
                    onClick={() => setOpen(open === i ? null : i)} 
                    className="faq-question"
                  >
                    <div className="faq-question-left">
                      <span className="faq-question-number">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="faq-question-text">{faq.q}</span>
                    </div>
                    <div className={`faq-question-icon ${open === i ? 'open' : ''}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <div 
                    className="faq-answer-wrap" 
                    style={{ maxHeight: open === i ? '300px' : '0' }}
                  >
                    <div className="faq-answer-content">
                      <div className="faq-answer-line" />
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="faq-empty">
                <MessageCircle size={48} />
                <h3>No questions found</h3>
                <p>Try adjusting your search or filter</p>
              </div>
            )}
          </div>

          {/* ===== CONTACT CTA ===== */}
          <div className="faq-contact">
            <div className="faq-contact-content">
              <div className="faq-contact-icon">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="faq-contact-title">Still have questions?</h3>
                <p className="faq-contact-desc">
                  We're here to help! Contact us directly for personalized assistance.
                </p>
              </div>
              <button onClick={() => navigate('/contact')} className="faq-contact-btn">
                <span>Contact Us</span>
                <Calendar size={16} />
                <span className="faq-contact-btn-shine" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - SPECTACULAR
          ============================================ */}
      <section className="faq-cta">
        <div className="faq-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="faq-cta-overlay" />
        </div>
        
        <div className="faq-cta-glow" />
        <div className="faq-cta-pattern" />
        
        <div className="faq-cta-content">
          <div className="faq-cta-badge-wrapper">
            <span className="faq-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          
          <h2 className="faq-cta-title">
            Ready to <span className="faq-cta-title-gold">Experience</span> the SESI Difference?
          </h2>
          
          <p className="faq-cta-desc">
            Book your appointment today and discover the art of luxury braiding.
          </p>
          
          <button onClick={() => navigate('/book')} className="faq-cta-btn">
            <span>Book Now</span>
            <Calendar size={18} />
            <span className="faq-cta-btn-shine" />
          </button>
          
          <div className="faq-cta-features">
            <span className="faq-cta-feature">
              <Sparkles size={14} />
              Premium Products
            </span>
            <span className="faq-cta-feature">
              <Clock size={14} />
              Flexible Scheduling
            </span>
            <span className="faq-cta-feature">
              <Award size={14} />
              Award Winning
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}