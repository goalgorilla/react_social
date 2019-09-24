import React from "react";
import { storiesOf } from "@storybook/react";
import Label from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Label", module)
  .addDecorator(withInfo)
  .add("default", () => <Label text={"Username or email"} />)
  .add("required", () => <Label text={"Username or email"} required={true} />);
