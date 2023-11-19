import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";
import { tw } from 'twind';

const App = () => {
  const [, setCount1] = useSlice("count1");
  const [, reduxDispatch, { increment }] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, localReduxDispatch, { increment: localIncrement }] =
    useLocalSlice("count2");

  return (
    <div className={tw`flex flex-row gap-2 p-2`}>
      <div>
        <button className={tw`flex flex-row items-center justify-center p-2 bg-blue-400 text-white leading-none rounded-md`} onClick={() => setCount1((c) => c + 1)}>+</button>
      </div>
      <div>
        <button className={tw`flex flex-row items-center justify-center p-2 bg-blue-400 text-white leading-none rounded-md`} onClick={() => reduxDispatch(increment())}>+</button>
      </div>
      <div className={tw`flex flex-row items-center justify-center gap-2`}>
        <button className={tw`flex flex-row items-center justify-center p-2 bg-blue-400 text-white leading-none rounded-md`} onClick={() => setLocalCount1((c) => c + 1)}>+</button>
        {localCount1}
      </div>
      <div className={tw`flex flex-row items-center justify-center gap-2`}>
        <button className={tw`flex flex-row items-center justify-center p-2 bg-blue-400 text-white leading-none rounded-md`} onClick={() => localReduxDispatch(localIncrement())}>+</button>
        {localCount2}
      </div>
    </div>
  );
};

export default App;