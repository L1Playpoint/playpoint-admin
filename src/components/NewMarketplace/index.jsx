import React from "react";
import { Box, Button, TextField } from "@mui/material";
import "./styles/style.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function NewMarketplace() {
  const [newMarketplaceItem, setNewMarketplaceItem] = React.useState({
    marketplaceSlug: "",
    marketplaceName: "",
    marketplaceCoverImage: null,
    tags: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleMarketplaceSlug = (e) => {
    setNewMarketplaceItem({
      ...newMarketplaceItem,
      marketplaceSlug:
        e.target.value.replace(/ /g, "-") +
        Math.floor(Math.random() * (999 - 100 + 1) + 100),
      marketplaceName: e.target.value,
    });
  };

  const handleResetInputs = () => {
    setNewMarketplaceItem({
      marketplaceSlug: "",
      marketplaceName: "",
      marketplaceCoverImage: null,
    });
  };

  const handleMarketplaceSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    const { marketplaceName, marketplaceCoverImage, marketplaceSlug, tags } =
      newMarketplaceItem;

    formData.append("marketplaceSlug", marketplaceSlug);
    formData.append("marketplaceName", marketplaceName);
    formData.append("marketplaceCoverImage", marketplaceCoverImage);
    formData.append("tags", tags);

    // axios post request here
    axios
      .post(import.meta.env.VITE_API_URI + "api/v1/new-marketplace", formData)
      .then((res) => {
        setLoading(false);
        toast("Marketplace created successfully!");

        setNewMarketplaceItem({
          marketplaceSlug: "",
          marketplaceName: "",
          marketplaceCoverImage: null,
          tags: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="newMarketplace__container">
      <h1 className="header">New Markteplace</h1>

      <Box
      aria-disabled={loading && "disabled"}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="newMarketplaceForm__container"
        onSubmit={handleMarketplaceSubmit}
      >
        <label>Marketplace Cover Image</label>
        <img
          src={
            newMarketplaceItem.marketplaceCoverImage
              ? URL.createObjectURL(newMarketplaceItem.marketplaceCoverImage)
              : "https://images.unsplash.com/photo-1611071536600-036ef2b47de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          }
          loading="lazy"
        />
        <input
          type="file"
          name="marketplaceSlug"
          id=""
          onChange={(e) =>
            setNewMarketplaceItem({
              ...newMarketplaceItem,
              marketplaceCoverImage: e.target.files[0],
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Marketplace Slug"
          variant="outlined"
          value={newMarketplaceItem.marketplaceSlug}
        />
        <TextField
          id="outlined-basic"
          label="Marketplace Name"
          variant="outlined"
          value={newMarketplaceItem.marketplaceName}
          onChange={handleMarketplaceSlug}
        />
        <TextField
          id="outlined-basic"
          label="Tags"
          variant="outlined"
          value={newMarketplaceItem.tags}
          onChange={(e) =>
            setNewMarketplaceItem({
              ...newMarketplaceItem,
              tags: e.target.value,
            })
          }
        />
        <Button className="submitBtn" type="submit">
          Submit
        </Button>
        <Button onClick={() => handleResetInputs()}>Reset</Button>
      </Box>
    </div>
  );
}
