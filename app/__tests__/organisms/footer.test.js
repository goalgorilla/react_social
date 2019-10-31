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

  it("is 100% width at the bottom(0px) of the page", () => {
    render(<Footer />);

    const footerClass = Footer(
      "Copyright © 2019. [Community name]. All rights reserved"
    ).type.styledComponentId;
    const MyFooterRoots = document.getElementsByClassName(footerClass);
    const style = window.getComputedStyle(MyFooterRoots[0]);

    expect(style.position).toBe("absolute");
    expect(style.bottom).toBe("0px");
    expect(style.width).toBe("100%");
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
