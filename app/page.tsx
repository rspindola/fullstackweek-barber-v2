import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="p-5">
        {/* NAME FIELD */}
        <h2 className="text-xs font-bold">Olá, Ghabriel!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        {/* SEARCH INPUT*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* BOOKING FIELD */}
      </div>
    </div>
  )
}
