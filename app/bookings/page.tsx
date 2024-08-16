import { getServerSession } from "next-auth"
import Header from "../_components/header"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import BookingItem from "../_components/booking-item"
import { getConfirmedBookings } from "../_data/get-confirmed-bookings"
import { getConcluedBookings } from "../_data/get-conclued-bookings"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return notFound()
  }

  const confirmedBookings = await getConfirmedBookings()

  const concludedBookings = await getConcluedBookings()

  return (
    <>
      <Header />

      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-gray-400">Você não tem agendamentos.</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
          </>
        )}

        {confirmedBookings.map((booking) => (
          <BookingItem
            key={booking.id}
            booking={JSON.parse(JSON.stringify(booking))}
          />
        ))}

        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
          </>
        )}
        {concludedBookings.map((booking) => (
          <BookingItem
            key={booking.id}
            booking={JSON.parse(JSON.stringify(booking))} // JSON.parse(JSON.stringify(booking)) is a workaround to avoid Prisma object mutation error when using Decimal type
          />
        ))}
      </div>
    </>
  )
}

export default Bookings
