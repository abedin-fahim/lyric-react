import { queryClient } from '../App';
import Tracks from '../components/tracks/Tracks';
import { fetchTracks } from '../utils/http';

const HomePage = () => {
  return (
    <div className='container mx-auto px-24'>
      <Tracks />
    </div>
  );
};
export const loader = async () => {
  return queryClient.fetchQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
};
export default HomePage;
