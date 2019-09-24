import React from "react";
import { storiesOf } from "@storybook/react";
import InputDescription from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("InputDescription", module)
  .addDecorator(withInfo)
  .add("default", () => (
    <InputDescription text={"Enter your Open Social username or email."} />
  ))
  .add("link", () => (
    <InputDescription text={"Forgot password?"} link={true} />
  ));
