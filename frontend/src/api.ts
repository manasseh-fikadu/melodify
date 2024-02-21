import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/songs";

export const getSongsAPI = async () => axios.get("/");

export const getSongByIdAPI = async (id: string) => axios.get(`/${id}`);

export const createSongAPI = async (song: any) => axios.post(`/`, song);

export const updateSongAPI = async (id: string, updatedSong: any) =>
  axios.put(`/${id}`, updatedSong);

export const deleteSongByIdAPI = async (id: string) => axios.delete(`/${id}`);

export const getStatisticsAPI = async () => axios.get("/statistics");
