import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'


export const metadata: Metadata = {
  title: 'Movie Hub Next Application',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <div className='w-[90%] mx-auto max-w-screen-lg h-full'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
