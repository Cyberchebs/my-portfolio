import shot1 from "../assets/shot1.png";
import shot2 from "../assets/shot2.png";
import shot3 from "../assets/shot3.png";
import bankShot from "../assets/bankshot.png";
import supra from "../assets/supra.png";


const projects = [
  {
    id: 1,
    name: "ky-directory",
    image: shot1,
    description:
      "A sass application where you can pitch and share tech startup and project ideas so you can connect wih investors and entrepreneurs",
    github: "https://github.com/Cyberchebs/ky_directory",
    live: "https://ky-directory.vercel.app/",
    tech: ["NextJs | ", "Tailwindcss |", " Typescript |", " Sanity cms"],
  },
  {
    id: 2,
    name: "banking page",
    image: bankShot,
    description: "A bank page with a 3d atm card for a fintech company that provides banking solutions to businesses",
    github: "https://github.com/Cyberchebs/3dbank",
    live: "https://3dbank-n6zy.vercel.app/",
    tech: ["React |", " Tailwindcss |", " ThreeJs ", "| shadcn ui" ],
    
  },
  {
    id: 3,
    name: "Supra",
    image: supra,
    description:
      " interactive 3d site for  toyota supra car company showcasing their latest model of toyota supra with an immersive experience using threejs and gsap for animations",
    github: "https://github.com/Cyberchebs/supra",
    live: "https://supra-ten.vercel.app/",
    tech: ["React |", " ThreeJs |", " GSAP |", " Tailwindcss"],
  },
  {
    id: 4,
    name: "chebems pc store",
    image: shot3,
    description: " An e-commerce store where you can buy rigs and computer parts,supporting payment intergration and real time inventory management",
    github: "https://github.com/Cyberchebs/e-commercial",
    live: "https://e-commercial-six.vercel.app/",
    tech: ["NextJs |", " Sanity cms |", "  Stripe"],
  },
   {
    id: 5,
    name: "Xora ai",
    image: shot2,
    description: "smooth and user-friendly Landing page for a video-editing ai application ",
    github: "https://github.com/Cyberchebs/youtube_clone",
    live: "https://xenos-ai-landing-page.vercel.app/",
    tech: ["React |", " Tailwindcss"],
  },
];

export default projects;
