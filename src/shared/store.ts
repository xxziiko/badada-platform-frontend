import { create } from 'zustand';

interface SelectContentState {
  selectContent: number;
  setSelectContent: (select: number) => void;
}

export const useStore = create<SelectContentState>((set) => ({
  selectContent: 0,
  setSelectContent: (select) => {
    set((state) => ({ ...state, selectContent: select }));
  },
}));
