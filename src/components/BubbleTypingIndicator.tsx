import styled, { keyframes } from "styled-components";
import { elementReset } from "./utils";
import { colors } from "../config";

const { GRAY, BLACK } = colors;

const ChatMessageContainer = styled.div`
  ${elementReset}

  display: flex;
  position: relative;
  align-items: flex-start;
  margin-bottom: 1rem;
  justify-content: "flex-start";
`;

const Bubble = styled.div`
  ${elementReset}

  display: flex;
  padding: 0.475rem;
  padding-left: 0.56rem;
  padding-right: 0.56rem;
  border-radius: 0.5rem;

  margin-right: 8.5rem;
  background-color: ${BLACK};
`;

const DotContainer = styled.div`
  align-items: center;
  display: flex;
  height: 17px;
`;

const typingAnimation = keyframes`
  0%{
    transform:translateY(0px)
  }
  33%{
    transform:translateY(-0.4rem)
  }
  55%{
    transform:translateY(0px)
  }
`;

const BouncingDot = styled.div`
  animation: ${typingAnimation} 1.4s infinite ease-in-out;
  border-radius: 0.4rem;
  display: inline-block;
  height: 0.8rem;
  margin-right: 0.4rem;
  width: 0.8rem;
  background-color: ${GRAY};

  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 398ms;
    margin-right: 0;
  }
`;

export const BubbleTypingIndicator = ({ className }: { className?: string }) => {
  return (
    <ChatMessageContainer role={"status"}>
      <Bubble className={className}>
        <DotContainer>
          <BouncingDot />
          <BouncingDot />
          <BouncingDot />
        </DotContainer>
      </Bubble>
    </ChatMessageContainer>
  );
};
