import { json } from 'react-router-dom';

let API_KEY = import.meta.env.VITE_LYRIC_API_KEY;

export const fetchTracks = async ({ signal }) => {
  try {
    const response = await fetch(
      `/1.1/chart.tracks.get?chart_name=top&page=1&page_size=12&country=us&f_has_lyrics=1&apikey=${API_KEY}`,
      {
        signal,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return json(
      { msg: 'Sorry, we could not fetch the tracks' + error },
      { status: 500 }
    );
  }
};

export const fetchTrackLyric = async ({ signal, id }) => {
  try {
    const response = await fetch(
      `/1.1/track.lyrics.get?track_id=${id}&apikey=${API_KEY}`,
      {
        signal,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return json(
      { msg: 'Sorry, we could not get the song lyric' + error },
      { status: 500 }
    );
  }
};

export const fetchTrack = async ({ signal, id }) => {
  try {
    const response = await fetch(`/1.1/track.get?commontrack_id=${id}`, {
      signal,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return json(
      { msg: `Sorry, we could not get the song details ${error}` },
      { status: 500 }
    );
  }
};
