import Styles from './Hero.module.css';
import { LuSearchCheck } from 'react-icons/lu';

const Hero = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div
        className={`${Styles['hero-container']} col-span-2 p-5 rounded-3xl bg-[#649faf] flex align-middle justify-center flex-col gap-y-6`}
      >
        <div className='flex flex-col w-3/5'>
          <h1 className='mb-3'>Search for any song lyrics!</h1>
          <p className='text-gray-200'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className='w-3/5'>
          <label
            className={`input bg-transparent border-white input-bordered border-2 h-auto py-4 flex items-center gap-2 rounded-3xl`}
          >
            <input
              type='text'
              className={`grow bg-transparent ${Styles['hero-input']}`}
              placeholder='Type your favorite song title, artist or lyrics'
            />
            <LuSearchCheck className='w-5 h-5 text-white' />
          </label>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
