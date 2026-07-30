import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Grid, Sparkles, Camera, Image, Heart, ArrowRight } from 'lucide-react';
import { galleryImages, images } from '../data/service';
import "./gallery.css";

const filters = [
  'All', 'Women', 'Men', 'Kids', 'Boho', 'Knotless', 
  'Locs', 'Twist', 'Cornrows', 'Box Braids', 'French Curl'
];

export default function Gallery() {
  const navigate = useNavigate();
  const [active, setActive] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = galleryImages.filter((img) => {
    if (active === 'All') return true;
    return img.category === active || img.gender === active;
  });

  const stats = [
    { number: '200+', label: 'Styles Showcased' },
    { number: '50+', label: 'Categories' },
    { number: '4.9★', label: 'Client Rating' },
  ];

  return (
    <main className="gallery-page">
      {/* ============================================
          HERO SECTION - CINEMATIC EDITION
          ============================================ */}
      <section className="gallery-hero">
        <img 
          src={images.boxBraidsOrange} 
          alt="SESI Air Braiding Gallery" 
          className="gallery-hero-img"
        />
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-glow" />
        <div className="gallery-hero-glow-secondary" />
        
        <div className="gallery-hero-particles">
          {[...Array(14)].map((_, i) => (
            <span key={i} className={`gallery-particle gallery-particle-${i}`} />
          ))}
        </div>
        
        <div className="gallery-hero-ornaments">
          <span className="gallery-ornament gallery-ornament-1">✦</span>
          <span className="gallery-ornament gallery-ornament-2">✦</span>
          <span className="gallery-ornament gallery-ornament-3">✦</span>
          <span className="gallery-ornament gallery-ornament-4">✦</span>
          <span className="gallery-ornament gallery-ornament-5">✦</span>
        </div>
        
        <div className="gallery-hero-content">
          <div className="gallery-hero-badge">
            <span className="gallery-hero-badge-dot" />
            <span className="gallery-hero-badge-text">✦ GALLERY · INSPIRATION · ARTISTRY ✦</span>
            <span className="gallery-hero-badge-line" />
          </div>
          
          <div className="gallery-hero-title-wrapper">
            <div className="gallery-hero-subtitle-line">
              <span className="gallery-hero-subtitle-text">Our Portfolio</span>
            </div>
            <h1 className="gallery-hero-title">
              <span className="gallery-hero-title-line">Our Work,</span>
              <span className="gallery-hero-title-line">
                <span className="gallery-hero-title-gold">Our Pride</span>
                <span className="gallery-hero-title-glow">✦</span>
              </span>
              <span className="gallery-hero-title-underline" />
            </h1>
          </div>
          
          <p className="gallery-hero-subtitle">
            A curated collection of handcrafted braids. Filter by style to find 
            your inspiration for your next look.
          </p>
          
          <div className="gallery-hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="gallery-hero-stat">
                <div className="gallery-hero-stat-icon">
                  {i === 0 && <Image size={16} />}
                  {i === 1 && <Grid size={16} />}
                  {i === 2 && <Sparkles size={16} />}
                </div>
                <div>
                  <span className="gallery-hero-stat-number">{stat.number}</span>
                  <span className="gallery-hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="gallery-hero-scroll">
          <span className="gallery-hero-scroll-text">Explore</span>
          <div className="gallery-hero-scroll-line">
            <div className="gallery-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          GALLERY SECTION - PREMIUM MASONRY
          ============================================ */}
      <section className="gallery-section">
        <div className="gallery-section-floating">STYLE · ELEGANCE · EXCELLENCE</div>
        <div className="gallery-section-bg-pattern" />
        
        <div className="gallery-section-content">
          <div className="gallery-section-header">
            <div className="gallery-section-header-line" />
            <span className="eyebrow gold">Gallery</span>
            <h2 className="gallery-section-title">
              Find Your <span className="gallery-section-title-gold">Inspiration</span>
            </h2>
            <div className="gallery-section-title-line" />
            <p className="gallery-section-desc">
              Browse through our collection of stunning braiding styles. 
              Each image represents the artistry and precision of our master stylists.
            </p>
          </div>
          
          {/* ===== FILTER PILLS ===== */}
          <div className="gallery-filters-wrapper">
            <div className="gallery-filters-scroll">
              <div className="gallery-filters">
                {filters.map((f) => (
                  <button 
                    key={f} 
                    onClick={() => setActive(f)} 
                    className={`gallery-filter ${active === f ? 'active' : ''}`}
                  >
                    {f === 'All' && <Sparkles size={12} />}
                    {f}
                    {active === f && <span className="gallery-filter-active-dot" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="gallery-filter-count">
              <Camera size={14} />
              <span>{filtered.length} photos</span>
            </div>
          </div>
          
          {/* ===== MASONRY GRID ===== */}
          <div className="gallery-masonry">
            {filtered.map((img, i) => (
              <div 
                key={i} 
                className="gallery-masonry-item"
                onMouseEnter={() => setHoveredId(i)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${(i % 6) * 0.05}s` }}
              >
                <div className="gallery-masonry-item-inner">
                  <img src={img.url} alt={`${img.category} - ${img.gender}`} />
                  <div className="gallery-masonry-overlay" />
                  <div className="gallery-masonry-shine" />
                  
                  <div className="gallery-masonry-info">
                    <div className="gallery-masonry-tags">
                      <span className="gallery-masonry-tag">{img.category}</span>
                      <span className="gallery-masonry-tag">{img.gender}</span>
                    </div>
                    <h3 className="gallery-masonry-title">{img.title || img.category}</h3>
                    <button 
                      className="gallery-masonry-view"
                      onClick={() => navigate(`/services/${img.category?.toLowerCase() || ''}`)}
                    >
                      <span>View Style</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                  
                  <div className="gallery-masonry-heart">
                    <Heart size={16} />
                  </div>
                  
                  <div className="gallery-masonry-number">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="gallery-empty">
              <Image size={48} />
              <h3>No results found</h3>
              <p>Try adjusting your filter to see more styles</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          CTA SECTION - ULTRA LUXURY
          ============================================ */}
      <section className="gallery-cta">
        <div className="gallery-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="gallery-cta-overlay" />
        </div>
        <div className="gallery-cta-glow" />
        <div className="gallery-cta-pattern" />
        
        <div className="gallery-cta-content">
          <div className="gallery-cta-badge-wrapper">
            <span className="gallery-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          <h2 className="gallery-cta-title">
            Found Your <span className="gallery-cta-title-gold">Style?</span>
          </h2>
          <p className="gallery-cta-desc">
            Book your appointment today and let our master stylists bring your 
            dream braids to life.
          </p>
          <button onClick={() => navigate('/book')} className="gallery-cta-btn">
            <span>Book Now</span>
            <ArrowRight size={18} />
            <span className="gallery-cta-btn-shine" />
          </button>
          <div className="gallery-cta-features">
            <span className="gallery-cta-feature">
              <Sparkles size={14} />
              Premium Products
            </span>
            <span className="gallery-cta-feature">
              <Camera size={14} />
              Style Consultation
            </span>
            <span className="gallery-cta-feature">
              <Heart size={14} />
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}