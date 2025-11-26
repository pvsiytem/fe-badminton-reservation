'use client';

interface PaymentStepProps {
    selectedCourt: number;
    loading: boolean;
    onPayment: () => void;
    onBack: () => void;
    getCourtPrice: (courtId: number) => number;
}

const PaymentStep: React.FC<PaymentStepProps> = ({
    selectedCourt,
    loading,
    onPayment,
    onBack,
    getCourtPrice,
}) => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
                Payment Information
            </h3>
            
            <div className="bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-600 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    💡 <strong>Demo Mode:</strong> This is a dummy payment gateway. No real payment will be processed.
                </p>
            </div>

            {/* Mock Payment Form */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2">
                        Card Number
                    </label>
                    <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                   bg-white dark:bg-gray-700 text-black dark:text-white"
                        disabled
                    />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-black dark:text-white mb-2">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            placeholder="12/25"
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                       bg-white dark:bg-gray-700 text-black dark:text-white"
                            disabled
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-black dark:text-white mb-2">
                            CVV
                        </label>
                        <input
                            type="text"
                            placeholder="123"
                            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                                       bg-white dark:bg-gray-700 text-black dark:text-white"
                            disabled
                        />
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between text-lg font-bold">
                    <span className="text-black dark:text-white">Amount to Pay:</span>
                    <span className="text-green-600 dark:text-green-400">
                        ${getCourtPrice(selectedCourt)}
                    </span>
                </div>
            </div>

            <div className="flex space-x-4">
                <button
                    onClick={onBack}
                    className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg"
                >
                    ← Back
                </button>
                <button
                    onClick={onPayment}
                    disabled={loading}
                    className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold"
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Processing Payment...
                        </div>
                    ) : (
                        `Confirm Payment - $${getCourtPrice(selectedCourt)}`
                    )}
                </button>
            </div>
        </div>
    );
};

export default PaymentStep;