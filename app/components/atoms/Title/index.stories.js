import React from "react";
import { storiesOf } from "@storybook/react";
import Title from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Title", module)
  .addDecorator(withInfo)
  .add("default", () => <Title text={"Log in"} />);
