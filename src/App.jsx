import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewFixture from "./components/NewFixture";
import NewMarketplace from "./components/NewMarketplace";
import Topbar from "./components/Topbar";
import Fixture from "./pages/Fixtures";
import Home from "./pages/Home";
import Markteplaces from "./pages/Marketplaces";
import Questionaires from "./pages/Questionaires";
import Results from "./pages/Results";

export default function App() {
  return (
    <div className="app__container">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="marketplaces" element={<Markteplaces />}/>
        <Route path="marketplaces/new" element={<NewMarketplace />}/>
        <Route path="fixtures" element={<Fixture />} />
        <Route path="fixtures/new" element={<NewFixture />} />
        <Route path="questionaires" element={<Questionaires />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  );
}
