import React from "react";
import { ThemeProvider } from "styled-components";
import "./main.css";
import theme from "./components/data/theme";
import Header from "../src/components/header/header";
import NewsFeed from "../src/components/newsfeed/NewsFeed";
import { StickyContainer } from "react-sticky";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <StickyContainer>
            <Header />
            <NewsFeed />
          </StickyContainer>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
