'use client';

import { FC } from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
};

const ClientSide: FC<Props> = ({ heading1, section2 }) => {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Section */}
                <div className="space-y-10">
                    {heading1}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-6">
                        {[
                            { label: "Courts Available", endValue: 15 },
                            { label: "Happy Players", endValue: 2000 },
                            { label: "Bookings/Day", endValue: 150 },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                            >
                                <p className="font-bold text-3xl md:text-4xl text-blue-500 dark:text-blue-400">
                                    <CountUpNumber endValue={item.endValue} duration={3000} />
                                </p>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section – Venue Types */}
                <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { label: "Basic Venue", endValue: 140 },
                            { label: "VIP Venue", endValue: 520 },
                            { label: "VVIP Venue", endValue: 200 },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                            >
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                                    {item.label}
                                </p>

                                <p className="font-bold text-2xl md:text-4xl text-blue-500 dark:text-blue-400 mt-2">
                                    <CountUpNumber endValue={item.endValue} duration={2500} />
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Scrolling Images Section */}
                    {section2}
                </div>

            </div>
        </section>
    );
};

export default ClientSide;