import { ArrowRight, Clock, Sparkles, Crown, Heart, Users, Star, Award, Gem, Scissors } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { serviceCategories, images } from '../data/service';
import "./service.css";

export default function Services() {
  const navigate = useNavigate();

  const stats = [
    { number: '50+', label: 'Styles Available', icon: Scissors },
    { number: '12K+', label: 'Happy Clients', icon: Users },
    { number: '4.9★', label: 'Average Rating', icon: Star },
    { number: 'Award', label: 'Winning Excellence', icon: Award },
  ];

  const featuredCategories = serviceCategories.slice(0, 3);

  return (
    <main className="services-page">
      {/* ============================================
          HERO SECTION - CINEMATIC EDITION
          ============================================ */}
      <section className="services-hero">
        <img 
          src={images.stylistBraid} 
          alt="SESI Air Braiding Services" 
          className="services-hero-img"
        />
        <div className="services-hero-overlay" />
        <div className="services-hero-glow" />
        <div className="services-hero-glow-secondary" />
        
        <div className="services-hero-particles">
          {[...Array(16)].map((_, i) => (
            <span key={i} className={`services-particle services-particle-${i}`} />
          ))}
        </div>
        
        <div className="services-hero-ornaments">
          <span className="services-ornament services-ornament-1">✦</span>
          <span className="services-ornament services-ornament-2">✦</span>
          <span className="services-ornament services-ornament-3">✦</span>
          <span className="services-ornament services-ornament-4">✦</span>
          <span className="services-ornament services-ornament-5">✦</span>
        </div>
        
        <div className="services-hero-content">
          <div className="services-hero-badge">
            <span className="services-hero-badge-dot" />
            <span className="services-hero-badge-text">✦ LUXURY · PRECISION · ARTISTRY ✦</span>
            <span className="services-hero-badge-line" />
          </div>
          
          <div className="services-hero-title-wrapper">
            <div className="services-hero-subtitle-line">
              <span className="services-hero-subtitle-text">Premium Services</span>
            </div>
            <h1 className="services-hero-title">
              <span className="services-hero-title-line">Luxury Braiding,</span>
              <span className="services-hero-title-line">
                <span className="services-hero-title-gold">Perfected</span>
                <span className="services-hero-title-glow">✦</span>
              </span>
              <span className="services-hero-title-underline" />
            </h1>
          </div>
          
          <p className="services-hero-subtitle">
            Explore our full catalogue of handcrafted braiding services. Each category 
            opens a dedicated page with every variation, gallery, and booking option.
          </p>
          
          <div className="services-hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="services-hero-stat">
                <div className="services-hero-stat-icon">
                  <stat.icon size={18} />
                </div>
                <div>
                  <span className="services-hero-stat-number">{stat.number}</span>
                  <span className="services-hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="services-hero-scroll">
          <span className="services-hero-scroll-text">Explore</span>
          <div className="services-hero-scroll-line">
            <div className="services-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          CATEGORIES SECTION - PREMIUM
          ============================================ */}
      <section className="services-categories">
        <div className="services-categories-floating">STYLE · ELEGANCE · EXCELLENCE</div>
        <div className="services-categories-bg-pattern" />
        
        <div className="services-categories-content">
          <div className="services-categories-header">
            <div className="services-categories-header-line" />
            <span className="eyebrow gold">Categories</span>
            <h2 className="services-categories-title">
              Choose Your <span className="services-categories-title-gold">Style</span>
            </h2>
            <div className="services-categories-title-line" />
            <p className="services-categories-desc">
              From timeless individual braids to bohemian knotless, every style is 
              crafted by master braiders with premium care.
            </p>
          </div>
          
          <div className="services-categories-grid">
            {serviceCategories.map((cat, i) => (
              <div 
                key={cat.slug} 
                onClick={() => navigate(`/services/${cat.slug}`)} 
                className="services-category-card"
                style={{ animationDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="services-category-img-wrap">
                  <img src={cat.image} alt={cat.name} className="services-category-img" />
                  <div className="services-category-overlay" />
                  <div className="services-category-shine" />
                  
                  <div className="services-category-badge">
                    <span className="services-category-badge-icon">✦</span>
                    <span className="services-category-badge-text">From {cat.startingPrice}</span>
                  </div>
                  
                  {cat.popular && (
                    <div className="services-category-popular">
                      <Sparkles size={12} />
                      <span>Most Popular</span>
                    </div>
                  )}
                  
                  <div className="services-category-info">
                    <p className="services-category-tagline">{cat.tagline}</p>
                    <h3 className="services-category-name">{cat.name}</h3>
                  </div>
                </div>
                
                <div className="services-category-footer">
                  <div className="services-category-footer-left">
                    <div className="services-category-variations">
                      <Sparkles size={14} className="services-category-variations-icon" />
                      <span>{cat.variations.length} variations</span>
                    </div>
                    <div className="services-category-duration">
                      <Clock size={14} />
                      <span>{cat.duration || '2-4 hrs'}</span>
                    </div>
                  </div>
                  <span className="services-category-explore">
                    Explore 
                    <ArrowRight size={14} className="services-category-arrow" />
                  </span>
                </div>
                
                <div className="services-category-glow" />
                <div className="services-category-number">{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED SECTION
          ============================================ */}
      <section className="services-featured">
        <div className="services-featured-bg" />
        <div className="services-featured-content">
          <div className="services-featured-header">
            <span className="eyebrow gold">Featured</span>
            <h2 className="services-featured-title">
              Most <span className="services-featured-title-gold">Popular</span> Styles
            </h2>
          </div>
          
          <div className="services-featured-grid">
            {featuredCategories.map((cat, i) => (
              <div key={i} className="services-featured-card">
                <div className="services-featured-card-img">
                  <img src={cat.image} alt={cat.name} />
                  <div className="services-featured-card-overlay" />
                </div>
                <div className="services-featured-card-info">
                  <h4>{cat.name}</h4>
                  <p>{cat.tagline}</p>
                  <button onClick={() => navigate(`/services/${cat.slug}`)}>
                    View Styles <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - ULTRA LUXURY
          ============================================ */}
      <section className="services-cta">
        <div className="services-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="services-cta-overlay" />
        </div>
        <div className="services-cta-glow" />
        <div className="services-cta-pattern" />
        
        <div className="services-cta-content">
          <div className="services-cta-badge-wrapper">
            <span className="services-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          <h2 className="services-cta-title">
            Ready to Transform <br />
            <span className="services-cta-title-gold">Your Look?</span>
          </h2>
          <p className="services-cta-desc">
            Book your appointment today and experience the SESI Air Braiding difference.
          </p>
          <button onClick={() => navigate('/book')} className="services-cta-btn">
            <span>Book Now</span>
            <ArrowRight size={18} />
            <span className="services-cta-btn-shine" />
          </button>
          <div className="services-cta-features">
            <span className="services-cta-feature">
              <Gem size={14} />
              Premium Products
            </span>
            <span className="services-cta-feature">
              <Clock size={14} />
              Flexible Scheduling
            </span>
            <span className="services-cta-feature">
              <Crown size={14} />
              Award Winning
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}