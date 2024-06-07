import SideBar from "@/app/components/SideBar";


export default function Layout({ children }) {


    return (
        <div className="w-full flex justify-center">
            <div className="w-1/4">
                <SideBar />
            </div>
            <div className="w-3/4">
                {children}
            </div>
        </div>
    )
}