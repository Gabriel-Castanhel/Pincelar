export default function Header() {
    return (
        <header>
            <div className=" mx-auto px-4 sm:px-6 ">
                <div className="">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="h-25 w-auto"
                                src="./Logo.png"
                                alt="Logo Pincelar"
                            />  
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="/contato"
                                className="border-transparent text-white hover:border-gray-300 hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}