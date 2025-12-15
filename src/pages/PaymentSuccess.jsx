import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const { state: booking } = useLocation()
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      <div className='bg-primary/10 border border-primary/20 rounded-lg p-8 text-center max-w-md'>
        <h1 className='text-2xl font-semibold mb-3'>
          Payment Successful
        </h1>

        <p className='text-gray-400 mb-4'>
          Your booking is confirmed
        </p>

        {booking && (
          <>
            <p className='font-medium'>
              {booking.show.movie.title}
            </p>
            <p className='text-sm text-gray-400'>
              Seats: {booking.bookedSeats.join(', ')}
            </p>
          </>
        )}

        <button
          onClick={() => navigate('/my-bookings')}
          className='bg-primary mt-6 px-6 py-2 rounded font-medium'
        >
          Go to My Bookings
        </button>
      </div>
    </div>
  )
}

export default PaymentSuccess
