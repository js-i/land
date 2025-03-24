'use client'
import React, { useState } from 'react'
import { UiButton } from './button';
import clsx from 'clsx';
import Link from 'next/link';

export default function Header({className=''}) {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleClick() {
    setIsOpen(!isOpen)
  }  

  return (
    <header className={`flex items-center ${isOpen ? 'flex-col-reverse' : 'flex-row'} opacity-95 max-w-[1650px] md:max-h-24 w-full container bg-[#F5F1EA] fixed top-0 z-50 `}>
         <div className={`md:hidden  bg-background w-full transition-all duration-300 ease-in-out ${
                    isOpen ? 'block' : 'hidden'
                }`}
            >
            <nav className="flex flex-col items-center space-y-4 py-4">
                <Link
                    href="#about"
                    onClick={handleClick}
                    className="text-[#31322C] hover:text-gray-600"
                >
                    Обо мне
                </Link>
                <Link
                    href="#problems"
                    onClick={handleClick}
                    className="text-[#31322C] hover:text-gray-600"
                >
                    Запросы
                </Link>
                <Link
                    href="#review"
                    onClick={handleClick}
                    className="text-[#31322C] hover:text-gray-600"
                >
                    Отызывы
                </Link>
                <Link
                    href="#service"
                    onClick={handleClick}
                    className="text-[#31322C] hover:text-gray-600"
                >
                    Услуги
                </Link>
                <Link className='bg-primary text-white px-4 py-2 rounded-full' onClick={handleClick} href='#contacts'>Записаться на консультацию</Link>
          </nav>
        </div>
        <nav className={clsx(className, 'w-full hidden md:block')}>
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
                        <Link href='#contacts'>Записаться на консультацию</Link>
                </UiButton>
            </li>
          </ul>
        </nav>
        <div className="md:hidden ml-auto">
            <button
              onClick={handleClick}
              className="p-2 rounded-md text-[#31322C] focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Иконка бургера */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
    </header>
    
  )
}




