import type { Route } from "./+types/project";
import  Projects  from "../project/projects";

import { Header , Footer} from "../components/index"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | Projects" },
    { name: "description", content: "Amine Triki's Projects " },
  ];
}

export default function project() {
  return (
    <>
      <Header/>
      <Projects />;
      <Footer/>
    </>
    );

}
