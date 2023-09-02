import React, { useEffect } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";
import { useAtBottom } from "../hooks";

interface ChatScrollAnchorProps {
  disabled?: boolean;
}

const Elem = styled.div`
  width: 100%;
  height: 1px;
`;

export const ScrollAnchor: React.FC<ChatScrollAnchorProps> = ({
  disabled = false,
}) => {
  const isAtBottom = useAtBottom();
  const { ref, entry, inView } = useInView({
    trackVisibility: !disabled,
    delay: 100,
    rootMargin: "0px 0px -140px 0px",
  });

  useEffect(() => {
    if (isAtBottom && !disabled && !inView) {
      entry?.target.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [inView, entry, isAtBottom, disabled]);

  return <Elem ref={ref} />;
};
