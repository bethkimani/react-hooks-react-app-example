// src/components/App.js

import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Import TestComponent

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Replaced date formatting with "Now" */}
      <ExampleComponent /> {/* Ensured only one instance of ExampleComponent */}
      <TestComponent /> {/* Added TestComponent below ExampleComponent */}
    </div>
  );
}

export default App;
