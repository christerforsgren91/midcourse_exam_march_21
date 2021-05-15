import React from 'react';

const SearchResults = ({ searchResult }) => {
  return (
    <div style={styles.container}>
      {searchResult.map((user, index) => (
        <div key={index} style={styles.row} data-cy='user-container'>
          <div>
            <img data-cy='user-avatar' style={styles.img} src={user.avatar_url} alt={user.login} />
          </div>
          <div style={styles.info}>
            <p data-cy='username'>{user.login}</p>
            <p><a data-cy='user-github' href={user.html_url} >Link to Github</a></p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchResults;

const styles = {
  row: {
    display: 'flex',
    flex_direction: 'row',
    alignItems: 'center',
    border: '1px solid lightblue',
  },
  img: {
    borderRadius: '50%',
    height: 200,
    width: 200,
  },
  info: {
    padding: 20,
  }
};
