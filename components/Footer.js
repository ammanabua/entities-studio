import Image from "next/legacy/image"
import Link from "next/link"

const Footer = () => {
  return (
    <section className="bg-black w-full flex-col items-center pt-32 text-center pb-2">
      <Link href='/'>
        <div className="flex justify-center">
          <Image
            src="/footerlogo.png"
            width={220}
            height={120}
            alt="Entities Studio"
          />
        </div>
      </Link>
      <h2 className="text-white text-xl my-5">ENTITIES.STUDIO</h2>
      <ul className="w-40 justify-between flex justify-center text-white my-5 m-auto">
        <li>Ttr.</li>
        <li>Ig.</li>
        <li>Yt.</li>
        <li>Tik.</li>
      </ul>

      <div className="text-white text-lg flex m-auto justify-between w-80 md:w-96">
        <h2>Projects</h2>
        <h2>About</h2>
        <h2>Privacy</h2>
      </div>

      <p className="text-white font-rubik my-3">report an issue</p>

      <p className="text-white text-sm font-rubik mt-32">&copy; 2022 Entities Studio. Built in my <br /><span className="underline font-medium">Sparetime</span></p>
    </section>
  )
}

export default Footer