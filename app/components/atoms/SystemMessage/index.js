import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// This component is used to display system messages to the user. It is a closeable <p> tag.
const StyledSystemMessageTemp = styled.p`
  position: relative;
  border: 1px solid ${props => props.theme.color.system.failure.border};
  border-radius: ${props => props.theme.layout.borderRadius.default};
  padding: 1.25rem 3.125rem 1.25rem 1.25rem;
  background-color: ${props => props.theme.color.system.failure.background};
  font-size: ${props => props.theme.font.size.medium};
  line-height: ${props => props.theme.font.lineHeight.default};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.color.system.failure.text};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  border: 0;
  width: 1.25rem;
  height: 1.25rem;
  background: url('./static/close.svg') no-repeat top left;
  background-size: contain;
  cursor: pointer;
  outline: 0;
  filter: invert(43%) sepia(13%) saturate(2260%) hue-rotate(314deg)
    brightness(80%) contrast(99%);
`;

class SystemMessageTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: true,
    };
  }

  closeMessage = () => {
    this.setState({
      displayMessage: false,
    });
  };

  render() {
    if (this.state.displayMessage)
      return (
        <StyledSystemMessageTemp {...this.props.type}>
          {this.props.children}
          <CloseButton onClick={this.closeMessage} />
        </StyledSystemMessageTemp>
      );
    return null;
  }
}

SystemMessageTemp.propTypes = {
  /** the type of system message: Success, Failure, Warning, Information */
  type: PropTypes.string,
  children: PropTypes.node,
};

export default SystemMessageTemp;
