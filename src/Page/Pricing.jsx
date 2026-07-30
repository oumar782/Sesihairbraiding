import { useState, useEffect } from 'react';
import { 
  ArrowRight, Clock, Sparkles, Crown, Heart, Users, 
  Star, Award, Gem, Scissors, Check, Calendar, 
  Coffee, Gift, Shield, Zap, Infinity, Diamond 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { serviceCategories, images } from '../data/service';
import './pricing.css'

export default function Pricing() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0]?.slug || '');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = serviceCategories.findIndex(c => c.slug === selectedCategory);
      const nextIndex = (currentIndex + 1) % serviceCategories.length;
      setSelectedCategory(serviceCategories[nextIndex].slug);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedCategory]);

  const stats = [
    { number: '50+', label: 'Luxury Styles', icon: Scissors, color: '#C9A227' },
    { number: '12K+', label: 'Happy Clients', icon: Users, color: '#E8D48B' },
    { number: '4.9★', label: 'Rating', icon: Star, color: '#C9A227' },
    { number: '98%', label: 'Satisfaction', icon: Award, color: '#E8D48B' },
  ];

  return (
    <main className="pricing-page">
      {/* ============================================
          HERO SECTION - CINEMATIC MASTERPIECE
          ============================================ */}
      <section className="pricing-hero">
        <div className="pricing-hero-bg-layer" />
        <img 
          src={images.boxBraidsFoliage} 
          alt="SESI Air Braiding Luxury Pricing" 
          className="pricing-hero-img"
        />
        <div className="pricing-hero-overlay" />
        <div className="pricing-hero-glow-primary" />
        <div className="pricing-hero-glow-secondary" />
        <div className="pricing-hero-glow-tertiary" />
        
        <div className="pricing-hero-particles">
          {[...Array(24)].map((_, i) => (
            <span key={i} className={`pricing-particle pricing-particle-${i}`} />
          ))}
        </div>
        
        <div className="pricing-hero-ornaments">
          <span className="pricing-ornament pricing-ornament-1">✦</span>
          <span className="pricing-ornament pricing-ornament-2">✦</span>
          <span className="pricing-ornament pricing-ornament-3">✦</span>
          <span className="pricing-ornament pricing-ornament-4">✦</span>
          <span className="pricing-ornament pricing-ornament-5">✦</span>
          <span className="pricing-ornament pricing-ornament-6">✦</span>
          <span className="pricing-ornament pricing-ornament-7">✦</span>
          <span className="pricing-ornament pricing-ornament-8">✦</span>
        </div>
        
        <div className="pricing-hero-content">
          <div className="pricing-hero-badge">
            <span className="pricing-hero-badge-dot" />
            <span className="pricing-hero-badge-text">✦ LUXURY · VALUE · EXCELLENCE ✦</span>
            <span className="pricing-hero-badge-line" />
            <span className="pricing-hero-badge-shine" />
          </div>
          
          <div className="pricing-hero-title-wrapper">
            <div className="pricing-hero-subtitle-line">
              <span className="pricing-hero-subtitle-text">Investment in You</span>
            </div>
            <h1 className="pricing-hero-title">
              <span className="pricing-hero-title-line">Transparent</span>
              <span className="pricing-hero-title-line">
                <span className="pricing-hero-title-gold">Luxury Pricing</span>
                <span className="pricing-hero-title-glow">✦</span>
              </span>
              <span className="pricing-hero-title-underline">
                <span className="pricing-hero-title-underline-line" />
              </span>
            </h1>
          </div>
          
          <p className="pricing-hero-subtitle">
            Every price reflects the artistry, time, and premium care behind your braids. 
            No hidden fees, just exceptional quality.
          </p>
          
          <div className="pricing-hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="pricing-hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                <div className="pricing-hero-stat-icon" style={{ borderColor: stat.color }}>
                  <stat.icon size={16} style={{ color: stat.color }} />
                </div>
                <div>
                  <span className="pricing-hero-stat-number">{stat.number}</span>
                  <span className="pricing-hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pricing-hero-features">
            <span className="pricing-hero-feature">
              <Gift size={12} />
              Free Consultation
            </span>
            <span className="pricing-hero-feature">
              <Clock size={12} />
              Flexible Scheduling
            </span>
            <span className="pricing-hero-feature">
              <Shield size={12} />
              Premium Products
            </span>
          </div>
        </div>
        
        <div className="pricing-hero-scroll">
          <span className="pricing-hero-scroll-text">Explore Pricing</span>
          <div className="pricing-hero-scroll-line">
            <div className="pricing-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING SECTION - SPECTACULAR
          ============================================ */}
      <section className="pricing-section">
        <div className="pricing-section-bg">
          <div className="pricing-section-bg-circle" />
          <div className="pricing-section-bg-circle" />
          <div className="pricing-section-bg-circle" />
        </div>
        
        <div className="pricing-section-floating">VALUE · QUALITY · ARTISTRY</div>
        <div className="pricing-section-pattern" />
        
        <div className="pricing-section-content">
          <div className="pricing-section-header">
            <div className="pricing-section-header-line" />
            <span className="eyebrow gold">Pricing</span>
            <h2 className="pricing-section-title">
              Investment in <span className="pricing-section-title-gold">Excellence</span>
            </h2>
            <div className="pricing-section-title-line" />
            <p className="pricing-section-desc">
              Transparent pricing for premium craftsmanship. Each style is priced 
              based on complexity, time, and expertise.
            </p>
          </div>
          
          {/* ===== CATEGORY NAV - CAROUSEL STYLE ===== */}
          <div className="pricing-category-nav">
            <div className="pricing-category-nav-track">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`pricing-category-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                >
                  <span className="pricing-category-btn-number">
                    {String(serviceCategories.indexOf(cat) + 1).padStart(2, '0')}
                  </span>
                  <span className="pricing-category-btn-name">{cat.name}</span>
                  <span className="pricing-category-btn-icon">→</span>
                  {selectedCategory === cat.slug && (
                    <span className="pricing-category-btn-glow" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* ===== PRICING GRID - SPECTACULAR ===== */}
          {serviceCategories.map((cat, idx) => (
            <div 
              key={cat.slug} 
              className={`pricing-category-section ${selectedCategory === cat.slug ? 'active' : ''}`}
            >
              <div className="pricing-category-header">
                <div className="pricing-category-header-left">
                  <span className="pricing-category-tagline">{cat.tagline}</span>
                  <h3 className="pricing-category-name">{cat.name}</h3>
                  <p className="pricing-category-desc">
                    <span className="pricing-category-desc-highlight">
                      {cat.variations.length} styles
                    </span>
                    <span className="pricing-category-desc-separator">·</span>
                    Starting from 
                    <span className="pricing-category-desc-price">{cat.startingPrice}</span>
                  </p>
                </div>
                <button 
                  onClick={() => navigate(`/services/${cat.slug}`)} 
                  className="pricing-category-view"
                >
                  <span>View All Styles</span>
                  <ArrowRight size={14} className="pricing-category-view-icon" />
                </button>
              </div>
              
              <div className="pricing-grid">
                {cat.variations.map((v, i) => (
                  <div 
                    key={v.name} 
                    className={`pricing-card ${i === 0 ? 'featured' : ''}`}
                    onMouseEnter={() => setHoveredCard(`${cat.slug}-${i}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ animationDelay: `${(i % 3) * 0.08}s` }}
                  >
                    <div className="pricing-card-border" />
                    
                    <div className="pricing-card-img-wrap">
                      <img src={v.image} alt={v.name} className="pricing-card-img" />
                      <div className="pricing-card-overlay" />
                      <div className="pricing-card-shine" />
                      
                      {i === 0 && (
                        <div className="pricing-card-popular">
                          <Sparkles size={10} />
                          <span>Most Popular</span>
                          <div className="pricing-card-popular-shine" />
                        </div>
                      )}
                      
                      {i === 1 && (
                        <div className="pricing-card-bestseller">
                          <Crown size={10} />
                          <span>Best Seller</span>
                        </div>
                      )}
                      
                      <div className="pricing-card-badge">
                        <span className="pricing-card-badge-currency">$</span>
                        <span className="pricing-card-badge-price">{v.price.replace('$', '').replace('From ', '')}</span>
                        <span className="pricing-card-badge-period">/session</span>
                      </div>
                      
                      <div className="pricing-card-number">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <div className="pricing-card-body">
                      <h4 className="pricing-card-name">{v.name}</h4>
                      <div className="pricing-card-details">
                        <div className="pricing-card-detail">
                          <Clock size={14} />
                          <span>{v.duration}</span>
                        </div>
                        {v.includes && (
                          <div className="pricing-card-detail">
                            <Check size={14} />
                            <span>{v.includes}</span>
                          </div>
                        )}
                        <div className="pricing-card-detail">
                          <Sparkles size={14} />
                          <span>Premium products</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigate(`/book?service=${encodeURIComponent(cat.name + ' — ' + v.name)}`)} 
                        className="pricing-card-book"
                      >
                        <span>Book Now</span>
                        <ArrowRight size={14} className="pricing-card-book-icon" />
                        <span className="pricing-card-book-shine" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          VIP SECTION - ULTRA LUXURY
          ============================================ */}
      <section className="pricing-vip">
        <div className="pricing-vip-bg">
          <div className="pricing-vip-bg-glow" />
          <div className="pricing-vip-bg-glow" />
        </div>
        <div className="pricing-vip-pattern" />
        
        <div className="pricing-vip-content">
          <div className="pricing-vip-header">
            <span className="eyebrow gold">Exclusive</span>
            <h2 className="pricing-vip-title">
              <span className="pricing-vip-title-icon">👑</span>
              VIP <span className="pricing-vip-title-gold">Experience</span>
            </h2>
            <p className="pricing-vip-desc">
              Elevate your salon experience with our premium VIP services.
            </p>
          </div>
          
          <div className="pricing-vip-grid">
            <div className="pricing-vip-card">
              <div className="pricing-vip-card-badge">
                <Crown size={16} />
                <span>Premium</span>
              </div>
              <h3 className="pricing-vip-card-title">Gold Package</h3>
              <div className="pricing-vip-card-price">
                <span className="pricing-vip-card-currency">$</span>
                350
                <span className="pricing-vip-card-period">/session</span>
              </div>
              <ul className="pricing-vip-card-features">
                <li><Check size={16} /> <span>Priority booking</span></li>
                <li><Check size={16} /> <span>Dedicated master stylist</span></li>
                <li><Check size={16} /> <span>Premium hair products</span></li>
                <li><Check size={16} /> <span>Extended consultation</span></li>
                <li><Check size={16} /> <span>Complimentary refreshments</span></li>
              </ul>
              <button onClick={() => navigate('/book')} className="pricing-vip-card-btn">
                <span>Book VIP</span>
                <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="pricing-vip-card pricing-vip-card-highlighted">
              <div className="pricing-vip-card-badge highlighted">
                <Diamond size={16} />
                <span>Ultimate</span>
              </div>
              <h3 className="pricing-vip-card-title">Platinum Package</h3>
              <div className="pricing-vip-card-price highlighted">
                <span className="pricing-vip-card-currency">$</span>
                550
                <span className="pricing-vip-card-period">/session</span>
              </div>
              <ul className="pricing-vip-card-features">
                <li><Check size={16} /> <span>All Gold benefits</span></li>
                <li><Check size={16} /> <span>Private VIP suite</span></li>
                <li><Check size={16} /> <span>Champagne service</span></li>
                <li><Check size={16} /> <span>Custom style design</span></li>
                <li><Check size={16} /> <span>Take-home care kit</span></li>
              </ul>
              <button onClick={() => navigate('/book')} className="pricing-vip-card-btn highlighted">
                <span>Book VIP</span>
                <ArrowRight size={14} />
                <span className="pricing-vip-card-btn-shine" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - SPECTACULAR
          ============================================ */}
      <section className="pricing-cta">
        <div className="pricing-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="pricing-cta-overlay" />
        </div>
        
        <div className="pricing-cta-glow" />
        <div className="pricing-cta-glow-secondary" />
        <div className="pricing-cta-pattern" />
        
        <div className="pricing-cta-content">
          <div className="pricing-cta-badge-wrapper">
            <span className="pricing-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          
          <h2 className="pricing-cta-title">
            Ready to <span className="pricing-cta-title-gold">Invest</span> in You?
          </h2>
          
          <p className="pricing-cta-desc">
            Book your appointment today and experience the SESI Air Braiding difference.
          </p>
          
          <div className="pricing-cta-buttons">
            <button onClick={() => navigate('/book')} className="pricing-cta-btn primary">
              <span>Book Now</span>
              <ArrowRight size={18} />
              <span className="pricing-cta-btn-shine" />
            </button>
            <button onClick={() => navigate('/services')} className="pricing-cta-btn secondary">
              <span>Explore Services</span>
            </button>
          </div>
          
          <div className="pricing-cta-features">
            <span className="pricing-cta-feature">
              <Gem size={14} />
              Premium Products
            </span>
            <span className="pricing-cta-feature">
              <Clock size={14} />
              Flexible Scheduling
            </span>
            <span className="pricing-cta-feature">
              <Award size={14} />
              Award Winning
            </span>
            <span className="pricing-cta-feature">
              <Heart size={14} />
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}