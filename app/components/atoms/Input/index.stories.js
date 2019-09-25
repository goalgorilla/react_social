import React from "react";
import { storiesOf } from "@storybook/react";
import Input from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Input", module)
  .addDecorator(withInfo)
  .add("text", () => <Input />)
  .add("password", () => <Input type={"password"} />)
  .add("required", () => <Input type={"password"} required={"true"} />);
