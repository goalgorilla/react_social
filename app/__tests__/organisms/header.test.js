import React from "react";
import { render, fireEvent, cleanup } from "../test-utils/test-utils";
import Header from "../../components/organisms/Header";

afterEach(cleanup);

describe("Header renders", () => {
  it("Shows Logo", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("logo")).not.toBeNull();
  });

  it("Shows navigation links", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header-nav")).not.toBeNull();
  });

  it("Shows account navigation", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("account-nav")).not.toBeNull();
  });

  it("Shows dropdown when a dropdown link is clicked", () => {
    const { getByText, getByTestId } = render(<Header />);
    fireEvent.click(getByText("Explore"));
    expect(getByTestId("dropdown-menu")).not.toBeNull();
  });

  it("is 100% width at the top(0px) of the page", () => {
    render(<Header />);

    const headerClass = Header(false, null, "mockUser").type.styledComponentId;
    const MyHeaderRoots = document.getElementsByClassName(headerClass);
    const style = window.getComputedStyle(MyHeaderRoots[0]);

    expect(style.position).toBe("fixed");
    expect(style.top).toBe("0px");
    expect(style.width).toBe("100%");
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
