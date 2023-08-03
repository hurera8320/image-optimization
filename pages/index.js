import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <div className='image-container'>
    <Image
        src="/1690525371exotic-beach-in-the-summer.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
      />
      <Image
        src="/1690525371exotic-beach-in-the-summer.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        src="/trail-5yOnGsKUNGw-unsplash.jpg"
        blurDataURL='/notebook-svgrepo-com.svg'
        alt="Next.js Logo"
        width={400}
        height={400}
      />
      <Image
        src="/1690525371exotic-beach-in-the-summer.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        src="/1690525371exotic-beach-in-the-summer.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        src="/1690525371exotic-beach-in-the-summer.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
    </div>
    <div className='image-container'>
    <Image
        src="/notebook-svgrepo-com.svg"
        alt="Vercel Logo"
        width={400}
        height={400}
      />
      <Image
        src="/notebook-svgrepo-com.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        src="/notebook-svgrepo-com.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />

      <Image
        src="/notebook-svgrepo-com.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        src="/notebook-svgrepo-com.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
      <Image
        src="/notebook-svgrepo-com.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
      />
    </div>


    </>
  )
}
