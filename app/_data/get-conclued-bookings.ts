"use server"

import { getServerSession } from "next-auth/next"
import { db } from "../_lib/prisma"
import { authOptions } from "../_lib/auth"

export const getConcluedBookings = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user) return []

  return db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })
}
