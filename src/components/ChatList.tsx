import React from "react";
import styled from "styled-components";

import { ScrollAnchor } from "./ScrollAnchor";
import { type ChatListProps } from "../types";
import { elementReset } from "./utils";


const ChatListContainer = styled.div`
  ${elementReset}

  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 42rem;
`;

export const ChatList: React.FC<ChatListProps> = ({ children, className }) => {
  return (
    <ChatListContainer className={className}>
      {children}
      <ScrollAnchor />
    </ChatListContainer>
  );
};
