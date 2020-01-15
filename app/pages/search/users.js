import React, {useState, useEffect} from 'react';
import {useUser} from '../../components/auth/userContext';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Input from '../../components/atoms/Input';
import Title from '../../components/atoms/Title';
import ContentRegion from '../../components/organisms/ContentRegion';
import ComplimentaryRegion from '../../components/organisms/ComplimentaryRegion';
import BaseButton from '../../components/atoms/BaseButton';
import PageTitle from '../../components/atoms/PageTitle';
import SearchIcon from '../../components/atoms/SearchIcon';
import MenuItem from '../../components/atoms/MenuItem';
import SecondaryNavigation from '../../components/molecules/SecondaryNavigation';
import SearchInputLabel from '../../components/atoms/SearchInputLabel';
import SearchBlockHero from '../../components/atoms/SearchBlockHero';
import SearchHeroForm from '../../components/molecules/SearchHeroForm';
import {API_URL} from '../../utils/constants';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  parseSearchResponse,
  renderSearchResults,
} from '../../utils/searchUtils';
import Card from '../../components/organisms/Card';
import CardHeader from '../../components/atoms/CardHeader';
import CardBody from '../../components/atoms/CardBody';
import TextButton from '../../components/atoms/TextButton';
import InputLabel from '../../components/atoms/InputLabel';
import BlockFormField from '../../components/molecules/BlockFormField';
import InputDescription from '../../components/atoms/InputDescription';
const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

const SearchContainer = styled.div`
  margin: auto;
  padding: ${props => props.theme.layout.padding};
  max-width: ${props => props.theme.layout.maxWidth};
  display: flex;
  flex-wrap: wrap;
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

const SearchSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

function SearchUsers() {
  const user = useUser();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [htmlHead, setHtmlHead] = useState('');
  const [svgs, setSvgs] = useState('');
  const [loading, setLoading] = useState(true);

  const [expertise, setExpertise] = useState('');
  const [interests, setInterests] = useState('');
  const [timePeriod, setTimePeriod] = useState('before');
  const [registrationDate, setRegistrationDate] = useState('');
  const [registrationDateMax, setRegistrationDateMax] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = async e => {
    e.preventDefault();
    getUsers();
  };

  const getUsers = async e => {
    setLoading(true);

    var expertiseFilter = '?expertise=';
    expertise.split(/\s*,\s*/).forEach(function(i, idx, array) {
      i = i.replace(/^\s*/, '').replace(/\s*$/, '');
      expertiseFilter += i;
      if (idx !== array.length - 1) {
        expertiseFilter += ', ';
      }
    });

    var interestsFilter = '&interests=';
    interests.split(/\s*,\s*/).forEach(function(i, idx, array) {
      console.log(i);
      i = i.replace(/^\s*/, '').replace(/\s*$/, '');
      console.log(i);
      interestsFilter += i;
      if (idx !== array.length - 1) {
        interestsFilter += ', ';
      }
    });

    var timePeriodFilter = '&created_op=';
    switch (timePeriod) {
      case 'before':
        timePeriodFilter += '<';
        break;
      case 'after':
        timePeriodFilter += '>';
        break;
      case 'between':
        timePeriodFilter += 'between';
        break;
    }

    if (timePeriod === 'between') {
      timePeriodFilter +=
        '&created[value]=&created[min]=' +
        registrationDate +
        '&created[max]=' +
        registrationDateMax;
    } else {
      timePeriodFilter +=
        '&created[value]=' + registrationDate + '&created[min]=&created[max]=';
    }

    const filter = expertiseFilter + interestsFilter + timePeriodFilter;
    const {searchResults, head, svgs} = await axios
      .get(encodeURI(`${API_URL}/search/users/${searchQuery}${filter}`), {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      })
      .then(response => {
        return parseSearchResponse(response);
      });
    setSearchResults(searchResults);
    setHtmlHead(head);
    setSvgs(svgs);
    setLoading(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getUsers();
  };

  const handleReset = e => {
    setExpertise('');
    setInterests('');
    setTimePeriod('before');
    setRegistrationDate('');
    getUsers();
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
            <Link href="/search/all" scroll={false}>
              <MenuItem>All</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/content" scroll={false}>
              <MenuItem>Content</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/users" scroll={false}>
              <MenuItem active>Users</MenuItem>
            </Link>
          </li>
          <li>
            <Link href="/search/groups" scroll={false}>
              <MenuItem>Groups</MenuItem>
            </Link>
          </li>
        </ul>
      </SecondaryNavigation>
      <SearchContainer>
        <ContentRegion>
          <Title>Member results</Title>
          <ClipLoader loading={loading} />
          {renderSearchResults(htmlHead, searchResults, svgs, loading)}
        </ContentRegion>
        <ComplimentaryRegion>
          <Card>
            <CardHeader>Filter</CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <BlockFormField>
                  <InputLabel>Expertise</InputLabel>
                  <Input
                    type="text"
                    name="expertise"
                    onChange={e => setExpertise(e.target.value)}
                  ></Input>
                  <InputDescription>
                    Separate multiple values by a comma.
                  </InputDescription>
                </BlockFormField>
                <BlockFormField>
                  <InputLabel>Interests</InputLabel>
                  <Input
                    type="text"
                    name="interests"
                    onChange={e => setInterests(e.target.value)}
                  ></Input>
                  <InputDescription>
                    Separate multiple values by a comma.
                  </InputDescription>
                </BlockFormField>
                <BlockFormField>
                  <InputLabel>Registration Date</InputLabel>
                  <SearchSelect
                    name="type"
                    onChange={e => setTimePeriod(e.target.value)}
                    value={timePeriod}
                  >
                    <option value="before">Before</option>
                    <option value="after">After</option>
                    <option value="between">Between</option>
                  </SearchSelect>
                  <Input
                    type="date"
                    name="date"
                    onChange={e => setRegistrationDate(e.target.value)}
                  ></Input>
                  {timePeriod === 'between' && (
                    <React.Fragment>
                      <InputLabel>and</InputLabel>
                      <Input
                        type="date"
                        name="date"
                        onChange={e => setRegistrationDateMax(e.target.value)}
                      ></Input>
                    </React.Fragment>
                  )}
                </BlockFormField>
                <FormButtons>
                  <TextButton onClick={handleReset}>Reset</TextButton>
                  <BaseButton type="submit" value="Apply" radius="small">
                    Apply
                  </BaseButton>
                </FormButtons>
              </form>
            </CardBody>
          </Card>
        </ComplimentaryRegion>
      </SearchContainer>
    </Layout>
  );
}

export default SearchUsers;
