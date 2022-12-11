import create from 'zustand';

type StoreState = {
  count: number;
  increaseCount: () => void;
  reduceCount: () => void;
  clearCount: () => void;
  log1: () => void;
  log2: () => void;
};

const logData = (data: number) => {
  console.log('test 3 --> ' + data);
};

const useStoreZustand = create<StoreState>((set, get) => ({
  count: 0,
  increaseCount: () => set(state => ({count: state.count + 1})),
  reduceCount: () => set(state => ({count: state.count - 1})),
  clearCount: () => set({count: 0}),
  log1: () => {
    console.log('test 1 : ' + get().count);
  },
  log2: () => logData(get().count),
}));

export default useStoreZustand;
