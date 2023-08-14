import { useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <CurrencyRow></CurrencyRow>
      <p className="equals">=</p>
      <CurrencyRow></CurrencyRow>
    </>
  );
}

export default App;
