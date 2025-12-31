import cloneTubeImage from "../assets/clonetube.png";
import shot1 from "../assets/shot1.png";
import shot2 from "../assets/shot2.png";
import shot3 from "../assets/shot3.png";

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
    name: "Xora ai",
    image: shot2,
    description: "smooth and user-friendly Landing page for a video-editing ai application ",
    github: "https://github.com/Cyberchebs/youtube_clone",
    live: "https://xenos-ai-landing-page.vercel.app/",
    tech: ["React |", " Tailwindcss"],
  },
  {
    id: 3,
    name: "youtube clone",
    image: cloneTubeImage,
    description:
      " YouTube clone project where you can watch youtube videos in real time intergration ",
    github: "https://github.com/Cyberchebs/youtube_clone",
    live: "https://chebstube.netlify.app/",
    tech: ["React |", " Material ui |", " Axios"],
  },
  {
    id: 4,
    name: "chebems pc store",
    image: shot3,
    description: " An e-commerce store where you can buy rigs and computer parts ",
    github: "https://github.com/Cyberchebs/e-commercial",
    live: "https://e-commercial-six.vercel.app/",
    tech: ["NextJs |", " Sanity cms |", "  Stripe"],
  },
];

export default projects;
