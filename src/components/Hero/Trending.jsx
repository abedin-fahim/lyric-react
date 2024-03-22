import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from '../../utils/http';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';
import {
  BsArrowRightCircleFill,
  BsMusicNote,
  BsStarFill,
} from 'react-icons/bs';
import { useGlobalContext } from '../../store/context';
import { Link } from 'react-router-dom';

const Trending = () => {
  const { selectedTrackHandler } = useGlobalContext();

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

  return (
    <div className='trending-tracks w-full'>
      {isError && <div className='h-24 w-full'>{error.message}</div>}
      {isLoading && <div className='skeleton h-24 w-full'></div>}
      <ul>
        {!isLoading && !isError && trackList.length > 0 ? (
          <>
            {trackList.map((track) => (
              <li key={track.track.track_id}>
                <div className='bg-[#1A1E1F] px-4 py-4 mb-3 rounded-xl shadow-md'>
                  <div className='track-icon bg-[#17232a]'>
                    <RiNeteaseCloudMusicLine />
                  </div>
                  <div className='track-details'>
                    <h3>{track.track.track_name}</h3>
                    <span>{track.track.artist_name}</span>
                    <div className='flex items-center'>
                      <div>
                        {track.track?.primary_genres?.music_genre_list
                          ?.length >= 1 && (
                          <div className='badge gap-2 h-auto py-2 badge-ghost mr-2'>
                            <BsMusicNote />
                            {
                              track.track.primary_genres?.music_genre_list[0]
                                ?.music_genre.music_genre_name
                            }
                          </div>
                        )}
                      </div>
                      <div className={`badge badge-neutral gap-2 h-auto py-2`}>
                        <BsStarFill /> {track.track.track_rating / 10}
                      </div>
                    </div>
                  </div>
                  <Link
                    onClick={() => {
                      selectedTrackHandler(track.track);
                    }}
                    to={`tracks/${track.track.track_id}`}
                    className='btn rounded-full'
                  >
                    View Lyric
                    <BsArrowRightCircleFill />
                  </Link>
                </div>
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
