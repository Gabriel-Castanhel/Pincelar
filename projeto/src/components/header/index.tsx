import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white w-full flex justify-center items-center text-black">
      <div className="shadow-xl/15 gap-6 w-full flex justify-around items-center">
        <Link href="/" className="flex  gap-3 items-center">
          <img src="./logo.png" alt="Logo" className="w-15 h-15" />
          <span className="text-4xl font-banner">Pincelar</span>
        </Link>

        <nav>
          <ul className="flex gap-6 text-lg font-banner justify-center items-center">
            <li><Link href="/" className="hover:text-1">catálogo</Link></li>
            <li><Link href="/sobre" className="hover:text-1">artistas</Link></li>
            <li><Link href="/contato" className="hover:text-1">sobre</Link></li>
          </ul>
        </nav>

        <nav aria-label="Navegação principal">
          <ul className="flex gap-6 text-lg font-banner justify-center items-center">
            <li><Link href="/" className="hover:text-1">Home</Link></li>
            <li><Link href="/contato" className="hover:text-1">Contato</Link></li>
            <li>
              <Link href={"/login"} className="hover:text-1">
                Login
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header >

  )
}
