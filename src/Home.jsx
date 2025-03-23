import { motion } from "framer-motion";
import heroBg from "./assets/hero-bg.jpg.png"; // Adjust the path if needed
import womenBg from "./assets/women.png";
import SecondSection from "./components/Home/SecondSection";
import ThirdSection from "./components/Home/ThirdSection";
import Forthsection from "./components/Home/Forthsection";
import SixSection from "./components/Home/SixSection";

const Hero = () => {
  return (

    <div>  
    <section
      className="relative text-center bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 py-20 text-white md:flex-row">
        {/* Left Content */}
        <div className="w-full text-center md:w-2/4 md:text-left">
          <motion.h1
            className="mb-4 text-4xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Be successful in the art of sewing.
          </motion.h1>
          <motion.p
            className="mb-6 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            AS Academy is a premier platform dedicated to teaching the art of
            knitting and crochet. Whether you re a beginner or a seasoned
            enthusiast, our expert-led courses and resources empower you to
            create stunning handmade pieces. Discover your passion for knitting
            with AS Academy and craft with confidence!
          </motion.p>
        </div>

        {/* Right-Side Image */}
        <div className="w-full md:w-1/3 relative mt-[22rem] max-md:mt-80 hidden md:block ">
          <motion.img
            src={womenBg}
            alt="Woman sewing"
            className="object-cover w-full h-auto rounded-lg "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-4 text-orange-600 bg-white">
        <h2 className="ml-12 font-bold lg:text-9xl font-Zen Old Mincho text-start letter-spacing">
          AS ACADEMY
        </h2>
      </div>

     

    
    </section>
     {/* categorey */}
     <section>
     <SecondSection  />
      
     </section>
     {/* WelcomSection */}
     <section>
     <ThirdSection />
     </section>
     <section>
     <Forthsection />
     </section>
     <section>
     <SixSection />
     </section>
    </div>
  );
};

export default Hero;
