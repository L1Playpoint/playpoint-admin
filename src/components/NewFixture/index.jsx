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
  const [value, setValue] = React.useState(null);

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
          <TextField id="outlined-basic" label="Home Team" variant="outlined" />
          <img
            src="https://ik.imagekit.io/lexworld/Logo.png"
            alt=""
            loading="lazy"
          />
          <p>vs</p>
          <img
            src="https://ik.imagekit.io/lexworld/Logo.png"
            alt=""
            loading="lazy"
          />
          <TextField id="outlined-basic" label="Away Team" variant="outlined" />
        </div>
        <div className="imageInputs">
          <input type="file" name="" id="" />
          <p>vs</p>
          <input type="file" name="" id="" />
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Marketplace</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Marketplace"
            // onChange={handleChange}
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
          />
          <TextField
            id="outlined-basic"
            label="Round Number"
            variant="outlined"
            type="number"
          />
          <TextField id="outlined-basic" label="Group" variant="outlined" />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disableFuture
            label="Responsive"
            openTo="year"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <TextField id="outlined-basic" label="Location" variant="outlined" />

        <Button className="submitBtn" type="submit">
          Submit
        </Button>
        <Button>Reset</Button>
      </Box>
    </div>
  );
}
