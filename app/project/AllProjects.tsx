import Img10 from "../assets/10.webp";
import Img8 from "../assets/8.webp";
import Img5 from "../assets/5.webp";
import Img4 from "../assets/4.webp";
import Img3 from "../assets/3.webp";
import Img2 from "../assets/2.webp";
import Img11 from "../assets/11.webp";
import Img12 from "../assets/12.webp";

interface Project {
  category: string;
  title: string;
  description: string;
  link: string;
  github?: string; 
  imageSrc: string;
}

const projects: Project[] = [
  {
    category: "React",
    title: "Weather Website",
    description: "React + vite + BOOTSTRAP + PWA",
    link: "https://wather-react-pwa.vercel.app/",
    github: "https://github.com/Amine-Triki/wather-react-pwa",
    imageSrc: Img10,
  },
  {
    category: "JavaScript",
    title: "Weather Website",
    description: "JavaScript + BOOTSTRAP",
    link: "https://amine-triki.github.io/Weather-js/",
    github: "https://github.com/Amine-Triki/Weather-js",
    imageSrc: Img8,
  },
  {
    category: "Wordpress",
    title: "Personal Website",
    description: "WORDPRESS",
    link: "https://aminetriki.com.tn/",
    imageSrc: Img5,
  },
  {
    category: "Wordpress",
    title: "M.J.S.E Website",
    description: "WORDPRESS",
    link: "https://mjses.com",
    imageSrc: Img4,
  },
  {
    category: "JavaScript",
    title: "Personal Website",
    description: "JavaScript + BOOTSTRAP",
    link: "https://amine-triki.github.io/portfolio/",
    github: "https://github.com/Amine-Triki/portfolio",
    imageSrc: Img3,
  },
  {
    category: "JavaScript",
    title: "Personal Website",
    description: "JavaScript + BOOTSTRAP",
    link: "https://amine-triki.github.io/",
    github: "https://github.com/Amine-Triki/Amine-Triki.github.io",
    imageSrc: Img2,
  },
  {
    category: "React",
    title: "Quran with Voice",
    description: "React + vite + BOOTSTRAP + PWA",
    link: "https://quran-with-voice.vercel.app/",
    github: "https://github.com/Amine-Triki/quran-with-voice",
    imageSrc: Img11,
  },
  {
    category: "React",
    title: "Weather Website",
    description: "Next.js + Tailwind CSS + PWA",
    link: "https://next-js-js-portfolio.vercel.app/",
    github: "https://github.com/Amine-Triki/nextJs-js-portfolio",
    imageSrc: Img12,
  },
];

export default projects;
