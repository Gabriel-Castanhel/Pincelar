import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white shadow-md">
        <Header />
      </div>

      <div className="bg-gray-100 size-full flex items-center justify-center">
        <img src="background_home.jpg" alt="Background" className="h-100 size-full object-cover mb-8" />

      </div>
    </div>
  )
}