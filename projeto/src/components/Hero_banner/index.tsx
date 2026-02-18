import React from 'react'

export default function index() {
    return (
        <div className="bg-gradient-to-br from-[#F26E10] to-[#550F8F] text-white h-225 p-4 flex flex-col items-center justify-center gap-6">
            <div className='p-4 flex  items-center justify-center gap-20'>
                <div className='w-150 whitespace-normal flex flex-col gap-6'>
                    <h1 className="text-5xl font-banner ">Descubra Arte Autêntica da Comunidade</h1>
                    <p className='text-2xl font-banner'>Conectamos artistas talentosos com apaixonados por arte. Cada obra conta uma história única.</p>
                </div>
                <figure>
                    <iframe src="https://www.youtube.com/embed/zQGQLEE1nQs?si=rG-iIf-bl132ZQgE" className='h-140 w-250 aspect-video rounded-xl drop-shadow-xl/50' allow="autoplay; encrypted-media; control; picture-in-picture"></iframe>
                </figure>
            </div>
        </div>
    )
}
