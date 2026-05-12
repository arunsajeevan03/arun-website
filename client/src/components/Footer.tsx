export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-[#08080C]">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xs font-[var(--font-display)]">HE</span>
              </div>
              <span className="font-[var(--font-display)] font-semibold text-white text-sm">
                Human Essence Labs
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
              Building human-centered AI systems for real-world operations.
              Enterprise-grade. Trust-first. Built in Kerala, India.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" />
              <span className="text-xs font-[var(--font-mono)] text-gray-500">All Systems Operational</span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-[var(--font-mono)] text-gray-500 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#solutions" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Solutions</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Industries</a></li>
              <li><a href="#agents" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">AI Agents</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Research</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-[var(--font-mono)] text-gray-500 uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Founder</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Contact</a></li>
              <li><a href="https://www.humanessencelabs.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Website</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-[var(--font-mono)] text-gray-500 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@humanessencelabs.com" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  hello@humanessencelabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-[var(--font-mono)]">
            &copy; 2026 Human Essence Labs Pvt Ltd
          </p>
          <p className="text-gray-600 text-xs font-[var(--font-mono)]">
            Human-first AI, built in Kerala.
          </p>
        </div>
      </div>
    </footer>
  );
}
