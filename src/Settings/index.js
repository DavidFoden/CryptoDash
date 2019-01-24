import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "../Settings/CoinGrid";
import Search from "../Settings/Search";

export default function() {
  return (
    <Page name="Settings">
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
}
