import { callGetQnaApi, callPostResultApi } from '@api/apis';

export const getQna = () => {
  return callGetQnaApi()
    .then((response) => response.data)
    .catch((error) => error);
};

export const sendResult = (answers: number[]) => {
  return callPostResultApi({ answer: answers })
    .then((response) => response)
    .catch((error) => error);
};
