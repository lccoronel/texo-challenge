import React from "react";
import type { Preview } from "@storybook/react";
import { MyThemeProvider } from '../src/styles/MyThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <MyThemeProvider>
      <Story />
    </MyThemeProvider>
  )
]

export default preview;
