import About1 from "../../../assets/About1.jpg"
import About2 from "../../../assets/About2.jpg"

const About = () => {
  return (
    <section className="mx-10 my-16 md:mx-16 lg:mx-32 xl:flex md:flex gap-12 justify-between">
        <div className="xl:w-1/3 md:w-1/2">
            <h1 className="text-teal-500 font-semibold uppercase text-2xl tracking-widest mb-6">Quem Somos</h1>
            <p className="leading-8 text-justify tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus dolorum fuga animi qui consequatur accusantium enim quibusdam eum. Quia perspiciatis eaque perferendis vero ratione vitae rerum sit quam distinctio?</p>
            <p className="my-10 uppercase text-teal-500 tracking-widest underline underline-offset-4 cursor-pointer">Ler mais</p>
        </div>
        <div className="xl:flex md:flex xl:justify-between hidden gap-12">
            <img src={About1} alt="Quem Somos" className="rounded-md object-cover xl:w-1/2 md:w-1/2 md:h-52 xl:h-80" />
            <img src={About2} alt="Quem Somos" className="rounded-md object-cover xl:w-1/2 md:w-1/2 md:h-52 xl:h-80" />
        </div>
    </section>
  )
}

export default About;