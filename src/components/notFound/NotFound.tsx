import React from "react";
import Header from "../allPokemons/ui/Header";
import { notFoundStyles } from "./styles";

const NotFound = () => {
  return (
    <div>
      <Header />
      <section style={notFoundStyles.container}>
        <h1>404</h1> <span style={notFoundStyles.slashStyle}> | </span>
        Resource Not Found.
      </section>
    </div>
  );
};
export default NotFound;
