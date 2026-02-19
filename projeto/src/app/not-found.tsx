import Header from '@/components/Header'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <Header />
        <h1 className='text-4xl text-center mt-20'>Ops... Página Não Encontrada</h1>
        <p className='text-center mt-5'>A página que você procurou não foi encontrada.</p>
        <p className='text-center mt-5'>Por favor, volte para a página inicial e tente novamente.</p>
      
    </div>
  )
}
