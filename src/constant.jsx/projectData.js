import cloneTubeImage from "../assets/clonetube.png";
import freshFoodsImage from "../assets/fresffoods.png";
import restaurantImage from "../assets/restaurant.png";

const projects = [
  {
    id: 1,
    name: "youtube clone",
    image: cloneTubeImage,
    description:
      "This is my YouTube clone project where you can watch youtube videos in real time intergration ",
    github: "https://github.com/Cyberchebs/youtube_clone",
    live: "https://chebstube.netlify.app/",
    tech: ["React |", "Material ui|", "  axios"],
  },
  {
    id: 2,
    name: "fresh foods",
    image: freshFoodsImage,
    description: " An e-commerce store where you can buy fresh foods ",
    github: "https://github.com/Cyberchebs/fresh_foods",
    live: "https://freshf.netlify.app/",
    tech: ["React |", "Typescript|", " tailwindcss"],
  },
  {
    id: 3,
    name: "gerichtfoods",
    image: restaurantImage,
    description:
      " A modern ui ux restaurant app  with stunning user interface ",
    github: "https://github.com/Cyberchebs/resturant_project",
    live: "https://gerichtfoods.netlify.app",
    tech: ["React |", "Css "],
  },
];

export default projects;
