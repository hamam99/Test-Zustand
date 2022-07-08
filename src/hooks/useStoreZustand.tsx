import create from 'zustand';

type StoreState = {
  count: number;
  increaseCount: () => void;
  reduceCount: () => void;
  clearCount: () => void;
};

const useStoreZustand = create<StoreState>(set => ({
  count: 0,
  increaseCount: () => set(state => ({count: state.count + 1})),
  reduceCount: () => set(state => ({count: state.count - 1})),
  clearCount: () => set({count: 0}),
}));

export default useStoreZustand;
