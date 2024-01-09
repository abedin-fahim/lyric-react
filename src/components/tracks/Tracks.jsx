import { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import { generateColor, getColor } from '../../utils/generateColors';

import Spinner from '../UI/Spinner';

//? An improvement?
// Add an event handler to listen
// and pass that specific track details to the global context and use it in the lyric page with the fetched lyric

const Tracks = () => {
  const { trackList, trackListHandler } = useGlobalContext();
  const { state } = useNavigation();

  const tracks = useLoaderData();
  let isNavigating = state === 'loading' ? true : false;

  let { track_list } = tracks.message.body;
  let isLoading =
    track_list.length === 0 || track_list === undefined ? true : false;

  useEffect(() => {
    trackListHandler(track_list);
  }, [tracks]);

  return (
    <>
      {isNavigating && <Spinner />}
      {isLoading ? (
        <Spinner />
      ) : (
        trackList.map((item) => (
          <li key={item.track.track_id}>
            <div
              className={`card w-96 ${generateColor()} text-white relative shadow-xl`}
            >
              <div className='card-body'>
                <div
                  className={`bg-[url('/images/floating-cogs.svg')] absolute top-12 rotate-90 opacity-10 right-8 h-48 w-36 rounded-md`}
                ></div>
                <h2 className={`card-title text-white`}>
                  {item.track.track_name}
                  {item.track.explicit === 0 ? null : (
                    <div className='badge badge-error'>EL</div>
                  )}
                </h2>
                <h6 className={`text-white`}>{item.track.artist_name}</h6>
                <div className='flex items-center'>
                  <div>
                    {item.track.primary_genres.music_genre_list.length >= 1 && (
                      <div className='badge badge-ghost mr-2'>
                        {
                          item.track.primary_genres.music_genre_list[0]
                            ?.music_genre.music_genre_name
                        }
                      </div>
                    )}
                  </div>
                  <div className={`badge badge-neutral`}>
                    {item.track.track_rating / 10}
                  </div>
                </div>
                <div
                  className={`text-${getColor()}-content font-bold badge badge-ghost block h-auto badge-outline my-2 text-white`}
                >
                  {item.track.album_name}
                </div>
                <div className='card-actions justify-start'>
                  <Link
                    to={`tracks/${item.track.track_id}`}
                    className='btn'
                  >
                    View Lyric
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))
      )}
    </>
  );
};

export default Tracks;
