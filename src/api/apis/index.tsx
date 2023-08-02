import Instance, { BASE_URL } from '@api/Instance';
import { AxiosResponse } from 'axios';

interface RankData {
  data: any;
  status: number;
}

export const postFeedback = (body: any) => {
  const url = `${BASE_URL}/feedback`;
  return Instance.post(url, body);
};

export const callGetQnaApi = () => {
  return Instance.get(`/qna/`);
};

export const getRank = (): Promise<AxiosResponse<RankData>> => {
  const url = `${BASE_URL}/rank`;
  return Instance.get<RankData>(url);
};
