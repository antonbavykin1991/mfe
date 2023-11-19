import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count1: { initialArg: 20 },
    count2: {
      initialState: 10,
      reducers: {
        increment: (state) => state + 1,
      },
    },
  },
});