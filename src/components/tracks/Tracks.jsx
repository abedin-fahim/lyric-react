import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';

import Spinner from '../UI/Spinner';

const Tracks = () => {
  const { heading, trackListHandler } = useGlobalContext();
  const tracks = useLoaderData();

  let { track_list } = tracks.message.body;
  let isLoading =
    track_list.length === 0 || track_list === undefined ? true : false;

  useEffect(() => {
    trackListHandler(track_list);
  }, [tracks]);

  return (
    <>
      <h1>{heading}</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        track_list.map((item) => (
          <li key={item.track.track_id}>{item.track.track_name}</li>
        ))
      )}
    </>
  );
};

export default Tracks;
