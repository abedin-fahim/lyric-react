//? Room for improvements
let colorSlider = 0;
let colors = [
  'bg-teal-700',
  'bg-sky-700',
  'bg-rose-600',
  'bg-amber-600',
  'bg-lime-600',
];
let selectedColor;

export const generateColor = () => {
  colorSlider += 1;
  if (colorSlider === colors.length) {
    colorSlider = 0;
  }
  // console.log(colors[colorSlider]);
  selectedColor = colors[colorSlider];
  return colors[colorSlider];
};

export const getColor = () => {
  return selectedColor;
};
