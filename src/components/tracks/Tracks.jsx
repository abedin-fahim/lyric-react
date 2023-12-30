import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';

const Tracks = () => {
  const tracks = useLoaderData();
  const { heading, trackList, trackListHandler } = useGlobalContext();
  let updatedTracks = tracks.message.body.track_list;

  useEffect(() => {
    trackListHandler(updatedTracks);
  }, [tracks, trackListHandler, trackList]);

  const trackItems = trackList.map((track, idx) => <li key={idx}>{track}</li>);
  console.log(trackItems);

  return (
    <>
      <h1>{heading}</h1>
      {trackList && <p>Hello, world</p>}
    </>
  );
};

export default Tracks;
