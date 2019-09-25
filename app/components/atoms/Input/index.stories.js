import React from "react";
import { storiesOf } from "@storybook/react";
import Input from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Input", module)
  .addDecorator(withInfo)
  .add("default", () => <Input />)
  .add("password input", () => <Input type={"password"} />);
