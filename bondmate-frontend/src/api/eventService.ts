import { api } from "./axiosInstance";

export interface Event {
  id: string;
  name: string;
  date: string;
}

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await api.get("/api/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events", error);
    throw error;
  }
};
