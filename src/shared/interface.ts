export interface Rank {
  beach: string;
  beach_cat: string[];
  mbti: string;
  beach_eng: string;
  mbti_cnt: number;
  total_user_cnt: number;
}

export interface FeedbackBody {
  feedback: string;
  choice: (number | string)[];
}

export type Result = {
  beach: string;
  beach_eng: string;
  location: string;
  mbti: string;
  beach_attr: Array<string>;
  beach_rec: Array<string>;
  beach_cat: Array<string>;
  bad_beach: Array<string>;
  user_cnt: {
    mbti_cnt: number;
    total_user_cnt: number;
  };
  rank: number;
};
