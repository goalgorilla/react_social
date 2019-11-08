import styled from "styled-components";

const TempCard = styled.div`
  display: block;
  background: white;
  height: 100px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
  border-radius: 5px;
  font-weight: bold;
  padding: 10px;
  color: ${props => props.theme.color.text.one};
`;

const TopicCard = ({ children }) => {
  return <TempCard>{children}</TempCard>;
};

export default TopicCard;
