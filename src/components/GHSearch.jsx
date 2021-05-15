import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import SearchResults from './SearchResults'

const GHSearch = () => {
  const [userSearch, setUserSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const search = async () => {
    let response = await axios.get(`https://api.github.com/search/users?q=${userSearch}`)
    setSearchResult(response.data.items)
  }

  return (
    <>
      <Input
        type="text"
        name="search"
        data-cy="input-field"
        placeholder="Input GH username"
        onBlur={(event) => {setUserSearch(event.target.value)}}
      />
      <Button  
      name="search"
      data-cy="search-button"
      onClick={search}
      >
        Search
      </Button>
      <SearchResults searchResult={searchResult} />
    </>
  );
};

export default GHSearch;
