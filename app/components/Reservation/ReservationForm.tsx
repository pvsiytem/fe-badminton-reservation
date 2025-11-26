'use client';

import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import DateSelectionStep from './DateSelectionStep';
import TimeslotSelectionStep from './TimeslotSelectionStep';
import CourtSelectionStep from './CourtSelectionStep';
import UserInfoStep from './UserInfoStep';
import PaymentStep from './PaymentStep';
import SuccessStep from './SuccessStep';

interface Timeslot {
  time: string;
  available: boolean;
}

interface Court {
  id: number;
  name: string;
  available: boolean;
}

interface ReservationData {
  date: string;
  timeslot: string;
  court: number;
  user_email: string;
  user_name: string;
  phone: string;
}

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [timeslots, setTimeslots] = useState<Timeslot[]>([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState('');
  const [courts, setCourts] = useState<Court[]>([]);
  const [selectedCourt, setSelectedCourt] = useState<number>(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationId, setReservationId] = useState('');

  const generateTimeslots = (selectedDate: string): Timeslot[] => {
    const times = [];
    for (let hour = 8; hour < 22; hour++) {
      const timeStr = `${hour.toString().padStart(2, '0')}:00`;
      const available = Math.random() > 0.3; // 70% available
      times.push({ time: timeStr, available });
    }
    return times;
  };

  const generateCourts = (selectedDate: string, selectedTime: string): Court[] => {
    const courtTypes = [
      { id: 1, name: "Court 1 - Basic", type: "basic" },
      { id: 2, name: "Court 2 - Basic", type: "basic" },
      { id: 3, name: "Court 3 - VIP", type: "vip" },
      { id: 4, name: "Court 4 - VIP", type: "vip" },
      { id: 5, name: "Court 5 - VVIP", type: "vvip" },
    ];

    return courtTypes.map(court => ({
      ...court,
      available: Math.random() > 0.4 // 60% available
    }));
  };

  useEffect(() => {
    if (date) {
      const availableTimeslots = generateTimeslots(date);
      setTimeslots(availableTimeslots);
    }
  }, [date]);

  useEffect(() => {
    if (date && selectedTimeslot) {
      const availableCourts = generateCourts(date, selectedTimeslot);
      setCourts(availableCourts);
    }
  }, [date, selectedTimeslot]);

  const handleDateSelect = (selectedDate: string) => {
    setDate(selectedDate);
    setSelectedTimeslot('');
    setSelectedCourt(0);
    setStep(2);
  };

  const handleTimeslotSelect = (timeslot: string) => {
    setSelectedTimeslot(timeslot);
    setStep(3);
  };

  const handleCourtSelect = (courtId: number) => {
    setSelectedCourt(courtId);
    setStep(4);
  };

  const handleUserInfoChange = (field: string, value: string) => {
    switch (field) {
      case 'userName':
        setUserName(value);
        break;
      case 'userEmail':
        setUserEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
    }
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const handleDummyPayment = async () => {
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      const reservationData: ReservationData = {
        date,
        timeslot: selectedTimeslot,
        court: selectedCourt,
        user_email: userEmail,
        user_name: userName,
        phone: phone,
      };

      // Simulate API mock reservation creation
      const mockReservation = {
        ...reservationData,
        id: `RES${Date.now()}`,
        status: 'confirmed',
        total: getCourtPrice(selectedCourt),
        booking_date: new Date().toISOString(),
      };

      setReservationId(mockReservation.id);
      setReservationSuccess(true);
      setStep(6);
      
      console.log('Reservation created:', mockReservation);
      
    } catch (error) {
      console.error('Error creating reservation:', error);
      alert('Reservation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getCourtPrice = (courtId: number) => {
    if (courtId <= 2) return 20; // Basic courts
    if (courtId <= 4) return 35; // VIP courts
    return 50; // VVIP courts
  };

  const resetForm = () => {
    setStep(1);
    setReservationSuccess(false);
    setDate('');
    setSelectedTimeslot('');
    setSelectedCourt(0);
    setUserEmail('');
    setUserName('');
    setPhone('');
    setReservationId('');
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
        Book Your Badminton Court
      </h2>

      <ProgressBar step={step} />

      {step === 1 && (
        <DateSelectionStep
          date={date}
          onDateSelect={handleDateSelect}
          onBack={handleBack}
        />
      )}

      {step === 2 && (
        <TimeslotSelectionStep
          date={date}
          timeslots={timeslots}
          selectedTimeslot={selectedTimeslot}
          onTimeslotSelect={handleTimeslotSelect}
          onBack={handleBack}
        />
      )}

      {step === 3 && (
        <CourtSelectionStep
          date={date}
          timeslot={selectedTimeslot}
          courts={courts}
          selectedCourt={selectedCourt}
          onCourtSelect={handleCourtSelect}
          onBack={handleBack}
          getCourtPrice={getCourtPrice}
        />
      )}

      {step === 4 && (
        <UserInfoStep
          userName={userName}
          userEmail={userEmail}
          phone={phone}
          date={date}
          timeslot={selectedTimeslot}
          selectedCourt={selectedCourt}
          courts={courts}
          onUserInfoChange={handleUserInfoChange}
          onSubmit={handleUserInfoSubmit}
          onBack={handleBack}
          getCourtPrice={getCourtPrice}
        />
      )}

      {step === 5 && (
        <PaymentStep
          selectedCourt={selectedCourt}
          loading={loading}
          onPayment={handleDummyPayment}
          onBack={handleBack}
          getCourtPrice={getCourtPrice}
        />
      )}

      {step === 6 && reservationSuccess && (
        <SuccessStep
          reservationId={reservationId}
          date={date}
          timeslot={selectedTimeslot}
          selectedCourt={selectedCourt}
          courts={courts}
          userName={userName}
          userEmail={userEmail}
          onReset={resetForm}
          getCourtPrice={getCourtPrice}
        />
      )}
    </div>
  );
};

export default ReservationForm;