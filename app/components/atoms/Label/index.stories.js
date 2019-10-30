import React from "react";
import { storiesOf } from "@storybook/react";
import Label from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Label", module)
  .addDecorator(withInfo)
  .add("default", () => <Label>Username or email address</Label>)
  .add("required", () => (
    <Label required={true}>Username or email address</Label>
  ));