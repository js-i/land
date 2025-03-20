
import React from 'react'
import { UiButton } from './button';
import clsx from 'clsx';
import Link from 'next/link';

export default function Header({className=''}) {
  return (
    <header className="flex items-center border-b border-b-hover/50 max-w-[1650px] max-h-24 w-full container bg-[#F5F1EA] fixed top-0 z-50 ">
        <nav className={clsx(className, 'w-full')}>
          <ul className='flex justify-center items-center py-8 w-full'>
            <li className='pl-[78px]'>
                <UiButton id='about' size='sm' variant='outline'>
                    Обо мне
                </UiButton>
            </li>
            <li>
                <UiButton id="education" size='sm' variant='outline'>
                    Образование
                </UiButton>
            </li>
            <li>
                <UiButton id='review' size='sm' variant='outline'>
                    Отзывы
                </UiButton>
            </li>
            <li>
                <UiButton id='problems' size='sm' variant='outline'>
                    Запросы
                </UiButton>
            </li>
            <li className="ml-auto lg:pr-12">
            <UiButton size='lg' variant='primary'>
                    <Link href='https:\\t.me\cbt_doc'>Записаться на консультацию</Link>
            </UiButton>
            </li>
          </ul>
        </nav>
    </header>
    
  )
}




