import {
  Box,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./styles/style.css";

export default function NewFixture() {
  const [newFixtureItem, setNewFixtureItem] = React.useState({
    HomeTeam: "",
    AwayTeam: "",
    HomeTeamIcon: null,
    AwayTeamIcon: null,
    HomeTeamScore: "",
    AwayTeamScore: "",
    marketplaceSlug: "",
    MatchNumber: 0,
    RoundNumber: 0,
    Location: "",
    Group: "",
    DateUtc: null,
  });

  const resetInputs = () => {
    setNewFixtureItem({
      HomeTeam: "",
      AwayTeam: "",
      HomeTeamIcon: null,
      AwayTeamIcon: null,
      HomeTeamScore: "",
      AwayTeamScore: "",
      marketplaceSlug: "",
      MatchNumber: 0,
      RoundNumber: 0,
      Location: "",
      Group: "",
      DateUtc: null,
    });
  };

  return (
    <div className="newFixture__container">
      <h1 className="header">New Fixture</h1>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="newMarketplaceForm__container"
      >
        <div className="fixtureFormat">
          <TextField
            value={newFixtureItem.HomeTeam}
            id="outlined-basic"
            label="Home Team"
            variant="outlined"
            onChange={(e) =>
              setNewFixtureItem({ ...newFixtureItem, HomeTeam: e.target.value })
            }
          />
          <img
            src={
              newFixtureItem.HomeTeamIcon
                ? URL.createObjectURL(newFixtureItem.HomeTeamIcon)
                : "https://ik.imagekit.io/lexworld/Logo.png"
            }
            alt=""
            loading="lazy"
          />
          <p>vs</p>
          <img
            src={
              newFixtureItem.AwayTeamIcon
                ? URL.createObjectURL(newFixtureItem.AwayTeamIcon)
                : "https://ik.imagekit.io/lexworld/Logo.png"
            }
            alt=""
            loading="lazy"
          />
          <TextField
            value={newFixtureItem.AwayTeam}
            id="outlined-basic"
            label="Away Team"
            variant="outlined"
            onChange={(e) =>
              setNewFixtureItem({ ...newFixtureItem, AwayTeam: e.target.value })
            }
          />
        </div>
        <div className="imageInputs">
          <input
            type="file"
            name="HomeTeamIcon"
            onChange={(e) =>
              setNewFixtureItem({
                ...newFixtureItem,
                HomeTeamIcon: e.target.files[0],
              })
            }
          />
          <p>vs</p>
          <input
            type="file"
            name="AwayTeamIcon"
            onChange={(e) =>
              setNewFixtureItem({
                ...newFixtureItem,
                AwayTeamIcon: e.target.files[0],
              })
            }
          />
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Marketplace</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newFixtureItem.marketplaceSlug}
            label="Marketplace"
            onChange={(e) =>
              setNewFixtureItem({
                ...newFixtureItem,
                marketplaceSlug: e.target.value,
              })
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div className="gameInfos">
          <TextField
            id="outlined-basic"
            label="Match Number"
            variant="outlined"
            type="number"
            value={newFixtureItem.MatchNumber}
            onChange={(e) =>
              setNewFixtureItem({
                ...newFixtureItem,
                MatchNumber: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Round Number"
            variant="outlined"
            type="number"
            value={newFixtureItem.RoundNumber}
            onChange={(e) =>
              setNewFixtureItem({
                ...newFixtureItem,
                RoundNumber: e.target.value,
              })
            }
          />
          <TextField
            value={newFixtureItem.Group}
            id="outlined-basic"
            label="Group"
            variant="outlined"
            onChange={(e) =>
              setNewFixtureItem({ ...newFixtureItem, Group: e.target.value })
            }
          />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disableFuture
            label="Responsive"
            openTo="year"
            views={["year", "month", "day"]}
            value={newFixtureItem.DateUtc}
            onChange={(newValue) => {
              setNewFixtureItem({
                ...newFixtureItem,
                DateUtc: newValue,
              });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <TextField
          value={newFixtureItem.Location}
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={(e) =>
            setNewFixtureItem({ ...newFixtureItem, Location: e.target.value })
          }
        />

        <Button className="submitBtn" type="submit">
          Submit
        </Button>
        <Button onClick={() => resetInputs()}>Reset</Button>
      </Box>
    </div>
  );
}
