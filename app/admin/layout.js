import SideBar from "@/app/components/SideBar";


export default function Layout({ children }) {


    return (
        <div className="w-full flex justify-center">
            <div className="w-0 md:w-1/4">
                <SideBar />
            </div>
            <div className="w-full md:w-3/4">
                {children}
            </div>
        </div>
    )
}