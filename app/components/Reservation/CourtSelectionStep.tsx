'use client';

interface Court {
    id: number;
    name: string;
    available: boolean;
}

interface CourtSelectionStepProps {
    date: string;
    timeslot: string;
    courts: Court[];
    selectedCourt: number;
    onCourtSelect: (courtId: number) => void;
    onBack: () => void;
    getCourtPrice: (courtId: number) => number;
}

const CourtSelectionStep: React.FC<CourtSelectionStepProps> = ({
    date,
    timeslot,
    courts,
    selectedCourt,
    onCourtSelect,
    onBack,
    getCourtPrice,
}) => {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold text-black dark:text-white">
                Select a Court for {date} at {timeslot}
            </h3>
            <div className="space-y-4">
                {courts.map((court) => (
                    <button
                        key={court.id}
                        onClick={() => onCourtSelect(court.id)}
                        disabled={!court.available}
                        className={`w-full p-4 rounded-lg border text-left transition-colors ${
                            court.available
                                ? selectedCourt === court.id
                                    ? 'bg-green-600 text-white border-green-600'
                                    : 'bg-green-500 hover:bg-green-600 text-white border-green-500'
                                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 border-gray-300 cursor-not-allowed'
                        }`}
                    >
                        <div className="font-semibold">{court.name}</div>
                        <div className="text-sm opacity-90">${getCourtPrice(court.id)} / hour</div>
                        {!court.available && (
                            <div className="text-sm mt-1">Not Available</div>
                        )}
                    </button>
                ))}
            </div>
            <button
                onClick={onBack}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
                ← Back to Timeslot Selection
            </button>
        </div>
    );
};

export default CourtSelectionStep;