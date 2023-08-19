import type { Meta, StoryObj } from "@storybook/react";

import { BubbleMessage } from "../src/components/BubbleMessage";

const meta = {
  title: "message-ui/Bubble/Message",
  component: BubbleMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BubbleMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {
    message: {
      id: "1",
      role: "user",
      content: "Hello, world!",
    },
  },
};

export const Assistant: Story = {
  args: {
    message: {
      id: "1",
      role: "assistant",
      content: "Hello, world!",
    },
  },
};
