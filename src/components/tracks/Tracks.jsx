import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';

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

  console.log(trackList);

  let colorSlider = 0;
  let colors = ['primary', 'secondary', 'info', 'success'];
  let currentColor = colors[colorSlider];

  const updateColors = () => {
    colorSlider += 1;
    if (colorSlider === colors.length) {
      colorSlider = 0;
    }
    return colors[colorSlider];
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        trackList.map((item) => (
          <li key={item.track.track_id}>
            <div
              className={`card w-96 bg-${updateColors()} text-${currentColor}-content shadow-xl`}
            >
              <div className='card-body'>
                <h2 className={`card-title text-${currentColor}-content`}>
                  {item.track.track_name}
                  <div className={`badge badge-neutral`}>
                    {item.track.track_rating}
                  </div>
                  <div className='badge badge-error'>Explicit</div>
                </h2>
                <p>{item.track.artist_name}</p>
                <div className='card-actions justify-center'>
                  <button className='btn'>View Lyric</button>
                </div>
              </div>
            </div>
            ({item.track.album_name})
          </li>
        ))
      )}
    </>
  );
};

export default Tracks;
