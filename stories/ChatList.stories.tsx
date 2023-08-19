import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ChatList } from "../src/components/ChatList";
import { BubbleMessage } from "../src/components/BubbleMessage";
import { messages } from "./demo-data";

const meta = {
  title: "message-ui/ChatList",
  component: ChatList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ChatList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <ChatList>
      {messages.map((message, index) => (
        <BubbleMessage message={message} key={index} />
      ))}
    </ChatList>
  ),
};
