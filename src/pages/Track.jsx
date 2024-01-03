import { queryClient } from '../App';
import TrackItem from '../components/tracks/TrackItem';
import { fetchTrack } from '../utils/http';

const Track = () => {
  return (
    <div className='container mx-auto'>
      <TrackItem />
    </div>
  );
};

export default Track;

export const loader = ({ params }) => {
  const { trackId } = params;
  // console.log(trackId);
  return queryClient.fetchQuery({
    queryKey: ['tracks', trackId],
    queryFn: ({ signal }) => fetchTrack({ signal, id: trackId }),
  });
};
