import Instance, { BASE_URL } from '@api/Instance';

export const postFeedback = (body: any) => {
  const url = `${BASE_URL}/feedback`;
  return Instance.post(url, body);
};
