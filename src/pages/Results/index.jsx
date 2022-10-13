import { Button, Typography } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function Results() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="result__container">
      <h1 className="title">Active Results</h1>

      <div className="search__container">
        <i className="ri-search-line"></i>{" "}
        <input type="text" placeholder="Search Results..." />
      </div>

      <div className="result__items">
        <Button className="result__item newResult">
          <i className="ri-add-line"></i>
          <Typography variant="p">New Result</Typography>
        </Button>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => {
          return (
            <div key={data} className="result__item">
              <p>
                <b>Questionaire</b>: bhjse78999wjhbe
              </p>
              <p>
                <b>Pool Type</b>: Duo
              </p>
              <p>
                <b>Questionaire Type</b>: 4
              </p>

              <ul>
                <li>A</li>
                <li>3-2</li>
                <li>B</li>
                <li>D</li>
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
          );
        })}
      </div>
    </div>
  );
}
