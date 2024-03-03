import { useQuery } from '@tanstack/react-query';
import { searchTracks } from '../../utils/http.js';
import Spinner from '../UI/Spinner';

const SearchResult = ({ query }) => {
  // const results = false;
  // const { searchInput, searchInputHandler, searchResultsHandler } =
  //   useGlobalContext();
  // const [isSearching, setIsSearching] = useState(false);

  // const fetchSearchingTracks = () => {
  //   const { data, isLoading, isError, error } = useQuery({
  //     queryKey: ['search', 'track', 'tracks'],
  //     queryFn: ({ signal }) => {
  //       searchTracks({ signal, term: searchInput });
  //     },
  //   });
  //   console.log('Fetching');
  //   searchResultsHandler(data);
  // };

  // const searchSubmitHandler = (e) => {
  //   e.preventDefault();

  //   fetchSearchingTracks();
  //   console.log('Called');

  //   searchInputHandler(searchRef.current.value);
  //   setIsSearching(true);
  // };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['search', 'track', 'tracks'],
    queryFn: ({ signal }) => searchTracks({ signal, term: query }),
  });

  if (!isLoading && data) {
    console.log(data);
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
          {!isLoading && data && <p>Somewhat working!</p>}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
