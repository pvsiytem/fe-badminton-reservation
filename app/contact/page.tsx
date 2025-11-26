'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 duration-300">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have questions about our badminton courts or booking process? 
                        We're here to help you get the best playing experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Reach out to us through any of the following channels. 
                                We typically respond within 24 hours.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500 p-3 rounded-full">
                                    <FaPhone className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300">666-666-666</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri, 9AM-6PM</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-500 p-3 rounded-full">
                                    <FaEnvelope className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black dark:text-white">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300">company@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-red-500 p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black dark:text-white">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Wakazho Road<br />
                                        Indiana, Statet 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-500 p-3 rounded-full">
                                    <FaClock className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black dark:text-white">Operating Hours</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Monday - Sunday: 7:00 AM - 10:30 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                            Send us a Message
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                                   bg-white dark:bg-gray-700 text-black dark:text-white
                                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                   transition-all duration-300"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                                   bg-white dark:bg-gray-700 text-black dark:text-white
                                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                   transition-all duration-300"
                                        placeholder="Your email address"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                               bg-white dark:bg-gray-700 text-black dark:text-white
                                               focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                               transition-all duration-300"
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                               bg-white dark:bg-gray-700 text-black dark:text-white
                                               focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                               transition-all duration-300 resize-none"
                                    placeholder="Please describe your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 
                                           text-white py-4 px-6 rounded-lg font-semibold
                                           transition-all duration-300 transform hover:-translate-y-1
                                           flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="text-lg" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
                        Frequently Asked Questions
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold text-black dark:text-white mb-3">
                                How far in advance can I book a court?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                You can book courts up to 30 days in advance. We recommend booking early for peak hours and weekends.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold text-black dark:text-white mb-3">
                                What's your cancellation policy?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Free cancellation up to 24 hours before your booking. Later cancellations may incur a fee.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold text-black dark:text-white mb-3">
                                Do you provide equipment?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Yes! We offer racket and shuttlecock rentals. You can add them during the booking process.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-semibold text-black dark:text-white mb-3">
                                Is there parking available?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We have free parking spaces for all our customers, located right next to the venue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;