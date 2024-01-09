import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [trackList, setTrackList] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [heading, setHeading] = useState('Top 12 tracks in the US');

  const trackListHandler = (tracks) => {
    setTrackList(tracks);
  };
  const headingHandler = (heading) => {
    setHeading(heading);
  };
  const selectedTrackHandler = (track) => {
    setSelectedTrack(track);
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
