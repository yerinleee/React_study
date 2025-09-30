import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log("*** MOUNT ROOT ONCE ***");
createRoot(document.getElementById("root")).render(<App />);
