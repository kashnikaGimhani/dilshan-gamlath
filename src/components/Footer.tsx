import { Heart, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Zap className="w-5 h-5 text-emerald-500" />
            <span className="font-semibold">Dilshan Gamlath</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Powered by renewable energy</span>
            <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
          </div>

          <div className="text-slate-400 text-sm">
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
