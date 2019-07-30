import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./main.css";
import theme from "./components/data/theme";
import Header from "../src/components/header/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
