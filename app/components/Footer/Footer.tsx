import "./Footer.css";
import { Link } from "react-router";


const year: number = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="footer py-3 bg-fuchsia-300" >
      <p id="Rights" className="container text-center mx-auto mb-0">
        2023 -- {`${year} © Amine Triki || All Rights Reserved`} 
      </p>
    </footer>
  );
};

export default Footer;