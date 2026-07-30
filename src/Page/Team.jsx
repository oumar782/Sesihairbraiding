import { useState } from 'react';
import { 
  Calendar, Star, Award, Heart, Users, 
  Sparkles, Crown, Gem, Scissors 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { team, images } from '../data/service';
import './team.css'
// ===== ICÔNES SOCIALES PERSONNALISÉES =====
const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 16, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 16, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Team() {
  const navigate = useNavigate();
  const [hoveredMember, setHoveredMember] = useState(null);

  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Master Stylists', icon: Users },
    { number: '12K+', label: 'Happy Clients', icon: Heart },
    { number: '4.9★', label: 'Client Rating', icon: Star },
  ];

  return (
    <main className="team-page">
      {/* ============================================
          HERO SECTION - CINEMATIC SPECTACULAR
          ============================================ */}
      <section className="team-hero">
        <div className="team-hero-bg-layer" />
        <img 
          src={images.stylistBraid} 
          alt="SESI Air Braiding Team" 
          className="team-hero-img"
        />
        <div className="team-hero-overlay" />
        <div className="team-hero-glow-primary" />
        <div className="team-hero-glow-secondary" />
        
        <div className="team-hero-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className={`team-particle team-particle-${i}`} />
          ))}
        </div>
        
        <div className="team-hero-ornaments">
          <span className="team-ornament team-ornament-1">✦</span>
          <span className="team-ornament team-ornament-2">✦</span>
          <span className="team-ornament team-ornament-3">✦</span>
          <span className="team-ornament team-ornament-4">✦</span>
          <span className="team-ornament team-ornament-5">✦</span>
          <span className="team-ornament team-ornament-6">✦</span>
        </div>
        
        <div className="team-hero-content">
          <div className="team-hero-badge">
            <span className="team-hero-badge-dot" />
            <span className="team-hero-badge-text">✦ MASTERS · ARTISTS · CRAFTSMEN ✦</span>
            <span className="team-hero-badge-shine" />
          </div>
          
          <div className="team-hero-title-wrapper">
            <div className="team-hero-subtitle-line">
              <span className="team-hero-subtitle-text">Meet the Masters</span>
            </div>
            <h1 className="team-hero-title">
              <span className="team-hero-title-line">Master Braiders,</span>
              <span className="team-hero-title-line">
                <span className="team-hero-title-gold">Artists All</span>
                <span className="team-hero-title-glow">✦</span>
              </span>
              <span className="team-hero-title-underline">
                <span className="team-hero-title-underline-line" />
              </span>
            </h1>
          </div>
          
          <p className="team-hero-subtitle">
            Meet the skilled hands behind every beautiful braid at SESI Air Braiding. 
            Each stylist brings unique expertise and passion to the craft.
          </p>
          
          <div className="team-hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="team-hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <div className="team-hero-stat-icon">
                  <stat.icon size={16} />
                </div>
                <div>
                  <span className="team-hero-stat-number">{stat.number}</span>
                  <span className="team-hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="team-hero-scroll">
          <span className="team-hero-scroll-text">Meet the Team</span>
          <div className="team-hero-scroll-line">
            <div className="team-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM SECTION - SPECTACULAR
          ============================================ */}
      <section className="team-section">
        <div className="team-section-bg">
          <div className="team-section-bg-circle" />
          <div className="team-section-bg-circle" />
        </div>
        
        <div className="team-section-floating">EXCELLENCE · PASSION · ARTISTRY</div>
        <div className="team-section-pattern" />
        
        <div className="team-section-content">
          <div className="team-section-header">
            <div className="team-section-header-line" />
            <span className="eyebrow gold">Our Team</span>
            <h2 className="team-section-title">
              The <span className="team-section-title-gold">Artisans</span> Behind the Art
            </h2>
            <div className="team-section-title-line" />
            <p className="team-section-desc">
              Each of our master stylists brings years of experience, creativity, 
              and a passion for the art of braiding.
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, i) => (
              <div 
                key={member.name} 
                className="team-card"
                onMouseEnter={() => setHoveredMember(i)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="team-card-inner">
                  <div className="team-card-border" />
                  
                  <div className="team-card-img-wrap">
                    <img src={member.image} alt={member.name} className="team-card-img" />
                    <div className="team-card-overlay" />
                    <div className="team-card-shine" />
                    
                    <div className="team-card-badge">
                      <span className="team-card-badge-number">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <div className="team-card-social">
                      <a href="#" className="team-card-social-link">
                        <InstagramIcon size={14} />
                      </a>
                      <a href="#" className="team-card-social-link">
                        <TwitterIcon size={14} />
                      </a>
                      <a href="#" className="team-card-social-link">
                        <LinkedinIcon size={14} />
                      </a>
                    </div>
                    
                    <div className="team-card-info">
                      <h3 className="team-card-name">{member.name}</h3>
                      <p className="team-card-role">{member.role}</p>
                      <div className="team-card-rating">
                        <Star size={12} fill="#C9A227" color="#C9A227" />
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="team-card-body">
                    <p className="team-card-bio">{member.bio}</p>
                    <div className="team-card-specialties">
                      {member.specialties.map((s) => (
                        <span key={s} className="team-card-specialty">
                          <Sparkles size={10} />
                          {s}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => navigate(`/book?stylist=${encodeURIComponent(member.name)}`)} 
                      className="team-card-book"
                    >
                      <Calendar size={14} />
                      <span>Book with {member.name.split(' ')[0]}</span>
                      <span className="team-card-book-shine" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          VALUES SECTION - TEAM SPIRIT
          ============================================ */}
      <section className="team-values">
        <div className="team-values-bg" />
        <div className="team-values-pattern" />
        
        <div className="team-values-content">
          <div className="team-values-header">
            <span className="eyebrow gold">Our Values</span>
            <h2 className="team-values-title">
              What Makes Us <span className="team-values-title-gold">Different</span>
            </h2>
          </div>
          
          <div className="team-values-grid">
            <div className="team-value-card">
              <div className="team-value-icon">
                <Crown size={28} />
              </div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every braid, ensuring the highest quality results.</p>
            </div>
            <div className="team-value-card">
              <div className="team-value-icon">
                <Heart size={28} />
              </div>
              <h3>Passion</h3>
              <p>We pour our hearts into every style, driven by love for the craft.</p>
            </div>
            <div className="team-value-card">
              <div className="team-value-icon">
                <Users size={28} />
              </div>
              <h3>Community</h3>
              <p>We build lasting relationships with our clients and celebrate their beauty.</p>
            </div>
            <div className="team-value-card">
              <div className="team-value-icon">
                <Gem size={28} />
              </div>
              <h3>Innovation</h3>
              <p>We stay ahead of trends, bringing fresh and creative styles to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - SPECTACULAR
          ============================================ */}
      <section className="team-cta">
        <div className="team-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="team-cta-overlay" />
        </div>
        
        <div className="team-cta-glow" />
        <div className="team-cta-pattern" />
        
        <div className="team-cta-content">
          <div className="team-cta-badge-wrapper">
            <span className="team-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          
          <h2 className="team-cta-title">
            Ready to Meet <span className="team-cta-title-gold">Your Stylist?</span>
          </h2>
          
          <p className="team-cta-desc">
            Book your appointment today and experience the artistry of our master braiders.
          </p>
          
          <button onClick={() => navigate('/book')} className="team-cta-btn">
            <span>Book Now</span>
            <Calendar size={18} />
            <span className="team-cta-btn-shine" />
          </button>
          
          <div className="team-cta-features">
            <span className="team-cta-feature">
              <Sparkles size={14} />
              Master Stylists
            </span>
            <span className="team-cta-feature">
              <Heart size={14} />
              Personalized Care
            </span>
            <span className="team-cta-feature">
              <Award size={14} />
              Award Winning
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}