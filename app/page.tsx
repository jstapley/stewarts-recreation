'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-yellow-400">STEWARTS</span>
                <span className="text-white"> RECREATION</span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
              <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a>
            </div>

            <div className="hidden md:block">
              <a href="tel:7053823331" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105">
                Call Now
              </a>
            </div>

            <button 
              className="md:hidden text-yellow-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-500/20">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-yellow-400 py-2">Services</a>
              <a href="#about" className="block text-gray-300 hover:text-yellow-400 py-2">About</a>
              <a href="/contact" className="block text-gray-300 hover:text-yellow-400 py-2">Contact</a>
              <a href="tel:7053823331" className="block w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/20">
                  24 Hour Emergency Towing Available
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your One-Stop
                <span className="block text-yellow-400">Recreation Shop</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Full-service marine repair, snowmobile maintenance, and ATV services in Burks Falls, Ontario. 
                Expert care for all your recreational needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:7053823331" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50 text-center">
                  Call (705) 382-3331
                </a>
                <a href="#services" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all text-center">
                  Our Services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-800">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-gray-400 text-sm">Emergency Towing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">Full</div>
                  <div className="text-gray-400 text-sm">Service Shop</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">Expert</div>
                  <div className="text-gray-400 text-sm">Technicians</div>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/10 to-transparent rounded-3xl transform -rotate-6"></div>
                
                <div className="absolute inset-0 grid grid-cols-2 gap-6 p-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-yellow-400/10 transition-all hover:scale-105">
                    <svg className="w-20 h-20 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span className="text-white font-semibold">Marine</span>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-yellow-400/10 transition-all hover:scale-105">
                    <svg className="w-20 h-20 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-white font-semibold">Snowmobiles</span>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-yellow-400/10 transition-all hover:scale-105">
                    <svg className="w-20 h-20 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-white font-semibold">ATVs</span>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-yellow-400/10 transition-all hover:scale-105">
                    <svg className="w-20 h-20 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span className="text-white font-semibold">Storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive maintenance and repair for all your power sport vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Marine Services</h3>
              <p className="text-gray-400">Full-service marine repair from tune-ups to engine replacements and power head repair</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Snowmobile Services</h3>
              <p className="text-gray-400">Engine repair, steering, tune-ups, and track studding to keep you on the trails</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">ATV Services</h3>
              <p className="text-gray-400">Repairs and modifications including winch installation, heated grips, and suspension</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400 transition-all hover:transform hover:scale-105 group">
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Boat Storage</h3>
              <p className="text-gray-400">Winterization packages, storage, shrink wrapping, and pontoon pickup/delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-yellow-400">Stewarts Recreation</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Located in Burks Falls, Ontario, just 25 minutes north of Huntsville, we pride ourselves 
                in offering our customers the highest level of customer service.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We hold ourselves to high standards when it comes to servicing your power toys. Come on 
                down to our shop and speak with our technicians about any of your recreational needs.
              </p>
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Additional Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recovery of damaged or sunk vessels
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No trailer? No problem
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Brake repair specialist
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mufflers and exhaust systems
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Steering, suspensions, and alignments
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Opening Hours</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span className="font-semibold">Emergency Towing</span>
                    <span className="text-yellow-400 font-bold">24 HOURS</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <a href="tel:7053823331" className="block w-full bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-center hover:bg-yellow-500 transition-all transform hover:scale-105">
                    Call (705) 382-3331
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-yellow-400">Started?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Contact us today for expert service and repair. We are your one-stop shop for all recreational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:7053823331" className="bg-yellow-400 text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50">
              Call (705) 382-3331
            </a>
          </div>
          <div className="bg-gray-900/50 border border-yellow-400/20 rounded-2xl p-8 inline-block">
            <p className="text-gray-400 mb-2">Visit Us At:</p>
            <p className="text-white font-bold text-xl">326 Ontario Street</p>
            <p className="text-gray-400">Burks Falls, ON, Canada</p>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-yellow-400">STEWARTS</span>
                <span className="text-white"> RECREATION</span>
              </div>
              <p className="text-gray-400">
                Your one-stop shop for all recreational service needs in Burks Falls, Ontario.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-yellow-400">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-yellow-400">About</a>
                <a href="/contact" className="block text-gray-400 hover:text-yellow-400">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  <a href="tel:7053823331" className="hover:text-yellow-400 transition-colors">
                    Phone: (705) 382-3331
                  </a>
                </p>
                <p>326 Ontario Street</p>
                <p>Burks Falls, ON, Canada</p>
                <p className="text-yellow-400 font-semibold mt-4">24 Hour Emergency Towing</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Stewarts Recreation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
