import Image from "next/image"
import Link from "next/link"

const Featured = () => {
  return (
    <div>
    <section className='w-full mb-8'>
        <div className='justify-center flex border-dotted border-8 border-black flex rounded-3xl p-5'>
            <Image
                src="/family-portrait.png"
                width={1440}
                height={900}
                alt="Family Portrait"
                style={{
                maxWidth: "100%",
                height: "auto"
                }} 
            />
        </div>
        <div className='w-full text-center my-16 underline font-bold text-2xl'>
            <Link href='/collections/family-portrait'>
                🍃Family Portrait🍃
            </Link>
        </div>
    </section>
    <section className='w-full flex-col'>
        <div className='justify-center flex border-dotted border-8 border-black flex rounded-3xl'>
        <Image
            src="/tamas-art.png"
            width={1440}
            height={900}
            alt='Tamas Art'
            style={{
            maxWidth: "100%",
            height: "auto"
            }} />
        </div>
        <h2 className='text-center w-full underline font-bold text-2xl my-20'>
        <Link href="/collections/tamas-art">
            ✨Tama's Art✨
        </Link>
        </h2>
    </section>
  </div>
  )
}

export default Featured