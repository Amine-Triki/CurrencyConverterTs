import type { Route } from "./+types/home";
import  Projects  from "../project/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | Projects" },
    { name: "description", content: "Amine Triki's Projects " },
  ];
}

export default function Home() {
  return <Projects />;
}
