export type Result = {
  beach: string;
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
