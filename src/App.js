import "./App.css";
import Data from "./Data";
import Table from "./Table";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleInput = (myData) => {
    setData(myData);
  };

  return (
    <div className="main-div">
      <h2>Word Frequency Counter</h2>
      <Data handleInput={handleInput} />
      {data.length > 0 && <Table data={data} />}
    </div>
  );
}

export default App;
