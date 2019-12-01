import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import Card from "../components/organisms/Card";
import CardHeader from "../components/atoms/CardHeader";
import CardBody from "../components/atoms/CardBody";
import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import BlockFormField from "../components/molecules/BlockFormField";
import Label from "../components/atoms/Label";
import Input from "../components/atoms/Input";
import TextButton from "../components/atoms/TextButton";
import Link from "next/link";
import InputDescription from "../components/atoms/InputDescription";

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

function Editprofile({ id }) {
  useEffect(() => {});

  const handleSubmit = e => {
    console.log("submitted");
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
              <Label>First name</Label>
              <Input type="text" name="firstname"></Input>
            </BlockFormField>
            <BlockFormField>
              <Label>Last name</Label>
              <Input type="text" name="lastname"></Input>
            </BlockFormField>
            <BlockFormField>
              <Label>Profile image</Label>
              <Input type="file" name="bannerimg"></Input>
              <InputDescription link>Upload requirements</InputDescription>
            </BlockFormField>
            <BlockFormField>
              <Label>Banner image</Label>
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
              <Label>Function</Label>
              <Input type="text" name="function"></Input>
            </BlockFormField>
            <BlockFormField>
              <Label>Organization</Label>
              <Input type="text" name="organization"></Input>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        {/* Phone number and location */}
        <StyledCard>
          <CardHeader>Phone number and location</CardHeader>
          <CardBody>
            <BlockFormField>
              <Label>Phone number</Label>
              <Input type="text" name="phonenumber"></Input>
            </BlockFormField>
            <BlockFormField>
              <Label>Country</Label>
              <Input type="text" name="country"></Input>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        {/* Self introduction, experise and interests card */}
        <StyledCard>
          <CardHeader>Self introduction, experise and interests</CardHeader>
          <CardBody>
            <BlockFormField>
              <Label>Self introduction</Label>
              <Input type="text" name="selfintroduction"></Input>
            </BlockFormField>
            <BlockFormField>
              <Label>Expertise</Label>
              <Input type="text" name="expertise"></Input>
              <InputDescription>
                Separate multiple values by a comma.
              </InputDescription>
            </BlockFormField>
            <BlockFormField>
              <Label>Interests</Label>
              <Input type="text" name="interests"></Input>
              <InputDescription>
                Separate multiple values by a comma.
              </InputDescription>
            </BlockFormField>
          </CardBody>
        </StyledCard>
        <FormButtons>
          <Link href="/user">
            <TextButton>Cancel</TextButton>
          </Link>
          <Button type="submit">Save</Button>
        </FormButtons>
      </Form>
    </Layout>
  );
}

Editprofile.getInitialProps = async ctx => {
  const token = ctx.store.getState().authentication.token;
  const id = ctx.store.getState().authentication.id;
  return id;
};

export default connect(state => state)(Editprofile);
