
import Link from 'next/link'

export default function Home() {
  return (
    <main className="columns-6 w-[100%] mx-auto h-screen bg-slate-500">
      <Link href={"/movies"}>Go To Movies</Link>
      <Link href={"/user"}>Go To User</Link>
    </main>
  )
}
