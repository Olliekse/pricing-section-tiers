import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.credits {
  color: #777;
  position: fixed;
  bottom: 24px;
  left: 24px;
  font-size: 11px;
  text-align: center;
}

.credits a {
  color: #000;
  font-weight: bold;
}`;

const StyledApp = styled.div`
  padding: 64px 28px;

  @media (min-width: 768px) {
    padding: 80px 32px;
  }

  @media (min-width: 1440px) {
    padding: 112px 96px;
  }
`;

function App() {
  const [planSelection, setPlanSelection] = useState("monthly");

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header setPlanSelection={setPlanSelection} />
        <ProductList planSelection={planSelection} />
      </StyledApp>
    </>
  );
}

export default App;
