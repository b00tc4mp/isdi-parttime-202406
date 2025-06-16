import CalendarComponent from "../../components/Calendar.jsx";

const Calendar = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 p-4">
      <div className="w-full max-w-6xl">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Calendar;