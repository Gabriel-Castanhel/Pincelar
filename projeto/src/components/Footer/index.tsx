export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[var(--color-3)] pb-10">
          
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-1)]">
              Pincelar
            </h2>
            <p className="mt-4 text-sm text-gray-200 leading-relaxed">
              Criando experiências digitais modernas e
              impactantes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-5)]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[var(--color-1)] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-1)] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-1)] transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-1)] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--color-6)]">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-200">
              <li>Email: sac.pincelar@gmail.com</li>
              <li>Telefone: (48) 98847-9775 </li>
              <li className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/pncelar/" about="blank_" className="hover:text-[var(--color-1)] transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/gabriel-castanhel-b63a45312/" about="blank_" className="hover:text-[var(--color-5)] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Pincelar. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0 text-[var(--color-2)]">
            Desenvolvido com criatividade 🎨
          </p>
        </div>

      </div>
    </footer>
  );
}