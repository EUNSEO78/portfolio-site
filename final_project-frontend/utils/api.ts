import { Comment } from "@/types/comment";
import { Guestbook } from "@/types/guestbook";
import { ApiResponse } from "@/types/type";
import axios from "axios";

const API_URL = "http://localhost:3001";

// 모든 방명록 가져오기
export const getGuestbooks = async (): Promise<Guestbook[]> => {
  const response = await axios.get<ApiResponse<Guestbook[]>>(
    `${API_URL}/guestbooks`
  );
  return response.data.data;
};

// 방명록 작성하기
export const createGuestbook = async (
  guestbook: Pick<Guestbook, "author" | "content">
): Promise<ApiResponse<Guestbook>> => {
  const response = await axios.post<ApiResponse<Guestbook>>(
    `${API_URL}/guestbooks`,
    guestbook
  );
  return response.data;
};

// 방명록 가져오기 (id로)
export const getGuestbook = async (id: string): Promise<Guestbook> => {
  const response = await axios.get<ApiResponse<Guestbook>>(
    `${API_URL}/guestbooks/${id}`
  );
  return response.data.data;
};

// 방명록 삭제하기
export const removeGuestbook = async (id: number): Promise<void> => {
  await axios.delete<ApiResponse<null>>(`${API_URL}/guestbooks/${id}`);
};

// 좋아요
export const likeGuestbook = async (id: number): Promise<Guestbook> => {
  const response = await axios.patch<ApiResponse<Guestbook>>(
    `${API_URL}/guestbooks/${id}/like`
  );
  return response.data.data;
};

// 조회수
export const viewGuestbook = async (id: number): Promise<Guestbook> => {
  const response = await axios.patch<ApiResponse<Guestbook>>(
    `${API_URL}/guestbooks/${id}/view`
  );
  return response.data.data;
};

// 댓글 가져오기
export const getComments = async (guestbookId: number): Promise<Comment[]> => {
  const response = await axios.get<ApiResponse<Comment[]>>(
    `${API_URL}/comments`,
    {
      params: { guestbookId },
    }
  );
  return response.data.data;
};

// 댓글 작성
export const createComment = async (
  comment: Pick<Comment, "guestbookId" | "author" | "content">
): Promise<ApiResponse<Comment>> => {
  const response = await axios.post<ApiResponse<Comment>>(
    `${API_URL}/comments`,
    comment
  );
  return response.data;
};

// 댓글 삭제
export const removeComment = async (id: number): Promise<void> => {
  await axios.delete<ApiResponse<null>>(`${API_URL}/comments/${id}`);
};

// 댓글 좋아요
export const likeComment = async (id: number): Promise<Comment> => {
  const response = await axios.patch<ApiResponse<Comment>>(
    `${API_URL}/comments/${id}/like`
  );
  return response.data.data;
};
