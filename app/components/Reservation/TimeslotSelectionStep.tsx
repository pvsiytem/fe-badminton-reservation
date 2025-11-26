'use client';

interface Timeslot {
    time: string;
    available: boolean;
}

interface TimeslotSelectionStepProps {
    date: string;
    timeslots: Timeslot[];
    selectedTimeslot: string;
    onTimeslotSelect: (timeslot: string) => void;
    onBack: () => void;
}

const TimeslotSelectionStep: React.FC<TimeslotSelectionStepProps> = ({
    date,
    timeslots,
    selectedTimeslot,
    onTimeslotSelect,
    onBack,
}) => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
                Select a Timeslot for {date}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeslots.map((slot) => (
                    <button
                        key={slot.time}
                        onClick={() => onTimeslotSelect(slot.time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border transition-colors ${
                            slot.available
                                ? selectedTimeslot === slot.time
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500'
                                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-gray-300 cursor-not-allowed'
                        }`}
                    >
                        {slot.time}
                        {!slot.available && (
                            <div className="text-xs mt-1">Unavailable</div>
                        )}
                    </button>
                ))}
            </div>
            <button
                onClick={onBack}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
                ← Back to Date Selection
            </button>
        </div>
    );
};

export default TimeslotSelectionStep;