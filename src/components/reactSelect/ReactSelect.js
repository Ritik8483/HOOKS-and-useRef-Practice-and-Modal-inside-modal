import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ReactSelectApp = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "shimla", label: "Shimla" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "sonipat", label: "Sonipat" },
  ];
  const animatedComponents = makeAnimated();
  
  const [error, setError] = useState({
    key: "",
  });
  console.log("options", options);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[options[4], options[5]]}
          isMulti
          options={options}
          type="select"
          name="selectInput"
          styles={{ width: "500px" }}
        />

      </div>
    </div>
  );
};

export default ReactSelectApp;
