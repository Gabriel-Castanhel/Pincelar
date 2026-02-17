import Link from "next/link";

export default function Header() {
  return (
<div className="absolute w-full text-white p-10">
  <div className="gap-6 w-full flex justify-between items-center">
    <h1 className="text-5xl font-bold">Pincelar</h1>

    <ul className="flex gap-6 text-lg font-medium justify-center items-center">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/sobre">Sobre</Link></li>
      <li><Link href="/contato">Contato</Link></li>
      <li>
        <Link href="/login" className="flex justify-center items-center w-25 h-8 border border-white gap-10">
          Login
        </Link>
      </li>
    </ul>
  </div>
</div>

  )
}
