import { Button, Typography } from "@mui/material";
import React from "react";
import QuestionairesList from "../../mocks/Questionaires.json";
import "./styles/style.css";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

export default function Questionaires() {
  const [questionaires, setQuestionaires] = React.useState(QuestionairesList);
  const [filteredQuestionaires, setFilteredQuestionaires] = React.useState([]);
  const navigate = useNavigate();

  const filter = (e) => {
    const options = {
      includeScore: true,
      keys: ["questions", "marketplaceSlug"],
    };

    const fuse = new Fuse(QuestionairesList, options);
    const result = fuse.search(e.target.value);
    setFilteredQuestionaires(result);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="questionaire__container">
      <h1 className="title">Active Questionaires</h1>

      <div className="search__container">
        <i className="ri-search-line"></i>{" "}
        <input
          onChange={filter}
          type="text"
          placeholder="Search Questionaires..."
        />
      </div>

      <div className="questionaire__items">
        <Button
          className="questionaire__item newQuestionaire"
          onClick={() => navigate("new")}
        >
          <i className="ri-add-line"></i>
          <Typography variant="p">New Questionaire</Typography>
        </Button>

        {filteredQuestionaires.length > 0
          ? filteredQuestionaires.map((data, index) => {
              return (
                <div className="questionaire__item" key={index}>
                  <div className="marketplaceSlug">
                    <b>Marketplace</b>: {data?.item?.marketplaceSlug}
                  </div>
                  <div className="fixture">
                    <b>Fixture</b>: {data?.item?.fixtureId}
                  </div>

                  <ul>
                    {data?.item?.questions.map((question, index) => {
                      return <li key={index}>{question}</li>;
                    })}
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
            })
          : questionaires.map((data, index) => {
              return (
                <div className="questionaire__item" key={index}>
                  <div className="marketplaceSlug">
                    <b>Marketplace</b>: {data.marketplaceSlug}
                  </div>
                  <div className="fixture">
                    <b>Fixture</b>: {data.fixtureId}
                  </div>

                  <ul>
                    {data.questions.map((question, index) => {
                      return <li key={index}>{question}</li>;
                    })}
                  </ul>
                  <div className="actions">
                    <Button className="editBtn">
                      <i className="ri-settings-line"></i> Edit
                    </Button>
                    <Button
                      className="resultBtn"
                      onClick={() => navigate("/results/new")}
                    >
                      <i className="ri-gamepad-line"></i> Set Result
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
