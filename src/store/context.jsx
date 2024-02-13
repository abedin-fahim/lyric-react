import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [trackList, setTrackList] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [heading, setHeading] = useState('Top 12 tracks in the US');
  const [searchInput, setSearchInput] = useState('Your search results');
  const [searchResults, setSearchResult] = useState([]);

  const trackListHandler = (tracks) => {
    setTrackList(tracks);
  };
  const headingHandler = (heading) => {
    setHeading(heading);
  };
  const selectedTrackHandler = (track) => {
    setSelectedTrack(track);
  };
  const searchInputHandler = (inputTitle) => {
    setSearchInput(inputTitle);
  };
  const searchResultsHandler = (searchResults) => {
    setSearchResult(searchResults);
  };

  return (
    <AppContext.Provider
      value={{
        trackList,
        trackListHandler,
        selectedTrack,
        selectedTrackHandler,
        heading,
        headingHandler,
        searchInput,
        searchInputHandler,
        searchResults,
        searchResultsHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
