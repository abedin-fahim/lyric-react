import { queryClient } from '../App';
import { fetchTrack } from '../utils/http';

const Track = () => {
  return <div>Track</div>;
};

export default Track;

export const loader = ({ params }) => {
  const { trackId } = params;
  return queryClient.fetchQuery({
    queryKey: ['tracks', trackId],
    queryFn: ({ signal }) => fetchTrack({ signal, id: trackId }),
  });
};
