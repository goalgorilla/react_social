import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Card from '../components/organisms/Card';
import CardHeader from '../components/atoms/CardHeader';
import CardBody from '../components/atoms/CardBody';
import Title from '../components/atoms/Title';
import Button from '../components/atoms/BaseButton';
import styled from 'styled-components';
import BlockFormField from '../components/molecules/BlockFormField';
import InputLabel from '../components/atoms/InputLabel';
import Input from '../components/atoms/Input';
import TextButton from '../components/atoms/TextButton';
import Link from 'next/link';
import InputDescription from '../components/atoms/InputDescription';

const Form = styled.form`
  flex-direction: column;
  justify-content: space-between;
  display flex;

`;

const StyledTitle = styled(Title)`
  margin-top: 20px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  max-width: 48.75rem;
`;

function Editprofile() {
  useEffect(() => {});

  const handleSubmit = e => {
    console.log('submitted');
    e.preventDefault();
  };

  return (
    <Layout title="Edit profile | Open Social">
      <StyledTitle>Edit Profile</StyledTitle>
      <Form onSubmit={handleSubmit}>
        {/* Names and profile image card */}
        <StyledCard>
          <CardHeader>Names and profile image</CardHeader>
          <CardBody>
            <BlockFormField>
              <InputLabel>First name</InputLabel>
              <Input type="text" name="firstname"></Input>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Last name</InputLabel>
              <Input type="text" name="lastname"></Input>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Profile image</InputLabel>
              <Input type="file" name="bannerimg"></Input>
              <InputDescription link>Upload requirements</InputDescription>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Banner image</InputLabel>
              <Input type="file" name="bannerimg"></Input>
              <InputDescription link>Upload requirements</InputDescription>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        {/* Function and organization card */}
        <StyledCard>
          <CardHeader>Function and organization</CardHeader>
          <CardBody>
            <BlockFormField>
              <InputLabel>Function</InputLabel>
              <Input type="text" name="function"></Input>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Organization</InputLabel>
              <Input type="text" name="organization"></Input>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        {/* Phone number and location */}
        <StyledCard>
          <CardHeader>Phone number and location</CardHeader>
          <CardBody>
            <BlockFormField>
              <InputLabel>Phone number</InputLabel>
              <Input type="text" name="phonenumber"></Input>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Country</InputLabel>
              <Input type="text" name="country"></Input>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        {/* Self introduction, experise and interests card */}
        <StyledCard>
          <CardHeader>Self introduction, experise and interests</CardHeader>
          <CardBody>
            <BlockFormField>
              <InputLabel>Self introduction</InputLabel>
              <Input type="text" name="selfintroduction"></Input>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Expertise</InputLabel>
              <Input type="text" name="expertise"></Input>
              <InputDescription>
                Separate multiple values by a comma.
              </InputDescription>
            </BlockFormField>
            <BlockFormField>
              <InputLabel>Interests</InputLabel>
              <Input type="text" name="interests"></Input>
              <InputDescription>
                Separate multiple values by a comma.
              </InputDescription>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        <FormButtons>
          <TextButton as={Link} href="/user">
            Cancel
          </TextButton>
          <Button type="submit">Save</Button>
        </FormButtons>
      </Form>
    </Layout>
  );
}

Editprofile.getInitialProps = ctx => {};

export default Editprofile;
