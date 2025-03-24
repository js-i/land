import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
        <footer className="bg-primary min-h-140 max-w-[1650px] w-full overflow-hidden">
            <div className='md:border-b border-b-white flex flex-col md:flex-row justify-between items-center md:py-12 md:px-20 gap-3 '>
                <div className='mt-12 mb-8 md:mb-14'>
                    <Link href='#start' className='text-white rounded-full px-12 md:px-6 py-4 outline flex-none text-nowrap w-full before:content-["↑"] before:text-3xl before:mr-3 before:bottom-[-20%] md:content-[""]'>Вернуться в начало</Link>
                </div>
                <div className='text-white p-4 text-xs tracking-tight md:w-1/2'>Консультации являются психологической помощью и не заменяют медицинскую или психиатрическую помощь. Если у вас есть выраженные психические расстройства или требуется медикаментозное лечение, рекомендуем обратиться к врачу-психиатру в очном формате.</div>
            </div>
            <div className='border-t border-white md:border-none flex flex-col md:flex-row gap-6 md:justify-between px-4 py-8 mt-2 md:py-12 md:px-20'>
                <div className='text-white/70 text-xs md:text-base'>
                    © 2025 Георгий Меньшиков
                </div>
                <p className='text-white/70 text-xs md:text-base'>
                    Мы не собираем и не храним ваши персональные данные на сайте. Все обращения осуществляются напрямую через Telegram и WhatsApp.
                </p>
            </div>
        </footer>
  )
}
