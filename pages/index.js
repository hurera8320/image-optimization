import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import image from "../public/masahiro-miyagi-xk0YHAn3dzk-unsplash.jpg";
import images from "../public/images";
import { useState } from "react";

export default function Home() {

  const [imageLoading , setImageLoading] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Using BlurDataUrl in NextJs</title>
        <meta name="description" content="Using BlurDataUrl in NextJs" />
      </Head>

      <main className={styles.body}>
        <h1>Using BlurDataUrl in NextJs</h1>
        <section className={styles.section}>
          <figure>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="masahiro-miyagi-xk0-YHAn3dzk-unsplash"
                layout="fill"
                placeholder="bulr"
              />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 1 is stored locally and does not use a placeholder.
            </figcaption>
          </figure>

          <figure>
            <div className={styles.imageWrapper}>
              <Image src={images[0].src} alt={image.scr} layout="fill" />
            </div>
            <figcaption className={styles.imageCaption}>
              Image 2 is stored remotely but does not use a placeholder.
            </figcaption>
          </figure>

        </section>
        <section className={styles.section}>
          {images.map((image, index) => (
            <figure key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.src}
                  priority={index%2 === 0 ? true : false}
                  placeholder="blur"
                  blurDataURL={image.blurUrl}
                  layout="fill"
                />
              </div>
              <figcaption className={styles.imageCaption}>
                Image {index + 3} is stored remotely and uses a placeholder.
                <h3>{index%2 === 0 && "Priority Image"} </h3>
              </figcaption>
            </figure>
          ))} </section>

          <section>
            <h1> Using low quality Image as placeholder </h1>
            { !imageLoading ? <Image 
            width={400}
            height={400}
            src='/trail-5yOnGsKUNGw-unsplash.jpg'
            onLoad={()=> { setImageLoading(true) }}
            onLoadingComplete={()=> { setImageLoading(false) }}
            />  : 
            <Image 
            width={400}
            height={400}
            src='/trail-5yOnGsKUNGw-unsplash_11zon.jpg'
            layout="fill"
            placeholder="blur"
            priority
            />
            }

          </section>
      </main>
    </div>
  );
}