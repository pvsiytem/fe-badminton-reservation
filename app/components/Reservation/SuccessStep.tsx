'use client';

interface Court {
    id: number;
    name: string;
}

interface SuccessStepProps {
    reservationId: string;
    date: string;
    timeslot: string;
    selectedCourt: number;
    courts: Court[];
    userName: string;
    userEmail: string;
    onReset: () => void;
    getCourtPrice: (courtId: number) => number;
}

const SuccessStep: React.FC<SuccessStepProps> = ({
    reservationId,
    date,
    timeslot,
    selectedCourt,
    courts,
    userName,
    userEmail,
    onReset,
    getCourtPrice,
}) => {
    const selectedCourtInfo = courts.find(c => c.id === selectedCourt);

    return (
        <div className="text-center space-y-6">
            <div className="text-green-500 text-6xl">✓</div>
            <h3 className="text-2xl font-bold text-black dark:text-white">
                Reservation Confirmed!
            </h3>
            <p className="text-green-600 dark:text-green-400 font-semibold">
                Booking ID: {reservationId}
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg space-y-3 text-left">
                <h4 className="font-semibold text-lg text-black dark:text-white mb-4 text-center">
                    Reservation Details
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
                <div className="flex justify-between">
                    <span className="text-black dark:text-white">Name:</span>
                    <span className="text-black dark:text-white font-medium">{userName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-black dark:text-white">Email:</span>
                    <span className="text-black dark:text-white font-medium">{userEmail}</span>
                </div>
                <div className="border-t border-gray-300 dark:border-gray-600 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                        <span className="text-black dark:text-white">Amount Paid:</span>
                        <span className="text-green-600 dark:text-green-400">
                            ${getCourtPrice(selectedCourt)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    onClick={onReset}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold"
                >
                    Book Another Court
                </button>
                <button
                    onClick={() => window.print()}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold"
                >
                    Print Receipt
                </button>
            </div>
        </div>
    );
};

export default SuccessStep;