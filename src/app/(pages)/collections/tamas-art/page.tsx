import TamasGrid from './TamasGrid'

export const metadata = {
  title: 'Tamas Art - Entities Studio',
  description: '',
}

// Avoid prerender fetch failures by rendering dynamically at request time
export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <section className="bg-[#FF6868] pb-4 flex justify-center w-full">
      <TamasGrid />
    </section>
  )
}
