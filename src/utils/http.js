export const fetchTracks = async ({ signal }) => {
  // let url = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    signal,
  });
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the tracks');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const data = await response.json();
  return data;
};
