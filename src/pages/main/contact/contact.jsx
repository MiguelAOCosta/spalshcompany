import {useState} from "react";
import {BsFillArrowUpLeftCircleFill} from "react-icons/bs";

const Contact = () => {
  const [change, setChange] = useState(false);
  const [onFocusName, setOnfocusName] = useState(false);
  const [onFocusEmail, setOnfocusEmail] = useState(false);
  const [onFocusTel, setOnfocusTel] = useState(false);
  
  return (
    <section className="bg-slate-900 text-white pt-12 min-h-screen">
      <div className="text-center">
        <h1 className="text-white font-semibold text-2xl">Precisa de um orçamento?</h1>
        <h2 className="text-teal-500 font-normal text-lg">Não exite em contactar-nos</h2>
      </div>
      <div className="flex flex-col items-center mt-12 justify-center">
        <div className="font-semibold text-lg flex">
          <h3 className="mr-12">Orçamento</h3>
          <h3>Contactos</h3>
        </div>
        <div onClick={() => setChange(!change)} className="bg-orange-200 w-16 h-4 mt-6 rounded-lg relative cursor-pointer flex items-center">
          <BsFillArrowUpLeftCircleFill className={`absolute -left-1 ${change ? "rotate-90 translate-x-12" : ""} duration-200 text-2xl text-teal-800`} />
        </div>
      </div>
      <div className={`prespetive p-4 mx-10 my-16 md:mx-16 lg:mx-32 bg-slate-800 mt-12`}>
        <h4 className="font-semibold text-lg">Orçamento</h4>
        <form className="mt-6">
          <div onFocus={() => setOnfocusName(true)} onBlur={() => setOnfocusName(false)} className="relative h-12 w-full">
            <input className="bg-gray-700 rounded-md border-none h-full w-full outline-none px-5" type="text" placeholder=" " />
            <div className={`cut bg-slate-800 rounded-md h-5 left-5 absolute -top-5 duration-200 w-[74px] ${onFocusName ? "translate-y-2" : "translate-y-0"}`}></div>
            <label htmlFor="name" className={`text-gray-500 left-5 absolute top-3 duration-200 pointer-events-none ${onFocusName ? "-translate-y-[30px] scale-75 text-rose-600" : ""}`}>First name</label>
          </div>
          <div onFocus={() => setOnfocusEmail(true)} onBlur={() => setOnfocusEmail(false)} className="relative h-12 w-full mt-8">
            <input className="bg-gray-700 rounded-md border-none h-full w-full outline-none px-5" type="email" placeholder=" " />
            <div className={`cut bg-slate-800 rounded-md h-5 left-5 absolute -top-5 duration-200 w-[50px] ${onFocusEmail ? "translate-y-2" : "translate-y-0"}`}></div>
            <label htmlFor="email" className={`placeholder text-gray-500 left-5 absolute top-3 duration-200 pointer-events-none ${onFocusEmail ? "-translate-y-[30px] scale-75 text-rose-600" : ""}`}>E-mail</label>
          </div>
          <div onFocus={() => setOnfocusTel(true)} onBlur={() => setOnfocusTel(false)} className="relative h-12 w-full mt-8">
            <input className="bg-gray-700 rounded-md border-none h-full w-full outline-none px-5" type="tel" placeholder=" " />
            <div className={`cut bg-slate-800 rounded-md h-5 left-5 absolute -top-5 duration-200 w-[68px] ${onFocusTel ? "translate-y-2" : "translate-y-0"}`}></div>
            <label htmlFor="phone" className={`placeholder text-gray-500 left-5 absolute top-3 duration-200 pointer-events-none ${onFocusTel ? "-translate-y-[30px] scale-75 text-rose-600" : ""}`}>Contacto</label>
          </div>
          <button type="button" className='bg-teal-500 mt-6 px-4 py-2 rounded-md text-white duration-500 hover:bg-teal-600'>Pedir orçamento</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;