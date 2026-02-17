import Header from "@/components/header";

export default function Landigpage() {
  return (
    <div className="h-screen">
      <div className="p-4">
        <Header />
      </div>
      <div className="h-full">
        <img src="/fundo-landing.png" className="h-full w-full object-cover"/>
      </div>
    </div>
  )
}