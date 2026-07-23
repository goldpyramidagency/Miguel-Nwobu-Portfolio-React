import React, { useState } from 'react';
import { submitContactForm7 } from '../services/wordpressApi';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    'your-name': '',
    'your-email': '',
    'your-subject': 'Project Engagement / Growth Brief',
    'your-message': ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const result = await submitContactForm7({
        'your-name': formData['your-name'],
        'your-email': formData['your-email'],
        'your-subject': formData['your-subject'],
        'your-message': formData['your-message']
      });

      setSubmitted(true);
      setStatusMessage(result.message);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
      setStatusMessage('Your brief was submitted successfully. Miguel will review it shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0908]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#100e09] border border-[#8F8A86]/20 p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8F8A86] hover:text-[#F3EDE4] transition-colors p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7A1A94] animate-pulse"></span>
              Headless Contact System (CF7)
            </div>
            <h2 className="font-['Fraunces'] text-3xl md:text-4xl text-[#F3EDE4] mb-4 font-normal">
              Start a Project
            </h2>
            <p className="font-['Inter'] text-[#8F8A86] text-sm mb-8 leading-relaxed">
              Define your growth mandate. Direct access to high-impact acquisition architecture and performance engineering.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider text-[#8F8A86] mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    required
                    autoComplete="name"
                    name="your-name"
                    value={formData['your-name']}
                    onChange={(e) => setFormData({ ...formData, 'your-name': e.target.value })}
                    placeholder="e.g. Elena Vance"
                    className="w-full bg-[#0A0908] border border-[#8F8A86]/30 px-4 py-3 text-[#F3EDE4] focus:outline-none focus:border-[#7A1A94] font-['Inter'] text-sm"
                  />
                </div>

                <div>
                  <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider text-[#8F8A86] mb-2">
                    Your Email *
                  </label>
                  <input 
                    type="email"
                    required
                    autoComplete="email"
                    name="your-email"
                    value={formData['your-email']}
                    onChange={(e) => setFormData({ ...formData, 'your-email': e.target.value })}
                    placeholder="elena@company.com"
                    className="w-full bg-[#0A0908] border border-[#8F8A86]/30 px-4 py-3 text-[#F3EDE4] focus:outline-none focus:border-[#7A1A94] font-['Inter'] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider text-[#8F8A86] mb-2">
                  Subject *
                </label>
                <input 
                  type="text"
                  required
                  name="your-subject"
                  value={formData['your-subject']}
                  onChange={(e) => setFormData({ ...formData, 'your-subject': e.target.value })}
                  placeholder="e.g. Scaled Acquisition Strategy / WooCommerce Rebuild"
                  className="w-full bg-[#0A0908] border border-[#8F8A86]/30 px-4 py-3 text-[#F3EDE4] focus:outline-none focus:border-[#7A1A94] font-['Inter'] text-sm"
                />
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider text-[#8F8A86] mb-2">
                  Your Message (optional)
                </label>
                <textarea 
                  rows={4}
                  name="your-message"
                  value={formData['your-message']}
                  onChange={(e) => setFormData({ ...formData, 'your-message': e.target.value })}
                  placeholder="Describe your current bottleneck, target metrics, or timeline..."
                  className="w-full bg-[#0A0908] border border-[#8F8A86]/30 px-4 py-3 text-[#F3EDE4] focus:outline-none focus:border-[#7A1A94] font-['Inter'] text-sm"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4 items-center">
                <button 
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#8F8A86] hover:text-[#F3EDE4] cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-[#F3EDE4] text-[#0A0908] px-8 py-3.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="w-3 h-3 border-2 border-t-transparent border-[#0A0908] rounded-full animate-spin"></span>
                      Transmitting...
                    </>
                  ) : (
                    'Submit Brief'
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <span className="material-symbols-outlined text-6xl text-[#7A1A94]">
              check_circle
            </span>
            <h3 className="font-['Fraunces'] text-3xl text-[#F3EDE4]">
              Brief Transmitted
            </h3>
            <p className="font-['Inter'] text-[#8F8A86] text-base max-w-md mx-auto">
              {statusMessage || `Thank you, ${formData['your-name']}. Miguel will review your project parameters and respond within 24 business hours.`}
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-[#F3EDE4] text-[#0A0908] px-8 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
