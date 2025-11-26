'use client';

interface Court {
    id: number;
    name: string;
}

interface UserInfoStepProps {
    userName: string;
    userEmail: string;
    phone: string;
    date: string;
    timeslot: string;
    selectedCourt: number;
    courts: Court[];
    onUserInfoChange: (field: string, value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onBack: () => void;
    getCourtPrice: (courtId: number) => number;
}

const UserInfoStep: React.FC<UserInfoStepProps> = ({
    userName,
    userEmail,
    phone,
    date,
    timeslot,
    selectedCourt,
    courts,
    onUserInfoChange,
    onSubmit,
    onBack,
    getCourtPrice,
}) => {
    const selectedCourtInfo = courts.find(c => c.id === selectedCourt);

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
                Your Information
            </h3>
            
            <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => onUserInfoChange('userName', e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                               bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="Enter your full name"
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => onUserInfoChange('userEmail', e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                               bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="Enter your email"
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                    Phone Number *
                </label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => onUserInfoChange('phone', e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                               bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="Enter your phone number"
                />
            </div>

            {/* Reservation Summary */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold text-lg text-black dark:text-white mb-3">
                    Reservation Summary
                </h4>
                <div className="flex justify-between">
                    <span className="text-black dark:text-white">Date:</span>
                    <span className="text-black dark:text-white font-medium">{date}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-black dark:text-white">Time:</span>
                    <span className="text-black dark:text-white font-medium">{timeslot}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-black dark:text-white">Court:</span>
                    <span className="text-black dark:text-white font-medium">
                        {selectedCourtInfo?.name}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="text-black dark:text-white">Duration:</span>
                    <span className="text-black dark:text-white font-medium">1 hour</span>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                    <div className="flex justify-between text-lg font-bold">
                        <span className="text-black dark:text-white">Total:</span>
                        <span className="text-blue-600 dark:text-blue-400">
                            ${getCourtPrice(selectedCourt)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg"
                >
                    ← Back
                </button>
                <button
                    type="submit"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold"
                >
                    Continue to Payment
                </button>
            </div>
        </form>
    );
};

export default UserInfoStep;