import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
// import Card from "./Components/Card.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <Navbar />
  <Header />
  {/* <Card /> */}
 </StrictMode>
);
