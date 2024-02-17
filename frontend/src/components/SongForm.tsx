import React, { useState } from "react";

const SongForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch action to create/update song
    // Reset form fields
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
  };

  return (
    <div>
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist"
        />
        <input
          type="text"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          placeholder="Album"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default SongForm;
