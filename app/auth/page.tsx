'use client';

import React, { ChangeEvent, FormEvent } from 'react';
import { SiGmail } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { signUp } from 'next-auth-sanity/client';
import { toast } from 'react-hot-toast';

const defaultFormData = {
    email: '',
    name: '',
    password: '',
};

const Auth = () => {
    const [formData, setFormData] = React.useState(defaultFormData);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const user = await signUp(formData);
            if (user) {
                toast.success('Success. Please sign in.');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
        } finally {
            setFormData(defaultFormData);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Create an Account
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        Join our community and access all features with one account.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    {/* Social Login */}
                    <div className="flex items-center justify-center space-x-6 mb-8">
                        <SiGmail className="text-4xl cursor-pointer text-red-600 dark:text-red-400" />
                        <span className="text-gray-400 dark:text-gray-600">|</span>
                        <FaTwitter className="text-4xl cursor-pointer text-blue-500 dark:text-blue-400" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                           bg-white dark:bg-gray-700 text-black dark:text-white
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                           transition-all duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                           bg-white dark:bg-gray-700 text-black dark:text-white
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                           transition-all duration-300"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Password *
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                minLength={8}
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Minimum 8 characters"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                           bg-white dark:bg-gray-700 text-black dark:text-white
                                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                           transition-all duration-300"
                            />
                        </div>

                        {/* Submit Button */}
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
                                    <span>Creating Account...</span>
                                </>
                            ) : (
                                <span>Sign Up</span>
                            )}
                        </button>
                    </form>

                    {/* Sign-in Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600 dark:text-gray-300">
                            Already have an account?{' '}
                            <button className="text-blue-500 dark:text-blue-400 hover:underline font-medium">
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
