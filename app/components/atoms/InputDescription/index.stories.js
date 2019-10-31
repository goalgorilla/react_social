import React from "react";
import { storiesOf } from "@storybook/react";
import InputDescription from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("InputDescription", module)
  .addDecorator(withInfo)
  .add("default", () => (
    <InputDescription>
      Enter your Open Social username or email.
    </InputDescription>
  ))
  .add("link", () => (
    <InputDescription link={true}>Forgot password?</InputDescription>
  ));
