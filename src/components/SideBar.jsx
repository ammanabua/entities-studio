import Link from "next/link";

export default function SideBar() {


    return (
        <nav className="bg-white text-black text-xl font-rubik flex flex-col font-thin h-full pl-4 py-4 space-y-4">
            <Link href="/public">
                Overview
            </Link>
            <Link href="/public">
                Available Pieces
            </Link>
            <Link href="/public">
                Collections
            </Link>
            <Link href="/public">
                Events
            </Link>
            <Link href="/public">
                Orders
            </Link>
        </nav>
    )
}