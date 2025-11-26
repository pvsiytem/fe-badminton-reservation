'use client';

// Fix the import path - use correct relative path
import ReservationForm from '../components/Reservation/ReservationForm';

const ReservationPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Book Your Court
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Reserve your perfect badminton court in just a few clicks. 
                        Choose your date, time, and court type for an unforgettable game.
                    </p>
                </div>
                <ReservationForm />
            </div>
        </div>
    );
};

export default ReservationPage;