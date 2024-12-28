import Loader from "@/src/components/Loader";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="w-100 h-screen flex justify-center text-4xl text-white items-center">
            <Loader />
        </div>
    )
  }