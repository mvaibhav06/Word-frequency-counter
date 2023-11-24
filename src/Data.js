import { useState } from "react";
const Data = ({ handleInput }) => {
  const [inp, setInp] = useState("");

  const handleChange = (event) => {
    setInp(event.target.value);
  };

  const handleClick = () => {
    handleInput(inp);
  };

  return (
    <div>
      <div className="fix-inp">
        <textarea
          value={inp}
          onChange={handleChange}
          className="input form-control"
          placeholder="Enter text..."
        />
      </div>
      <br />
      <button onClick={handleClick} className="btn btn-primary my-3">
        Count Those Words!{" "}
      </button>
    </div>
  );
};

export default Data;
