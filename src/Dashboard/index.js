import React from "react";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import styled from "styled-components";
import PriceChart from "./PriceChat";

const ChartGrid = styled.div`
display: grid;
margin-top: 20px
grid-template-columns: 1fr 3fr;
`;

export default function() {
  return (
    <Page name="Dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
}
