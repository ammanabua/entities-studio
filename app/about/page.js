import Image from "next/image"
import Link from 'next/link'

export default function About() {
  return (
    <section className="flex min-h-screen text-center justify-center p-2 w-5/6 m-auto mt-24">
      <div className='flex-col w-full lg:p-16'>
        <Image
          src='/chimdi.png'
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt="Chimdi - Entities Studio Artist" />

        <p className='font-rubik pt-10 tracking-wider text-lg px-4'>“Making sure that dreams and moments do not fade away without being acknowledged”</p>
        <p className='uppercase font-rubik text-xl font-bold py-4'>~ chimdi</p>

        <div className='flex justify-center w-full pt-4'>
          <Image
            src='/head.png'
            width={70}
            height={46}
            alt='Entities Studio'
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />

        </div>
        <ul className="w-40 justify-between flex justify-center text-black my-4 m-auto">
          <li>Ttr.</li>
          <li>Ig.</li>
          <li>Yt.</li>
          <li>Tik.</li>
        </ul>
      </div>
    </section>
  );
}
