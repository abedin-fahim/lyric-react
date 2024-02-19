import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../store/context';
import SearchResult from './SearchResult';
import { useQuery } from '@tanstack/react-query';

const Search = () => {
  const searchRef = useRef();
  const [isSearching, setIsSearching] = useState(false);

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    setIsSearching(true);
    console.log('Called');
  };

  return (
    <section className='text-gray-600'>
      <div className='container px-5 py-8 mx-auto border rounded-xl'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Search for your favorite song!
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep.
          </p>
        </div>
        <form onSubmit={searchSubmitHandler}>
          <div className='flex lg:w-2/4 w-full flex-col mx-auto items-center'>
            <div className='w-full'>
              <input
                type='text'
                placeholder='Type song title, artist or lyrics'
                className='input input-bordered w-full rounded-2xl py-4 h-auto'
                required
                ref={searchRef}
              />
            </div>
            <button
              type='submit'
              className='btn btn-neutral btn-lg rounded-full mt-4'
            >
              Get track lyrics
            </button>
          </div>
        </form>
      </div>
      {isSearching && <SearchResult query={enteredQuery} />}
    </section>
  );
};

export default Search;
