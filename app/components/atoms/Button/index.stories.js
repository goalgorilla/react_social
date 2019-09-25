import React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .addDecorator(withInfo)
  .add("default", () => <Button>Log in</Button>);
