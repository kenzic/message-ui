import type { Meta, StoryObj } from "@storybook/react";

import { BubbleTypingIndicator } from "../src/components/BubbleTypingIndicator";

const meta = {
  title: "message-ui/Bubble/TypingIndicator",
  component: BubbleTypingIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BubbleTypingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
