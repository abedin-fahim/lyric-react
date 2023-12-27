let CORE_DOMAIN = import.meta.env.VITE_LYRIC_CORE_DOMAIN;
let API_KEY = import.meta.env.VITE_LYRIC_API_KEY;

export const fetchTracks = async () => {
  try {
    const response = await fetch(
      `${CORE_DOMAIN}chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=${API_KEY}`,
      {
        mode: 'no-cors',
      }
    );

    // if (!response.ok) {
    //   const errorInfo = await response.json(); // Attempt to parse the error information from the response body
    //   const error = new Error(
    //     `An error occurred while fetching the tracks - Status: ${response.status}`
    //   );
    //   error.code = response.status;
    //   error.info = errorInfo; // Include additional error information if available
    //   throw error;
    // }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during fetchTracks:', error);
  }
};
