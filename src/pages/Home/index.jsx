import React from "react";
import "./styles/style.css";

export default function Home() {
  return (
    <div className="home__container">
      <h1 className="greeting__container">Good Morning, Domsan! 😇</h1>
      <div className="summary__container">
        <div>
          <i className="ri-user-3-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Players</p>
          </span>
        </div>
        <div>
          <i className="ri-store-2-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Marketplaces</p>
          </span>
        </div>
        <div>
          <i className="ri-question-answer-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Questionaires</p>
          </span>
        </div>
        <div>
          <i className="ri-folder-chart-line"></i>
          <span>
            <h1>235</h1>
            <p>Active Results</p>
          </span>
        </div>
      </div>
    </div>
  );
}
