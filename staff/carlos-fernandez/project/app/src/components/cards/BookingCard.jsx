import React from "react";
import DeleteBookingButton from "../buttons/DeleteBookingButton";

function BookingCard({ bookings, onDelete }) {
  return (
    <div>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="p-4 flex justify-center">
            <div className="relative bg-customBackgroundBlue flex items-center w-full custom-2sm:w-1/2 sm:h-48 border border-gray-300 rounded-2xl shadow-lg sm:p-8">
              <div className="flex justify-between items-center w-full flex-col custom-2xl:flex-row custom-2xl:items-center">
                <div className="flex flex-wrap justify-center custom-2xl:justify-center items-center w-full">
                  <h2 className="text-black font-bold text-xl sm:text-3xl mb-2 xl:mb-0 ml-2 sm:ml-0">
                    {booking.dogNames}
                  </h2>
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-4 custom-2xl:justify-center custom-2xl:w-full">
                  <div className="w-[117.27px] flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 bg-customBackground text-black">
                    <span className="flex justify-center">📅</span>
                    <span className="hidden sm:block text-center">
                      Fecha entrada
                    </span>
                    <p className="text-center"> {booking.startDate}</p>
                  </div>
                  <div className="min-w-[100px] flex flex-col items-center justify-center border border-gray-300 rounded-lg p-2 bg-customBackground text-black">
                    <span className="flex justify-center">📅</span>
                    <span className="hidden sm:block text-center">
                      Fecha salida
                    </span>
                    <p className="text-center"> {booking.endDate}</p>
                  </div>
                  <DeleteBookingButton onDelete={() => onDelete(booking.id)} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingCard;
