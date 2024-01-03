import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [trackList, setTrackList] = useState([]);
  const [heading, setHeading] = useState('Top 12 tracks');

  const trackListHandler = (tracks) => {
    setTrackList(tracks);
  };
  const headingHandler = (heading) => {
    setHeading(heading);
  };

  return (
    <AppContext.Provider
      value={{ trackList, trackListHandler, heading, headingHandler }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
