import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import { useEffect } from 'react';

const Tracks = () => {
  const tracks = useLoaderData();
  const { heading, trackList, trackListHandler } = useGlobalContext();

  // console.log(tracks);
  // console.log(trackList);

  useEffect(() => {
    trackListHandler(tracks);
  }, [tracks, trackListHandler]);

  return (
    <>
      <h1>{heading}</h1>
      {tracks.map((track) => (
        <li key={track.title}> {track.title}</li>
      ))}
    </>
  );
};

export default Tracks;
