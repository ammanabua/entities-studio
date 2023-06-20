import Image from "next/image"
import Link from "next/link"

export default function Navbar () {

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return(
        <nav className="font-krona flex w-full align-center justify-between box-border top-0 left-0 right-0 p-2">
            <Link href="/">
                <Image
                    src="/head.png"
                    width={95}
                    height={70}
                    alt="Entities Studio" 
                />
            </Link>

            <ul className="justify-between items-center w-1/4 list-none font-krona text-lg hidden lg:flex space-x-8">
                <Link className="hover:underline" href='/collections'>Collections</Link>
                <Link className="hover:underline" href='/events'>Events</Link>
                <Link className="hover:underline" href='/about'>Bio</Link>
            </ul>

            <div className="lg:invisible flex items-center">
                <button className="outline-none mobile-menu-button p-4">
                <svg
                    className="w-6 h-6 text-black"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
            </div>
            <div className="mobile-menu absolute bg-white">
                <ul className="">
                    <Link href="/collections" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Collections</Link>
                    <Link href="/events" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Events</Link>
                    <Link href="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Bio</Link>
                </ul>
            </div>
        </nav>
    )
}