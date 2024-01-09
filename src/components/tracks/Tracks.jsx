import { useEffect } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import { generateColor, getColor } from '../../utils/generateColors';
import {
  BsArrowRightCircleFill,
  BsDiscFill,
  BsMusicNote,
  BsStarFill,
} from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';

import Spinner from '../UI/Spinner';

const Tracks = () => {
  const { trackList, trackListHandler, selectedTrackHandler } =
    useGlobalContext();
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
                    <div
                      className='tooltip'
                      data-tip='Language warning'
                    >
                      <div className='badge badge-warning rounded-full p-1'>
                        <RiErrorWarningLine />
                      </div>
                    </div>
                  )}
                </h2>
                <h6 className={`text-white`}>{item.track.artist_name}</h6>
                <div className='flex items-center'>
                  <div>
                    {item.track.primary_genres.music_genre_list.length >= 1 && (
                      <div className='badge gap-2 badge-ghost mr-2'>
                        <BsMusicNote />
                        {
                          item.track.primary_genres.music_genre_list[0]
                            ?.music_genre.music_genre_name
                        }
                      </div>
                    )}
                  </div>
                  <div className={`badge badge-neutral gap-2`}>
                    <BsStarFill /> {item.track.track_rating / 10}
                  </div>
                </div>
                <div
                  className={`text-${getColor()}-content font-bold badge badge-ghost flex gap-2 items-center justify-start h-auto badge-outline my-2 text-white`}
                >
                  <BsDiscFill /> {item.track.album_name}
                </div>
                <div className='card-actions justify-start'>
                  <Link
                    onClick={() => {
                      selectedTrackHandler(item.track);
                    }}
                    to={`tracks/${item.track.track_id}`}
                    className='btn'
                  >
                    View Lyric
                    <BsArrowRightCircleFill />
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
