import React from "react";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Menu.css"
// import ButtonLink from "./components/ButtonLink";

function Menu() {
    return (
      <nav className="Menu">
          <Link to="/">
              <img className="Logo" src={Logo} alt="Gugazon Logo"/>
          </Link>

          <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo Vídeo
          </Button>
      </nav>
    );

}

export default Menu;