import React from "react";
import Logo from "../../assets/logo.png"
// import ButtonLink from "./components/ButtonLink";
import Button from "../Button";
import "./Menu.css"

function Menu() {
    return (
      <nav className="Menu">
          <a href="/">
              <img className="Logo" src={Logo} alt="Gugazon Logo"/>
          </a>

          <Button as="a" className="ButtonLink" href="/">
              Novo Vídeo
          </Button>
      </nav>
    );

}

export default Menu;