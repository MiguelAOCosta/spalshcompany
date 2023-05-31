import ServicesData from "./services-data";
import ServicesImg1 from "../../../assets/Servicos1.jpg"
import ServicesImg2 from "../../../assets/Servicos2.jpg"

const Services = () => {
  return (
    <section className="mx-10 my-16 md:mx-16 lg:mx-32 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {ServicesData.map((services, index) => (
        <div key={index} className="bg-gray-100 h-40 rounded-md p-6 flex justify-between md:m-auto md:w-2/3 md:h-72 lg:w-full lg:h-80">
          <div className="flex flex-col justify-between md:justify-end md:gap-8">
            <h1 className="services-id text-white text-6xl">{services.id}</h1>
            <h2 className="font-semibold">{services.title}</h2>
          </div>
          <p className="uppercase text-teal-500 tracking-widest underline underline-offset-4 cursor-pointer self-end">Ver mais</p>
        </div>
      ))}
      <div className="h-80 hidden xl:block 2xl:hidden"><img src={ServicesImg1} alt="Piscina" className="h-full w-full rounded-md object-cover" /></div>
      <div className="h-80 hidden xl:block 2xl:hidden"><img src={ServicesImg2} alt="Piscina" className="h-full w-full rounded-md object-cover" /></div>
    </section>
  )
}

export default Services;