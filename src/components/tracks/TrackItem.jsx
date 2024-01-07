import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../UI/Spinner';

const TrackItem = () => {
  const { state } = useNavigation();
  const track = useLoaderData();

  let isNavigating = state === 'loading' ? true : false;

  // console.log(track.message.body.lyrics.lyrics_body);

  return (
    <>
      {isNavigating && <Spinner />}
      <div className='columns-3'>
        <div className='card shadow-xl'>
          <p>{track.message.body.lyrics.lyrics_body}</p>
        </div>
      </div>
    </>
  );
};

export default TrackItem;
