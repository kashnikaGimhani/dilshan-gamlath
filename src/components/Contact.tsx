import { Mail, Phone, MapPin, Linkedin, Eye } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Interested in discussing renewable energy projects, engineering opportunities, or potential collaborations? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500 rounded-lg">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>

       <div className="mt-12 text-center">
          <a
            href={contactInfo.cv}  // 👈 replace with your actual CV link (can be from Google Drive, GitHub, etc.)
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/50"
          >
            <Eye className="w-5 h-5" />
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
