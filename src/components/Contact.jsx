import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react';
import Section from './Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert(
      "Message Sent! Thank you for contacting us. We'll get back to you within 24 hours."
    );
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@bepro.com.bd',
      link: 'mailto:info@bepro.com.bd',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '01686395927',
      link: 'tel:+8801686395927',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'House 6 (5th Floor), Road 2/B, J Block, Baridhara. Dhaka 1212.',
      link: '#',
    },
    { icon: Clock, title: 'Hours', details: 'Mon-Fri: 9AM-6PM EST', link: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', label: 'Facebook' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
    { icon: Github, link: '#', label: 'GitHub' },
  ];

  return (
    <Section>
      <section id="contact" className="py-10 text-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-[#00FFD1]">Touch</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-gradient-to-r from-[#0E131F] to-[#000000] backdrop-blur-md rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label htmlFor={field} className="text-white capitalize">
                        {field === 'email' ? 'Email *' : 'Name *'}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        placeholder={
                          field === 'email'
                            ? 'your@email.com'
                            : 'Your full name'
                        }
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-700 
                          bg-gradient-to-r from-[#0E131F] to-[#000000] text-white 
                          focus:outline-none focus:ring-2 focus:ring-[#00FFD1] placeholder-gray-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['company', 'phone'].map(field => (
                    <div key={field}>
                      <label htmlFor={field} className="text-white capitalize">
                        {field}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === 'phone' ? 'tel' : 'text'}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={
                          field === 'phone'
                            ? '+880XXXXXXXXXX'
                            : 'Your company name'
                        }
                        className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-700 
                          bg-gradient-to-r from-[#0E131F] to-[#000000] text-white 
                          focus:outline-none focus:ring-2 focus:ring-[#00FFD1] placeholder-gray-500"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="service" className="text-white">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-700 
                      bg-gradient-to-r from-[#0E131F] to-[#000000] text-white 
                      focus:outline-none focus:ring-2 focus:ring-[#00FFD1]"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="software-development">
                      Software Development
                    </option>
                    <option value="it-consultancy">IT Consultancy</option>
                    <option value="it-training">IT Training</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-white">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-700 
                      bg-gradient-to-r from-[#0E131F] to-[#000000] text-white 
                      focus:outline-none focus:ring-2 focus:ring-[#00FFD1] resize-none placeholder-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00FFD1] text-black rounded-lg hover:opacity-90 transition"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#0E131F] to-[#000000] backdrop-blur-md rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map(info => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-800 transition"
                    >
                      <div className="w-10 h-10 bg-[#00FFD1] rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {info.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{info.details}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0E131F] to-[#000000] backdrop-blur-md rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.link}
                      className="w-10 h-10 bg-[#00FFD1] rounded-lg flex items-center justify-center hover:scale-110 transition"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-black" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0E131F] to-[#000000] backdrop-blur-md rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 mb-6">
                Schedule a free consultation to discuss your project
                requirements and how we can help bring your vision to life.
              </p>
              <a
                href="https://calendar.app.google/TyHZuwgs37EGZxW38 
"
                className="px-6 py-3 bg-[#00FFD1] text-black rounded-lg hover:opacity-90 transition"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Contact;
