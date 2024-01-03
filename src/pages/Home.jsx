import { queryClient } from '../App';
import Tracks from '../components/tracks/Tracks';
import { useGlobalContext } from '../store/context';
import { fetchTracks } from '../utils/http';

const HomePage = () => {
  const { heading } = useGlobalContext();
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='my-8'>{heading}</h1>
        <div className='grid gap-4 grid-cols-3 mb-16'>
          <Tracks />
        </div>
      </div>
    </>
  );
};
export const loader = async () => {
  return queryClient.fetchQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
};
export default HomePage;
