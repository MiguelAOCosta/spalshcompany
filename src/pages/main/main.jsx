import About from "./about/about";
import Introservices from "./services/intro-services";
import Services from "./services/services";
import Contact from "./contact/contact";

const Main = () => {
  return (
    <main>
        <About />
        <Introservices />
        <Services />
        <Contact />
    </main>
  )
}

export default Main;