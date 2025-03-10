import type { Route } from "./+types/home";
import  Welcome  from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | Home" },
    { name: "description", content: "Currency Converter with Amine Triki " },
  ];
}

export default function Home() {
  return <Welcome />;
}
