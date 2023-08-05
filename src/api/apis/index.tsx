import AxiosInstance from '@api/Instance';
import { AxiosResponse } from 'axios';

interface Data {
  data: any;
  status: number;
}

export const postFeedback = (body: any) => {
  // console.log('body', body);
  return AxiosInstance.post('/feedback/', body);
};

export const callGetQnaApi = () => {
  return AxiosInstance.get('/qna/');
};

export const getRank = (): Promise<AxiosResponse<Data>> => {
  return AxiosInstance.get<Data>('/rank/');
};

export const callGetSeaApi = (mbti: string) => {
  return AxiosInstance.get(`/mbti/${mbti}/`);
};
