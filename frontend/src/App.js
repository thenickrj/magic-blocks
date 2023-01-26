import React, { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/users");
      const json = await response.json();
      console.log("👍 ", json);
      if (response.ok) {
        setData(json);
      }
    };

    fetchWorkouts();
  }, []);
  return <div>Appd</div>;
}

export default App;
