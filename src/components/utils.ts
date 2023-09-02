import { css } from "styled-components";
import { colors } from "../config";

const { GRAY } = colors;

export const elementReset = css`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: ${GRAY};

  &::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: ${GRAY};
  }
`;
