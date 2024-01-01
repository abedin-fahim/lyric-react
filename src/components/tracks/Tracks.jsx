import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';

const Tracks = () => {
  const { heading, trackList, trackListHandler } = useGlobalContext();
  const tracks = useLoaderData();

  let updatedTracks = tracks.message.body.track_list;

  useEffect(() => {
    trackListHandler(updatedTracks);
  }, [tracks, trackListHandler, trackList]);

  return (
    <>
      <h1>{heading}</h1>
      {updatedTracks.map((item) => (
        <li key={item.track.track_id}>{item.track.track_name}</li>
      ))}
    </>
  );
};

export default Tracks;
