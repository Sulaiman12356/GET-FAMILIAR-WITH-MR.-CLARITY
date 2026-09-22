import React, { useState } from 'react';
import { Quote, MessageSquarePlus, CheckCircle2, User, Send, X } from 'lucide-react';
import { Testimonial } from '../types';

interface StudentStoriesProps {
  testimonials: Testimonial[];
  onAddTestimonial?: (newTestimonial: Testimonial) => void;
}

export const StudentStories: React.FC<StudentStoriesProps> = ({ 
  testimonials,
  onAddTestimonial 
}) => {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    department: '',
    level: '300 Level',
    quote: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.quote) return;

    if (onAddTestimonial) {
      onAddTestimonial({
        id: `t-user-${Date.now()}`,
        name: formState.name,
        department: formState.department || 'OOU Student',
        level: formState.level,
        quote: formState.quote,
        isPlaceholder: false
      });
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsSubmitOpen(false);
      setFormState({ name: '', department: '', level: '300 Level', quote: '' });
    }, 2000);
  };

  return (
    <section 
      id="stories" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
              <span>COMMUNITY VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#091D35]">
              The People Behind The Journey
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Authentic perspectives and transparent feedback from peers, study circles, and departmental collaborators across campus.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsSubmitOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-[#146BFF] text-[#091D35] hover:text-[#146BFF] font-semibold text-sm transition-colors shrink-0 shadow-xs"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#146BFF]" />
            <span>Leave a Note of Support</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                t.isPlaceholder 
                  ? 'bg-dashed border-2 border-slate-300 bg-slate-50/70 text-slate-500' 
                  : 'bg-[#F5F7FA] border-slate-200/90 hover:border-[#146BFF]/40 hover:bg-white shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <Quote className={`w-8 h-8 mb-4 ${t.isPlaceholder ? 'text-slate-300' : 'text-[#146BFF]/30'}`} />
                <p className={`text-sm leading-relaxed ${t.isPlaceholder ? 'italic text-slate-400' : 'text-slate-700 font-normal'}`}>
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  t.isPlaceholder ? 'bg-slate-200 text-slate-400' : 'bg-[#EAF2FF] text-[#146BFF] font-bold text-xs'
                }`}>
                  {t.isPlaceholder ? <User className="w-4 h-4" /> : t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#091D35]">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {t.department} • {t.level}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on integrity */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Editable community proof module • Placeholders can be updated anytime with student approval.
        </div>

      </div>

      {/* Note of Support Modal */}
      {isSubmitOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in"
          onClick={() => setIsSubmitOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSubmitOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#091D35]">
                  Note Received!
                </h3>
                <p className="text-sm text-slate-600">
                  Thank you for contributing your voice to The Auspicious Era community wall.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-[#091D35]">
                    Leave a Note of Support
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Share an experience working with Mr. Clarity or your thoughts on The Auspicious Era.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Samuel A."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      value={formState.department}
                      onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                      placeholder="e.g. Computer Science"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Academic Level
                    </label>
                    <select
                      value={formState.level}
                      onChange={(e) => setFormState({ ...formState, level: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] bg-white"
                    >
                      <option value="100 Level">100 Level</option>
                      <option value="200 Level">200 Level</option>
                      <option value="300 Level">300 Level</option>
                      <option value="400 Level">400 Level</option>
                      <option value="500 Level">500 Level</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Comment or Feedback
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formState.quote}
                    onChange={(e) => setFormState({ ...formState, quote: e.target.value })}
                    placeholder="Write a brief, honest note..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#146BFF] hover:bg-blue-600 text-white font-semibold text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
