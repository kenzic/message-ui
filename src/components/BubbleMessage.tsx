import styled from "styled-components";
import { type BubbleMessageProps } from "../types";
import { colors } from "../config";
import { elementReset } from "./utils";

const { GRAY, BLACK } = colors;

const ChatMessageContainer = styled.div`
  ${elementReset}

  display: flex;
  position: relative;
  align-items: flex-start;
  margin-bottom: 1rem;
  justify-content: ${(props) =>
    props.role === "user" ? "flex-end" : "flex-start"};
`;

const Bubble = styled.div`
  ${elementReset}

  display: flex;
  padding: 0.375rem;
  padding-left: 0.56rem;
  padding-right: 0.56rem;
  border-radius: 0.5rem;

  ${(props) =>
    props.role === "user" ? "margin-left: 8.5rem;" : "margin-right: 8.5rem;"};

  font-size: 1rem;
  font-family: inherit;
  line-height: 1rem;
  letter-spacing: 0.01rem;

  color: ${(props) => (props.role === "user" ? BLACK : GRAY)};
  background-color: ${(props) => (props.role === "user" ? GRAY : BLACK)};
`;

export const BubbleMessage: React.FC<BubbleMessageProps> = ({
  message,
  ...props
}) => {
  return (
    <ChatMessageContainer role={message.role}>
      <Bubble role={message.role} {...props}>
        {message.content}
      </Bubble>
    </ChatMessageContainer>
  );
};
