import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function NewQuestionaire() {
  const [formData, setFormData] = React.useState({
    marketplaceSlug: "",
    bidPrice: 5,
    questionType: 3,
    poolType: "duo",
    questions: ["", "", ""],
  });

  const [questionOne, setQuestionOne] = React.useState("");
  const [questionTwo, setQuestionTwo] = React.useState("");
  const [questionThree, setQuestionThree] = React.useState("");
  const [questionFour, setQuestionFour] = React.useState("");

  const handleQuestionInput = (e, v) => {
    switch (e) {
      case 0:
        setQuestionOne(v);
        break;
      case 1:
        setQuestionTwo(v);
        break;
      case 2:
        setQuestionThree(v);
        break;
      case 3:
        setQuestionFour(v);
        break;
      default:
        break;
    }
  };

  return (
    <div className="newQuestionaire__container">
      <h1>New Questionaire</h1>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marketplace</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.marketplaceSlug}
          label="Pool Type"
          onChange={(e) =>
            setFormData({
              ...formData,
              marketplaceSlug: e.target.value,
            })
          }
        >
          {/* This must be mapped from backend marketplace */}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bid Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.bidPrice}
          label="Bid Price"
          onChange={(e) =>
            setFormData({
              ...formData,
              bidPrice: e.target.value,
            })
          }
        >
          <MenuItem value={5}>$5</MenuItem>
          <MenuItem value={20}>$20</MenuItem>
          <MenuItem value={50}>$50</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.questionType}
          label="Question Type"
          onChange={(e) => {
            setFormData({
              ...formData,
              questionType: e.target.value,
              questions: e.target.value === 3 ? ["", "", ""] : ["", "", "", ""],
            });
          }}
        >
          <MenuItem value={3}>3 Questions</MenuItem>
          <MenuItem value={4}>4 Questions</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pool Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.poolType}
          label="Question Type"
          onChange={(e) =>
            setFormData({
              ...formData,
              poolType: e.target.value,
            })
          }
        >
          <MenuItem value="duo">Duo</MenuItem>
          <MenuItem value="trio">Trio</MenuItem>
          <MenuItem value="nonet">Nonet</MenuItem>
          <MenuItem value="unlimited">Unlimited</MenuItem>
        </Select>
      </FormControl>

      {formData.questionType === 3
        ? ["", "", ""].map((data, index) => {
            return (
              <TextField
                key={index}
                value={
                  index === 0
                    ? questionOne
                    : index === 1
                    ? questionTwo
                    : questionThree
                }
                id="outlined-basic"
                label="Location"
                variant="outlined"
                onChange={(e) => handleQuestionInput(index, e.target.value)}
              />
            );
          })
        : ["", "", "", ""].map((data, index) => {
            console.log(index);
            return (
              <TextField
                key={index}
                value={
                  index === 0
                    ? questionOne
                    : index === 1
                    ? questionTwo
                    : index === 2
                    ? questionThree
                    : questionFour
                }
                id="outlined-basic"
                label={`Question ${index+1}`}
                variant="outlined"
                onChange={(e) => handleQuestionInput(index, e.target.value)}
              />
            );
          })}
      <Button className="submitBtn" type="submit">
        Submit
      </Button>
      <Button>Reset</Button>
    </div>
  );
}
