import { useEffect } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Spinner from '../UI/Spinner';
import { useGlobalContext } from '../../store/context';
import { getColor, generateColor } from '../../utils/generateColors';
import { fetchTrack } from '../../utils/http';

import { RiErrorWarningLine } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { BsDiscFill, BsMusicNote, BsStarFill, BsQuote } from 'react-icons/bs';

const TrackItem = () => {
  const EXPLICIT_WARNING_THRESHOLD = 0;

  const { trackId } = useParams();
  const { state } = useNavigation();
  const track = useLoaderData();
  const { selectedTrack, selectedTrackHandler } = useGlobalContext();

  let formattedDate;
  const timestamp = selectedTrack?.updated_time;
  if (timestamp) {
    const date = new Date(timestamp);
    formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  }

  const lyric = track.message.body.lyrics.lyrics_body.split('...');
  const updatedLyric = lyric[0].split('\n').filter((line) => line !== '');

  let isNavigating = state === 'loading' ? true : false;

  useEffect(() => {
    // Could've used loadesh here
    if (Object.entries(selectedTrack).length !== 0) {
      localStorage.setItem('selectedTrack', JSON.stringify(selectedTrack));
    } else if (Object.entries(selectedTrack).length === 0) {
      const localSelectedTrack = JSON.parse(
        localStorage.getItem('selectedTrack')
      );
      if (Object.entries(localSelectedTrack).length !== 0) {
        if (trackId === localSelectedTrack.track_id.toString()) {
          selectedTrackHandler(localSelectedTrack);
          // console.log(localSelectedTrack);
        }
      } else {
        // Should never come here, unless it's a nerd
        fetchSelectedTrackDetails();
      }
    }
  }, [selectedTrack]);

  const fetchSelectedTrackDetails = () => {
    const [data, isError, isLoading] = useQuery({
      queryKey: ['selected', 'track', 'tracks'],
      queryFn: ({ signal }) =>
        fetchTrack({ signal, id: selectedTrack?.track_id }),
    });

    selectedTrackHandler(data);
  };

  return (
    <>
      {isNavigating && <Spinner />}
      <div className='flex flex-row gap-16'>
        <div className='basis-1/3'>
          {selectedTrack && (
            <>
              <div
                className={`card w-96 ${generateColor()} text-white relative shadow-xl`}
              >
                <div className='card-body'>
                  <div
                    className={`bg-[url('/images/floating-cogs.svg')] absolute top-8 rotate-90 opacity-10 right-8 h-48 w-36 rounded-md`}
                  ></div>
                  <h2 className={`card-title text-white`}>
                    {selectedTrack.track_name}
                    {selectedTrack.explicit === EXPLICIT_WARNING_THRESHOLD && (
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
                      {selectedTrack?.primary_genres?.music_genre_list
                        ?.length >= 1 && (
                        <div className='badge gap-2 h-auto py-2 badge-ghost mr-2'>
                          <BsMusicNote />
                          {
                            selectedTrack.primary_genres?.music_genre_list[0]
                              ?.music_genre.music_genre_name
                          }
                        </div>
                      )}
                    </div>
                    <div className={`badge badge-neutral gap-2 h-auto py-2`}>
                      <BsStarFill /> {selectedTrack.track_rating / 10}
                    </div>
                  </div>
                  <div
                    className={`font-bold badge badge-ghost flex gap-2 h-auto py-2 px-4 items-center justify-start badge-outline my-2 text-white`}
                  >
                    <BsDiscFill /> {selectedTrack.album_name}
                  </div>
                </div>
              </div>
              <div
                className={`badge badge-ghost flex gap-2 items-center justify-start h-auto badge-outline my-2 py-2 text-black`}
              >
                <CiEdit /> {formattedDate && formattedDate}
              </div>
            </>
          )}
        </div>
        <div className={`basis-2/3 relative`}>
          <BsQuote className='absolute z-50 -top-4 left-20 opacity-10 text-black w-44 h-44' />
          <BsQuote className='absolute z-50 -bottom-4 right-20 rotate-180 opacity-10 text-black w-44 h-44' />
          <div
            className={`card ${getColor()}  py-4 text-center relative shadow-xl`}
          >
            {updatedLyric.map((lyric) => (
              <li
                key={Math.random()}
                className='text-white py-2 italic'
              >
                {lyric}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackItem;
