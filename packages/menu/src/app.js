import React from "react";
import { useSlice } from "shared_state";
import { useSlice as useLocalSlice } from "./slices";
import { Button } from 'primereact/button';

const App = () => {
  const [count1] = useSlice("count1");
  const [count2] = useSlice("count2");
  const [localCount1, setLocalCount1] = useLocalSlice("count1");
  const [localCount2, reduxDispatch, { increment }] = useLocalSlice("count2");

  return (
    <div className="card flex justify-content-center">
      <Button label="Check" icon="pi pi-check" />
    </div>
  )
};

export default App;