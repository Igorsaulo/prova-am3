import { create } from 'zustand';

type State = {
  random: number;
  setRandom: (random: number) => void;
};

export const useRandomStore = create<State>((set) => ({
  random: 0,
  setRandom: (random) => set({ random }),
}));
