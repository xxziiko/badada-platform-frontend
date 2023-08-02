import AxiosInstance from '@api/Instance';
import { AxiosResponse } from 'axios';

interface RankData {
  data: any;
  status: number;
}

export const postFeedback = (body: any) => {
  return AxiosInstance.post('/feedback/', body);
};

export const callGetQnaApi = () => {
  return AxiosInstance.get('/qna/');
};

export const getRank = (): Promise<AxiosResponse<RankData>> => {
  return AxiosInstance.get<RankData>('/rank/');
};
