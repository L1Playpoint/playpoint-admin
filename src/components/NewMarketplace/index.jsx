import React from "react";
import { Box, Button, TextField } from "@mui/material";
import "./styles/style.css";

export default function NewMarketplace() {
  const [newMarketplaceItem, setNewMarketplaceItem] = React.useState({
    marketplaceSlug: "",
    marketplaceName: "",
    marketplaceCoverImage: null,
  });

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

  //   const handleNewMarketplaceSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     const { marketplaceName, marketplaceCoverImage, marketplaceSlug } =
  //       newMarketplaceItem;
  //     formData.append("marketplaceSlug", marketplaceSlug);
  //     formData.append("marketplaceName", marketplaceName);
  //     formData.append("marketplaceCoverImage", marketplaceCoverImage);
  //     axios
  //       .post(
  //         import.meta.env.VITE_SERVER_URI + "api/marketplace/new-marketplace",
  //         formData
  //       )
  //       .then((res) => {
  //         if (res.status === 200) {
  //           getMarketplaces();
  //           resetMarketplaceFocused();
  //         }
  //       })
  //       .catch((err) => console.error(err));
  //   };

  return (
    <div className="newMarketplace__container">
      <h1 className="header">New Markteplace</h1>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="newMarketplaceForm__container"
      >
        <label>Marketplace Cover Image</label>
        <img
          src={
            newMarketplaceItem.marketplaceCoverImage
              ? URL.createObjectURL(newMarketplaceItem.marketplaceCoverImage)
              : "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
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
        <Button className="submitBtn" type="submit">
          Submit
        </Button>
        <Button onClick={() => handleResetInputs()}>Reset</Button>
      </Box>
    </div>
  );
}
