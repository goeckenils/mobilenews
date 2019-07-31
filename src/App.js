import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./main.css";
import theme from "./components/data/theme";
import Header from "../src/components/header/header";
import NewsFeed from "../src/components/newsfeed/NewsFeed";
import { StickyContainer } from "react-sticky";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StickyContainer>
          <Header />
          <NewsFeed />
        </StickyContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
