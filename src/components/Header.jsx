import  { useEffect, useState } from "react";
import profilePic from "../assets/chebem.jpg";
import  fineboy from "../assets/fineboy.png";
import { motion } from "motion/react";
import { WiDaySunny, WiSunset, WiNightClear } from "react-icons/wi";

const Header = () => {
  const [greeting, setGreeting] = useState("");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
      setIcon(<WiDaySunny className="text-yellow-400 text-4xl" />);
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
      setIcon(<WiSunset className="text-orange-400 text-4xl" />);
    } else {
      setGreeting("Good Evening");
      setIcon(<WiNightClear className="text-blue-300 text-4xl" />);
    }
  }, []);

  return (
    <section className="flex min-h-[80vh] flex-col md:flex-row md:justify-evenly mt-30 items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img
          src={fineboy}
          className="w-[400px] h-[550px] rounded-6xl"
          alt="profile-picture"
        />
        <div className="absolute w-[200px] h-[150px] border-2 border-b-amber-50 top-[20%] left-[50%] right-[-50%] translate-x-[50%]"></div>
      </motion.div>
      
      
    </section>
  );
};

export default Header;
