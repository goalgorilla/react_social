import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate(
      { username: this.state.username, password: this.state.password },
      "login"
    );
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="container"
        style={{ width: "540px" }}
      ></form>
    );
  }
}

export default connect(
  state => state,
  actions
)(login);
