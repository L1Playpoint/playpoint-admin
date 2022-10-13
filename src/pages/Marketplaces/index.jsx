import { Button, Typography } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function Markteplaces() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="marketplaces__container">
      <h1 className="header">Active Markteplaces</h1>

      <div className="search__container">
        <i className="ri-search-line"></i>{" "}
        <input type="text" placeholder="Search Marketplace..." />
      </div>

      <div className="marketplaces__items">
        <Button className="marketplace__item newMarketplace">
          <i className="ri-add-line"></i>
          <Typography variant="p">New Marketplaces</Typography>
        </Button>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (data) => (
            <div className="marketplace__item" key={data}>
              <img
                src="https://ik.imagekit.io/domsan/Screen_Shot_2022-09-07_at_21.18.52_TY1tSeXaA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662564842084"
                alt=""
              />
              <Typography variant="p">
                <i className="ri-gamepad-line"></i> UEFA Champions League
              </Typography>
              <ul>
                <li>
                  <b>Fixture</b>: 125
                </li>
                <li>
                  <b>Questionaires</b>: 125
                </li>
                <li>
                  <b>Results</b>: 125
                </li>
                <li>
                  <b>Volume</b>: 1,25,255
                </li>
              </ul>
              <div className="actions">
                <Button className="editBtn">
                  <i className="ri-settings-line"></i> Edit
                </Button>
                <Button className="deleteBtn">
                  <i className="ri-delete-bin-5-line"></i> Delete
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
