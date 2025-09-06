import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible container component built with styled-system. Provides spacing, color, layout, and other CSS properties as props.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the box",
    },
    p: {
      control: "text",
      description: "Padding (all sides)",
    },
    m: {
      control: "text",
      description: "Margin (all sides)",
    },
    bg: {
      control: "color",
      description: "Background color",
    },
    color: {
      control: "color",
      description: "Text color",
    },
    width: {
      control: "text",
      description: "Width of the box",
    },
    height: {
      control: "text",
      description: "Height of the box",
    },
    as: {
      control: "text",
      description: "HTML element or React component to render as",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Box",
    p: 4,
    bg: "gray.100",
  },
};

export const WithCustomStyling: Story = {
  args: {
    children: "Styled Box",
    p: 6,
    m: 4,
    bg: "blue.500",
    color: "white",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    children: "I am a button",
    p: 3,
    bg: "green.500",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export const FlexContainer: Story = {
  args: {
    children: (
      <>
        <Box p={2} bg="red.200" m={1}>
          Item 1
        </Box>
        <Box p={2} bg="blue.200" m={1}>
          Item 2
        </Box>
        <Box p={2} bg="green.200" m={1}>
          Item 3
        </Box>
      </>
    ),
    display: "flex",
    p: 4,
    gap: "8px",
    bg: "gray.50",
    borderRadius: "8px",
  },
};

export const ResponsiveSpacing: Story = {
  args: {
    children: "Responsive spacing",
    p: [2, 4, 6],
    m: [1, 2, 4],
    bg: "purple.100",
    fontSize: ["sm", "md", "lg"],
  },
};
