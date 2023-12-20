import { useGlobalContext } from '../../store/context';

const Tracks = () => {
  const { heading, trackList } = useGlobalContext();
  console.log(trackList);
  return (
    <>
      <h1>{heading}</h1>
      {trackList.map((track) => (
        <li key={track.track.track_name}> {track.track.track_name}</li>
      ))}
    </>
  );
};

export default Tracks;
