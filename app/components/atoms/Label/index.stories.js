import React from "react";
import { storiesOf } from "@storybook/react";
import Label from ".";

storiesOf("Label", module)
  .add("default", () => <Label text={"Username or email"} />)
  .add("required", () => <Label text={"Username or email"} required={true} />);
