export interface People {}

export interface Rank {
  beach: string;
  beach_cat: string[];
  mbti: string;
  mbti_cnt: number;
  total_user_cnt: number;
}

export interface FeedbackBody {
  feedback: string;
  choice: (number | string)[];
}
