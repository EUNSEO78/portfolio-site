import { Comment, Guestbook } from "@/types/guestbook";
import axios from "axios";

const API_URL = "http://localhost:3001";

// 모든 방명록 가져오기
export const getGuestbooks = async (): Promise<Guestbook[]> => {
  const response = await axios.get(`${API_URL}/guestbooks`);
  return response.data.data;
};

// 방명록 작성하기
export const createGuestbook = async (
  guestbook: Pick<Guestbook, "author" | "content">
) => {
  const response = await axios.post(`${API_URL}/guestbooks`, guestbook);
  return response;
};

// 방명록 가져오기 (id로)
export const getGuestbook = async (id: string) => {
  const response = await axios.get(`${API_URL}/guestbooks/${id}`);
  return response.data.data;
};

// 방명록 삭제하기
export const removeGuestbook = async (id: string) => {
  const response = await axios.delete(`${API_URL}/guestbooks/${id}`);
  return response;
};

// 좋아요
export const likeGuestbook = async (id: number) => {
  const response = await axios.patch(`${API_URL}/guestbooks/${id}/like`);
  return response.data;
};

// 조회수
export const viewGuestbook = async (id: number) => {
  const response = await axios.patch(`${API_URL}/guestbooks/${id}/view`);
  return response.data;
};
