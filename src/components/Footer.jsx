import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">Random Video Call</h3>
          <p className="mt-3 text-sm text-gray-600">A premium-looking demo built with smooth gradients, soft shadows, and friendly UI.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h4>
          <p className="mt-3 text-sm text-gray-600">support@example.com</p>
          <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#how-it-works" className="hover:text-indigo-600">How it works</a></li>
            <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
            <li><a href="#demo" className="hover:text-indigo-600">Demo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Random Video Call Demo. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
