import { useState } from 'react'
import Logo from "../../assets/Logo.png"

function Header() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80) {
       setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={`w-screen h-20 px-10 flex justify-between items-center fixed duration-300 z-50  ${scroll || open ? "bg-white" : "bg-transparent"} md:px-16  lg:px-32`}>
        <div className='h-full flex items-center z-50'>
            <img src={Logo} alt="Splash Company" className='h-full' />
            <h1 className={`ml-0.5 duration-300 ${open || scroll ? "text-black" : "text-white"}`}>Splash Company</h1>
        </div>

        <div onClick={() => setOpen(!open)} className='w-8 h-6 flex flex-col justify-between items-end cursor-pointer z-50 md:hidden'>
            <div className={`w-full h-0.5 duration-300 ${open ? "rotate-45 translate-y-3 translate-x-px" : undefined} ${open || scroll ? "bg-black" : "bg-white"}`}></div>
            <div className={`h-0.5 duration-300 ${open ? "w-0" : "w-4"} ${open || scroll ? "bg-black" : "bg-white"}`}></div>
            <div className={`h-0.5 duration-300 ${open ? "w-full -rotate-45 -translate-y-2.5 translate-x-px" : "w-6"} ${open || scroll ? "bg-black" : "bg-white"}`}></div>
        </div>

        <nav className={`bg-gray-800 absolute left-0 w-full duration-500 top-20 origin-top ${open ? "scale-y-100" : "scale-y-0"} md:scale-y-100 md:static md:h-full md:w-fit md:bg-transparent`}>
            <ul className={`h-full flex flex-col justify-around items-center duration-500 ${open ? "opacity-100 text-white" : "opacity-0"} ${open || scroll ? "md:text-black" : "md:text-white"} md:flex-row md:opacity-100 md:gap-4 lg:gap-9`}>
            <li className='cursor-pointer'>Inicio</li>
            <li className='cursor-pointer'>Quem Somos</li>
            <li className='cursor-pointer'>Serviços</li>
            <li className='cursor-pointer'>Contacto</li>
            <li className='cursor-pointer bg-teal-500 px-4 py-2 rounded-md text-white duration-500 hover:bg-teal-600'>Orçamento</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header