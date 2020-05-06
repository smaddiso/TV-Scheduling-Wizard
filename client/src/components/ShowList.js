import React from 'react';
import Show from './Show';

const ShowList = ({ shows, onShowAdded, filteredShows , filteredShowsbyGenre}) => {
  let givenShows = shows
  if (filteredShows.length) {
    givenShows = filteredShows
  } else if (filteredShowsbyGenre.length) {
    givenShows = filteredShowsbyGenre
  }
  const showNodes = givenShows.map(show => (
    <Show
    key={show._id}
    show={show}
    onShowAdded={onShowAdded}></Show>
  ));

  return (
    <div id="showList">
    {showNodes}
    </div>
  )
}

export default ShowList;
