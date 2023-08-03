import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [base64Image, setBase64Image] = useState(null);


  useEffect(() => {
    // Fetch the image and convert it to Base64
    fetch('/logo.png')
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBase64Image(reader.result);
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => console.error('Error fetching image:', error));
  }, []);
  return (
    <>

    <div className='image-container'>
      <Image
        src="/trail-5yOnGsKUNGw-unsplash.jpg"
        blurDataURL='/trail-5yOnGsKUNGw-unsplash_11zon.jpg'
        placeholder='blur'
        alt="Next.js Logo"
        width={400}
        height={400}
      />
    </div>


    </>
  )
}
