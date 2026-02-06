'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicleType: '',
          message: ''
        });
      } else {
        console.error('API Error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="text-2xl font-bold">
                <span className="text-yellow-400">STEWARTS</span>
                <span className="text-white"> RECREATION</span>
              </div>
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a href="/#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</a>
              <a href="/#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a>
              <a href="/contact" className="text-yellow-400 font-semibold">Contact</a>
            </div>

            <div className="hidden md:block">
              <a href="tel:7053823331" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or need service? Fill out the form below or give us a call. 
            We're here to help with all your recreational vehicle needs.
          </p>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:7053823331" className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400 transition-all hover:scale-105 group">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400/10 p-4 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Us</div>
                  <div className="text-lg font-bold text-white">(705) 382-3331</div>
                </div>
              </div>
            </a>

            <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400/10 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Emergency Towing</div>
                  <div className="text-lg font-bold text-yellow-400">24/7 Available</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400/10 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Visit Us</div>
                  <div className="text-lg font-bold text-white">326 Ontario St</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-2xl p-6 sm:p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Send Us a <span className="text-yellow-400">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                      placeholder="(705) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-300 mb-2">
                      Vehicle Type
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    >
                      <option value="">Select vehicle type</option>
                      <option value="boat">Boat / Marine</option>
                      <option value="snowmobile">Snowmobile</option>
                      <option value="atv">ATV / Side-by-Side</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors resize-none"
                      placeholder="Tell us about your service needs..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <p className="text-green-400 font-semibold">Thank you! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-red-400 font-semibold">Something went wrong. Please call us instead.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black px-8 py-5 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.4419267893895!2d-79.39180492340473!3d45.62252287107436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2acbe0b0b0b0b1%3A0x1234567890abcdef!2s326%20Ontario%20St%2C%20Burk's%20Falls%2C%20ON%20P0A%201C0!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stewarts Recreation Location"
                />
              </div>

              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span className="font-semibold">Emergency Towing</span>
                    <span className="text-yellow-400 font-bold">24 HOURS</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-yellow-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Visit Our Shop</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="text-xl font-semibold text-white">326 Ontario Street</p>
                  <p>Burk's Falls, ON P0A 1C0</p>
                  <p>Canada</p>
                  <p className="pt-4 text-sm text-gray-400">
                    Located 25 minutes north of Huntsville in beautiful Burk's Falls
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="tel:7053823331"
          className="flex items-center justify-center bg-yellow-400 text-black w-16 h-16 rounded-full shadow-2xl hover:bg-yellow-500 transition-all transform hover:scale-110 animate-pulse"
          aria-label="Call Now"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}