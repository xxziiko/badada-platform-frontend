import { callGetQnaApi, callPostResultApi, callPostFeedbackApi, callGetRankApi } from '@api/apis';
import { FeedbackBody } from '@shared/interface';

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

export const sendPostFeedback = (body: FeedbackBody) => {
  return callPostFeedbackApi(body)
    .then((response) => response)
    .catch((err) => err);
};

export const getRank = () => {
  return callGetRankApi()
    .then((response) => response.data)
    .catch((error) => error);
};
