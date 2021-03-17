import React from "react";
import Child from "./Profile/ChildComponent";
import Picture from "./Pictures/Capture6.PNG";

function App() {
  const handleAlert = () => {
    alert("this is TOUIL Abdelhak's profile");
  };
  const styleObject = {
    color: "blue",
    textAlign: "center",
    fontFamily: "timesNewRoman",
  };
  const image = { width: "500px" };
  return (
    <div className="App" style={styleObject}>
      <Child
        fullName="TOUIL Abdelhak"
        bio="I’m a web developer.
      I spend my whole day, practically every day,
      experimenting with HTML,
      CSS, and JavaScript.
      I build websites that delight and inform.
      I do it well."
        profession="web developer"
        handleAlert={handleAlert}
      >
        <img src={Picture} alt="abdelhak" style={image} />
      </Child>
    </div>
  );
}

export default App;
