import { useState } from 'react';
import { 
  Check, ChevronLeft, ChevronRight, Calendar, 
  Clock, User, CreditCard, Upload, FileText, 
  Star, Sparkles, Gem, Crown, Heart, 
  Scissors, Users, Award, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { serviceCategories, team } from '../data/service';
import "./book.css"

const steps = ['Hairstyle', 'Size', 'Length', 'Hair Included', 'Stylist', 'Date', 'Time', 'Inspiration', 'Notes', 'Deposit'];
const sizes = ['Small', 'Medium', 'Large'];
const lengths = ['Bob', 'Shoulder', 'Mid Back', 'Waist', 'Butt Length'];
const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

// Icône Star personnalisée
const StarIcon = ({ size = 16, className = '', fill = 'none' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Book() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    hairstyle: '', size: '', length: '', hairIncluded: '', 
    stylist: '', date: '', time: '', notes: '', 
    name: '', email: '', phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const allServices = serviceCategories.flatMap((c) =>
    c.variations.map((v) => ({ 
      name: `${c.name} — ${v.name}`, 
      price: v.price, 
      duration: v.duration, 
      image: v.image,
      category: c.name
    }))
  );

  const canProceed = () => {
    if (step === 0) return !!data.hairstyle;
    if (step === 1) return !!data.size;
    if (step === 2) return !!data.length;
    if (step === 3) return !!data.hairIncluded;
    if (step === 4) return !!data.stylist;
    if (step === 5) return !!data.date;
    if (step === 6) return !!data.time;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const { error: dbError } = await supabase.from('bookings').insert({
        hairstyle: data.hairstyle,
        size: data.size,
        length: data.length,
        hair_included: data.hairIncluded,
        stylist: data.stylist,
        appointment_date: data.date,
        appointment_time: data.time,
        notes: data.notes,
        client_name: data.name,
        client_email: data.email,
        client_phone: data.phone,
        status: 'pending',
      });
      if (dbError) throw dbError;
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getStepIcon = (stepIndex) => {
    const icons = [
      StarIcon, Scissors, User, StarIcon, User, 
      Calendar, Clock, Upload, FileText, CreditCard
    ];
    const Icon = icons[stepIndex] || StarIcon;
    return <Icon size={20} className="text-ink" />;
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="booking-success-content">
          <div className="booking-success-icon">
            <Check size={48} />
          </div>
          <div className="booking-success-badge">
            <Sparkles size={14} />
            <span>Confirmed</span>
          </div>
          <h1 className="booking-success-title">Booking Confirmed</h1>
          <p className="booking-success-desc">
            Thank you, <span className="booking-success-name">{data.name || 'valued client'}</span>. 
            Your appointment request has been received. We will contact you shortly to confirm 
            the details and process your deposit.
          </p>
          <div className="booking-success-details">
            <div className="booking-success-detail">
              <span className="booking-success-detail-label">Service</span>
              <span className="booking-success-detail-value">{data.hairstyle}</span>
            </div>
            <div className="booking-success-detail">
              <span className="booking-success-detail-label">Stylist</span>
              <span className="booking-success-detail-value">{data.stylist}</span>
            </div>
            <div className="booking-success-detail">
              <span className="booking-success-detail-label">Date</span>
              <span className="booking-success-detail-value">{data.date}</span>
            </div>
            <div className="booking-success-detail">
              <span className="booking-success-detail-label">Time</span>
              <span className="booking-success-detail-value">{data.time}</span>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="booking-success-btn">
            <span>Return Home</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      {/* ===== HERO SECTION ===== */}
      <section className="booking-hero">
        <div className="booking-hero-overlay" />
        <div className="booking-hero-content">
          <div className="booking-hero-badge">
            <span className="booking-hero-badge-dot" />
            <span className="booking-hero-badge-text">✦ BOOK · EXPERIENCE · TRANSFORM ✦</span>
          </div>
          <h1 className="booking-hero-title">
            <span className="booking-hero-title-gold">Book</span>
            <span className="booking-hero-title-white">Your Appointment</span>
          </h1>
          <p className="booking-hero-desc">
            A premium experience, step by step. Fill in the details below and 
            let us create your perfect look.
          </p>
        </div>
      </section>

      {/* ===== BOOKING FORM ===== */}
      <section className="booking-form-section">
        <div className="booking-form-container">
          {/* ===== PROGRESS BAR ===== */}
          <div className="booking-progress">
            <div className="booking-progress-steps">
              {steps.map((s, i) => (
                <div key={s} className="booking-progress-item">
                  <div 
                    className={`booking-progress-circle ${i < step ? 'done' : i === step ? 'current' : 'todo'}`}
                    onClick={() => i < step && setStep(i)}
                  >
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span className={`booking-progress-label ${i === step ? 'current' : ''}`}>
                    {s}
                  </span>
                  {i < steps.length - 1 && (
                    <div className={`booking-progress-line ${i < step ? 'done' : ''}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ===== STEP CARD ===== */}
          <div className="booking-step-card">
            {error && (
              <div className="booking-error">
                <span>{error}</span>
              </div>
            )}

            {/* STEP 0 - Hairstyle */}
            {step === 0 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <StarIcon size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 01</span>
                    <h2 className="booking-step-title">Choose Your Hairstyle</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-service-grid">
                    {allServices.map((s) => (
                      <button
                        key={s.name}
                        onClick={() => setData({ ...data, hairstyle: s.name })}
                        className={`booking-service-card ${data.hairstyle === s.name ? 'selected' : ''}`}
                      >
                        <div className="booking-service-card-img">
                          <img src={s.image} alt={s.name} />
                          <div className="booking-service-card-overlay" />
                          {data.hairstyle === s.name && (
                            <div className="booking-service-card-check">
                              <Check size={16} />
                            </div>
                          )}
                        </div>
                        <div className="booking-service-card-info">
                          <h4>{s.name}</h4>
                          <p>{s.duration} · {s.price}</p>
                          <span className="booking-service-card-category">{s.category}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1 - Size */}
            {step === 1 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <Scissors size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 02</span>
                    <h2 className="booking-step-title">Choose Size</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-options-grid">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setData({ ...data, size: s })}
                        className={`booking-option-card ${data.size === s ? 'selected' : ''}`}
                      >
                        <div className="booking-option-card-icon">
                          {s === 'Small' && <span>✦</span>}
                          {s === 'Medium' && <span>✦✦</span>}
                          {s === 'Large' && <span>✦✦✦</span>}
                        </div>
                        <span className="booking-option-card-label">{s}</span>
                        {data.size === s && <Check size={16} className="booking-option-card-check" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 - Length */}
            {step === 2 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 03</span>
                    <h2 className="booking-step-title">Choose Length</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-options-grid">
                    {lengths.map((l) => (
                      <button
                        key={l}
                        onClick={() => setData({ ...data, length: l })}
                        className={`booking-option-card ${data.length === l ? 'selected' : ''}`}
                      >
                        <span className="booking-option-card-label">{l}</span>
                        {data.length === l && <Check size={16} className="booking-option-card-check" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 - Hair Included */}
            {step === 3 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <StarIcon size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 04</span>
                    <h2 className="booking-step-title">Is Hair Included?</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-options-grid two-col">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setData({ ...data, hairIncluded: opt })}
                        className={`booking-option-card large ${data.hairIncluded === opt ? 'selected' : ''}`}
                      >
                        <div className="booking-option-card-icon">
                          {opt === 'Yes' ? <Gem size={28} /> : <Scissors size={28} />}
                        </div>
                        <span className="booking-option-card-label">{opt}</span>
                        <p className="booking-option-card-desc">
                          {opt === 'Yes' ? 'We provide premium hair' : 'Bring your own'}
                        </p>
                        {data.hairIncluded === opt && <Check size={16} className="booking-option-card-check" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 - Stylist */}
            {step === 4 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <Users size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 05</span>
                    <h2 className="booking-step-title">Choose Your Stylist</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-stylist-grid">
                    {team.map((m) => (
                      <button
                        key={m.name}
                        onClick={() => setData({ ...data, stylist: m.name })}
                        className={`booking-stylist-card ${data.stylist === m.name ? 'selected' : ''}`}
                      >
                        <img src={m.image} alt={m.name} />
                        <div className="booking-stylist-card-info">
                          <h4>{m.name}</h4>
                          <p>{m.role}</p>
                          <span className="booking-stylist-card-rating">
                            <StarIcon size={12} fill="#C9A227" color="#C9A227" />
                            4.9
                          </span>
                        </div>
                        {data.stylist === m.name && (
                          <div className="booking-stylist-card-check">
                            <Check size={16} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5 - Date */}
            {step === 5 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 06</span>
                    <h2 className="booking-step-title">Choose a Date</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-date-wrapper">
                    <input
                      type="date"
                      value={data.date}
                      onChange={(e) => setData({ ...data, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="booking-date-input"
                    />
                    <div className="booking-date-info">
                      <Clock size={16} />
                      <span>Available Tuesday - Saturday, 9AM - 7PM</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6 - Time */}
            {step === 6 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 07</span>
                    <h2 className="booking-step-title">Choose a Time</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-time-grid">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setData({ ...data, time: t })}
                        className={`booking-time-card ${data.time === t ? 'selected' : ''}`}
                      >
                        <Clock size={14} />
                        <span>{t}</span>
                        {data.time === t && <Check size={14} className="booking-time-card-check" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 7 - Inspiration */}
            {step === 7 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <Upload size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 08</span>
                    <h2 className="booking-step-title">Upload Inspiration Photos</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-upload-zone">
                    <div className="booking-upload-icon">
                      <Upload size={40} />
                    </div>
                    <h4>Drag and drop or click to upload</h4>
                    <p>Share reference photos for your desired style (optional)</p>
                    <div className="booking-upload-formats">
                      <span>JPG</span>
                      <span>PNG</span>
                      <span>WebP</span>
                      <span>Max 5MB</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 8 - Notes */}
            {step === 8 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 09</span>
                    <h2 className="booking-step-title">Additional Notes</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-notes-wrapper">
                    <textarea
                      value={data.notes}
                      onChange={(e) => setData({ ...data, notes: e.target.value })}
                      rows={6}
                      placeholder="Any allergies, sensitivities, or special requests..."
                      className="booking-notes-textarea"
                    />
                    <div className="booking-notes-tips">
                      <span><Sparkles size={12} /> Share any specific style details</span>
                      <span><Heart size={12} /> Let us know your preferences</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 9 - Deposit */}
            {step === 9 && (
              <div className="booking-step">
                <div className="booking-step-header">
                  <div className="booking-step-icon">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <span className="booking-step-number">Step 10</span>
                    <h2 className="booking-step-title">Pay Deposit & Confirm</h2>
                  </div>
                </div>
                <div className="booking-step-body">
                  <div className="booking-deposit">
                    <div className="booking-deposit-form">
                      <div className="booking-deposit-field">
                        <label>Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name" 
                          value={data.name} 
                          onChange={(e) => setData({ ...data, name: e.target.value })} 
                          className="booking-deposit-input"
                        />
                      </div>
                      <div className="booking-deposit-field">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          placeholder="Enter your email address" 
                          value={data.email} 
                          onChange={(e) => setData({ ...data, email: e.target.value })} 
                          className="booking-deposit-input"
                        />
                      </div>
                      <div className="booking-deposit-field">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          value={data.phone} 
                          onChange={(e) => setData({ ...data, phone: e.target.value })} 
                          className="booking-deposit-input"
                        />
                      </div>
                    </div>
                    
                    <div className="booking-deposit-summary">
                      <div className="booking-deposit-summary-header">
                        <Crown size={20} />
                        <span>Booking Summary</span>
                      </div>
                      <div className="booking-deposit-summary-item">
                        <span>Service</span>
                        <span>{data.hairstyle || '—'}</span>
                      </div>
                      <div className="booking-deposit-summary-item">
                        <span>Stylist</span>
                        <span>{data.stylist || '—'}</span>
                      </div>
                      <div className="booking-deposit-summary-item">
                        <span>Date & Time</span>
                        <span>{data.date || '—'} · {data.time || '—'}</span>
                      </div>
                      <div className="booking-deposit-summary-divider" />
                      <div className="booking-deposit-summary-total">
                        <span>Deposit (50%)</span>
                        <span className="booking-deposit-summary-price">$50.00</span>
                      </div>
                      <p className="booking-deposit-summary-note">
                        A deposit secures your appointment and is applied toward your total.
                      </p>
                    </div>
                    
                    <button 
                      onClick={handleSubmit} 
                      disabled={submitting || !data.name || !data.email} 
                      className="booking-deposit-btn"
                    >
                      {submitting ? 'Processing...' : 'Pay Deposit & Confirm'}
                      <Sparkles size={16} />
                      <span className="booking-deposit-btn-shine" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ===== NAVIGATION ===== */}
          <div className="booking-nav">
            <button 
              onClick={prev} 
              disabled={step === 0} 
              className="booking-nav-btn back"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <div className="booking-nav-right">
              <span className="booking-nav-step">
                {step + 1} / {steps.length}
              </span>
              {step < steps.length - 1 && (
                <button 
                  onClick={next} 
                  disabled={!canProceed()} 
                  className="booking-nav-btn next"
                >
                  Continue <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}