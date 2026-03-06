import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lines from "../assets/Lines.gif";
import fineboy from "../assets/fineboy.png";
import { headerAnimations } from "../animations/headeranimations.js";
import useAge from "../hooks/useAge.js";
import DecryptedText from "../animations/decrypt.jsx";

const Header = () => {
  const boxControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animationComplete, setAnimationComplete] = useState(false);
   const [showDecrypt, setShowDecrypt] = useState(false); 
   const age = useAge('2002-10-5');
  
  
  useEffect(() => {
    if (!isInView || animationComplete) return;

    const sequence = async () => {
      
      await new Promise(resolve => 
        setTimeout(resolve, headerAnimations.timing.imagesFadeInDelay)
      );
      
      
      await boxControls.start(headerAnimations.infoBox.expanded);
     await new Promise(resolve => setTimeout(resolve, 600)); 

      setShowDecrypt(true);
      setAnimationComplete(true);
    };
    
    sequence();
  }, [boxControls, isInView, animationComplete]);

  return (
    <section
      ref={ref}
      className="flex min-h-[80vh] lg:flex-row max-md:flex-col md:justify-evenly mt-30 items-center max-md:mr-40"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative "
      >
      
        <motion.img
          src={fineboy}
          className="w-[400px] h-[550px] max-md:w-[400px] max-md:h-[400px] rounded-6xl "
          alt="profile-picture"
          {...headerAnimations.profileImage}
          animate={isInView ? headerAnimations.profileImage.animate : headerAnimations.profileImage.initial}
        />

        
        <motion.div 
          initial={headerAnimations.infoBox.initial}
          animate={boxControls}
          className="absolute border-2 border-amber-50 top-[20%] left-[50%] right-[-50%] max-md:right-[-10%] max-md:translate-x-[10%] translate-x-[50%] text-left bg-black max-md:text-[10px] text-[12px] flex flex-col start-2p justify-between"
        >
        {showDecrypt && (
       <>
       <p>
        name :
         <DecryptedText
          text="Chebem Nzom"
          animateOn="view"
          revealDirection="center"
          sequential={true}
          speed={200}
          delay={5000}
          maxIterations={200}
        />
       </p>
       <p>
        role :
         <DecryptedText
          text="Frontend web dev"
          animateOn="view"
          revealDirection="center"
          sequential={true}
          maxIterations={300}
        />
       </p>
       <p>
        age :
         <DecryptedText
          text={String(age)}
          animateOn="view"
          revealDirection="center"
          sequential={true}
          maxIterations={400}
          speed={150}
          delay={4000}
        />
       </p>
       <p>
        Location:
         <DecryptedText
          text="Lagos,Nigeria"
          animateOn="view"
          revealDirection="center"
          sequential={true}
          speed={150}
          maxIterations={25}
          delay={2000}
        />
       </p>
       
        </>
        )}
        </motion.div>

      
        <motion.div 
          className="absolute w-[150px] h-[100px] max-md:w-[80px]  border-2 border-b-amber-50 top-[80%] left-[40%] right-[-50%] translate-x-[50%]"
          {...headerAnimations.linesGif}
          animate={isInView ? headerAnimations.linesGif.animate : headerAnimations.linesGif.initial}
        >
          <img src={Lines} className="h-[150px] max-md:h-[80px] " alt="" />
        </motion.div>
      </motion.div>

        
             <p 
          className="text-left pl-5 pt-30 text-[12px] start-2p lg:w-[30%] max-md:w-full md:w-[40%] font-bold text-amber-50 mb-4">
           I'm a frontend web developer that builds visually appealing and user friendly websites.i bring desings to life throught code and  ideas to reality by building industry standard scalable web functionalities that bring value to users.
          lets work together build your next project :-)

          </p>
        
       
     
    </section>

  
    
  );
};

export default Header;