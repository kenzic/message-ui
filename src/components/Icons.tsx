import { ComponentProps } from "react";
import styled from "styled-components";
import { elementReset } from "./utils";
import { colors } from "../config";

const { BLACK } = colors;

// SVG Icons base on Wolf Kit Solid Glyph Icons
// https://www.svgrepo.com/collection/wolf-kit-solid-glyph-icons/

type IconProps = ComponentProps<"svg"> & {
  fill?: string;
};

const DEFAULT_FILL = BLACK;

export const SendIcon = styled(({ fill, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Send Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 7.83335C12 7.4963 12.2088 7.19244 12.5291 7.06346C12.8494 6.93447 13.2181 7.00577 13.4632 7.2441L17.7489 11.4107C18.0837 11.7362 18.0837 12.2638 17.7489 12.5893L13.4632 16.7559C13.2181 16.9942 12.8494 17.0655 12.5291 16.9365C12.2088 16.8076 12 16.5037 12 16.1666V14H7C6.44771 14 6 13.5523 6 13V11C6 10.4477 6.44771 10 7 10H12V7.83335Z"
        fill={fill ?? DEFAULT_FILL}
      />
    </svg>
  );
})`
  ${elementReset}
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.04rem;
`;

export const ReloadIcon = styled(({ fill, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Reload Icon</title>
      <path
        d="M16.3788 6.20698C15.1885 5.25459 13.7434 4.5 12 4.5C7.85787 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85787 19.5 12 19.5C15.2549 19.5 18.028 17.4254 19.0646 14.5256C19.2505 14.0055 19.775 13.6568 20.3153 13.7713L21.2935 13.9787C21.8338 14.0932 22.1836 14.6262 22.0179 15.1531C20.6787 19.4112 16.7016 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C14.7835 1.5 16.9516 2.76847 18.5112 4.0746L20.2929 2.29289C20.5789 2.00689 21.009 1.92134 21.3827 2.07612C21.7564 2.2309 22 2.59554 22 3V8.5C22 9.05228 21.5523 9.5 21 9.5H15.5C15.0956 9.5 14.7309 9.25636 14.5761 8.88268C14.4214 8.50901 14.5069 8.07889 14.7929 7.79289L16.3788 6.20698Z"
        fill={fill ?? DEFAULT_FILL}
      />
    </svg>
  );
})`
  ${elementReset}
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.24rem;
`;
