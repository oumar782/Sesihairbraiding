import { useState } from 'react';
import { 
  ArrowRight, Clock, CalendarDays, 
  Tag, Heart, Eye, BookOpen, Sparkles, 
  TrendingUp, Award, Gem, User, Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts, images } from '../data/service';
import "./blog.css"

// ===== ICÔNES SOCIALES PERSONNALISÉES =====
const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

export default function Blog() {
  const navigate = useNavigate();
  const [hoveredPost, setHoveredPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const stats = [
    { number: '50+', label: 'Articles', icon: BookOpen },
    { number: '12K+', label: 'Readers', icon: Users },
    { number: '4.9★', label: 'Rating', icon: StarIcon },
    { number: '10+', label: 'Categories', icon: Tag },
  ];

  const featuredPost = blogPosts[0];

  return (
    <main className="blog-page">
      {/* ============================================
          HERO SECTION - CINEMATIC SPECTACULAR
          ============================================ */}
      <section className="blog-hero">
        <div className="blog-hero-bg-layer" />
        <img 
          src={images.braidsGreen} 
          alt="SESI Air Braiding Blog" 
          className="blog-hero-img"
        />
        <div className="blog-hero-overlay" />
        <div className="blog-hero-glow-primary" />
        <div className="blog-hero-glow-secondary" />
        
        <div className="blog-hero-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className={`blog-particle blog-particle-${i}`} />
          ))}
        </div>
        
        <div className="blog-hero-ornaments">
          <span className="blog-ornament blog-ornament-1">✦</span>
          <span className="blog-ornament blog-ornament-2">✦</span>
          <span className="blog-ornament blog-ornament-3">✦</span>
          <span className="blog-ornament blog-ornament-4">✦</span>
          <span className="blog-ornament blog-ornament-5">✦</span>
          <span className="blog-ornament blog-ornament-6">✦</span>
        </div>
        
        <div className="blog-hero-content">
          <div className="blog-hero-badge">
            <span className="blog-hero-badge-dot" />
            <span className="blog-hero-badge-text">✦ WISDOM · INSPIRATION · CULTURE ✦</span>
            <span className="blog-hero-badge-shine" />
          </div>
          
          <div className="blog-hero-title-wrapper">
            <div className="blog-hero-subtitle-line">
              <span className="blog-hero-subtitle-text">Our Journal</span>
            </div>
            <h1 className="blog-hero-title">
              <span className="blog-hero-title-line">Braiding Wisdom</span>
              <span className="blog-hero-title-line">
                <span className="blog-hero-title-gold">& Inspiration</span>
                <span className="blog-hero-title-glow">✦</span>
              </span>
              <span className="blog-hero-title-underline">
                <span className="blog-hero-title-underline-line" />
              </span>
            </h1>
          </div>
          
          <p className="blog-hero-subtitle">
            Expert tips, guides, and stories from the world of African hair braiding. 
            Discover the artistry and culture behind every style.
          </p>
          
          <div className="blog-hero-stats">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="blog-hero-stat" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <div className="blog-hero-stat-icon">
                    <IconComponent size={16} />
                  </div>
                  <div>
                    <span className="blog-hero-stat-number">{stat.number}</span>
                    <span className="blog-hero-stat-label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="blog-hero-scroll">
          <span className="blog-hero-scroll-text">Explore Articles</span>
          <div className="blog-hero-scroll-line">
            <div className="blog-hero-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED POST SECTION
          ============================================ */}
      {featuredPost && (
        <section className="blog-featured">
          <div className="blog-featured-content">
            <div className="blog-featured-badge">
              <Sparkles size={14} />
              <span>Featured Article</span>
            </div>
            <div className="blog-featured-grid">
              <div className="blog-featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="blog-featured-image-overlay" />
                <div className="blog-featured-image-shine" />
              </div>
              <div className="blog-featured-info">
                <div className="blog-featured-meta">
                  <span className="blog-featured-category">{featuredPost.category}</span>
                  <span className="blog-featured-date">
                    <CalendarDays size={14} />
                    {featuredPost.date}
                  </span>
                  <span className="blog-featured-read">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="blog-featured-title">{featuredPost.title}</h2>
                <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
                <button 
                  onClick={() => navigate(`/blog/${featuredPost.slug}`)} 
                  className="blog-featured-btn"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                  <span className="blog-featured-btn-shine" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          BLOG SECTION - SPECTACULAR
          ============================================ */}
      <section className="blog-section">
        <div className="blog-section-bg">
          <div className="blog-section-bg-circle" />
          <div className="blog-section-bg-circle" />
          <div className="blog-section-bg-circle" />
        </div>
        
        <div className="blog-section-floating">STYLE · TRENDS · CULTURE</div>
        <div className="blog-section-pattern" />
        
        <div className="blog-section-content">
          <div className="blog-section-header">
            <div className="blog-section-header-line" />
            <span className="eyebrow gold">Articles</span>
            <h2 className="blog-section-title">
              Latest <span className="blog-section-title-gold">Insights</span>
            </h2>
            <div className="blog-section-title-line" />
            <p className="blog-section-desc">
              Explore our collection of articles, guides, and stories about 
              African hair braiding, culture, and beauty.
            </p>
          </div>
          
          {/* ===== FILTER CATEGORIES ===== */}
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`blog-filter ${activeCategory === category ? 'active' : ''}`}
              >
                {category === 'All' && <TrendingUp size={12} />}
                {category}
                {activeCategory === category && (
                  <span className="blog-filter-active-dot" />
                )}
              </button>
            ))}
          </div>
          
          {/* ===== BLOG GRID ===== */}
          <div className="blog-grid">
            {filteredPosts.map((post, i) => (
              <div 
                key={post.slug} 
                className="blog-card"
                onMouseEnter={() => setHoveredPost(i)}
                onMouseLeave={() => setHoveredPost(null)}
                style={{ animationDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="blog-card-inner">
                  <div className="blog-card-border" />
                  
                  <div className="blog-card-img-wrap">
                    <img src={post.image} alt={post.title} className="blog-card-img" />
                    <div className="blog-card-overlay" />
                    <div className="blog-card-shine" />
                    
                    <div className="blog-card-badge">
                      <span className="blog-card-badge-text">{post.category}</span>
                    </div>
                    
                    <div className="blog-card-number">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span className="blog-card-date">
                        <CalendarDays size={12} />
                        {post.date}
                      </span>
                      <span className="blog-card-read">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card-footer">
                      <button 
                        onClick={() => navigate(`/blog/${post.slug}`)} 
                        className="blog-card-readmore"
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} className="blog-card-readmore-icon" />
                      </button>
                      <div className="blog-card-actions">
                        <button className="blog-card-action">
                          <Heart size={14} />
                        </button>
                        <button className="blog-card-action">
                          <Eye size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <BookOpen size={48} />
              <h3>No articles found</h3>
              <p>Try adjusting your category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          NEWSLETTER SECTION
          ============================================ */}
      <section className="blog-newsletter">
        <div className="blog-newsletter-bg">
          <div className="blog-newsletter-glow" />
        </div>
        
        <div className="blog-newsletter-content">
          <div className="blog-newsletter-badge">
            <Sparkles size={14} />
            <span>Stay Inspired</span>
          </div>
          <h2 className="blog-newsletter-title">
            Subscribe to Our <span className="blog-newsletter-title-gold">Newsletter</span>
          </h2>
          <p className="blog-newsletter-desc">
            Get the latest braiding tips, trends, and exclusive content delivered to your inbox.
          </p>
          <div className="blog-newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="blog-newsletter-input"
            />
            <button className="blog-newsletter-btn">
              <span>Subscribe</span>
              <ArrowRight size={16} />
              <span className="blog-newsletter-btn-shine" />
            </button>
          </div>
          <div className="blog-newsletter-features">
            <span className="blog-newsletter-feature">
              <Gem size={14} />
              Exclusive Content
            </span>
            <span className="blog-newsletter-feature">
              <TrendingUp size={14} />
              Latest Trends
            </span>
            <span className="blog-newsletter-feature">
              <Award size={14} />
              Expert Tips
            </span>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - SPECTACULAR
          ============================================ */}
      <section className="blog-cta">
        <div className="blog-cta-bg">
          <img src={images.salon3} alt="Salon" />
          <div className="blog-cta-overlay" />
        </div>
        
        <div className="blog-cta-glow" />
        <div className="blog-cta-pattern" />
        
        <div className="blog-cta-content">
          <div className="blog-cta-badge-wrapper">
            <span className="blog-cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          
          <h2 className="blog-cta-title">
            Ready to <span className="blog-cta-title-gold">Transform</span> Your Hair?
          </h2>
          
          <p className="blog-cta-desc">
            Book your appointment today and experience the SESI Air Braiding difference.
          </p>
          
          <button onClick={() => navigate('/book')} className="blog-cta-btn">
            <span>Book Now</span>
            <ArrowRight size={18} />
            <span className="blog-cta-btn-shine" />
          </button>
          
          <div className="blog-cta-features">
            <span className="blog-cta-feature">
              <Sparkles size={14} />
              Premium Products
            </span>
            <span className="blog-cta-feature">
              <Clock size={14} />
              Flexible Scheduling
            </span>
            <span className="blog-cta-feature">
              <Award size={14} />
              Award Winning
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}