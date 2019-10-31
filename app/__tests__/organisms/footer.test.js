import React from "react";
import { render, fireEvent, cleanup } from "../test-utils/test-utils";
import Footer from "../../components/organisms/Footer";

afterEach(cleanup);

describe("Footer renders", () => {
  it("Shows description", () => {
    const { getByText } = render(<Footer>footer description</Footer>);
    expect(getByText("footer description")).not.toBeNull();
  });

  it("Shows social navigation link", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("social-nav")).not.toBeNull();
  });

  it("Shows navigation links", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-nav")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
