import * as React from "react";
import styled, { css } from "styled-components";
import { elementReset } from "./utils";
import { HeaderProps } from "../types";
import { colors } from "../config";

const { WHITE } = colors;

const sharedContainerStyles = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const BaseHeader = styled.header`
  ${elementReset}
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  width: 100%;
  height: 4rem;
  background-color: ${WHITE};
`;

const LeftContent = styled.div`
  ${sharedContainerStyles}

  padding-left: 0;
  flex-grow: 1;
  justify-content: flex-start;
`;

const CenterContent = styled.div`
  ${sharedContainerStyles}

  flex-basis: 60%;
  justify-content: center;
`;

const RightContent = styled.div`
  ${sharedContainerStyles}

  padding-right: 0;
  flex-grow: 1;
  justify-content: flex-end;
`;

const noop = () => null;

export const Header: React.FC<HeaderProps> = ({
  className,
  children,
  renderLeft = noop,
  renderRight = noop,
}) => {
  return (
    <BaseHeader className={className}>
      <LeftContent>{renderLeft()}</LeftContent>
      <CenterContent>{children}</CenterContent>
      <RightContent>{renderRight()}</RightContent>
    </BaseHeader>
  );
};
