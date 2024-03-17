import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from '../../utils/http';

const Trending = () => {
  const {
    data: tracks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['tracks', 'trending'],
    queryFn: ({ signal }) => fetchTracks({ signal, limit: 3 }),
  });
  let trackList = tracks?.message?.body?.track_list || [];

  console.log(trackList[0]);

  return (
    <div className='trending-tracks'>
      {isError && <div className='h-24 w-full'>{error.message}</div>}
      {isLoading && <div className='skeleton h-24 w-full'></div>}
      <ul>
        {!isLoading && !isError && trackList.length > 0 ? (
          <>
            {trackList.map((track) => (
              <li key={track.track.track_id}>
                <h1>{track.track.track_name}</h1>
              </li>
            ))}
          </>
        ) : (
          <p>No tracks found</p>
        )}
      </ul>
    </div>
  );
};

export default Trending;
