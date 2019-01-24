import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize1 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize1}
  border: 1px solid;
  height: 25px
  color: #1163c9
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].coinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  debugger;
  let fuzzyResults =
    //   fuzzy.filter(inputValue, allStringsToSearch);
    // .map(result => result.string);
    console.log(fuzzyResults);

  let filterCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.coinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });

  setFilteredCoins(filterCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2> Find your dream coin, today! </h2>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
