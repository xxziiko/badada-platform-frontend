import AxiosInstance from '@api/Instance';
import { AxiosResponse } from 'axios';

interface Data {
  data: any;
  status: number;
}

export const callGetQnaApi = () => {
  return AxiosInstance.get('/qna/')
    .then((response) => response)
    .catch((error) => error);
};

// callGetRankApi
export const callGetRankApi = (): Promise<AxiosResponse<Data>> => {
  return AxiosInstance.get<Data>('/rank/');
};

// callPostFeedbackApi
export const callPostFeedbackApi = (body: any) => {
  // console.log('body', body);
  return AxiosInstance.post('/feedback/', body);
};

export const callPostResultApi = (dto: any) => {
  return AxiosInstance.post('/result/', dto);
};
