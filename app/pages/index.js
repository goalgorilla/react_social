import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import BaseButton from "../components/atoms/BaseButton"
import LinkButton from "../components/atoms/LinkButton"
import RaisedButton from "../components/atoms/RaisedButton"
import styled from "styled-components"

const Temp = styled.div`
& > * {
  margin-right: 10px;
}`

const Index = () => (
  <Layout title="Home | Open Social">
    <p>Home Page</p>
    <Temp>
      {/* Base Button */}
      <BaseButton>Base Button (default)</BaseButton>
      <BaseButton variant="primary">Base Button (primary)</BaseButton>
      <BaseButton variant="secondary">Base Button (secondary)</BaseButton>
      <BaseButton variant="accent">Base Button (accent)</BaseButton>
      {/* Link Button */}
      <LinkButton>Link Button (default)</LinkButton>
      <LinkButton variant="primary">Link Button (primary)</LinkButton>
      <LinkButton variant="secondary">Link Button (secondary)</LinkButton>
      <LinkButton variant="accent">Link Button (accent)</LinkButton>
      {/* Raised Button */}
      <RaisedButton>Raised Button (default)</RaisedButton>
      <RaisedButton variant="primary">Raised Button (primary)</RaisedButton>
      <RaisedButton variant="secondary">Raised Button (secondary)</RaisedButton>
      <RaisedButton variant="accent">Raised Button (accent)</RaisedButton>
      {/* Border Radius */}
      <BaseButton>Base Button (default BR)</BaseButton>
      <BaseButton radius="base">Base Button (base BR)</BaseButton>
      <BaseButton radius="small">Base Button (small BR)</BaseButton>
      <BaseButton radius="large">Base Button (large BR)</BaseButton>
    </Temp>
  </Layout>
);

Index.getInitialProps = function (ctx) { };

export default connect(state => state)(Index);
