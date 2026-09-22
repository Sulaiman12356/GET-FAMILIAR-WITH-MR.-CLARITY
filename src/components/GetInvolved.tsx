import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Users, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  GraduationCap 
} from 'lucide-react';
import { JoinFormData } from '../types';

interface GetInvolvedProps {
  onSuccessSubmission?: (data: JoinFormData) => void;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({ onSuccessSubmission }) => {
  const [formData, setFormData] = useState<JoinFormData>({
    fullName: '',
    department: '',
    level: '100 Level',
    email: '',
    whatsAppNumber: '',
    areaOfInterest: 'Academic Support',
    contribution: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const areasOfInterest = [
    'Academic Support',
    'Welfare',
    'Technology',
    'Opportunities',
    'Entrepreneurship',
    'Community',
    'Volunteering'
  ];

  const levels = [
    '100 Level',
    '200 Level',
    '300 Level',
    '400 Level',
    '500 Level',
    'Postgraduate',
    'Alumnus'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      if (onSuccessSubmission) {
        onSuccessSubmission(formData);
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      department: '',
      level: '100 Level',
      email: '',
      whatsAppNumber: '',
      areaOfInterest: 'Academic Support',
      contribution: '',
      message: ''
    });
  };

  return (
    <section 
      id="get-involved" 
      className="py-20 lg:py-32 bg-[#061426] text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#146BFF]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#091D35] rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vision & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/10">
              <Users className="w-3.5 h-3.5 text-[#146BFF]" />
              <span>JOIN THE COMMUNITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
              Be Part of the <br />
              <span className="text-[#146BFF]">Conversation</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              The Auspicious Era is a space for students who care about better communication, useful opportunities, innovation, community and meaningful student development.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#146BFF]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">No Partisan Pressure</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Connect freely as a student who wants better academic tools and a stronger campus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#146BFF]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Inter-Faculty Collaboration</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Engage with fellow thinkers across Ago-Iwoye, Sagamu, Ayetoro, and Ibogun campuses.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Quote pill */}
            <div className="p-5 rounded-2xl bg-[#091D35] border border-white/10 text-xs text-slate-300">
              <p className="italic">
                "Leadership should never be an exclusive club. It is a shared platform where every student's voice and skill can find purpose."
              </p>
              <p className="font-bold text-white mt-2">
                — Onifade Sulaiman (Mr. Clarity)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Join Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#091D35] rounded-3xl p-6 sm:p-8 md:p-10 border border-white/15 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#146BFF]/20 border border-[#146BFF] text-[#146BFF] flex items-center justify-center mx-auto shadow-lg shadow-[#146BFF]/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    Thank you for connecting with <br />
                    <span className="text-[#146BFF]">The Auspicious Era.</span>
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Your details and contribution ideas have been received. We look forward to building a stronger, clearer, and more united student experience together.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Response
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      Join The Movement
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out this simple form to stay connected, volunteer, or share your ideas.
                    </p>
                  </div>

                  {/* Name & Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-[#146BFF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Onifade Sulaiman"
                        className="w-full px-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Department <span className="text-[#146BFF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        placeholder="e.g. Computer Science"
                        className="w-full px-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Level & Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Academic Level <span className="text-[#146BFF]">*</span>
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] transition-all"
                      >
                        {levels.map((lvl) => (
                          <option key={lvl} value={lvl} className="bg-[#061426] text-white">
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        What area interests you? <span className="text-[#146BFF]">*</span>
                      </label>
                      <select
                        value={formData.areaOfInterest}
                        onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] transition-all"
                      >
                        {areasOfInterest.map((area) => (
                          <option key={area} value={area} className="bg-[#061426] text-white">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Contact channels: Email & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address <span className="text-[#146BFF]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] focus:border-transparent transition-all"
                        />
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp Number <span className="text-[#146BFF]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.whatsAppNumber}
                          onChange={(e) => setFormData({ ...formData, whatsAppNumber: e.target.value })}
                          placeholder="+234..."
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] focus:border-transparent transition-all"
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* What would you like to contribute? */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      What would you like to contribute?
                    </label>
                    <input
                      type="text"
                      value={formData.contribution}
                      onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                      placeholder="e.g. Tutoring, graphic design, welfare outreach, campus coordination..."
                      className="w-full px-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Thoughts for Mr. Clarity
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write any thoughts, questions, or ideas for the movement..."
                      className="w-full px-4 py-3 rounded-xl bg-[#061426] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#146BFF] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white bg-[#146BFF] hover:bg-blue-600 active:scale-98 transition-all shadow-lg shadow-[#146BFF]/30 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Join The Community</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
