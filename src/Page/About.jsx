import { ArrowRight, Award, Heart, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { images } from '../data/service';
import './about.css'
export default function About() {
  const navigate = useNavigate();
  
  const values = [
    { Icon: Heart, title: 'Heritage', text: 'We honor centuries of African braiding tradition in every style we craft.' },
    { Icon: Sparkles, title: 'Luxury', text: 'A premium salon experience with attention to every detail, from consultation to reveal.' },
    { Icon: Award, title: 'Excellence', text: 'Master braiders with over a decade of experience and a commitment to perfection.' },
    { Icon: Users, title: 'Community', text: 'We build lasting relationships with our clients and celebrate every individual\'s beauty.' },
  ];

  const stats = [
    { number: '98%', label: 'Satisfaction' },
    { number: '12K+', label: 'Happy Clients' },
    { number: '4.9★', label: 'Rating' },
  ];

  const teamMembers = [
    { name: 'Sesi Okafor', role: 'Founder & Lead Stylist', img: images.team1 || images.stylistBraid },
    { name: 'Amara Nwosu', role: 'Senior Braider', img: images.team2 || images.braidsSmiling },
    { name: 'Chidi Okonkwo', role: 'Creative Director', img: images.team3 || images.salon2 },
  ];

  const salonImages = [
    images.salon1, images.salon2, images.salon3, 
    images.salon4, images.salon5, images.salon6
  ];

  return (
    <main className="about-page">
      {/* ============================================
          HERO SECTION - CINEMATIC EDITION
          ============================================ */}
      <section className="about-hero">
        <img 
          src={images.salon3} 
          alt="SESI Air Braiding Luxury Salon" 
          className="about-hero-img"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-glow" />
        
        <div className="about-hero-content">
          <div className="about-hero-badge">
            <span className="about-hero-badge-dot" />
            <span className="about-hero-badge-text">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>
          
          <h1 className="about-hero-title">
            Crafted With <br />
            <span className="about-hero-title-gold">Heritage</span>
          </h1>
          
          <p className="about-hero-subtitle">
            SESI Air Braiding was born from a passion for African hair artistry 
            and a vision for luxury.
          </p>
          
          <div className="about-hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="about-hero-stat">
                <span className="about-hero-stat-number">{stat.number}</span>
                <span className="about-hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          STORY SECTION - IMMERSIVE
          ============================================ */}
      <section className="about-story">
        <div className="about-story-floating">HERITAGE · LUXURY · EXCELLENCE</div>
        
        <div className="about-story-grid">
          <div className="about-story-text">
            <span className="eyebrow">The Beginning</span>
            <h2 className="about-story-title">
              A Vision Born in Lagos, <br />
              <span className="about-story-title-gold">Refined in Philadelphia</span>
            </h2>
            
            <p className="about-story-desc">
              Sesi Okafor grew up in Lagos, Nigeria, watching her grandmother braid 
              hair on the veranda. What began as a childhood fascination became a 
              lifelong craft — and eventually, a calling.
            </p>
            
            <p className="about-story-desc">
              After training in New York and working in top salons for over a decade, 
              Sesi brought her vision to Philadelphia. She founded SESI Air Braiding 
              to offer something the city was missing: a truly luxury African braiding 
              experience where heritage meets modern elegance.
            </p>
            
            <p className="about-story-desc">
              Today, SESI Air Braiding is Philadelphia's premier destination for 
              handcrafted braids. Our master stylists have served over 5,000 clients, 
              each leaving with not just beautiful hair, but a renewed sense of 
              confidence and culture.
            </p>
            
            <div className="about-story-signature">
              <div className="about-story-signature-line" />
              <span className="about-story-signature-text">— Sesi Okafor, Founder</span>
            </div>
          </div>
          
          <div className="about-story-gallery">
            <div className="about-story-gallery-item">
              <img src={images.stylistBraid} alt="Master stylist at work" />
              <div className="about-story-gallery-overlay" />
              <span className="about-story-gallery-tag">✦ Master Craftsmanship</span>
            </div>
            <div className="about-story-gallery-item">
              <img src={images.braidsSmiling} alt="Happy client with beautiful braids" />
              <div className="about-story-gallery-overlay" />
              <span className="about-story-gallery-tag">✦ Radiant Confidence</span>
            </div>
            <div className="about-story-gallery-item">
              <img src={images.salon2} alt="Luxury salon interior" />
              <div className="about-story-gallery-overlay" />
              <span className="about-story-gallery-tag">✦ Luxury Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          VALUES SECTION - PREMIUM
          ============================================ */}
      <section className="about-values">
        <div className="about-values-pattern" />
        
        <div className="about-values-content">
          <div className="about-values-header">
            <span className="eyebrow">Our Values</span>
            <h2 className="about-values-title">
              What We <span className="about-values-title-gold">Stand For</span>
            </h2>
          </div>
          
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="about-value-card">
                <div className="about-value-icon">
                  <v.Icon size={32} />
                </div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SALON SECTION - LUXURY GALLERY
          ============================================ */}
      <section className="about-salon">
        <div className="about-salon-content">
          <div className="about-salon-header">
            <span className="eyebrow">Visit Us</span>
            <h2 className="about-salon-title">Our Luxury Salon</h2>
            <p className="about-salon-desc">
              Located in the heart of Philadelphia, our salon is designed for 
              comfort, elegance, and community.
            </p>
          </div>
          
          <div className="about-salon-grid">
            {salonImages.map((img, i) => (
              <div key={i} className="about-salon-item">
                <img src={img} alt={`Salon view ${i + 1}`} />
                <div className="about-salon-item-overlay" />
                <span className="about-salon-item-icon">✦ View</span>
              </div>
            ))}
          </div>
          
          <div className="about-salon-cta">
            <button onClick={() => navigate('/book')} className="btn-gold">
              Book Your Visit
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM SECTION - MASTER STYLISTS
          ============================================ */}
      <section className="about-team">
        <div className="about-team-content">
          <div className="about-team-header">
            <span className="eyebrow">Our Team</span>
            <h2 className="about-team-title">
              Meet Our <span className="gold-text">Master Stylists</span>
            </h2>
            <p className="about-team-desc">
              Each of our stylists brings years of experience and a passion for 
              the art of braiding.
            </p>
          </div>
          
          <div className="about-team-grid">
            {teamMembers.map((member, i) => (
              <div key={i} className="about-team-card">
                <img src={member.img} alt={member.name} className="about-team-img" />
                <div className="about-team-info">
                  <h3 className="about-team-name">{member.name}</h3>
                  <p className="about-team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}