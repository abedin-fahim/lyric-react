import { useQuery } from '@tanstack/react-query';
import { searchTracks } from '../../utils/http.js';

const SearchResult = ({ query }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['search', 'track', 'tracks'],
    queryFn: ({ signal }) => searchTracks({ signal, term: query }),
  });

  if (!isLoading && data) {
    console.log(data);
    console.log(data[0].track.track_id);
  }

  return (
    <section className='text-gray-600 mt-16'>
      <div className='container px-5 py-8 mx-auto border rounded-xl'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Your search results for: {query}
          </h1>

          {isLoading && (
            <span className='loading loading-ring loading-lg'></span>
          )}
          {!isLoading && data && (
            <>
              {data.map((track) => (
                <li key={track.track.track_id}>{track.track.track_name}</li>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
