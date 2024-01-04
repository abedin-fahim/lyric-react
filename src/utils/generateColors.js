//? Room for improvements
let colorSlider = 0;
let colors = ['primary', 'secondary', 'info', 'success', 'accent'];
// let colors = ['#747FFF', '#FF52D9', '#00CCB7', '#00B5FF', '#FFBE00'];
let selectedColor = colors[colorSlider];

export const generateColor = () => {
  colorSlider += 1;
  if (colorSlider === colors.length) {
    colorSlider = 0;
  }
  // console.log(colors[colorSlider]);
  return colors[colorSlider];
};

export const getColor = () => {
  return selectedColor;
};
