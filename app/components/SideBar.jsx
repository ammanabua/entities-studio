import Link from "next/link";

export default function SideBar() {


    return (
        <nav className="bg-white text-black text-xl font-rubik flex flex-col font-thin h-full pl-4 py-4 space-y-4">
            <Link href="/">
                Overview
            </Link>
            <Link href="/">
                Available Pieces
            </Link>
            <Link href="/">
                Collections
            </Link>
            <Link href="/">
                Events
            </Link>
            <Link href="/">
                Orders
            </Link>
        </nav>
    )
}