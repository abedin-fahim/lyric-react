import Styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div
        className={`${Styles['hero-container']} col-span-2 p-5 rounded-xl bg-[#609EAF] flex align-middle justify-center flex-col gap-y-6`}
      >
        <span>Curated playlist</span>
        <div className='flex flex-col'>
          <h1>R & B Hits</h1>
          <p>
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
