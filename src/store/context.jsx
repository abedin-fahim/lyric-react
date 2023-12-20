import React, { useContext, useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [trackList, setTrackList] = useState([
    {
      track: { track_name: 'abc' },
    },
    {
      track: { track_name: 'abc 2' },
    },
  ]);
  const [heading, setHeading] = useState('Top 10 tracks');
  return (
    <AppContext.Provider
      value={{ trackList, setTrackList, heading, setHeading }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
