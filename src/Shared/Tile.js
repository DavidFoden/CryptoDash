import styled from "styled-components";
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from "../Shared/Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    curosr: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    curosr: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
pointer-events: none
opacity: 0.4;
`;
