import { useLoaderData } from 'react-router-dom';

const TrackItem = () => {
  const track = useLoaderData();
  console.log(track);
  return (
    <div className='columns-3 md:columns-2'>
      <div>
        <h5>Hello there</h5>
      </div>
      <div>
        <h3>Hello, world</h3>
      </div>
    </div>
  );
};

export default TrackItem;
