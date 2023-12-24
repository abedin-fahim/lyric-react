import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';

const Tracks = () => {
  const tracks = useLoaderData();
  const { heading, trackList, trackListHandler } = useGlobalContext();
  trackListHandler(tracks);

  console.log(tracks);
  // console.log(trackList);

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
