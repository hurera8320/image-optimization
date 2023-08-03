import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>

    <div className='image-container'>
      <Image
        src="/trail-5yOnGsKUNGw-unsplash.jpg"
        eager
        alt="Next.js Logo"
        width={400}
        height={400}
      />
    </div>


    </>
  )
}
