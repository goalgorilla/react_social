import React from "react";
import { storiesOf } from "@storybook/react";
import InputLabel from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("InputLabel", module)
  .addDecorator(withInfo)
  .add("default", () => <InputLabel>Username or email address</InputLabel>)
  .add("required", () => (
    <InputLabel required={true}>Username or email address</InputLabel>
  ));
