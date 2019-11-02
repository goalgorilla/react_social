import { i18n } from "../../../i18n";
import styled from "styled-components";

const StyledHr = styled.hr`
  margin: 0 0.625rem 0 0.625rem;
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 1px;
  padding: 0;
`;

// Language list contents
function languageList(props) {
  //   const [currentLanguage, setCurrentLanguage] = useState("");

  return (
    <React.Fragment>
      <li onClick={() => i18n.changeLanguage("en")}>
        <a>English</a>
      </li>
      <StyledHr></StyledHr>
      <li onClick={() => i18n.changeLanguage("nl")}>
        <a>Dutch</a>
      </li>
    </React.Fragment>
  );
}

export default languageList;
