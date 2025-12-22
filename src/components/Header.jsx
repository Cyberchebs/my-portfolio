// import Lines from '../assets/Lines.gif';
// import  fineboy from "../assets/fineboy.png";
// import { motion } from "motion/react";



// const Header = () => {
 
    

//   return (
//     <section className="flex min-h-[80vh] flex-col md:flex-row md:justify-evenly mt-30 items-center">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative"
//       >
//         <img
//           src={fineboy}
//           className="w-[400px] h-[550px] rounded-6xl"
//           alt="profile-picture"
//         />
//         <div className="absolute w-[300px] h-[100px] border-2 border-b-amber-50 top-[20%] left-[50%] right-[-50%] translate-x-[50%] text-left bg-black text-[12px] start-2p p-2 flex flex-col justify-between">
//            <p>name: Chebem Nzom</p> 
//            <p>role: Frontend web dev</p>
//            <p>location: lagos,Nigeria</p>
//            <p>sex : Male</p>
//         </div>

//         <div className="absolute w-[200px] h-[150px] border-2 border-b-amber-50 top-[80%] left-[40%] right-[-50%] translate-x-[50%]">
//             <img src={Lines} className='h-[150px]' alt="" />
//         </div>
        
        
//       </motion.div>
      
      
//     </section>
//   );
// };

// export default Header;

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Lines from "../assets/Lines.gif";
import fineboy from "../assets/fineboy.png";
import { headerAnimations } from "../animations/headerAnimations";

const Header = () => {
  const boxControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showText, setShowText] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showGender, setShowGender] = useState(false);

  
  const [nameText] = useTypewriter({
    words: ['name : Chebem Nzom'],
    loop: 1,
    typeSpeed: 20,
  });

  const [roleText] = useTypewriter({
    words: ['role : Frontend web dev'],
    loop: 1,
    typeSpeed: 20,
  });

  const [locationText] = useTypewriter({
    words: ['location :lagos,Nigeria'],
    loop: 1,
    typeSpeed: 20,
  });

  const [genderText] = useTypewriter({
    words: ['sex : Male'],
    loop: 1,
    typeSpeed: 20,
  });

  useEffect(() => {
    if (!isInView || animationComplete) return;

    const sequence = async () => {
      
      await new Promise(resolve => 
        setTimeout(resolve, headerAnimations.timing.imagesFadeInDelay)
      );
      
      
      await boxControls.start(headerAnimations.infoBox.expanded);
      
      
      setShowText(true);
      
      
      setTimeout(() => setShowName(true), 0);
      setTimeout(() => setShowRole(true), 900);
      setTimeout(() => setShowLocation(true), 2100);
      setTimeout(() => setShowGender(true), 3500);
      
      setAnimationComplete(true);
    };
    
    sequence();
  }, [boxControls, isInView, animationComplete]);

  return (
    <section 
      ref={ref}
      className="flex min-h-[80vh] flex-row md:flex-row md:justify-evenly mt-30 items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
      
        <motion.img
          src={fineboy}
          className="w-[400px] h-[550px] max-md:w-[300px] max-md:h-[400px] rounded-6xl"
          alt="profile-picture"
          {...headerAnimations.profileImage}
          animate={isInView ? headerAnimations.profileImage.animate : headerAnimations.profileImage.initial}
        />

        
        <motion.div 
          initial={headerAnimations.infoBox.initial}
          animate={boxControls}
          className="absolute border-2 border-amber-50 top-[20%] left-[50%] right-[-50%] max-md:right-[-10%] max-md:translate-x-[10%] translate-x-[50%] text-left bg-black text-[12px] flex flex-col start-2p justify-between"
        >
          {showText && (
            <>
              {showName && <p className="text-white">{nameText}</p>}
              {showRole && <p className="text-white">{roleText}</p>}
              {showLocation && <p className="text-white">{locationText}</p>}
              {showGender && <p className="text-white">{genderText}</p>}
            </>
          )}
        </motion.div>

      
        <motion.div 
          className="absolute w-[150px] h-[100px] border-2 border-b-amber-50 top-[80%] left-[40%] right-[-50%] translate-x-[50%]"
          {...headerAnimations.linesGif}
          animate={isInView ? headerAnimations.linesGif.animate : headerAnimations.linesGif.initial}
        >
          <img src={Lines} className="h-[150px] " alt="" />
        </motion.div>
      </motion.div>
      <div className="">
        <h1  className="text-6xl max-md:text-4xl font-bold max-md:hidden text-white ml-10">
          lets fix or build your<br/>
           product together
        </h1>
      </div>
    </section>
  );
};

export default Header;