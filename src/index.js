import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/style.css";
import App from "./components/app";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
