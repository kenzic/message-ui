import React, { useEffect } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";
import { useAtBottom } from "../hooks";

interface ChatScrollAnchorProps {
  trackVisibility?: boolean;
}

const Elem = styled.div`
  width: 100%;
  height: 1px;
`;

export const ScrollAnchor: React.FC<ChatScrollAnchorProps> = ({
  trackVisibility,
}) => {
  const isAtBottom = useAtBottom();
  const { ref, entry, inView } = useInView({
    trackVisibility,
    delay: 100,
    rootMargin: "0px 0px -140px 0px",
  });

  useEffect(() => {
    if (isAtBottom && trackVisibility && !inView) {
      entry?.target.scrollIntoView({
        block: "start",
      });
    }
  }, [inView, entry, isAtBottom, trackVisibility]);

  return <Elem ref={ref} />;
};
