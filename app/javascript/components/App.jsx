import axios from "axios";
import React, { useState } from "react";
import { PortfolioContainer } from "./PortfolioContainer";

const CSRF_TOKEN = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = CSRF_TOKEN;

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <PortfolioContainer />
    </div>
  );
}

export default App;