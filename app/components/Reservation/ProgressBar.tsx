'use client';

interface ProgressBarProps {
    step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
    const steps = [
        { number: 1, label: "Date" },
        { number: 2, label: "Time" },
        { number: 3, label: "Court" },
        { number: 4, label: "Details" },
        { number: 5, label: "Payment" },
        { number: 6, label: "Confirm" },
    ];

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between">
                {steps.map((stepItem, index) => (
                    <div key={stepItem.number} className="flex items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                step >= stepItem.number
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                            }`}
                        >
                            {stepItem.number}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`w-12 h-1 mx-2 ${
                                    step > stepItem.number ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-xs mt-2 text-gray-500 dark:text-gray-400">
                {steps.map(stepItem => (
                    <span key={stepItem.number}>{stepItem.label}</span>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;