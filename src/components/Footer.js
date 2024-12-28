import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  

  return (
    <section className="bg-black w-full flex-col items-center pt-32 text-center pb-2 font-krona">
        <div className="flex justify-center">
            <Link href='/public'>
                <Image
                src="/footerlogo.png"
                width={220}
                height={120}
                alt="Entities Studio"
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            </Link>
        </div>
      <h2 className="text-white text-xl my-5">ENTITIES.STUDIO</h2>
      <ul className="w-40 justify-between flex justify-center text-white my-8 m-auto">
        <li>
          <a href='https://www.twitter.com/chimdidaentity' target="_blank" rel="noopener noreferrer" className="">
          Ttr.
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/entities_universe' target="_blank" rel="noopener noreferrer" className="">
            Ig.
          </a>
        </li>

        <li>
          <a href='https://www.youtube.com/@chimdidaentity' target="_blank" rel="noopener noreferrer" className="">
            Yt.
          </a>
        </li>

        <li>
          <a href='https://www.tiktok.com/@entities.studio' target="_blank" rel="noopener noreferrer" className="">
            Tik.
          </a>
        </li>
      </ul>

      <div className="text-white text-lg flex m-auto justify-between w-72 md:w-96">
        <h2>
          <Link href='/collections'>
            Projects
          </Link>
        </h2>
        <h2>
          <Link href='/about'>
            About
          </Link>
        </h2>
        <h2>
          <Link href='/privacy'>
            Privacy
          </Link>
        </h2>
      </div>

      <p className="text-white text-sm font-light font-rubik my-3"><i>report an issue</i></p>

      <p className="text-white text-sm font-medium font-rubik mt-32">&copy; {(new Date().getFullYear())} Entities Studio. <span className="font-light">Built in my </span><span className="underline">Sparetime</span></p>
    </section>
  );
}

export default Footer