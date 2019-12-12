import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';
import InputLabel from '../../components/atoms/InputLabel';
import Title from '../../components/atoms/Title';
import Card from '../../components/organisms/Card';
import CardHeader from '../../components/atoms/CardHeader';
import CardBody from '../../components/atoms/CardBody';
import ContentRegion from '../../components/organisms/ContentRegion';
import ComplimentaryRegion from '../../components/organisms/ComplimentaryRegion';
import BaseButton from '../../components/atoms/BaseButton';
import PageTitle from '../../components/atoms/PageTitle';
import SearchIcon from '../../components/atoms/SearchIcon';
import MenuItem from '../../components/atoms/MenuItem';
import SecondaryNavigation from '../../components/molecules/SecondaryNavigation';

const SearchContainer = styled.div`
  margin: auto;
  padding: ${props => props.theme.layout.padding};
  max-width: ${props => props.theme.layout.maxWidth};
  display: flex;
  flex-wrap: wrap;
`;

const SearchBlockHero = styled.div`
  width: 100%;
  background: ${props => props.theme.color.brand.primary};
`;

const SearchHeroForm = styled.form`
  position: relative;
  max-width: 400px;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
`;

const SearchInput = styled(Input)`
  display: block;
  width: 100%;
  border: none;
`;

const SearchButton = styled(BaseButton)`
  border: none;
  margin-left: -3px;
  border-radius: 0 3px 3px 0;
`;

const SearchInputLabel = styled(InputLabel)`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  word-wrap: normal;
  margin: -1px;
  padding: 0;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

function SearchContent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = e => {
    e.preventDefault();
  };

  return (
    <Layout title="Search">
      <SearchBlockHero>
        <PageTitle>Search</PageTitle>
        <SearchHeroForm onSubmit={handleSearch}>
          <SearchInputLabel forInput="search" />
          <SearchInput
            type="text"
            name="search"
            value={searchQuery}
            id="search"
            onChange={e => setSearchQuery(e.target.value)}
          />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchHeroForm>
      </SearchBlockHero>
      <SecondaryNavigation>
        <ul>
          <li>
            <Link href="/search/all">
              <MenuItem>All</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/content">
              <MenuItem active>Content</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/users">
              <MenuItem>Users</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/groups">
              <MenuItem>Groups</MenuItem>
            </Link>
          </li>
        </ul>
      </SecondaryNavigation>
      <SearchContainer>
        <ContentRegion>
          <Title>All results</Title>
          <Card>
            <CardHeader>Placeholder</CardHeader>
            <CardBody>This is a placeholder</CardBody>
          </Card>
        </ContentRegion>
        <ComplimentaryRegion></ComplimentaryRegion>
      </SearchContainer>
    </Layout>
  );
}

export default SearchContent;
