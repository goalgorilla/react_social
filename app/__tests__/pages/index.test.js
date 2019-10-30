import React from "react";
import { render, fireEvent } from "../test-utils/test-utils";
import Index from "../../pages/Index";

describe("Home Page renders", () => {
  it('Shows "Home Page"', () => {
    const { getByText } = render(<Index />);
    expect(getByText("Home Page")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<Index />);

    expect(asFragment()).toMatchSnapshot();
  });
});
