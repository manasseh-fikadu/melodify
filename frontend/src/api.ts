import { Song, Statistics } from "./types"; // Import the types for songs and statistics

const BASE_URL = "https://melodify-21ay.onrender.com/api";

export const fetchSongs = async (): Promise<Song[]> => {
  const response = await fetch(`${BASE_URL}/songs`);
  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }
  return response.json();
};

export const fetchStatistics = async (): Promise<Statistics> => {
  const response = await fetch(`${BASE_URL}/statistics`);
  if (!response.ok) {
    throw new Error("Failed to fetch statistics");
  }
  return response.json();
};
