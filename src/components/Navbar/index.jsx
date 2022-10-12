import React from "react";
import { Button } from "@mui/material";
import "./styles/style.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeTab, setActiveTab] = React.useState("h");
  const navigate = useNavigate();

  const handleActiveTab = (e) => {
    switch (e) {
      case "h":
        navigate("/");
        break;
      case "m":
        navigate("/marketplaces");
        break;
      case "q":
        navigate("/questionaires");
        break;
      case "r":
        navigate("/results");
        break;
      default:
        break;
    }

    setActiveTab(e);
  };

  return (
    <div className="navbar__container">
      <Button
        className={activeTab === "h" && "active"}
        onClick={() => handleActiveTab("h")}
      >
        <i className="ri-home-line"></i> Home
      </Button>
      <Button
        className={activeTab === "m" && "active"}
        onClick={() => handleActiveTab("m")}
      >
        <i className="ri-store-2-line"></i> Marketplaces
      </Button>
      <Button
        className={activeTab === "q" && "active"}
        onClick={() => handleActiveTab("q")}
      >
        <i className="ri-question-answer-line"></i> Questionaires
      </Button>
      <Button
        className={activeTab === "r" && "active"}
        onClick={() => handleActiveTab("r")}
      >
        <i className="ri-folder-chart-line"></i>Results
      </Button>
    </div>
  );
}
