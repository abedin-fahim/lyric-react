import { useNavigation } from 'react-router-dom';
import { queryClient } from '../App';
import TrackItem from '../components/tracks/TrackItem';
import { fetchTrackLyric } from '../utils/http';
import Spinner from '../components/UI/Spinner';

const Track = () => {
  const { state } = useNavigation();
  let isNavigating = state === 'loading' ? true : false;

  return (
    <>
      {isNavigating && <Spinner />}
      <div className='container mx-auto'>
        <TrackItem />
      </div>
    </>
  );
};

export default Track;

export const loader = ({ params }) => {
  const { trackId } = params;
  // console.log(trackId);
  return queryClient.fetchQuery({
    queryKey: ['tracks', trackId],
    queryFn: ({ signal }) => fetchTrackLyric({ signal, id: trackId }),
  });
};
