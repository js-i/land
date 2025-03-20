'use client'

import clsx from "clsx";

type TUiButton = {
    className?: string,
    children: string | React.ReactElement,
    size: 'sm' | 'lg',
    variant: 'primary' | 'outline',
    id?: string
}

export function UiButton({ className = "", id, children, size, variant } : TUiButton) {
    const scrollToSection = (id: string | '') => {
      const NAV_HEIGHT = 96
      const section = document.getElementById(id)
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }

    const buttonClasses = clsx(
      "leading-base transition-colors whitespace-nowrap",
      {
        sm: "rounded-full h-10 py-2 md:text-xl px-6",
        lg: "rounded-full h-14 py-2 md:text-xl px-6",
      }[size],
      {
        outline: "hover:outline  outline-1 hover:bg-[#F5F1EA]",
        primary: "bg-primary text-white hover:bg-hover after:content-['→'] after:inline-block after:ml-2",
      }[variant],
      className,
    );
    return <button onClick={() => scrollToSection(id || '')} className={buttonClasses}>{children}</button>;
  }