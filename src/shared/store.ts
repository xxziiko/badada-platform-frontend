import { create } from 'zustand';
import { Result } from './interface';

interface ReviewState {
  isBadClicked: boolean;
  setIsBadClicked: () => void;
  isGoodClicked: boolean;
  setIsGoodClicked: () => void;
}

interface ResultState {
  result: Result | null;
  setResult: (result: Result) => void;
}

export const useReview = create<ReviewState>((set) => ({
  isBadClicked: false,
  isGoodClicked: false,
  setIsBadClicked: () => set((state) => ({ ...state, isBadClicked: !state.isBadClicked, isGoodClicked: false })),
  setIsGoodClicked: () => set((state) => ({ ...state, isGoodClicked: !state.isGoodClicked, isBadClicked: false })),
}));

export const resultStore = create<ResultState>((set) => ({
  result: null,
  setResult: (result: Result) => {
    set((state) => ({ ...state, result: { ...result } }));
  },
}));
