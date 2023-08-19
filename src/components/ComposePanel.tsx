import React from "react";
import styled from "styled-components";

import { Compose } from "./ComposeForm";
import { ChatPanelProps } from "../types";
import { elementReset } from "./utils";
import { colors } from "../config";

const { WHITE } = colors;

const ComposePanelWrapper = styled.div`
  ${elementReset}
  box-sizing: border-box;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  border-top-width: 1px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-color: ${WHITE};

  @media (min-width: 640px) {
    border-top-left-radius: 0.15rem;
    border-top-right-radius: 0.15rem;
    border-width: 1px;
  }
  @media (min-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const ChatPanelContainer = styled.div`
  ${elementReset}
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
`;

const ComposePanelOuterWrapper = styled.div`
  ${elementReset}
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ComposePanel: React.FC<ChatPanelProps> = ({
  id,
  disabled,
  input,

  stop = () => {},
  onSend,
  onReload,
  onInputChange,
  onSubmit,
  onError,
  validate,
}) => {
  return (
    <ChatPanelContainer>
      <ComposePanelOuterWrapper>
        <ComposePanelWrapper>
          <Compose
            onSubmit={onSubmit}
            onSend={onSend}
            onError={onError}
            input={input}
            onInputChange={onInputChange}
            disabled={disabled}
            validate={validate}
          />
        </ComposePanelWrapper>
      </ComposePanelOuterWrapper>
    </ChatPanelContainer>
  );
};
