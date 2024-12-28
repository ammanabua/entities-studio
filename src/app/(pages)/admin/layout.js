import SideBar from "@/src/components/SideBar";


export default function Layout({ children }) {


    return (
        <div className="w-full flex justify-center">
            <div className="w-0 md:w-1/5">
                <SideBar />
            </div>
            <div className="w-full md:w-4/5">
                {children}
            </div>
        </div>
    )
}