import { Button, Typography } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function Questionaires() {
  return (
    <div className="questionaire__container">
      <h1 className="title">Active Questionaires</h1>

      <div className="search__container">
        <i className="ri-search-line"></i>{" "}
        <input type="text" placeholder="Search Questionaires..." />
      </div>

      <div className="questionaire__items">
        <Button className="questionaire__item newQuestionaire">
          <i className="ri-add-line"></i>
          <Typography variant="p">New Questionaire</Typography>
        </Button>

        {
          [0,1,2,3,4,5,6,7,8,9,10].map(data => {
            return <div className="questionaire__item" key={data}>
              <div className="marketplaceSlug"><b>Marketplace</b>: worldcup-2022</div>
              <div className="fixture"><b>Fixture</b>: Brazil vs Qatar</div>

              <ul>
                <li>What will be the exact score?</li>
                <li>How many offsides for brazil & qatar in total?</li>
                <li>Will Neymar fall more than 10 times?</li>
              </ul>
              <div className="actions">
              <Button className="editBtn"><i className="ri-settings-line"></i> Edit</Button>
              <Button className="deleteBtn"><i className="ri-delete-bin-5-line"></i> Delete</Button>
            </div>
            </div>
          })
        }
      </div>
    </div>
  );
}
