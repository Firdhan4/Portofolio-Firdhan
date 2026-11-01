import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Send, Check, Copy, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<Props> = ({ onShowToast }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in your name, email, and message.');
      return;
    }

    setIsSending(true);

    // Format mailto link
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} regarding ${formData.service}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      onShowToast('Opening email client with your message...');
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setSentSuccess(false);
      }, 4000);
    }, 600);
  };

  const contactList = [
    {
      id: 'phone',
      icon: <Phone className="w-4 h-4 text-[#e5a855] shrink-0" />,
      text: PERSONAL_INFO.contact.phoneDisplay,
      actionValue: PERSONAL_INFO.contact.phone,
      label: 'Phone / WhatsApp',
      type: 'phone',
      url: PERSONAL_INFO.contact.whatsappUrl
    },
    {
      id: 'email',
      icon: <Mail className="w-4 h-4 text-[#e5a855] shrink-0" />,
      text: PERSONAL_INFO.contact.email,
      actionValue: PERSONAL_INFO.contact.email,
      label: 'Email',
      type: 'email',
      url: `mailto:${PERSONAL_INFO.contact.email}`
    },
    {
      id: 'facebook',
      icon: <Facebook className="w-4 h-4 text-[#e5a855] shrink-0" />,
      text: PERSONAL_INFO.contact.facebookDisplay,
      actionValue: PERSONAL_INFO.contact.facebookUrl,
      label: 'Facebook',
      type: 'link',
      url: PERSONAL_INFO.contact.facebookUrl
    },
    {
      id: 'instagram',
      icon: <Instagram className="w-4 h-4 text-[#e5a855] shrink-0" />,
      text: PERSONAL_INFO.contact.instagramDisplay,
      actionValue: PERSONAL_INFO.contact.instagramUrl,
      label: 'Instagram',
      type: 'link',
      url: PERSONAL_INFO.contact.instagramUrl
    },
    {
      id: 'telegram',
      icon: <Send className="w-4 h-4 text-[#e5a855] shrink-0" />,
      text: PERSONAL_INFO.contact.telegramDisplay,
      actionValue: PERSONAL_INFO.contact.telegramUrl,
      label: 'Telegram',
      type: 'link',
      url: PERSONAL_INFO.contact.telegramUrl
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#1a1c22] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e5a855]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Heading matching reference screenshot */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-block">
            <span className="font-poppins text-xs sm:text-sm font-bold tracking-[0.25em] text-[#e5a855] uppercase">
              CONTACT US
            </span>
          </div>
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            How To Contact Us
          </h2>
          <p className="font-inter text-xs sm:text-sm text-stone-400 leading-relaxed font-normal">
            You can contact us by completing given form. This form will directly send us a mail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Stacked Contact Pills matching the reference screenshot exactly */}
          <div className="lg:col-span-6 flex flex-col space-y-3.5">
            <h3 className="font-poppins text-sm font-bold uppercase tracking-wider text-[#e5a855] mb-2">
              Direct Contact Details
            </h3>

            {contactList.map((c) => (
              <div
                key={c.id}
                className="group w-full bg-[#22252d] hover:bg-[#282c36] border border-stone-800/90 hover:border-[#e5a855]/60 rounded-full px-5 py-3.5 flex items-center justify-between transition-all duration-300 shadow-md"
              >
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="w-8 h-8 rounded-full bg-[#181a20] flex items-center justify-center shrink-0 border border-stone-800 group-hover:border-[#e5a855]/40 transition-colors">
                    {c.icon}
                  </div>
                  <span className="font-inter text-xs sm:text-[13px] text-stone-200 group-hover:text-white font-medium truncate">
                    {c.text}
                  </span>
                </a>

                {/* Quick Copy / Action Button */}
                <button
                  type="button"
                  onClick={() => copyToClipboard(c.actionValue, c.id, c.label)}
                  className="p-1.5 text-stone-400 hover:text-[#e5a855] transition-colors rounded-full hover:bg-black/20"
                  title={`Copy ${c.label}`}
                >
                  {copiedKey === c.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}

            {/* WhatsApp Quick Chat Banner */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#172e21] to-[#1a2028] border border-emerald-900/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="font-inter">
                  <p className="text-xs font-bold text-white font-poppins">Need a quick response?</p>
                  <p className="text-[11px] text-stone-400">Average response within 1 hour</p>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold flex items-center gap-1.5 transition-colors shadow font-poppins"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 bg-[#20232b] border border-stone-800/90 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-poppins text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="font-inter text-xs text-stone-400 mb-6">
              Fill in the form below and it will prepare a pre-filled direct email to Firdhan Maulana.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-inter">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 uppercase tracking-wider mb-1.5 font-poppins">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#181a20] border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#e5a855] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-300 uppercase tracking-wider mb-1.5 font-poppins">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#181a20] border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#e5a855] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-300 uppercase tracking-wider mb-1.5 font-poppins">
                  Interested Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#181a20] border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#e5a855] transition-colors"
                >
                  <option value="Web Development">Web Development (React, Next.js, Tailwind)</option>
                  <option value="Graphic Designing">Graphic Designing (Logo, Branding, Identity)</option>
                  <option value="UI / UX Designing">UI / UX Designing (Figma, Prototypes)</option>
                  <option value="Video Editing">Video Editing (Reels, YouTube, Commercials)</option>
                  <option value="Full Project / Freelance Consultation">Full Project / Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-300 uppercase tracking-wider mb-1.5 font-poppins">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Website redesign project"
                  className="w-full bg-[#181a20] border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#e5a855] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-300 uppercase tracking-wider mb-1.5 font-poppins">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and expectations..."
                  className="w-full bg-[#181a20] border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#e5a855] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-full text-xs font-bold tracking-widest text-black bg-[#e5a855] hover:bg-[#d69542] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,168,85,0.25)] flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 font-poppins"
              >
                {isSending ? (
                  <span>Preparing Email...</span>
                ) : sentSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sent! Check your Email Client</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Firdhan</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
