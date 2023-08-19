import type { Meta, StoryObj } from "@storybook/react";

import { StyledButton } from "../src/components/ComposeForm";
import { SendIcon, ReloadIcon } from "../src/components/Icons";

const meta = {
  title: "message-ui/Buttons",
  component: StyledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SendButton: Story = {
  args: {
    disabled: false,
    children: <SendIcon />,
  },
};

export const ReloadButton: Story = {
  args: {
    disabled: false,
    children: <ReloadIcon />,
  },
};
