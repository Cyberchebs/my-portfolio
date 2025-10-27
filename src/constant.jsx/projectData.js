import cloneTubeImage from "../assets/clonetube.png";
import freshFoodsImage from "../assets/fresffoods.png";
import shot1 from "../assets/shot1.png";
import shot2 from "../assets/shot2.png";

const projects = [
  {
    id: 1,
    name: "ky-directory",
    image: shot1,
    description:
      "A sass application where you can pitch and share startup project ideas",
    github: "https://github.com/Cyberchebs/ky_directory",
    live: "https://ky-directory.vercel.app/",
    tech: ["NextJs |", "tailwindcss|", "  sanity"],
  },
  {
    id: 2,
    name: "Xora ai",
    image: shot2,
    description: "slick Landing page for a video-editing ai application",
    github: "https://github.com/Cyberchebs/youtube_clone",
    live: "https://xenos-ai-landing-page.vercel.app/",
    tech: ["React |", "Tailwindcss"],
  },
  {
    id: 3,
    name: "youtube clone",
    image: cloneTubeImage,
    description:
      " YouTube clone project where you can watch youtube videos in real time intergration ",
    github: "https://github.com/Cyberchebs/youtube_clone",
    live: "https://chebstube.netlify.app/",
    tech: ["React |", "Material ui|", "  axios"],
  },
  {
    id: 4,
    name: "fresh foods",
    image: freshFoodsImage,
    description: " An e-commerce store where you can buy fresh foods ",
    github: "https://github.com/Cyberchebs/fresh_foods",
    live: "https://freshf.netlify.app/",
    tech: ["React |", "Typescript|", " tailwindcss"],
  },
];

export default projects;
