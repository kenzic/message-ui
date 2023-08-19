import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ComposePanel } from "../src/components/ComposePanel";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "message-ui/ComposePanel",
  component: ComposePanel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [(Story) => (
    <div style={{ width: "100%", height: "100px" }}>
      <Story />
    </div>
  )
  ],
} satisfies Meta<typeof ComposePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: "123",
    isLoading: false,
    input: "",
  },
};
