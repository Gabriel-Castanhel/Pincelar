import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white w-full border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex gap-3 items-center flex-shrink-0">
            <img
              src="./logo-cheia.png"
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-2xl md:text-3xl font-bold font-banner tracking-tight">
              Pincelar
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8 text-base font-medium font-banner">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/artistas"
                  className="hover:text-orange-500 transition-colors"
                >
                  artistas
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-orange-500 transition-colors"
                >
                  sobre
                </Link>
              </li>
            </ul>
          </nav>

          {/* MENU DIREITO (Escondido no Mobile) */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center font-banner">
              <li>
                <Link href="/contato" className="hover:text-orange-500">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-all"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden flex items-center">
            <button className="text-gray-600 focus:outline-none">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
