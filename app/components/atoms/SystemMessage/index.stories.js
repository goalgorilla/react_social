import React from "react";
import { storiesOf } from "@storybook/react";
import SystemMessage from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("SystemMessage", module)
  .addDecorator(withInfo)
  .add("default", () => <SystemMessage>An error has occured</SystemMessage>);
