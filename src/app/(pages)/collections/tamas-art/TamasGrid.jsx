import Link from 'next/link';
import Image from 'next/image';
import { getTamasArt } from "@/lib/data";

export default async function TamasGrid (){

    const collection = await getTamasArt();


  return (
    <div className='flex-col'>
        <h2 className='font-barrio text-3xl text-center py-16'>Tamas Art</h2>
        <div className='grid grid-cols-1 align-center sm:grid-cols-2 justify-center lg:grid-cols-3 w-full px-16'>
           {collection.map((item) => (

               <div className='m-auto w-2/3' key={item._id}>
                    <Link href={`/collections/tamas-art/${item.slug}`}>
                        <Image
                            src={item.url}
                            width={258}
                            height={197}
                            alt={item.title}
                            className="w-full h-auto"
                            />
                        <p className='underline text-xl mt-8'>Art</p>
                        <p className='text-3xl'>{`“${item.title}”`}</p>

                    </Link>
                </div>
            ))}         
        </div>
    </div>
  )
}

