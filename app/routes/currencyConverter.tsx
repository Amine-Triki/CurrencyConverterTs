import type { Route } from "./+types/currencyConverter";
import   CurrencyConverterTs    from "../currencyConverter/currencyConverterTs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amine Triki | currencyConverter" },
    { name: "description", content: "Amine Triki's currency Converter " },
  ];
}

export default function currencyConverter() {
  return <CurrencyConverterTs />;
}
