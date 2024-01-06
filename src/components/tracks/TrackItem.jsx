import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../UI/Spinner';

const TrackItem = () => {
  const { state } = useNavigation();
  const track = useLoaderData();

  let isNavigating = state === 'loading' ? true : false;

  console.log(track);

  return (
    <>
      {isNavigating && <Spinner />}
      <div className='columns-3 md:columns-2'>
        <div>
          <h5>Hello there</h5>
        </div>
        <div>
          <h3>Hello, world</h3>
        </div>
      </div>
    </>
  );
};

export default TrackItem;
