import React, { lazy, Suspense } from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";

const MenuApp = lazy(() => import("Menu/root"));

const App = () => {
  const [count1, setCount1] = useSlice("count1");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, localReduxDispatch, { increment: localIncrement }] =
    useLocalSlice("count2");

  return (
    <>
      <Suspense fallback="loading...">
        <MenuApp />
      </Suspense>
    </>
  );
};

export default App;