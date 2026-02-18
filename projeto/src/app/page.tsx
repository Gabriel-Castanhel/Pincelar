import Header from "@/components/header";
import Hero_banner from "@/components/Hero_banner";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div>
        <Header />
      </div>
      <div>
        <Hero_banner />
      </div>
    </div>
  )
}