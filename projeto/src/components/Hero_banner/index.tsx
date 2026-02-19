import React from 'react'

export default function Index() {
    return (
        // Substituí h-225 (fixo) por py-20 (padding vertical) para o conteúdo respirar
        <div className="w-full min-h-[600px] bg-gradient-to-br from-[#F26E10] to-[#550F8F] text-white flex flex-col items-center justify-center p-6 md:p-12">
            
            {/* O container agora é flex-col no mobile e flex-row no desktop (md:) */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-7xl w-full'>
                
                {/* Texto: largura total no mobile e limitada no desktop */}
                <div className='w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left'>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Descubra Arte Autêntica da Comunidade
                    </h1>
                    <p className='text-lg md:text-2xl opacity-90'>
                        Conectamos artistas talentosos com apaixonados por arte. Cada obra conta uma história única.
                    </p>
                </div>

                {/* Vídeo: Responsivo com aspect-video */}
                <figure className='w-full lg:w-1/2 max-w-[800px]'>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <iframe 
                            src="https://www.youtube.com/embed/zQGQLEE1nQs?si=rG-iIf-bl132ZQgE" 
                            className='absolute top-0 left-0 w-full h-full' 
                            allow="autoplay;攻击; encrypted-media; picture-in-picture"
                            title="YouTube video"
                        ></iframe>
                    </div>
                </figure>
            </div>
        </div>
    )
}