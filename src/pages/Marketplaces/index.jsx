import { Button, Typography } from "@mui/material";
import React from "react";
import Marketplaces from "../../mocks/Marketplaces.json";
import "./styles/style.css";
import Fuse from "fuse.js";
export default function Markteplaces() {
  const [marketplaces, setMarketplaces] = React.useState(Marketplaces);
  const [filteredMarketplaces, setFilteredMarketplaces] = React.useState([]);

  const filter = (e) => {
    const options = {
      includeScore: true,
      keys: ["tags", "marketplaceSlug"],
    };

    const fuse = new Fuse(marketplaces, options);
    const result = fuse.search(e.target.value);
    setFilteredMarketplaces(result);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="marketplaces__container">
      <h1 className="header">Active Markteplaces</h1>

      <div className="search__container">
        <i className="ri-search-line"></i>{" "}
        <input
          onChange={filter}
          type="text"
          placeholder="Search Marketplace..."
        />
      </div>

      <div className="marketplaces__items">
        <Button className="marketplace__item newMarketplace">
          <i className="ri-add-line"></i>
          <Typography variant="p">New Marketplaces</Typography>
        </Button>

        {filteredMarketplaces.length > 0
          ? filteredMarketplaces.map((data, index) => (
              <div className="marketplace__item" key={index}>
                <img src={data?.item?.marketplaceCoverImage} alt="" loading="lazy" />
                <Typography variant="p">
                  <i className="ri-gamepad-line"></i> {data?.item?.marketplaceName}
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
            ))
          : marketplaces.map((data, index) => (
              <div className="marketplace__item" key={index}>
                <img src={data?.marketplaceCoverImage} alt="" loading="lazy" />
                <Typography variant="p">
                  <i className="ri-gamepad-line"></i> {data?.marketplaceName}
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
            ))}
      </div>
    </div>
  );
}
