import type { Route } from "./+types/currencyConverter";
import   CurrencyConverterTs    from "../currencyConverter/currencyConverterTs";
import { Header , Footer} from "../components/index"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | currencyConverter" },
    { name: "description", content: "Amine Triki's currency Converter " },
  ];
}

export default function currencyConverter() {
  return(
    <>
      <Header/>
      <CurrencyConverterTs />;
      <Footer/>
    </>
    );
  
}
