import React from "react";
import { render, fireEvent, cleanup } from "../test-utils/test-utils";
import Login from "../../pages/Login";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import {
  toBeInTheDocument,
  toHaveTextContent
} from "@testing-library/jest-dom";

expect.extend({ toBeInTheDocument, toHaveTextContent });

afterEach(cleanup);

describe("Login Page render check", () => {
  it("Renders page <Header />", () => {
    render(<Login />);

    const headerClass = Header(false, null, "mockUser").type.styledComponentId;
    const MyHeaderRoots = document.getElementsByClassName(headerClass);
    const style = window.getComputedStyle(MyHeaderRoots[0]);

    expect(style.position).toBe("fixed");
    expect(style.top).toBe("0px");
    expect(style.width).toBe("100%");
  });

  it("Renders the page <Title />", () => {
    const { container } = render(<Login />);
    const title = container.querySelector("h2");
    expect(title).toHaveTextContent("Log in");
  });

  it("Renders the login form", () => {
    const { container } = render(<Login />);
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });

  it("Renders page <Footer />", () => {
    render(<Login />);

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

// describe("Login Page login form working", () => {
//   // TODO: mock api call
//   // it("Displays an error if login POST request fails", () => {});

//   // TODO: mock api call
//   it("Logs in user with correct login details if login POST request succeeds", async () => {
//     const { getByLabelText, getAllByText } = render(<Login />);

//     // get input nodes
//     const usernameInputNode = getByLabelText("Username or email address*");
//     const passwordInputNode = getByLabelText("Password*");
//     usernameInputNode.value = "fakeuser";
//     passwordInputNode.value = "fakepassword";

//     // fill the form
//     fireEvent.change(usernameInputNode);
//     fireEvent.change(passwordInputNode);

//     // submit the form
//     var nodeArray = getAllByText("Log in");
//     fireEvent.click(nodeArray.slice(-1).pop());
//   });
// });

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<Login />);

    expect(asFragment()).toMatchSnapshot();
  });
});
