import { type RouteConfig, index , route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("CurrencyConverter", "routes/currencyConverter.tsx"),
    route("contact", "routes/contact.tsx"),
    route("project", "routes/project.tsx"),
  ] satisfies RouteConfig;
