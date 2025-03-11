import type { Route } from "./+types/home";
import  ContactUs  from "../contact/contactUs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | contact" },
    { name: "description", content: "Amine Triki's contact " },
  ];
}

export default function Home() {
  return <ContactUs />;
}
