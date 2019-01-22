import React from "react";

const cc = require("cryptocompare");

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList });
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "Dashboard"
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        test: "hello"
      })
    );
  };

  savedSettings() {
    let cryptoDashDate = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashDate) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  }

  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
