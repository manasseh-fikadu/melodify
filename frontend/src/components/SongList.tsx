import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/rootReducer";
import { getSongsStart } from "../features/songSlice";

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.song.songs);
  const loading = useSelector((state: RootState) => state.song.loading);

  useEffect(() => {
    dispatch(getSongsStart());
  }, [dispatch]);

  return (
    <div>
      <h2>Song List</h2>
      {loading && <p>Loading...</p>}
      {!loading &&
        songs.map((song) => (
          <div key={song.id}>
            <p>
              {song.title} - {song.artist}
            </p>
          </div>
        ))}
    </div>
  );
};

export default SongList;
