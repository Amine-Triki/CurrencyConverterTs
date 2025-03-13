import type { Route } from "./+types/home";
import  Welcome  from "../welcome/welcome";
import { Header , Footer} from "../components/index"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | Home" },
    { name: "description", content: "Currency Converter with Amine Triki " },
  ];
}

export default function Home() {
  return(
  <>
    <Header/>
    <Welcome />
    <Footer/>
  </>
  );
}
