import { useRef, useEffect, type KeyboardEvent } from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";

import { SendIcon, ReloadIcon } from "./Icons";
import { elementReset } from "./utils";
import { ComposeProps, ValidationReturn } from "../types";
import { colors } from "../config";

const { WHITE } = colors;

export const StyledButton = styled.button`
  ${elementReset}

  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);

  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: inherit;
  background-color: transparent;
  background-image: none;

  ${({ disabled }) =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.65;
    box-shadow: none;
  `
      : ``}
`;

export const ComposeForm = styled.form`
  ${elementReset}

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  background-color: ${WHITE};

  @media (min-width: 640px) {
    padding-left: 3rem;
    padding-right: 3rem;
    border-radius: 0.375rem;
    border-width: 1px;
  }
`;

const StyledTextArea = styled(Textarea)`
  ${elementReset}

  min-height: 60px;
  width: 100%;
  resize: none;
  background-color: transparent;
  padding: 1.3rem 1rem;

  outline: none;
  line-height: inherit;
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-weight: inherit;
  color: inherit;

  &:focus {
    outline: none;
  }

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const ButtonWrapper = styled.div`
  ${elementReset}

  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
`;

const SubmitButtonWrapper = styled(ButtonWrapper)`
  right: 0;

  @media (min-width: 640px) {
    right: 1rem;
  }
`;

const ReloadButtonWrapper = styled(ButtonWrapper)`
  left: 0;

  @media (min-width: 640px) {
    left: 1rem;
  }
`;

function defaultIsValid(value: string): boolean {
  return value.trim() !== "";
}

function isValidationReturn(value: any): value is ValidationReturn {
  return (
    typeof value === "object" &&
    value !== null &&
    "valid" in value &&
    "message" in value
  );
}

export function Compose({
  disabled = false,
  input = "",

  onSend,
  onInputChange = () => {},
  onSubmit,
  onError = (message) => {},
  validate = defaultIsValid,
}: ComposeProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      formRef.current?.requestSubmit();
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleOnSubmit =
    onSubmit ??
    ((e) => {
      if (typeof onSend !== "function") {
        throw new Error(
          "onSend must be a function unless you're using onSubmit"
        );
      }

      e.preventDefault();
      // validate
      const valid = validate(input);
      if (typeof valid === "object" && isValidationReturn(valid)) {
        if (valid.valid === false) {
          return onError(valid.message);
        }
      } else {
        if (valid === false) {
          return onError("Invalid input");
        }
      }

      // Clear out form value
      onInputChange("");

      // Send message
      onSend({
        id: uuidv4(),
        content: input,
        role: "user",
      });
    });

  return (
    <ComposeForm onSubmit={handleOnSubmit} ref={formRef}>
      <StyledTextArea
        ref={inputRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        rows={1}
        value={input}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        placeholder="How can I help you?"
        spellCheck={false}
      />
      <ReloadButtonWrapper>
        <StyledButton
          type="button"
          disabled={disabled}
          aria-label="reload button"
        >
          <ReloadIcon />
        </StyledButton>
      </ReloadButtonWrapper>
      <SubmitButtonWrapper>
        <StyledButton
          type="submit"
          disabled={disabled || input === ""}
          aria-label="Send message button"
        >
          <SendIcon />
        </StyledButton>
      </SubmitButtonWrapper>
    </ComposeForm>
  );
}
