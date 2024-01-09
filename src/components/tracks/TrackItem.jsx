import { useLoaderData, useNavigation } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import { BsDiscFill, BsMusicNote, BsStarFill } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { getColor, generateColor } from '../../utils/generateColors';

import Spinner from '../UI/Spinner';

const TrackItem = () => {
  const { state } = useNavigation();
  const { selectedTrack } = useGlobalContext();
  const track = useLoaderData();

  // console.log(selectedTrack);
  // console.log(selectedTrack.primary_genres);

  let isNavigating = state === 'loading' ? true : false;

  const lyric = track.message.body.lyrics.lyrics_body.split('...');
  const updatedLyric = lyric[0].split('\n');

  return (
    <>
      {isNavigating && <Spinner />}
      <div className='flex flex-row gap-16'>
        <div className='basis-1/3'>
          {selectedTrack && (
            <div
              className={`card w-96 ${generateColor()} text-white relative shadow-xl`}
            >
              <div className='card-body'>
                <div
                  className={`bg-[url('/images/floating-cogs.svg')] absolute top-12 rotate-90 opacity-10 right-8 h-48 w-36 rounded-md`}
                ></div>
                <h2 className={`card-title text-white`}>
                  {selectedTrack.track_name}
                  {selectedTrack.explicit === 0 ? null : (
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
                <h6 className={`text-white`}>{selectedTrack.artist_name}</h6>
                <div className='flex items-center'>
                  <div>
                    {selectedTrack.primary_genres.music_genre_list.length >=
                      1 && (
                      <div className='badge gap-2 badge-ghost mr-2'>
                        <BsMusicNote />
                        {
                          selectedTrack.primary_genres?.music_genre_list[0]
                            ?.music_genre.music_genre_name
                        }
                      </div>
                    )}
                  </div>
                  <div className={`badge badge-neutral gap-2`}>
                    <BsStarFill /> {selectedTrack.track_rating / 10}
                  </div>
                </div>
                <div
                  className={`text-${getColor()}-content font-bold badge badge-ghost flex gap-2 items-center justify-start h-auto badge-outline my-2 text-white`}
                >
                  <BsDiscFill /> {selectedTrack.album_name}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='basis-2/3'>
          {/* <p>{track.message.body.lyrics.lyrics_body}</p> */}
          <div
            className={`card ${getColor()} text-white relative shadow-xl`}
            key={Math.random()}
          >
            {updatedLyric.map((lyric) => (
              <p color='text-black'>{lyric}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackItem;
