import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About - Entities Studio',
  description: ''
}

export default function About() {
  return (
    <section className="flex min-h-screen text-center justify-center p-2 w-5/6 m-auto mt-18">
      <div className="flex-col w-full lg:p-16">
        <Image
          src="/chimdi.png"
          width={0}
          height={0}
          sizes="50vw"
          className="w-1/2 m-auto h-auto"
          alt="Chimdi - Entities Studio Artist"
        />

        <p className="font-rubik pt-10 tracking-wider text-lg px-4">
          “Making sure that dreams and moments do not fade away without being acknowledged”
        </p>
        <p className="uppercase font-rubik text-xl font-bold py-4">~ chimdi</p>

        <div className="flex justify-center w-full pt-4">
          <Image
            src="/head.png"
            width={70}
            height={46}
            alt="Entities Studio"
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        <ul className="w-40 justify-between flex text-black my-4 m-auto child-hover:text-white child-hover:transition child-hover:duration-400 child:cursor-pointer">
          <li>
            <a href="https://twitter.com/tiff2chimdi" target="_blank" rel="noopener noreferrer" className="">
              Ttr.
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/entities.studio/" target="_blank" rel="noopener noreferrer" className="">
              Ig.
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/channel/UC1EMt330GR8Xlyw8VQxtpYA/" target="_blank" rel="noopener noreferrer" className="">
              Yt.
            </a>
          </li>

          <li>
            <a href="https://www.tiktok.com/@chimdi_talks" target="_blank" rel="noopener noreferrer" className="">
              Tik.
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
