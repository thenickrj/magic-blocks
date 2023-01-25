import logo from "./logo.svg";
import building from "./building.png";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState("");
  // useEffect(() => {
  //   fetch("/user")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/user");
      const json = await response.json();
      console.log("👍 ", json);
      if (response.ok) {
        setData(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to {data.project}</h1>
        <img
          src={building}
          style={{ height: "200px" }}
          className="App-"
          alt="logo"
        />
        <p>Coming soon</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
export default App;
