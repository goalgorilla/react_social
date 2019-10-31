import React from "react";
import { storiesOf } from "@storybook/react";
import FormField from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("FormField", module)
  .addDecorator(withInfo)
  .add("default", () => (
    <FormField
      label={"Username or email address"}
      description={"Enter your Open Social username or email."}
    ></FormField>
  ))
  .add("text input with link description", () => (
    <FormField
      label={"What is 2 + 2?"}
      description={"Need help?"}
      link={true}
      type={"text"}
    ></FormField>
  ))
  .add("password input with required", () => (
    <FormField
      label={"Password"}
      description={"Forgot your password?"}
      link={true}
      type={"password"}
      required={true}
    ></FormField>
  ));
