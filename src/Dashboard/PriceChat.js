import highchartsConfig from "./HighchartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HightchartsTheme from "./HightchartsTheme";
ReactHighcharts.Highcharts.setOptions(HightchartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <Tile>
          {historical ? (
            <ReactHighcharts config={highchartsConfig(historical)} />
          ) : (
            <div> Loading historical Data </div>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
