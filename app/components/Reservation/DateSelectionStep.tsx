'use client';

interface DateSelectionStepProps {
    date: string;
    onDateSelect: (date: string) => void;
    onBack: () => void;
}

const DateSelectionStep: React.FC<DateSelectionStepProps> = ({ 
    date, 
    onDateSelect, 
    onBack 
}) => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
                Select a Date
            </h3>
            <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => onDateSelect(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-black dark:text-white"
            />
            {date && (
                <button
                    onClick={onBack}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                    ← Change Date
                </button>
            )}
        </div>
    );
};

export default DateSelectionStep;