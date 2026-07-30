import { Link } from 'react-router-dom';
import { ArrowRight, Star, Crown, Sparkles, Clock, Shield, Play, Quote, ChevronRight, Award, Scissors, Users, Heart, Leaf, Sun, Gem } from 'lucide-react';
import './home.css';

export default function Home() {
  return (
    <main className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&q=80" 
            alt="African Hair Braiding"
            className="hero-background-image"
          />
          <div className="hero-image-overlay" />
          <div className="hero-image-gradient" />
          <div className="hero-image-glow" />
        </div>

        {/* ===== FLOATING ORNAMENTS ===== */}
        <div className="hero-ornaments">
          <span className="ornament ornament-1">✦</span>
          <span className="ornament ornament-2">✦</span>
          <span className="ornament ornament-3">✦</span>
          <span className="ornament ornament-4">✦</span>
          <span className="ornament ornament-5">✦</span>
        </div>
        
        <div className="hero-particles">
          {[...Array(40)].map((_, i) => (
            <span key={i} className={`particle particle-${i % 8}`} />
          ))}
        </div>
        
        <div className="container-lux hero-container">
          <div className="hero-badge animate-slide-down">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
            <span className="hero-badge-line" />
          </div>
          
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <div className="hero-subtitle animate-fade-up">
                <span className="hero-subtitle-line" />
                <span className="hero-subtitle-text">Since 2014</span>
                <span className="hero-subtitle-line" />
              </div>
              
              <h1 className="hero-title animate-fade-up">
                <span className="hero-title-gold">Luxury</span>
                <span className="hero-title-white"> African</span>
                <br />
                <span className="hero-title-white">Hair Braiding</span>
                <div className="hero-title-underline" />
              </h1>
              
              <p className="hero-desc animate-fade-up delay-2">
                Where heritage meets modern luxury. Every braid is a masterpiece, 
                crafted with precision and passion in the heart of Philadelphia.
              </p>
              
              <div className="hero-buttons animate-fade-up delay-3">
                <Link to="/book" className="btn-hero-primary">
                  <span>Book Your Appointment</span>
                  <ArrowRight size={18} className="btn-arrow" />
                  <span className="btn-hero-shine" />
                </Link>
                <Link to="/services" className="btn-hero-secondary">
                  <div className="btn-hero-secondary-icon">
                    <Play size={14} />
                  </div>
                  <span>Explore Services</span>
                </Link>
              </div>

              <div className="hero-trust animate-fade-up delay-4">
                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <Star size={14} />
                  </div>
                  <span>200+ Reviews</span>
                </div>
                <div className="hero-trust-divider" />
                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <Crown size={14} />
                  </div>
                  <span>Award Winning</span>
                </div>
                <div className="hero-trust-divider" />
                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <Users size={14} />
                  </div>
                  <span>50+ Stylists</span>
                </div>
              </div>
            </div>

            <div className="hero-right animate-fade-up delay-3">
              <div className="hero-stats-card">
                <div className="hero-stats-grid">
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">98%</span>
                    <span className="hero-stat-label">Satisfaction</span>
                  </div>
                  <div className="hero-stat-divider" />
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">12K+</span>
                    <span className="hero-stat-label">Happy Clients</span>
                  </div>
                  <div className="hero-stat-divider" />
                  <div className="hero-stat-item">
                    <span className="hero-stat-number">4.9★</span>
                    <span className="hero-stat-label">Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="hero-quote-card">
                <Quote size={28} className="hero-quote-icon" />
                <p className="hero-quote-text">
                  "The most luxurious braiding experience I've ever had. 
                  Absolutely transformative!"
                </p>
                <div className="hero-quote-author">
                  <div className="hero-quote-avatar">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" 
                      alt="Client"
                    />
                  </div>
                  <div>
                    <div className="hero-quote-name">Sarah Johnson</div>
                    <div className="hero-quote-title">Regular Client Since 2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <span className="hero-scroll-text">Scroll to explore</span>
            <div className="hero-scroll-line">
              <div className="hero-scroll-dot" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section">
        <div className="services-bg-pattern" />
        <div className="services-floating-text">BEAUTY · CONFIDENCE · CULTURE</div>
        <div className="container-lux">
          <div className="section-header">
            <span className="eyebrow gold">✦ Our Services</span>
            <h2 className="section-title">
              Premium Braiding <span className="gold-text">Excellence</span>
            </h2>
            <div className="section-title-line" />
            <p className="section-desc">
              From classic styles to modern trends, our expert stylists create 
              beautiful braids that celebrate your unique beauty.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                title: 'Knotless Braids',
                desc: 'Lightweight, tension-free braids that look natural and last for weeks.',
                img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
                tag: 'Most Popular',
                price: 'From $180',
              },
              {
                title: 'Box Braids',
                desc: 'Classic, versatile braids that protect your hair with endless styling options.',
                img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
                tag: 'Timeless',
                price: 'From $200',
              },
              {
                title: 'Boho Braids',
                desc: 'Effortlessly chic braids with a free-spirited, bohemian vibe.',
                img: 'https://images.unsplash.com/photo-1604416185900-2ba18c2d1c7e?w=800&q=80',
                tag: 'Trending',
                price: 'From $220',
              },
              {
                title: 'Cornrows',
                desc: 'Intricate, close-to-the-scalp braids perfect for any occasion.',
                img: 'https://images.unsplash.com/photo-1588844034354-f876cb195233?w=800&q=80',
                tag: 'Classic',
                price: 'From $150',
              },
              {
                title: 'Locs',
                desc: 'Professional loc maintenance and styling for healthy, beautiful locs.',
                img: 'https://images.unsplash.com/photo-1604416185900-2ba18c2d1c7e?w=800&q=80',
                tag: 'Premium',
                price: 'From $250',
              },
              {
                title: 'Custom Styles',
                desc: 'Work with our stylists to create a unique look that is exclusively yours.',
                img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
                tag: 'Bespoke',
                price: 'From $280',
              },
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-card-img-wrap">
                  <img src={service.img} alt={service.title} className="service-card-img" />
                  <div className="service-card-overlay" />
                  <div className="service-card-shine" />
                  <span className="service-card-tag">{service.tag}</span>
                  <span className="service-card-price">{service.price}</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                  <Link to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="service-card-link">
                    <span>Learn More</span>
                    <ChevronRight size={16} className="service-card-link-icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CULTURE SECTION ===== */}
      <section className="culture-section">
        <div className="culture-bg">
          <img 
            src="https://images.unsplash.com/photo-1604416185900-2ba18c2d1c7e?w=1920&q=80" 
            alt="Culture"
          />
          <div className="culture-overlay" />
        </div>
        <div className="culture-pattern" />
        
        <div className="container-lux">
          <div className="culture-content">
            <span className="culture-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
            <h2 className="culture-title">
              Celebrating <span className="culture-title-gold">African</span>
              <br />
              Heritage Through <span className="culture-title-gold">Art</span>
            </h2>
            <p className="culture-desc">
              At SESI Air Braiding, we honor the rich tradition of African hair braiding 
              while embracing modern innovation. Every style tells a story of beauty, 
              confidence, and cultural pride.
            </p>
            <div className="culture-values">
              <div className="culture-value">
                <div className="culture-value-icon">
                  <Heart size={24} />
                </div>
                <h4>Passion</h4>
                <p>Driven by love for the craft</p>
              </div>
              <div className="culture-value">
                <div className="culture-value-icon">
                  <Gem size={24} />
                </div>
                <h4>Excellence</h4>
                <p>Committed to perfection</p>
              </div>
              <div className="culture-value">
                <div className="culture-value-icon">
                  <Users size={24} />
                </div>
                <h4>Community</h4>
                <p>Building connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="testimonials-section">
        <div className="container-lux">
          <div className="section-header">
            <span className="eyebrow gold">✦ Testimonials</span>
            <h2 className="section-title">
              What Our <span className="gold-text">Clients Say</span>
            </h2>
            <div className="section-title-line" />
          </div>

          <div className="testimonials-grid">
            {[
              {
                text: "The best braiding experience I've ever had! My knotless braids lasted 8 weeks and looked amazing. The service was impeccable from start to finish.",
                name: 'Sarah Johnson',
                location: 'Philadelphia, PA',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                rating: 5,
              },
              {
                text: "SESI Air Braiding is truly luxury. The atmosphere, the service, the results - everything is perfect. I've never felt more beautiful.",
                name: 'Michelle Kim',
                location: 'New York, NY',
                image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80',
                rating: 5,
              },
              {
                text: "I've been coming here for years and I'll never go anywhere else. They always exceed my expectations with their creativity and precision.",
                name: 'Amanda Rodriguez',
                location: 'Cherry Hill, NJ',
                image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card-top">
                  <div className="testimonial-quote-icon">
                    <Quote size={32} />
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="testimonial-star" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="cta-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1604416185900-2ba18c2d1c7e?w=1920&q=80" 
            alt="Braiding"
          />
          <div className="cta-image-overlay" />
        </div>
        <div className="cta-glow" />
        <div className="cta-pattern" />
        
        <div className="container-lux">
          <div className="cta-content">
            <span className="cta-badge">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
            <h2 className="cta-title">
              Ready to Transform
              <br />
              <span className="cta-title-gold">Your Hair?</span>
            </h2>
            <p className="cta-desc">
              Book your appointment today and experience the SESI Air Braiding difference.
            </p>
            <Link to="/book" className="btn-cta">
              <span>Book Now</span>
              <Sparkles size={18} />
              <span className="btn-cta-shine" />
            </Link>
            <div className="cta-features">
              <span className="cta-feature">
                <Heart size={14} />
                Free Consultation
              </span>
              <span className="cta-feature">
                <Clock size={14} />
                Flexible Scheduling
              </span>
              <span className="cta-feature">
                <Shield size={14} />
                Premium Products
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}