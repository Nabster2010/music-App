import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AudioProvider } from "./context/audioContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </React.StrictMode>
);
