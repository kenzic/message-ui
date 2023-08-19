import styled from "styled-components";
import { elementReset } from "./utils";

export const ChatWindow = styled.div`
  ${elementReset}
  padding-top: 1rem;
  padding-bottom: 200px;

  @media (min-width: 768px) {
    padding-top: 2.5rem;
  }
`;
