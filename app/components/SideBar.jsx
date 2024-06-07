import Link from "next/link";

export default function SideBar() {


    return (
        <nav className="bg-blue-200">
            <Link href="/">
                Overview
            </Link>
        </nav>
    )
}