import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import React from "react";

import GlobalStyles from "../components/GlobalStyle";

// automatically import all files ending in *.stories.js
configure(require.context("../components", true, /\.stories\.js$/), module);

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);
