import React from "react";
import { storiesOf } from "@storybook/react";
import Card from ".";
import { withInfo } from "@storybook/addon-info";

storiesOf("Card", module)
  .addDecorator(withInfo)
  .add("default", () => (
    <Card header={"This is a card header"} footer="This is a card footer">
      Hello World
    </Card>
  ));
