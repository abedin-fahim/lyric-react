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
      <div className='flex flex-row gap-16'>
        <div className='basis-1/3 card shadow-xl'>
          <h1>Track details goes here</h1>
        </div>
        <div className='basis-1/2'>
          <p>{track.message.body.lyrics.lyrics_body}</p>
        </div>
      </div>
    </>
  );
};

export default TrackItem;
