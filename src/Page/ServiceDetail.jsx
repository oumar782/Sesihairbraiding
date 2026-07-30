import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowRight, Clock, Sparkles, Crown, Heart, Star,
  ChevronLeft, ChevronRight, Check, MapPin, Phone
} from 'lucide-react';
import { serviceCategories, images } from '../data/service';
import './servicedetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [activeVariation, setActiveVariation] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const found = serviceCategories.find((c) => c.slug === slug);
    if (found) {
      setService(found);
      setActiveVariation(found.variations[0]);
      window.scrollTo(0, 0);
    } else {
      setService(null);
    }
  }, [slug]);

  if (!service) {
    return (
      <main className="servicedetail-page">
        <section className="servicedetail-notfound">
          <div className="servicedetail-notfound-content">
            <div className="servicedetail-notfound-icon">
              <Sparkles size={48} />
            </div>
            <h1 className="servicedetail-notfound-title">Service Not Found</h1>
            <p className="servicedetail-notfound-desc">
              The service you're looking for doesn't exist or has been moved.
            </p>
            <button
              onClick={() => navigate('/services')}
              className="servicedetail-notfound-btn"
            >
              <span>Back to Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>
    );
  }

  const {
    name, tagline, description, longDescription, image,
    gallery, startingPrice, variations, hairCare, faqs
  } = service;

  const galleryImages = gallery || [image];

  const prevGallery = () => {
    setCurrentGalleryIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  };

  const nextGallery = () => {
    setCurrentGalleryIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  };

  // Related services (excluding current)
  const relatedServices = serviceCategories
    .filter((c) => c.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="servicedetail-page">
      {/* ===== HERO SECTION ===== */}
      <section className="servicedetail-hero">
        <img src={image} alt={name} className="servicedetail-hero-img" />
        <div className="servicedetail-hero-overlay" />
        <div className="servicedetail-hero-glow" />

        <div className="servicedetail-hero-content">
          <div className="servicedetail-hero-badge">
            <span className="servicedetail-hero-badge-dot" />
            <span className="servicedetail-hero-badge-text">✦ LUXURY · PRECISION · ARTISTRY ✦</span>
          </div>

          <div className="servicedetail-hero-title-wrapper">
            <div className="servicedetail-hero-subtitle-line">
              <span className="servicedetail-hero-subtitle-text">{tagline}</span>
            </div>
            <h1 className="servicedetail-hero-title">
              <span className="servicedetail-hero-title-line">{name}</span>
              <span className="servicedetail-hero-title-underline" />
            </h1>
          </div>

          <p className="servicedetail-hero-desc">
            {description}
          </p>

          <div className="servicedetail-hero-actions">
            <button
              onClick={() => navigate('/book')}
              className="servicedetail-hero-btn"
            >
              <span>Book Now</span>
              <ArrowRight size={18} />
              <span className="servicedetail-hero-btn-shine" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="servicedetail-hero-btn-secondary"
            >
              <span>Ask a Question</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="servicedetail-hero-price">
            <span className="servicedetail-hero-price-label">Starting at</span>
            <span className="servicedetail-hero-price-value">{startingPrice}</span>
          </div>
        </div>

        <div className="servicedetail-hero-back">
          <button
            onClick={() => navigate('/services')}
            className="servicedetail-hero-back-btn"
          >
            <ChevronLeft size={16} />
            <span>Back to Services</span>
          </button>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="servicedetail-gallery-section">
        <div className="servicedetail-gallery-content">
          <div className="servicedetail-gallery-main">
            <img
              src={galleryImages[currentGalleryIndex]}
              alt={`${name} gallery ${currentGalleryIndex + 1}`}
              className="servicedetail-gallery-img"
            />
            <div className="servicedetail-gallery-nav">
              <button
                onClick={prevGallery}
                className="servicedetail-gallery-nav-btn"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextGallery}
                className="servicedetail-gallery-nav-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="servicedetail-gallery-thumbs">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentGalleryIndex(i)}
                className={`servicedetail-gallery-thumb ${i === currentGalleryIndex ? 'active' : ''}`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESCRIPTION SECTION ===== */}
      <section className="servicedetail-description-section">
        <div className="servicedetail-description-content">
          <div className="servicedetail-description-header">
            <span className="eyebrow gold">About This Style</span>
            <h2 className="servicedetail-description-title">{name}</h2>
          </div>
          <p className="servicedetail-description-text">
            {longDescription}
          </p>
        </div>
      </section>

      {/* ===== VARIATIONS SECTION ===== */}
      <section className="servicedetail-variations-section">
        <div className="servicedetail-variations-content">
          <div className="servicedetail-variations-header">
            <span className="eyebrow gold">Service Options</span>
            <h2 className="servicedetail-variations-title">Choose Your Variation</h2>
            <p className="servicedetail-variations-desc">
              Every variation is handcrafted with premium care. Prices and durations are estimates.
            </p>
          </div>

          <div className="servicedetail-variations-grid">
            {variations.map((variation) => (
              <div
                key={variation.name}
                className={`servicedetail-variation-card ${activeVariation?.name === variation.name ? 'selected' : ''}`}
                onClick={() => setActiveVariation(variation)}
              >
                <div className="servicedetail-variation-img-wrap">
                  <img src={variation.image} alt={variation.name} />
                  <div className="servicedetail-variation-overlay" />
                  <div className="servicedetail-variation-badge">
                    <Clock size={12} />
                    <span>{variation.duration}</span>
                  </div>
                </div>
                <div className="servicedetail-variation-body">
                  <h3 className="servicedetail-variation-name">{variation.name}</h3>
                  <p className="servicedetail-variation-desc">{variation.description}</p>
                  <div className="servicedetail-variation-price">{variation.price}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/book');
                    }}
                    className="servicedetail-variation-book"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HAIR CARE SECTION ===== */}
      <section className="servicedetail-haircare-section">
        <div className="servicedetail-haircare-content">
          <div className="servicedetail-haircare-header">
            <span className="eyebrow gold">Maintenance</span>
            <h2 className="servicedetail-haircare-title">Hair Care Guide</h2>
            <p className="servicedetail-haircare-desc">
              Keep your style looking fresh with these expert care tips.
            </p>
          </div>

          <div className="servicedetail-haircare-grid">
            {hairCare.map((tip, i) => (
              <div key={i} className="servicedetail-haircare-item">
                <div className="servicedetail-haircare-icon">
                  <Heart size={20} />
                </div>
                <p className="servicedetail-haircare-text">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="servicedetail-faq-section">
        <div className="servicedetail-faq-content">
          <div className="servicedetail-faq-header">
            <span className="eyebrow gold">Questions</span>
            <h2 className="servicedetail-faq-title">FAQ</h2>
          </div>

          <div className="servicedetail-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="servicedetail-faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="servicedetail-faq-question"
                >
                  <span>{faq.q}</span>
                  <span className={`servicedetail-faq-icon ${openFaq === i ? 'open' : ''}`}>
                    <ChevronRight size={20} />
                  </span>
                </button>
                <div className={`servicedetail-faq-answer-wrap ${openFaq === i ? 'open' : ''}`}>
                  <p className="servicedetail-faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      <section className="servicedetail-related-section">
        <div className="servicedetail-related-content">
          <div className="servicedetail-related-header">
            <span className="eyebrow gold">You May Also Like</span>
            <h2 className="servicedetail-related-title">Related Hairstyles</h2>
          </div>

          <div className="servicedetail-related-grid">
            {relatedServices.map((related) => (
              <div
                key={related.slug}
                className="servicedetail-related-card"
                onClick={() => navigate(`/services/${related.slug}`)}
              >
                <div className="servicedetail-related-img-wrap">
                  <img src={related.image} alt={related.name} />
                  <div className="servicedetail-related-overlay" />
                </div>
                <div className="servicedetail-related-body">
                  <h3 className="servicedetail-related-name">{related.name}</h3>
                  <p className="servicedetail-related-price">{related.startingPrice}</p>
                  <span className="servicedetail-related-explore">
                    Explore
                    <ArrowRight size={14} className="servicedetail-related-arrow" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="servicedetail-cta">
        <div className="servicedetail-cta-bg">
          <img src={images.salon3} alt="Salon interior" />
          <div className="servicedetail-cta-overlay" />
        </div>
        <div className="servicedetail-cta-glow" />

        <div className="servicedetail-cta-content">
          <div className="servicedetail-cta-badge">
            <span className="servicedetail-cta-badge-dot" />
            <span className="servicedetail-cta-badge-text">✦ BEAUTY · CONFIDENCE · CULTURE ✦</span>
          </div>

          <h2 className="servicedetail-cta-title">
            Ready to Transform
            <br />
            <span className="servicedetail-cta-title-gold">Your Look?</span>
          </h2>

          <p className="servicedetail-cta-desc">
            Book your appointment today and experience the SESI Air Braiding difference.
          </p>

          <div className="servicedetail-cta-actions">
            <button
              onClick={() => navigate('/book')}
              className="servicedetail-cta-btn"
            >
              <span>Book Now</span>
              <ArrowRight size={18} />
              <span className="servicedetail-cta-btn-shine" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="servicedetail-cta-btn-secondary"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="servicedetail-cta-contact">
            <div className="servicedetail-cta-contact-item">
              <MapPin size={16} />
              <span>1234 Broad Street, Philadelphia, PA 19121</span>
            </div>
            <div className="servicedetail-cta-contact-item">
              <Phone size={16} />
              <span>(215) 555-0192</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
