import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "../src/components/Header";

const meta = {
  title: "message-ui/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(Story) => (
    <div style={{ width: "100%", height: "100vh" }}>
      <Story />
    </div>
  )
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    renderLeft: () => <div>Left</div>,
    renderRight: () => <div>Right</div>,
    children: (<div>Hello World</div>),
  },
};
