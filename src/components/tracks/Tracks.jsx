import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import { generateColor, getColor } from '../../utils/generateColors';

import Spinner from '../UI/Spinner';

const Tracks = () => {
  const { trackList, trackListHandler } = useGlobalContext();
  const tracks = useLoaderData();

  let { track_list } = tracks.message.body;
  let isLoading =
    track_list.length === 0 || track_list === undefined ? true : false;

  useEffect(() => {
    trackListHandler(track_list);
  }, [tracks]);

  // console.log(
  //   track_list[0].track.primary_genres.music_genre_list[0]
  //   // .music_genre.music_genre_name
  // );

  // console.log(trackList);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        trackList.map((item) => (
          <li key={item.track.track_id}>
            <div
              className={`card w-96 bg-${generateColor()} text-${getColor()}-content relative shadow-xl`}
            >
              <div className='card-body'>
                <div
                  className={`bg-[url('/images/floating-cogs.svg')] absolute top-12 rotate-90 opacity-10 right-8 h-48 w-36`}
                ></div>
                <h2 className={`card-title text-white`}>
                  {item.track.track_name}
                  {item.track.explicit === 0 ? null : (
                    <div className='badge badge-error'>Explicit</div>
                  )}
                </h2>
                <h6 className={`text-${getColor()}-content`}>
                  {item.track.artist_name}
                </h6>
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
                <p
                  className={`text-${getColor()}-content font-bold badge badge-ghost badge-outline mt-2 text-white`}
                >
                  {item.track.album_name}
                </p>
                <div className='card-actions justify-start'>
                  <button className='btn'>View Lyric</button>
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
