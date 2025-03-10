import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Have questions about our products or need support? 
                  We're here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#CC73F8]" />
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">contact@elitehoops.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-[#CC73F8]" />
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#CC73F8]" />
                    <div>
                      <h3 className="text-white font-semibold">Address</h3>
                      <p className="text-gray-300">123 Sports Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glossy-card bg-dark-850 p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8]"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-6 py-3 rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}