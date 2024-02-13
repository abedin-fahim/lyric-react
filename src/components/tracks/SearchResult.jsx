import Spinner from '../UI/Spinner';

const SearchResult = ({ results }) => {
  return (
    <section className='text-gray-600 mt-16'>
      <div className='container px-5 py-8 mx-auto border rounded-xl'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Your search results for: {searchInput}
          </h1>

          {!results && <Spinner />}
          {results && <p>Somewhat working!</p>}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
