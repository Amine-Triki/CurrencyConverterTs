import type { Route } from "./+types/contact";
import  ContactUs  from "../contact/contactUs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | contact" },
    { name: "description", content: "Amine Triki's contact " },
  ];
}

export default function contact() {
  return <ContactUs />;
}
