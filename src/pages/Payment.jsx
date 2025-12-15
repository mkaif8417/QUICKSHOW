import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BlurCircle from '../components/BlurCircle'

const Payment = () => {
  const { state: booking } = useLocation()
  const navigate = useNavigate()

  if (!booking) {
    return (
      <div className='pt-40 text-center'>
        <p>No booking found</p>
      </div>
    )
  }

  const handlePayment = () => {
    // simulate payment success
    navigate('/payment-success', { state: booking })
  }

  return (
    <div className='relative px-6 md:px-16 lg:px-40 pt-32 min-h-screen'>
      <BlurCircle top='120px' left='100px' />
      <BlurCircle bottom='0px' right='100px' />

      <h1 className='text-xl font-semibold mb-6'>Payment</h1>

      <div className='bg-primary/8 border border-primary/20 rounded-lg p-6 max-w-xl'>
        <h2 className='text-lg font-semibold'>
          {booking.show.movie.title}
        </h2>

        <p className='text-gray-400 text-sm mt-1'>
          Seats: {booking.bookedSeats.join(', ')}
        </p>

        <p className='text-2xl font-semibold mt-4'>
          Amount: ₹{booking.amount}
        </p>

        <h3 className='mt-6 mb-3 font-medium'>
          Choose Payment Method
        </h3>

        <div className='flex flex-col gap-3'>
          <button className='border border-primary/30 rounded py-2 hover:bg-primary/20'>
            UPI (Google Pay / PhonePe)
          </button>

          <button className='border border-primary/30 rounded py-2 hover:bg-primary/20'>
            Credit / Debit Card
          </button>

          <button className='border border-primary/30 rounded py-2 hover:bg-primary/20'>
            Net Banking
          </button>
        </div>

        <button
          onClick={handlePayment}
          className='bg-primary w-full mt-6 py-2 rounded font-medium'
        >
          Pay ₹{booking.amount}
        </button>
      </div>
    </div>
  )
}

export default Payment
