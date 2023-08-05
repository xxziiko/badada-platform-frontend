import { create } from 'zustand';

interface ReviewState {
  isBadClicked: boolean;
  setIsBadClicked: () => void;
  isGoodClicked: boolean;
  setIsGoodClicked: () => void;
}

interface ResultState {
  result: object;
  setResult: (result: object) => void;
}

export const useReview = create<ReviewState>((set) => ({
  isBadClicked: false,
  isGoodClicked: false,
  setIsBadClicked: () => set((state) => ({ ...state, isBadClicked: !state.isBadClicked, isGoodClicked: false })),
  setIsGoodClicked: () => set((state) => ({ ...state, isGoodClicked: !state.isGoodClicked, isBadClicked: false })),
}));

export const resultStore = create<ResultState>((set) => ({
  result: {},
  setResult: (result: object) => {
    set((state) => ({ ...state, result: { ...result } }));
  },
}));
