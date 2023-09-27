import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-around w-[50%] mx-auto">
      <Link href={"/movies"}>Go To Movies</Link>
      <Link href={"/user"}>Go To User</Link>
    </main>
  )
}
