import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";


const Cta = () => {
  return (
        <section id="contact_me" className=" lg:h-[100vh] mt-40 w-full">
      <h2 className="text-5xl ">Contact-me</h2>
      <p className="mt-5 start-2p">Let take the first step to getting the job done<br/>I work across all time zones</p>
      <div className="flex flex-col lg:flex-row mt-15 items-center ">
        <div className="w-[50%] max-md:w-full h-auto flex items-center justify-end ">
            <video 
              loop 
              muted 
              autoPlay
              playsInline 
              className="h-auto w-full block max-md:h-[200px]"
              src="/AdobeStock_133145383.mp4"
            /> 
        </div>
      <div className="lg:ml-10 flex flex-col md:flex-col lg:flex-col gap-10 justify-center items-center p-5 w-auto  overflow-x-hidden">
        <a href="mailto:chebemnzomblack@gmail.com">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className=" p-5 flex flex-row border-5 border-red-600 
             items-center gap-3 bg-amber-50 text-black rounded-2xl text-2xl hover:shadow-lg hover:shadow-white transition-all duration-300"
          >
            <span>Send me a gmail</span>
            <FaArrowRightLong className="text-2xl" />
            <img
              src="https://www.svgrepo.com/show/349378/gmail.svg"
              className="w-[150px] h-[100px] lg:w-[100px] lg:h-[50px] self-start"
              alt=""
            />
          </motion.div>
        </a>


        <a
          href="https://wa.me/2348136044960"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-5 flex flex-row items-center gap-3 border-5 border-white hover:text-white bg-green-400 text-black rounded-2xl text-2xl hover:shadow-lg hover:shadow-green-600 transition-all duration-300"
          >
            <span>Message me on </span>
            <FaArrowRightLong className="text-2xl" />
            <img
              src="https://www.svgrepo.com/show/452133/whatsapp.svg"
              className=" w-[150px] h-[100px]  lg:w-[100px] lg:h-[50px] self-start"
              alt="WhatsApp logo"
            />
          </motion.div>
        </a>
      </div>
      </div>
     
    </section>
     
  );
};
export default Cta;
