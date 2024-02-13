import { queryClient } from '../App';
import { useGlobalContext } from '../store/context';
import { fetchTracks } from '../utils/http';

import Tracks from '../components/tracks/Tracks';
import Search from '../components/tracks/Search';

const HomePage = () => {
  const { heading } = useGlobalContext();

  return (
    <div className='container mx-auto'>
      <div className='rounded-xl py-12 mb-4'>
        <Search />
      </div>
      <div
        className={`rounded-xl py-16 mb-8 bg-[url('/images/low-poly-grid-haikei.svg')]`}
      >
        <h1 className='text-white ml-8'>{heading}</h1>
      </div>
      <div className='flex flex-wrap gap-16 items-center justify-center mb-16 gap-y-6'>
        <Tracks />
      </div>
    </div>
  );
};
export default HomePage;

export const loader = async () => {
  return queryClient.fetchQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
};
