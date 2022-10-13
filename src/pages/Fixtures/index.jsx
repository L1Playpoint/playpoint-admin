import { Button, Typography } from "@mui/material";
import React from "react";
import { ScrollToTop } from "../../utils/ScrollToTop";
import "./styles/style.css";

export default function Fixture() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fixture__container">
      <h1 className="title">Active Fixtures</h1>

      <div className="search__container">
        <i className="ri-search-line"></i>{" "}
        <input type="text" placeholder="Search Fixtures..." />
      </div>

      <div className="fixture__items">
        <Button className="fixture__item newFixture">
          <i className="ri-add-line"></i>
          <Typography variant="p">New Fixture</Typography>
        </Button>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((data) => {
          return (
            <div key={data} className="fixture__item">
              <p className="title">
                <b>
                  <i className="ri-gamepad-line"></i> Marketplace
                </b>
                : worldcup-2022
              </p>
              <div className="gameDetails">
                <span className="homeTeam">
                  <p>Brazil</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg"
                    alt=""
                  />
                </span>
                <span>VS</span>
                <span className="awayTeam">
                  <img
                    src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg"
                    alt=""
                  />
                  <p>Qatar</p>
                </span>
              </div>

              <div className="summary">
                <p>
                  Users
                  <br /> <b>2158</b>
                </p>
                <p>
                  Questions
                  <br /> <b>12</b>
                </p>
                <p>
                  Results
                  <br /> <b>3</b>
                </p>
              </div>

              <div className="actions">
                <Button className="editBtn">
                  <i className="ri-settings-line"></i> Edit
                </Button>
                <Button className="deleteBtn">
                  <i className="ri-delete-bin-5-line"></i> Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
