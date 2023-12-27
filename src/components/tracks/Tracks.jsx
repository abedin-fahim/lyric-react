// import { useLoaderData } from 'react-router-dom';
// import { useGlobalContext } from '../../store/context';
// import { useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { fetchTracks } from '../../utils/http';

// const Tracks = () => {
//   const tracks = useLoaderData();
//   const { heading, trackList, trackListHandler } = useGlobalContext();

//   // console.log(tracks);
//   // console.log(trackList);

//   useEffect(() => {
//     trackListHandler(tracks);
//   }, [tracks, trackListHandler]);

//   const { data, isLoading, error, isError } = useQuery({
//     queryKey: ['tracks', 'home'],
//     queryFn: ({ signal }) => fetchTracks({ signal }),
//   });

//   let content = '';

//   if (isLoading) {
//     content = `<p>Loading...</p>`;
//   }
//   if (isError) {
//     content = `<p>${error}</p>`;
//   }
//   if (data) {
//     content = `<p>${data}</p>`;
//   }

//   return (
//     <>
//       <h1>{heading}</h1>
//       {/* {tracks.map((track) => (
//         <li key={track.title}> {track.title}</li>
//       ))}
//       {content} */}
//     </>
//   );
// };

// export default Tracks;

import { useLoaderData } from 'react-router-dom';
import { useGlobalContext } from '../../store/context';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from '../../utils/http';

const Tracks = () => {
  const tracks = useLoaderData();
  const { heading, trackList, trackListHandler } = useGlobalContext();

  useEffect(() => {
    trackListHandler(tracks);
  }, [tracks, trackListHandler]);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['tracks', 'home'],
    queryFn: ({ signal }) => fetchTracks({ signal }),
  });

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isError) {
    content = <p>Error: {error.message}</p>;
  }
  if (data) {
    content = <p>Data: {JSON.stringify(data)}</p>;
  }

  return (
    <>
      <h1>{heading}</h1>
      {/* Render your track list or other components here */}
      {content}
    </>
  );
};

export default Tracks;
