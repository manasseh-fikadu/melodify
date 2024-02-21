import styled from "@emotion/styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_SONGS } from "../types";
import { getSongsAPI } from "../api";

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
`;

const SongTitle = styled.h3`
  margin: 0;
`;

const SongArtist = styled.p`
  margin: 0;
  color: #666;
`;

const SongList = () => {
  const songs = useSelector((state: any) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getSongsAPI(); // Make the API call
        dispatch({
          type: GET_SONGS,
          payload: response.data, // Dispatch the action with the array of songs
        });
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, [dispatch]);

  if (!Array.isArray(songs)) {
    return <div>Loading...</div>;
  }

  return (
    <SongContainer>
      {songs.map((song: any, index: any) => (
        <SongItem key={index}>
          <SongTitle>{song.title}</SongTitle>
          <SongArtist>{song.artist}</SongArtist>
          <p>{song.genre}</p>
          <p>{song.album}</p>
        </SongItem>
      ))}
    </SongContainer>
  );
};

export default SongList;
